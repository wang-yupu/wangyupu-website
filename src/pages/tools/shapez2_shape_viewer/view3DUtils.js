import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function removeAllModels(scene) {
    for (let i = scene.children.length - 1; i >= 0; i--) {
        const child = scene.children[i];
        if (child.isMesh) {
            scene.remove(child);
            child.geometry.dispose();
            child.material.dispose();
        }
    }
}

function loadGLTFModel(url, binURL) {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(
            url,
            (gltf) => resolve(gltf),
            undefined,
            (error) => reject(error),
            {
                bin: binURL
            }
        );
    });
}


export async function loadModels() {
    const models = ["C", "F", "G", "H", "P", "R", "S", "W", "Plate"]
    const dirs = ['2']

    const result = {}

    for (const dirName of dirs) {
        result[`M${dirName}`] = {}

        // 用Promise.all确保所有异步加载
        await Promise.all(models.map(async (modelName) => {
            let modelglTFURL = new URL(`./models/${dirName}/${modelName}.gltf`, import.meta.url).href
            let modelBinURL = new URL(`./models/${dirName}/${modelName}.bin`, import.meta.url).href
            // 加载模型
            let modelObject = await loadGLTFModel(modelglTFURL, modelBinURL)
            result[`M${dirName}`][modelName] = modelObject
        }))
    }

    console.log("成功加载所有模型。", result)
    return result
}

export function timestampToReadable(timestamp) {
    const date = new Date(timestamp * 1000); // 将时间戳转换为Date对象
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，因此加1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
}

import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

export function export3DModel(scene, format, filename = "exportedModel") {
    let exporter, data, fileExtension, mimeType;

    if (format === 'stl') {
        exporter = new STLExporter();
        data = exporter.parse(scene);
        fileExtension = '.stl';
        mimeType = 'application/sla';
    } else if (format === 'gltf') {
        exporter = new GLTFExporter();
        exporter.parse(scene, (result) => {
            const blob = new Blob([JSON.stringify(result)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            fileExtension = ".gltf"
            downloadFile(url, filename + fileExtension);  // 使用.glb扩展名表示二进制格式，或者使用.gltf作为文本格式
        });
        return; // GLTF是异步的，因此提前返回
    } else {
        console.error('不支持的格式');
        return;
    }

    const blob = new Blob([data], { type: mimeType });
    const url = URL.createObjectURL(blob);
    downloadFile(url, filename + fileExtension);
}

function downloadFile(url, fileName) {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
}