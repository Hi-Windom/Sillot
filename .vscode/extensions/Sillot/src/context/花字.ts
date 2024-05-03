import * as vscode from "vscode";
import { Log } from "../utils/log";

const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const AABBCC = "AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ";
const abc = "abcdefghijklmnopqrstuvwxyz";
const aabbcc = "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz";
const font字体_默认 = ABC + abc;
// for utf8
const fontMapIndex8 = font字体_默认.split("");
// for utf16
const fontMapIndex16 = (AABBCC + aabbcc).split("");
const font样式_反转大小写 = (abc + ABC).split("");
const font样式_转大写 = (ABC + ABC).split("");
const font样式_转小写 = (abc + abc).split("");

// 已经弃用的字体: 1.黑板(有问题)
const font字体_手写体 = "𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏"; // 小写常规，大写粗体
const font字体_粗体 = "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇";
const font字体_德文尖角 = "𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷"; // 小写常规，大写粗体
const font字体_斜体 = "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻";
const font字体_等宽 = "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣";
const font字体_删除线 = "A̶B̶C̶D̶E̶F̶G̶H̶I̶J̶K̶L̶M̶N̶O̶P̶Q̶R̶S̶T̶U̶V̶W̶X̶Y̶Z̶a̶b̶c̶d̶e̶f̶g̶h̶i̶j̶k̶l̶m̶n̶o̶p̶q̶r̶s̶t̶u̶v̶w̶x̶y̶z̶";
const 非默认字体列表 = [font字体_手写体, font字体_粗体, font字体_斜体, font字体_等宽, font字体_德文尖角, font字体_删除线];

// 映射
type FontOperationKey =
    | "字体_默认"
    | "样式_反转大小写"
    | "样式_转大写"
    | "样式_转小写"
    | "字体_手写体"
    | "字体_粗体"
    | "字体_德文尖角"
    | "字体_斜体"
    | "字体_等宽" | "字体_删除线";
const FontMapList16: FontOperationKey[] = ["字体_手写体", "字体_粗体", "字体_德文尖角", "字体_斜体", "字体_等宽", "字体_删除线"];
const FontMapList8: FontOperationKey[] = ["字体_默认", "样式_反转大小写", "样式_转大写", "样式_转小写"];
export const FontMapList: FontOperationKey[] = [...FontMapList8, ...FontMapList16];
type FontMapDict = { [key: string]: string };
const fontMaps: { [key in FontOperationKey]: FontMapDict } = {
    字体_默认: {},
    字体_手写体: {},
    样式_反转大小写: {},
    样式_转大写: {},
    样式_转小写: {},
    字体_粗体: {},
    字体_德文尖角: {},
    字体_斜体: {},
    字体_等宽: {},
    字体_删除线: {},
};
const fonts = {
    字体_默认: font字体_默认,
    字体_手写体: font字体_手写体,
    样式_反转大小写: font样式_反转大小写,
    样式_转大写: font样式_转大写,
    样式_转小写: font样式_转小写,
    字体_粗体: font字体_粗体,
    字体_德文尖角: font字体_德文尖角,
    字体_斜体: font字体_斜体,
    字体_等宽: font字体_等宽,
    字体_删除线: font字体_删除线,
};

FontMapList16.forEach((fname, fi) => {
    fontMapIndex16.forEach((c, i) => {
        if (i % 2 === 0) {
            fontMaps[fname][c] = fonts[fname][i] + fonts[fname][i + 1];
        }
    });
});
FontMapList8.forEach((fname, fi) => {
    fontMapIndex8.forEach((c, i) => {
        fontMaps[fname][c] = fonts[fname][i];
    });
});

function 统一为fontMapIndex(str: string) {
    let replaced = str;
    str.split("").forEach((_, i) => {
        if (i % 2 === 0) {
            const c: string = str[i] + str[i + 1];
            const p: number | undefined = 非默认字体列表.map(font => font.indexOf(c)).find(index => index > 0);
            if (p) {
                replaced = replaced.replaceAll(c, fontMapIndex16[p]);
            }
            Log.w(
                c,
                `${font字体_手写体.indexOf(c)}  ${font字体_粗体.indexOf(c)}  ${font字体_斜体.indexOf(c)}  ${font字体_等宽.indexOf(
                    c
                )}  ${font字体_德文尖角.indexOf(c)}  ${font字体_删除线.indexOf(c)}`
            );
        }
    });

    return replaced;
}

function convertTo花字(text: string, map: FontMapDict) {
    const t = 统一为fontMapIndex(text);
    return t
        .split("")
        .map(c => map[c] || c)
        .join("");
}

export function apply花字Transformation(fontMap: FontOperationKey) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return; // No open text editor
    }

    const selection = editor.selection;
    const text = editor.document.getText(selection);
    const t = convertTo花字(text, fontMaps[fontMap]);
    editor.edit((editBuilder: vscode.TextEditorEdit) => {
        editBuilder.replace(selection, t);
    });
}
