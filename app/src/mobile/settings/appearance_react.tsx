import { Select, Option } from "@mui/joy";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import * as React from "react";
import * as Client from "react-dom/client";
import { openModel } from "../menu/model";
import { fetchGet, fetchPost } from "../../util/fetch";
import { initAssets, loadAssets, setMode } from "../../util/assets";
import { Constants } from "../../constants";
import type { Mode } from "fs";

interface SharedPropsContextValue {
    mode2: number;
    setMode2: React.Dispatch<React.SetStateAction<number>>;
    themeLight: string;
    setThemeLight: React.Dispatch<React.SetStateAction<string>>;
    themeDark: string;
    setThemeDark: React.Dispatch<React.SetStateAction<string>>;
}
const SharedProps = React.createContext<SharedPropsContextValue | null>(null);

function AppearanceSettings() {
    const [isFirstRender, setIsFirstRender] = React.useState(true);
    const [mode2, setMode2] = React.useState(window.siyuan.config.appearance.mode);
    const [themeLight, setThemeLight] = React.useState(window.siyuan.config.appearance.themeLight);
    const [themeDark, setThemeDark] = React.useState(window.siyuan.config.appearance.themeDark);
    const [icon, setIcon] = React.useState(window.siyuan.config.appearance.icon);
    const [lang, setLang] = React.useState(window.siyuan.config.appearance.lang);

    // const handleModeChange = (e, v) => {
    //     if (isFirstRender) {
    //         return;
    //     }
    //     setMode(v === 0 ? "light" : "dark")
    //     setMode2(Number.parseInt(v) || window.siyuan.config.appearance.mode);
    // };

    // const handleThemeLightChange = (e, v) => {
    //     if (isFirstRender) {
    //         return;
    //     }
    //     setThemeLight(v || window.siyuan.config.appearance.themeLight);
    // };

    // const handleThemeDarkChange = (e, v) => {
    //     if (isFirstRender) {
    //         return;
    //     }
    //     setThemeDark(v || window.siyuan.config.appearance.themeDark);
    // };

    const handleIconChange = (e, v) => {
        if (isFirstRender) {
            return;
        }
        setIcon(v);
    };

    const handleLangChange = (e, v) => {
        if (isFirstRender) {
            return;
        }
        setLang(v);
        fetchGet(
            `/appearance/langs/${v}.json?v=${Constants.SIYUAN_VERSION}`,
            (lauguages: IObject) => {
                window.siyuan.languages = lauguages;
                window.location.reload(); // 后续可以考虑加个对话框确认
            }
        );
    };

    React.useEffect(() => {
        // 每当 state 发生变化时，执行此副作用
        if (isFirstRender) {
            // 这是第一次渲染，不需要执行副作用
            setIsFirstRender(false);
            return;
        }
        const _data = Object.assign({}, window.siyuan.config.appearance, {
            icon: icon,
            mode: mode2 === 2 ? window.siyuan.config.appearance.mode : mode2,
            modeOS: mode2 === 2,
            themeDark: themeDark,
            themeLight: themeLight,
            lang: lang,
        });
        console.log(_data);
        fetchPost("/api/setting/setAppearance", _data, () => {
            window.siyuan.config.appearance = _data;
            loadAssets(_data);
            initAssets();
        });
    }, [mode2, themeLight, themeDark, icon, lang, isFirstRender]);

    return (
        <SharedProps.Provider
            value={{
                mode2: mode2,
                setMode2: setMode2,
                themeDark: themeDark,
                themeLight: themeLight,
                setThemeDark: setThemeDark,
                setThemeLight: setThemeLight,
            }}
        >
            <CssVarsProvider defaultMode="system">
                <SYAppearanceModeSelector />
                <SYThemmSelector />

                <div className="b3-label">
                    {window.siyuan.languages.icon}
                    <div className="fn__hr" />
                    <Select value={icon} onChange={handleIconChange}>
                        {window.siyuan.config.appearance.icons.map(icon => (
                            <Option key={icon} value={icon}>
                                {icon}
                            </Option>
                        ))}
                    </Select>
                    <div className="b3-label__text">{window.siyuan.languages.theme2}</div>
                </div>

                <div className="b3-label">
                    {window.siyuan.languages.language}
                    <div className="fn__hr" />
                    <Select value={lang} onChange={handleLangChange}>
                        {window.siyuan.config.langs.map(lang => (
                            <Option key={lang.name} value={lang.name}>
                                {`${lang.label} (${lang.name})`}
                            </Option>
                        ))}
                    </Select>
                    <div className="b3-label__text">{window.siyuan.languages.language1}</div>
                </div>
            </CssVarsProvider>
        </SharedProps.Provider>
    );
}

function SYAppearanceModeSelector() {
    const _props = React.useContext(SharedProps);
    const { mode, setMode } = useColorScheme();
    // 跟随系统优先
    return (
        <div className="b3-label">
            {window.siyuan.languages.appearance4}
            <div className="fn__hr" />
            <Select
                value={window.siyuan.config.appearance.modeOS ? "2" : String(_props.mode2)}
                onChange={(e, v) => {
                    // if (isFirstRender) {
                    //     return;
                    // }
                    setMode(
                        _props.mode2 === 2
                            ? window.siyuan.config.appearance.mode === 0
                                ? "light"
                                : "dark"
                            : v === "0"
                              ? "light"
                              : "dark"
                    );
                    _props.setMode2(Number.parseInt(v));
                }}
            >
                <Option value="0">{window.siyuan.languages.themeLight}</Option>
                <Option value="1">{window.siyuan.languages.themeDark}</Option>
                <Option value="2">{window.siyuan.languages.themeOS}</Option>
            </Select>
            <div className="b3-label__text">{window.siyuan.languages.appearance5}</div>
        </div>
    );
}

function SYThemmSelector() {
    const _props = React.useContext(SharedProps);
    return (
        <div className="b3-label">
            {window.siyuan.languages.theme}
            <div className="fn__hr" />
            <Select value={_props.themeLight} onChange={(e, v) => {
        // if (isFirstRender) {
        //     return;
        // }
        _props.setThemeLight(v);
    }}>
                {window.siyuan.config.appearance.lightThemes.map(theme => (
                    <Option key={theme} value={theme}>
                        {theme}
                    </Option>
                ))}
            </Select>
            <div className="b3-label__text">{window.siyuan.languages.theme11}</div>
            <div className="fn__hr" />
            <Select value={_props.themeDark} onChange={(e, v) => {
        // if (isFirstRender) {
        //     return;
        // }
        _props.setThemeDark(v);
    }}>
                {window.siyuan.config.appearance.darkThemes.map(theme => (
                    <Option key={theme} value={theme}>
                        {theme}
                    </Option>
                ))}
            </Select>
            <div className="b3-label__text">{window.siyuan.languages.theme12}</div>
        </div>
    );
}

/**
 * TODO: 需要解决同步配置和实时更新问题。。。不能用 window.location.reload();
 */
export const initAppearanceReact = () => {
    window.sout.tracker("invoked");
    const appearanceHTML = '<div id="appearanceSettingsContainer"></div>'; // AppearanceSettings 组件将渲染到这里
    openModel({
        title: window.siyuan.languages.appearance,
        icon: "iconTheme",
        html: appearanceHTML,
        bindEvent: modelMainElement => {
            // 在模态框中渲染 AppearanceSettings 组件
            const e = modelMainElement.querySelector("#appearanceSettingsContainer");
            const root = Client.createRoot(e);
            root.render(<AppearanceSettings />);
        },
    });
};
