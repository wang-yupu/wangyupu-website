//
export const colorMapping = {
    u: 0x8c9398,
    r: 0xe13542,
    g: 0x4fa62f,
    b: 0x436edf,
    c: 0x2ab1a6,
    m: 0xd23ded,
    y: 0xc9a822,
    w: 0xffffff,
};

export const allowColors = ['u', 'r', 'g', 'b', 'c', 'm', 'y', 'w'];
export const allowShapes = ['R', 'C', 'W', 'S', 'P', 'c', '-', 'H', 'G', 'F'];
export const shapeNormal = ['R', 'C', 'W', 'S', 'P', 'c', '-'];

export function parseCode(code, splitByLB = true) {
    // 切分
    code = code.trimLeft().trimRight();
    code = code.replaceAll('\n', splitByLB ? ':' : '');
    if (!code) {
        return {
            success: false,
            message: `代码为空`,
            cursor: 0,
        };
    }
    let codeByLayer = code.split(':');
    // 验证
    let quadrantPerLayer, verifyQuadrant, shape, color;
    let verifyLayer = 1;
    let shapeObject = [];
    for (const layer of codeByLayer) {
        if (layer.length % 2) {
            return {
                success: false,
                message: `层级 ${verifyLayer} 字符不足/过多`,
                cursor: quadrantPerLayer * 2 + verifyLayer,
            };
        }
        if (!quadrantPerLayer) {
            quadrantPerLayer = layer.length / 2;
        } else if (layer.length / 2 != quadrantPerLayer) {
            return {
                success: false,
                message: `层级 ${verifyLayer} 的象限个数与第一层不同(${layer.length / 2})`,
            };
        }

        verifyQuadrant = 1;
        shapeObject[verifyLayer-1] = [];

        for (const item of layer.match(/(.{1,2})/g)) {
            shape = item.slice(0, 1);
            color = item.slice(1, 2);
            if (!allowShapes.includes(shape)) {
                return {
                    success: false,
                    message: `层级 ${verifyLayer} 的第 ${verifyQuadrant} 个象限的形状不存在(${shape})`,
                };
            } else if (!allowColors.includes(color) && shape != 'P' && shape != '-') {
                return {
                    success: false,
                    message: `层级 ${verifyLayer} 的第 ${verifyQuadrant} 个象限的颜色不存在(${color})`,
                };
            } else if (shape == 'P' && allowColors.includes(color)) {
                return {
                    success: false,
                    message: `层级 ${verifyLayer} 的第 ${verifyQuadrant} 个象限的形状为顶针，但是顶针不能具有有效的颜色(${color})`,
                };
            } else if (shape == '-' && color != '-') {
                return {
                    success: false,
                    message: `层级 ${verifyLayer} 的第 ${verifyQuadrant} 个象限没有形状，但是指定了颜色(${color})`,
                };
            }
            // 处理shapeObject
            if (shape != '-') {
                shapeObject[verifyLayer-1].push({ shape, color, skip: false });
            } else {
                shapeObject[verifyLayer-1].push({ shape: '', color: '', skip: true });
            }
            verifyQuadrant++;
        }

        verifyLayer++;
    }

    let shapeObject2 = {}

    shapeObject2['quadrantRotateDegs'] = (360 / (codeByLayer[0].length/2)).toFixed(5)
    shapeObject2['quadrantPerLayer'] = (codeByLayer[0].length/2).toFixed(0)
    shapeObject2['layers'] = shapeObject

    return { success: true, rawCode: code, obj: shapeObject2 };
}
