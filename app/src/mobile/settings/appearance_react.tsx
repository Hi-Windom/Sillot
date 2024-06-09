import { Select, Option, selectClasses } from "@mui/joy";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import * as React from "react";
import * as Client from "react-dom/client";
import { openModel } from "../menu/model";
import { fetchGet, fetchPost } from "../../util/fetch";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Select_KeyboardArrowDown } from "../../sillot/joyUI/base/selector";

interface SharedPropsContextValue {
    isFirstRenderRef: React.MutableRefObject<boolean>;
    mode2: number;
    setMode2: React.Dispatch<React.SetStateAction<number>>;
    themeLight: string;
    setThemeLight: React.Dispatch<React.SetStateAction<string>>;
    themeDark: string;
    setThemeDark: React.Dispatch<React.SetStateAction<string>>;
    icon: string;
    setIcon: React.Dispatch<React.SetStateAction<string>>;
    lang: "en_US" | "zh_CN" | "ja_JP";
    setLang: React.Dispatch<React.SetStateAction<"en_US" | "zh_CN" | "ja_JP">>;
}
const SharedProps = React.createContext<SharedPropsContextValue | null>(null);

function AppearanceSettingsProvider() {
    // https://mui.com/joy-ui/customization/dark-mode/ 只能在嵌套里使用，这里套壳
    return (
        <CssVarsProvider>
            <AppearanceSettings />
        </CssVarsProvider>
    );
}

function AppearanceSettings() {
    const isFirstRenderRef = React.useRef(true); // 如果你只是想避免在初始化时执行副作用，可以使用useRef来存储一个标识，而不是使用状态变量。
    const { mode, setMode } = useColorScheme();
    const [mode2, setMode2] = React.useState(window.siyuan.config.appearance.modeOS ? 2 : window.siyuan.config.appearance.mode);
    const [themeLight, setThemeLight] = React.useState(window.siyuan.config.appearance.themeLight);
    const [themeDark, setThemeDark] = React.useState(window.siyuan.config.appearance.themeDark);
    const [icon, setIcon] = React.useState(window.siyuan.config.appearance.icon);
    const [lang, setLang] = React.useState(window.siyuan.config.appearance.lang);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    React.useEffect(() => {
        // 每当 state 发生变化时（包括初始化），执行此副作用。
        if (isFirstRenderRef.current) {
            console.log("AppearanceSettings isFirstRender");
            isFirstRenderRef.current = false;
            return; // 第一次渲染不应执行副作用
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
        fetchPost("/api/setting/setAppearance", _data, async response => {
            window.siyuan.config.appearance = response.data; // 应当与 _data 一致
            setMode(window.siyuan.config.appearance.mode === 0 ? "light" : "dark");
            window.location.reload();
        });
    }, [mode2, themeLight, themeDark, icon, lang]);

    return (
        <SharedProps.Provider
            value={{
                isFirstRenderRef: isFirstRenderRef,
                mode2: mode2,
                setMode2: setMode2,
                themeDark: themeDark,
                themeLight: themeLight,
                setThemeDark: setThemeDark,
                setThemeLight: setThemeLight,
                icon: icon,
                setIcon: setIcon,
                lang: lang,
                setLang: setLang,
            }}
        >
            <SYAppearanceModeSelector />
            <SYThemmSelector />
            <SYIconSelector />
            <SYLangSelector />
        </SharedProps.Provider>
    );
}

function SYAppearanceModeSelector() {
    const _props = React.useContext(SharedProps);
    return (
        <div className="b3-label">
            {window.siyuan.languages.appearance4}
            <div className="fn__hr" />
            <Select_KeyboardArrowDown
                value={String(_props.mode2)}
                onChange={(e, v) => {
                    _props.setMode2(Number.parseInt(v));
                }}
            >
                <Option value="0">{window.siyuan.languages.themeLight}</Option>
                <Option value="1">{window.siyuan.languages.themeDark}</Option>
                <Option value="2">{window.siyuan.languages.themeOS}</Option>
            </Select_KeyboardArrowDown>
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
            <Select_KeyboardArrowDown
                value={_props.themeLight}
                onChange={(e, v) => {
                    _props.setThemeLight(v);
                }}
            >
                {window.siyuan.config.appearance.lightThemes.map(theme => (
                    <Option key={theme} value={theme}>
                        {theme}
                    </Option>
                ))}
            </Select_KeyboardArrowDown>
            <div className="b3-label__text">{window.siyuan.languages.theme11}</div>
            <div className="fn__hr" />
            <Select_KeyboardArrowDown
                value={_props.themeDark}
                onChange={(e, v) => {
                    _props.setThemeDark(v);
                }}
            >
                {window.siyuan.config.appearance.darkThemes.map(theme => (
                    <Option key={theme} value={theme}>
                        {theme}
                    </Option>
                ))}
            </Select_KeyboardArrowDown>
            <div className="b3-label__text">{window.siyuan.languages.theme12}</div>
        </div>
    );
}

function SYIconSelector() {
    const _props = React.useContext(SharedProps);
    return (
        <div className="b3-label">
            {window.siyuan.languages.icon}
            <div className="fn__hr" />
            <Select_KeyboardArrowDown
                value={_props.icon}
                onChange={(e, v) => {
                    _props.setIcon(v);
                }}
            >
                {window.siyuan.config.appearance.icons.map(icon => (
                    <Option key={icon} value={icon}>
                        {icon}
                    </Option>
                ))}
            </Select_KeyboardArrowDown>
            <div className="b3-label__text">{window.siyuan.languages.theme2}</div>
        </div>
    );
}

function SYLangSelector() {
    const _props = React.useContext(SharedProps);
    return (
        <div className="b3-label">
            {window.siyuan.languages.language}
            <div className="fn__hr" />
            <Select_KeyboardArrowDown
                value={_props.lang}
                onChange={(e, v) => {
                    _props.setLang(v);
                }}
            >
                {window.siyuan.config.langs.map(lang => (
                    <Option key={lang.name} value={lang.name}>
                        {`${lang.label} (${lang.name})`}
                    </Option>
                ))}
            </Select_KeyboardArrowDown>
            <div className="b3-label__text">{window.siyuan.languages.language1}</div>
        </div>
    );
}

/**
 * 解决 https://github.com/Hi-Windom/Sillot/issues/814
 */
export const initAppearanceReact = () => {
    window.sout.tracker("invoked");
    const appearanceHTML = '<div id="appearanceSettingsContainer"></div>'; // AppearanceSettingsProvider 组件将渲染到这里
    openModel({
        title: window.siyuan.languages.appearance,
        icon: "iconTheme",
        html: appearanceHTML,
        bindEvent: modelMainElement => {
            // 在模态框中渲染 AppearanceSettingsProvider 组件
            const e = modelMainElement.querySelector("#appearanceSettingsContainer");
            const root = Client.createRoot(e);
            root.render(<AppearanceSettingsProvider />);
        },
    });
};
