import * as React from "react";
import * as Client from "react-dom/client";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import Checkbox from "@mui/joy/Checkbox";
import Box from "@mui/joy/Box";
import Slider from "@mui/joy/Slider";
import Stack from "@mui/joy/Stack";
import Drawer from "@mui/joy/Drawer";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Option, { optionClasses } from "@mui/joy/Option";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import ListItemDecorator, { listItemDecoratorClasses } from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import Check from "@mui/icons-material/Check";
import CircularProgress from "@mui/joy/CircularProgress";
import TuneIcon from "@mui/icons-material/TuneRounded";
import SaveIcon from "@mui/icons-material/SaveOutlined";
import loader from "@monaco-editor/loader";
import ModalDialog, { type ModalDialogProps } from "@mui/joy/ModalDialog";
import { uriFromPath } from "../../util/path";
import { fetchPost } from "../../../util/fetch";
const path = require("path");
import { isMobile } from "sofill/api";
import {
    initEditorOptions,
    groupTheme,
    colorsTheme,
    groupLang,
    groupLangText,
    colorsLang,
    isLightTheme,
    fontSliderMasks,
    type TypeGroupList,
    type TypeStringKV,
    type OverridableColorTheme,
    type OverridableColorLang,
} from "./monaco-editor-confige";
import type * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
// theme
import BirdsofParadise from "./monacoThemes/Birds-of-Paradise";
import Blackboard from "./monacoThemes/Blackboard";
import Cobalt from "./monacoThemes/Cobalt";
import Cobalt2 from "./monacoThemes/Cobalt2";
import Dracula from "./monacoThemes/Dracula";
import IdleFingers from "./monacoThemes/idleFingers";
import IPlastic from "./monacoThemes/iPlastic";
import Katzenmilch from "./monacoThemes/Katzenmilch";
import Monokai from "./monacoThemes/Monokai";
import NightOwl from "./monacoThemes/Night-Owl";
import Solarizedlight from "./monacoThemes/Solarized-light";
import Sunburst from "./monacoThemes/Sunburst";
import TomorrowNightEighties from "./monacoThemes/Tomorrow-Night-Eighties";
import Zenburnesque from "./monacoThemes/Zenburnesque";
import { Select_KeyboardArrowDown } from "../base/selector";

type InitConfig = {
    lang: string;
    theme: "vs" | "vs-dark";
    readonly: boolean;
    editable: boolean;
};
interface SharedPropsContextValue {
    nodeID: string;
    editor: monaco.editor.IStandaloneCodeEditor | null;
    mmodel: monaco.editor.ITextModel | null;
    monacoIns: typeof monaco | null;
    initConfig: InitConfig;
}
const SharedProps = React.createContext<SharedPropsContextValue | null>(null);

export default function MDDialog(props: {
    id: string;
    nodeID: string;
    lang: string;
    theme: "vs" | "vs-dark";
    readonly: boolean;
    editable: boolean;
}) {
    const id = props.id;
    const nodeID = props.nodeID;
    const initConfig: InitConfig = {
        lang: props.lang,
        theme: props.theme,
        readonly: props.readonly,
        editable: props.editable,
    };
    const e = document.getElementById(id);
    if (!e) {
        return;
    }
    const root = Client.createRoot(e);
    // 在 React 中， <></> 是 <React.Fragment/> 的语法糖
    root.render(
        <>
            <Loader nodeID={nodeID} initConfig={initConfig} />
        </>
    );
}

function Loader(props: { nodeID: string; initConfig: InitConfig }) {
    const [open, setOpen] = React.useState(true); // react hooks
    const [editor, setEditor] = React.useState<monaco.editor.IStandaloneCodeEditor | null>(null);
    const [mmodel, setmmodel] = React.useState(null);
    const [monacoIns, setmonacoIns] = React.useState(null);
    const [layout, setLayout] = React.useState<ModalDialogProps["layout"] | undefined>(undefined);
    const [modelPadding, setmodelPadding] = React.useState("var(--Card-padding)");
    const [modelWidth, setmodelWidth] = React.useState("85vw");
    const nodeID = props.nodeID;
    const initConfig = props.initConfig;
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    React.useEffect(
        () => {
            /// #if !BROWSER
            const pp = path.join(__dirname, "../../app/node_modules/monaco-editor/min/vs"); // electron
            /// #endif
            loader.config({
                /// #if !BROWSER
                paths: {
                    vs: uriFromPath(pp),
                },
                /// #endif
                "vs/nls": {
                    availableLanguages: {
                        "*": "zh-cn",
                    },
                },
            });
            loader.init().then(monacoInstance => {
                monacoInstance.editor.defineTheme("Birds-of-Paradise", BirdsofParadise); // 不要放到箭头函数里
                monacoInstance.editor.defineTheme("Blackboard", Blackboard);
                monacoInstance.editor.defineTheme("Cobalt", Cobalt);
                monacoInstance.editor.defineTheme("Cobalt2", Cobalt2);
                monacoInstance.editor.defineTheme("Dracula", Dracula);
                monacoInstance.editor.defineTheme("IdleFingers", IdleFingers);
                monacoInstance.editor.defineTheme("IPlastic", IPlastic);
                monacoInstance.editor.defineTheme("Katzenmilch", Katzenmilch);
                monacoInstance.editor.defineTheme("Monokai", Monokai);
                monacoInstance.editor.defineTheme("Night-Owl", NightOwl);
                monacoInstance.editor.defineTheme("Solarized-light", Solarizedlight);
                monacoInstance.editor.defineTheme("Sunburst", Sunburst);
                monacoInstance.editor.defineTheme("Tomorrow-Night-Eighties", TomorrowNightEighties);
                monacoInstance.editor.defineTheme("Zenburnesque", Zenburnesque);
                const model_x = monacoInstance.editor.createModel("", initConfig.lang);
                const _editor = monacoInstance.editor.create(document.getElementById("monaco-editor"), {
                    ...initConfig,
                    ...initEditorOptions,
                    model: model_x,
                });
                // 添加保存命令
                _editor.addAction({
                    id: "save-code",
                    label: "Save Code",
                    // keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
                    run: (e, payload) => {
                        console.log(e);
                        const rawOpts = e.getRawOptions() as any;
                        console.log(rawOpts.lang);
                        fetchPost(
                            payload.api,
                            {
                                dataType: payload.dataType,
                                data: payload.data,
                                id: payload.nodeID,
                            },
                            res => {
                                if (res.code === 0) {
                                    window.__.toastify.success({ message: "已保存", position: "bottom-center", duration: 1 });
                                } else {
                                    window.__.toastify.error({ message: res.msg, position: "bottom-center", duration: 1 });
                                }
                            }
                        );
                    },
                });
                setEditor(_editor);
                setmmodel(model_x);
                setmonacoIns(monacoInstance);
                _editor.updateOptions({ readOnly: initConfig.readonly });
                _editor.onDidChangeModelContent(() => {
                    // window.sout.slog(_editor.getValue());
                });
                window.sout.tracker(model_x);
                window.sout.tracker(monacoInstance.editor);
                if (isMobile()) {
                    setLayout("fullscreen");
                    setmodelPadding("0px");
                    setmodelWidth("initial"); // 移动端已经全屏宽度，不要设置宽度
                }
            });
        },
        [] // 空数组保证只执行一次
    );
    const [loading, setLoading] = React.useState(true); // 顺序重要
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    React.useEffect(() => {
        if (!editor) return; // 第一次初始化时不执行
        fetchPost(
            "/api/block/getBlockKramdown",
            {
                id: nodeID,
            },
            res => {
                if (res.code === 0 && editor) {
                    window.sout.info(nodeID);
                    window.sout.success(res);
                    // editor.setValue(res.data.kramdown);
                    window.sout.tracker(monacoIns.editor.getModels()[0]);
                    mmodel.setValue(res.data.kramdown);
                    // editor.updateOptions({ model: IEditor.createModel(res.data.kramdown,initConfig.lang) })
                    setLoading(false);
                    setOpen(true);
                    document.getElementById("monaco-editor-container").style.display = "inherit";
                    window.sout.tracker(editor);
                } else {
                    setOpen(false);
                    window.__.toastify.error({
                        message: res.msg,
                        position: "bottom-center",
                        duration: 1,
                    });
                }
            }
        );
    }, [editor]);
    return (
        <SharedProps.Provider
            value={{
                nodeID: nodeID,
                editor: editor,
                mmodel: mmodel,
                monacoIns: monacoIns,
                initConfig: initConfig,
            }}
        >
            {/* 必须使用CssVarsProvider包裹，样式才会生效 */}
            <CssVarsProvider>
                <Modal
                    aria-labelledby="close-modal-title"
                    color="primary"
                    open={open}
                    onClose={(event, reason) => {
                        window.sout.tracker(`Reason: ${reason}`);
                        setOpen(false);
                        mmodel.dispose(); // 手动创建的需要手动销毁
                    }}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <ModalDialog layout={layout}>
                        <Sheet
                            variant="plain"
                            color="neutral"
                            sx={{
                                minWidth: 300,
                                borderRadius: "md",
                                p: 3,
                                padding: modelPadding,
                                width: modelWidth,
                                maxHeight: "calc(-58px + 95vh)",
                            }}
                            style={
                                loading
                                    ? {
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                      }
                                    : {}
                            }
                        >
                            <CircularProgress
                                id="monaco-editor-CircularProgress"
                                color="neutral"
                                value={30}
                                variant="solid"
                                size="lg"
                                style={loading ? {} : { display: "none" }}
                            />
                            <div id="monaco-editor-container" style={loading ? { display: "none" } : {}}>
                                <EditorContainer />
                            </div>
                        </Sheet>
                    </ModalDialog>
                </Modal>
            </CssVarsProvider>
        </SharedProps.Provider>
    );
}

// 渲染下拉菜单选项
function renderOptions(
    group: TypeGroupList,
    groupColorMap: OverridableColorTheme | OverridableColorLang,
    groupSVText: TypeStringKV | null = null
) {
    return Object.entries(group).map(([name, items], index) => (
        <React.Fragment key={name}>
            {index !== 0 && <ListDivider />}
            <List aria-labelledby={`select-group-${name}`} sx={{ "--List-decorator-size": "28px" }}>
                <ListItem id={`select-group-${name}`} sticky>
                    <Typography
                        level="body3"
                        // textTransform="uppercase"
                        letterSpacing="md"
                    >
                        {name} ({items.length})
                    </Typography>
                </ListItem>
                {items.map(item => (
                    <Option
                        key={item}
                        value={item}
                        label={
                            <React.Fragment>
                                <Chip size="sm" color={groupColorMap[name]} sx={{ borderRadius: "xs", mr: 1, ml: -0.5 }}>
                                    {name}
                                </Chip>{" "}
                                {groupSVText ? groupSVText[item] : item} {/*在外标签显示的值*/}
                            </React.Fragment>
                        }
                        sx={{
                            [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]: {
                                opacity: 1,
                            },
                        }}
                    >
                        <ListItemDecorator sx={{ opacity: 0 }}>
                            <Check />
                        </ListItemDecorator>
                        {groupSVText ? groupSVText[item] : item} {/*在下拉框里显示的值*/}
                    </Option>
                ))}
            </List>
        </React.Fragment>
    ));
}

function LangSelector() {
    const _props = React.useContext(SharedProps);
    return (
        <Select_KeyboardArrowDown
            color="primary"
            placeholder="Language"
            defaultValue={_props.initConfig.lang}
            variant="soft"
            onChange={(e, newValue) =>
                // _props.editor.updateOptions({ language: newValue }) 不行
                {
                    _props.monacoIns.editor.setModelLanguage(_props.mmodel, newValue);
                }
            }
            slotProps={{
                listbox: {
                    component: "div",
                    sx: {
                        maxHeight: 360,
                        overflow: "auto",
                        "--List-padding": "0px",
                    },
                },
            }}
            endDecorator={
                <Chip size="sm" color="danger" variant="soft">
                    {window._.sum(
                        window._.map(groupLang, (i: string | any[]) => {
                            return i.length;
                        })
                    )}
                </Chip>
            }
            sx={{
                width: 240,
                flex: 1,
            }}
            style={{ minWidth: "16em", margin: "1% 0.3%" }} // 方便调试，写在joyUI提供的 sx 里也行
        >
            {renderOptions(groupLang, colorsLang, groupLangText)}
        </Select_KeyboardArrowDown>
    );
}

function LangSelectorMobile() {
    const _props = React.useContext(SharedProps);
    return (
        <Select_KeyboardArrowDown
            color="primary"
            placeholder="Language"
            defaultValue={_props.initConfig.lang}
            variant="soft"
            onChange={(e, newValue) =>
                // _props.editor.updateOptions({ language: newValue }) 不行
                {
                    _props.monacoIns.editor.setModelLanguage(_props.mmodel, newValue);
                }
            }
            slotProps={{
                listbox: {
                    component: "div",
                    sx: {
                        maxHeight: 360,
                        overflow: "auto",
                        "--List-padding": "0px",
                    },
                },
            }}
            endDecorator={
                <Chip size="sm" color="danger" variant="soft">
                    {window._.sum(
                        window._.map(groupLang, (i: string | any[]) => {
                            return i.length;
                        })
                    )}
                </Chip>
            }
            sx={{
                width: 240,
                flex: 1,
            }}
            style={{ minWidth: "16em", margin: "1% 0.3%", maxHeight: "3.5em", width: "100%" }} // 方便调试，写在joyUI提供的 sx 里也行
        >
            {renderOptions(groupLang, colorsLang, groupLangText)}
        </Select_KeyboardArrowDown>
    );
}

function ThemeSelector() {
    const _props = React.useContext(SharedProps);
    const { mode, setMode } = useColorScheme();
    return (
        <Select_KeyboardArrowDown
            color="primary"
            className="SC_atMedia2Show_flex_width_more_m1"
            placeholder="Theme"
            defaultValue={_props.initConfig.theme || "markdown"}
            variant="soft"
            slotProps={{
                listbox: {
                    component: "div",
                    sx: {
                        maxHeight: 360,
                        overflow: "auto",
                        "--List-padding": "0px",
                    },
                },
            }}
            endDecorator={
                <Chip size="sm" color="neutral" variant="soft">
                    {window._.sum(
                        window._.map(groupTheme, (i: string | any[]) => {
                            return i.length;
                        })
                    )}
                </Chip>
            }
            sx={{
                width: 240,
                flex: 1,
            }}
            style={{ minWidth: "20em", margin: "1% 0.3%" }}
            onChange={(e, newValue) => {
                _props.editor.updateOptions({ theme: newValue });
                setMode(isLightTheme(newValue) ? "light" : "dark");
            }}
        >
            {renderOptions(groupTheme, colorsTheme)}
        </Select_KeyboardArrowDown>
    );
}

function ThemeSelectorMobile() {
    const _props = React.useContext(SharedProps);
    const { mode, setMode } = useColorScheme();
    return (
        <Select_KeyboardArrowDown
            color="primary"
            placeholder="Theme"
            defaultValue={_props.initConfig.theme || "vs-dark"}
            variant="soft"
            slotProps={{
                listbox: {
                    component: "div",
                    sx: {
                        maxHeight: 360,
                        overflow: "auto",
                        "--List-padding": "0px",
                    },
                },
            }}
            endDecorator={
                <Chip size="sm" color="neutral" variant="soft">
                    {window._.sum(
                        window._.map(groupTheme, (i: string | any[]) => {
                            return i.length;
                        })
                    )}
                </Chip>
            }
            sx={{
                flex: 1,
            }}
            style={{ minWidth: "20em", margin: "1% 0.3%", maxHeight: "3.5em", width: "100%" }}
            onChange={(e, newValue) => {
                _props.editor.updateOptions({ theme: newValue });
                setMode(isLightTheme(newValue) ? "light" : "dark");
            }}
        >
            {renderOptions(groupTheme, colorsTheme)}
        </Select_KeyboardArrowDown>
    );
}

function Configer() {
    const _props = React.useContext(SharedProps);
    const [readonly, setReadonly] = React.useState(false);
    const [showFullyWidth, setShowFullyWidth] = React.useState(false);
    const { mode, setMode } = useColorScheme();
    console.log(_props.initConfig.lang, _props.initConfig.theme);
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    React.useEffect(
        () => {
            setMode(_props.initConfig.theme === "vs" ? "light" : "dark");
            setReadonly(_props.initConfig.readonly);
        },
        [] // 只运行一次
    );

    return (
        <>
            <Typography component="div" sx={{ display: "flex", alignItems: "center", overflowY: "hidden" }}>
                <LangSelector />
                <ThemeSelector />
                <Checkbox
                    color="primary"
                    label="自动换行"
                    size="lg"
                    variant="soft"
                    defaultChecked
                    style={{ margin: "0 1em", flex: 1 }}
                    onChange={event => {
                        const isChecked = event.target.checked;
                        _props.editor.updateOptions({ wordWrap: isChecked ? "on" : "off" });
                    }}
                />
                <Checkbox
                    color="primary"
                    label="及时保存"
                    size="lg"
                    variant="soft"
                    disabled
                    className="SC_atMedia2Show_flex_width_more_m2"
                    style={{ margin: "0 1em", flex: 1 }}
                />
                <Checkbox
                    color="primary"
                    label="只读模式"
                    size="lg"
                    variant="soft"
                    disabled={!_props.initConfig.editable}
                    checked={readonly}
                    className="SC_atMedia2Show_flex_width_more_m2"
                    style={{ margin: "0 1em", flex: 1 }}
                    onChange={event => {
                        const isChecked = event.target.checked;
                        _props.editor.updateOptions({ readOnly: isChecked }); // https://www.cnblogs.com/zzsdream/p/14055963.html
                        setReadonly(isChecked);
                    }}
                />
            </Typography>
        </>
    );
}

function ConfigerDrawer() {
    const [open, setOpen] = React.useState(false);
    const _props = React.useContext(SharedProps);
    const [readonly, setReadonly] = React.useState(false);
    const [autoWrap, setAutoWrap] = React.useState(true);
    const { mode, setMode } = useColorScheme();
    console.log(_props.initConfig.lang, _props.initConfig.theme);
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    React.useEffect(
        () => {
            setMode(_props.initConfig.theme === "vs" ? "light" : "dark");
            setReadonly(_props.initConfig.readonly);
        },
        [] // 只运行一次
    );
    return (
        <React.Fragment>
            <Box style={{ position: "fixed", bottom: "10px", left: "18px", right: "18px" }}>
                <Button
                    variant="outlined"
                    color="neutral"
                    startDecorator={<TuneIcon />}
                    sx={{
                        width: "27%",
                    }}
                    onClick={() => setOpen(true)}
                >
                    设置
                </Button>
                <Button
                    variant="outlined"
                    color="warning"
                    startDecorator={<SaveIcon />}
                    sx={{
                        width: "46%",
                    }}
                    onClick={() => {
                        const _lang = _props.mmodel.getLanguageId();
                        const _content = "````" + _lang + "\n" + _props.editor.getValue();
                        _props.editor.trigger("save-code", "save-code", {
                            api: "/api/block/updateBlock",
                            data: _content,
                            lang: _lang,
                            nodeID: _props.nodeID,
                            dataType: "markdown",
                        });
                    }}
                >
                    保存为代码块
                </Button>
                <Button
                    variant="outlined"
                    color="success"
                    startDecorator={<SaveIcon />}
                    sx={{
                        width: "27%",
                    }}
                    onClick={() => {
                        const _lang = _props.mmodel.getLanguageId();
                        const _content = _props.editor.getValue();
                        _props.editor.trigger("save-code", "save-code", {
                            api: "/api/block/updateBlock",
                            data: _content,
                            lang: _lang,
                            nodeID: _props.nodeID,
                            dataType: "markdown",
                        });
                    }}
                >
                    保存
                </Button>
            </Box>
            <Drawer
                size="md"
                variant="plain"
                open={open}
                onClose={() => setOpen(false)}
                slotProps={{
                    content: {
                        sx: {
                            bgcolor: "transparent",
                            p: { md: 3, sm: 0 },
                            boxShadow: "none",
                            width: "100vw",
                        },
                    },
                }}
                style={{
                    width: "100vw",
                }}
            >
                <Sheet
                    sx={{
                        borderRadius: "md",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        height: "100%",
                        overflow: "auto",
                    }}
                >
                    <DialogTitle>设置</DialogTitle>
                    <ModalClose />
                    <Divider sx={{ mt: "auto" }} />
                    <DialogContent sx={{ gap: 2 }}>
                        <Typography level="h4" fontWeight="bold" sx={{ mt: 1 }}>
                            选择语言
                        </Typography>
                        <LangSelectorMobile />
                        <Typography level="h4" fontWeight="bold" sx={{ mt: 2 }}>
                            选择主题
                        </Typography>
                        <ThemeSelectorMobile />
                        <FormControl orientation="horizontal">
                            <Box sx={{ flex: 1, pr: 1 }}>
                                <FormLabel sx={{ typography: "title-sm" }}>只读模式</FormLabel>
                                <FormHelperText sx={{ typography: "body-sm" }}>写入模式将在后续版本就绪</FormHelperText>
                            </Box>
                            <Checkbox
                                color="primary"
                                checked={readonly}
                                disabled={!_props.initConfig.editable}
                                onChange={event => {
                                    const isChecked = event.target.checked;
                                    _props.editor.updateOptions({ readOnly: isChecked }); // https://www.cnblogs.com/zzsdream/p/14055963.html
                                    setReadonly(isChecked);
                                }}
                            />
                        </FormControl>

                        <FormControl orientation="horizontal">
                            <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
                                <FormLabel sx={{ typography: "title-sm" }}>及时保存</FormLabel>
                                <FormHelperText sx={{ typography: "body-sm" }}>该功能将在后续版本就绪</FormHelperText>
                            </Box>
                            <Checkbox color="primary" disabled />
                        </FormControl>
                        <FormControl orientation="horizontal">
                            <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
                                <FormLabel sx={{ typography: "title-sm" }}>自动换行</FormLabel>
                                <FormHelperText sx={{ typography: "body-sm" }}>自动将过长的代码行分割成多个较短的行</FormHelperText>
                            </Box>
                            <Checkbox
                                color="primary"
                                checked={autoWrap}
                                onChange={event => {
                                    const isChecked = event.target.checked;
                                    _props.editor.updateOptions({ wordWrap: isChecked ? "on" : "off" });
                                    setAutoWrap(isChecked);
                                }}
                            />
                        </FormControl>
                    </DialogContent>

                    <Divider sx={{ mt: "auto" }} />
                    <Stack direction="row" justifyContent="space-between" useFlexGap spacing={1}>
                        <Button
                            variant="outlined"
                            color="neutral"
                            onClick={() => {
                                _props.monacoIns.editor.setModelLanguage(_props.mmodel, _props.initConfig.lang);
                                _props.editor.updateOptions({
                                    readOnly: true,
                                    wordWrap: "on",
                                    theme: _props.initConfig.theme || "vs-dark",
                                });
                                setMode(_props.initConfig.theme === "vs" ? "light" : "dark");
                                setReadonly(_props.initConfig.readonly);
                                setAutoWrap(true);
                            }}
                        >
                            重置
                        </Button>
                        <Button onClick={() => setOpen(false)}>确认</Button>
                    </Stack>
                </Sheet>
            </Drawer>
        </React.Fragment>
    );
}

function EditorContainer() {
    const _props = React.useContext(SharedProps);
    /// #if MOBILE
    return (
        <>
            <ModalClose variant="soft" sx={{ top: 0, right: 0 }} />
            <Typography component="h2" id="close-modal-title" level="h4" textColor="inherit" fontWeight="lg">
                {_props.nodeID}
            </Typography>
            <ConfigerDrawer />
            <div
                id="monaco-editor"
                className="editor-monaco"
                style={{
                    height: "calc(-170px + 100vh)", // 注意移动端是全屏高度
                    paddingTop: "10px",
                }}
            />
            <Box sx={{ width: "100%" }}>
                <Slider
                    aria-label="Always visible"
                    // defaultValue={_props.editor.getOption(_props.monacoIns.editor.EditorOption.fontSize)} // 此时尚未初始化编辑器
                    defaultValue={initEditorOptions.fontSize}
                    track={false}
                    step={0.5}
                    min={8}
                    max={32}
                    marks={fontSliderMasks}
                    valueLabelDisplay="auto"
                    onChangeCommitted={(event, value) => {
                        _props.editor.updateOptions({ fontSize: value as number });
                    }}
                    sx={{
                        "--Slider-trackSize": "10px",
                        "--Slider-markSize": "6px",
                        "--Slider-thumbSize": "20px",
                    }}
                />
            </Box>
        </>
    );
    /// #else
    // biome-ignore lint/correctness/noUnreachable: <explanation>
    return (
        <>
            <ModalClose variant="soft" />
            <Typography component="h2" id="close-modal-title" level="h4" textColor="inherit" fontWeight="lg">
                {_props.nodeID}
            </Typography>
            <Configer />
            <div
                id="monaco-editor"
                className="editor-monaco"
                style={{
                    height: "max(calc(-58px - 170px + 95vh), 100px)",
                }}
            />
        </>
    );
    /// #endif
}
