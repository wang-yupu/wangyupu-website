import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

export function removeAllModels(scene) {
    for (const child of scene.children) {
        if (child.name == 'Scene') {
            scene.remove(child);
        }
    }
}

function loadGLTFModel(url, binURL) {
    return new Promise((resolve, reject) => {
        const manager = new THREE.LoadingManager();
        manager.setURLModifier((resourceURL) => {
            if (resourceURL.endsWith('.bin')) {
                return binURL;
            }
            return resourceURL;
        });
        const loader = new GLTFLoader(manager);

        loader.load(
            url,
            (gltf) => resolve(gltf),
            undefined,
            (error) => reject(error)
        );
    });
}

export async function loadModels() {
    const models = ['C', 'F', 'G', 'H', 'P', 'R', 'S', 'W', 'Plate'];
    const dirs = ['2'];

    const result = {};

    for (const dirName of dirs) {
        result[`M${dirName}`] = {};

        // 用Promise.all确保所有异步加载
        await Promise.all(
            models.map(async (modelName) => {
                let modelglTFURL = new URL(`./models/${dirName}/${modelName}.gltf`, import.meta.url).href;
                let modelBinURL = new URL(`./models/${dirName}/${modelName}.bin`, import.meta.url).href;
                // 加载模型
                let modelObject = await loadGLTFModel(modelglTFURL, modelBinURL);
                result[`M${dirName}`][modelName] = modelObject;
            })
        );
    }

    return result;
}

export function timestampToReadable(timestamp) {
    const date = new Date(timestamp * 1000); // 将时间戳转换为Date对象
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，因此加1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}y${month}mo${day}d ${hours}:${minutes}:${seconds}`;
}

import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

export function export3DModel(scene, format, filename = 'exportedModel') {
    let exporter, data, fileExtension, mimeType;

    if (format === 'stl') {
        exporter = new STLExporter();
        data = exporter.parse(scene);
        fileExtension = '.stl';
        mimeType = 'application/sla';
    } else if (format === 'gltf') {
        exporter = new GLTFExporter();
        exporter.parse(scene, (result) => {
            const blob = new Blob([JSON.stringify(result)], {
                type: 'application/json',
            });
            const url = URL.createObjectURL(blob);
            fileExtension = '.gltf';
            downloadFile(url, filename + fileExtension);
        });
        return;
    } else {
        console.error('不支持的格式');
        return;
    }

    const blob = new Blob([data], { type: mimeType });
    const url = URL.createObjectURL(blob);
    downloadFile(url, filename + fileExtension);
}

export function downloadFile(url, fileName) {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
}

const defaultPosArgs = {
    xzOffset: 0.03,
    yOffset: 0.1,
    yBase: 0.02,
};
const moveSpeed = 0.05;

import { colorMapping } from './codeParse';
export function addShapeForScene(scene, shape, color, loadedShape, layer = 0, quadrant = 0, rotateDeg = 90, shadow = true, posArgs = { defaultPosArgs }, fromPosArgs = undefined, animation = true) {
    let showAsCrystal;
    if (shape == 'c') {
        shape = 'C';
        showAsCrystal = true;
    }

    if (!loadedShape[shape]) {
        console.warn('不存在的形状：', shape);
        return;
    }
    const model = loadedShape[shape].scene.clone();
    model.traverse((child) => {
        if (child.isMesh) {
            const material = child.material.clone();
            material.color.set(colorMapping[color]);
            child.shapeColor = colorMapping[color];
            if (shape == 'P') {
                material.color.set(0x362d35);
                child.shapeColor = 0x362d35;
            }
            material.emissive.set(0x362d35);
            child.borderColor = 0x362d35;
            material.emissiveIntensity = 1;
            material.metalness = 0.3;
            material.roughness = 1.0;
            child.myMeta = {
                shape,
                color,
                layer,
                quadrant,
            };
            if (showAsCrystal) {
                material.metalness = 1;
                material.emissive.set(colorMapping[color]);
                child.borderColor = colorMapping[color];
                child.myMeta.shape = 'c'
            }
            child.material = material;
            child.unselectable = false;
            if (shape == 'Plate') {
                child.unselectable = true;
            }


        }
    });
    model.receiveShadow = shadow;
    scene.add(model);

    if (shape == 'Plate') {
        return model; // 底板跳过下列代码
    }

    model.rotation.set(0, THREE.MathUtils.degToRad(180 - quadrant * rotateDeg), 0);
    let xyScale = 1 - 0.25 * layer + (layer == 4 ? 0.15 : 0);
    model.scale.set(xyScale, 1, xyScale);
    // 位置 
    let offset = posArgs.xzOffset;
    let mx = offset * (quadrant % 4 === 2 || quadrant % 4 === 3 ? -1 : 1);
    let my = offset * (quadrant % 4 === 1 || quadrant % 4 === 2 ? 1 : -1);

    if (animation) {
        model.targetPosition = new THREE.Vector3(mx, posArgs.yOffset * layer + posArgs.yBase, my);
    } else {
        model.position.set(mx, posArgs.yOffset * layer + posArgs.yBase, my);
    }
    model.moveSpeed = moveSpeed;
    if (fromPosArgs && animation) {
        let offset = fromPosArgs.xzOffset;
        let mx = offset * (quadrant % 4 === 2 || quadrant % 4 === 3 ? -1 : 1);
        let my = offset * (quadrant % 4 === 1 || quadrant % 4 === 2 ? 1 : -1);
        model.position.set(mx, fromPosArgs.yOffset * layer + fromPosArgs.yBase, my);
    }

    return model;
}

export function addLight(scene, color, posx, posy, posz) {
    const pointLight = new THREE.PointLight(color, 10, 300, 0);
    pointLight.position.set(posx, posy, posz);
    scene.add(pointLight);
}

export const viewToPosArgs = {
    default: {
        xzOffset: 0.03,
        yOffset: 0.1,
        yBase: 0.02,
    },
    layer: {
        xzOffset: 0.03,
        yOffset: 0.3,
        yBase: 0.3,
    },
    quadrant: {
        xzOffset: 0.15,
        yOffset: 0.3,
        yBase: 0.3,
    },
};
