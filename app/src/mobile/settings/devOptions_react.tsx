import { Button, ButtonGroup, CssVarsProvider, DialogTitle, FormControl, FormLabel, IconButton, Menu, MenuItem, Modal, ModalClose, ModalDialog, type ModalDialogProps, Switch, useColorScheme } from "@mui/joy";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { openModel } from "../menu/model";
import * as React from "react";
import * as Client from "react-dom/client";
import { isPadAppMode } from "sofill/env";

interface SharedPropsContextValue {
    isFirstRenderRef: React.MutableRefObject<boolean>;
}
const SharedProps = React.createContext<SharedPropsContextValue | null>(null);

/**
 * 解决 https://github.com/Hi-Windom/Sillot/issues/814
 */
export const initDevOptionsReact = () => {
    window.sout.tracker("invoked");
    openModel({
        title: "开发者选项",
        icon: "iconBug",
        html: '<div id="devOptionsSettingsContainer"></div>',
        bindEvent(modelMainElement: HTMLElement) {
            const e = modelMainElement.querySelector("#devOptionsSettingsContainer");
            const root = Client.createRoot(e);
            root.render(<DevOptionsProvider />);
            if (!window.Sillot.android.DevOptionsReactRoots) {
                window.Sillot.android.DevOptionsReactRoots = [];
            }
            window.Sillot.android.DevOptionsReactRoots.push(root); // 在 window.goBakc() 、closePanel 和 closeModel 中 unmount
        },
    });
};

export const initDevOptionsReact_Pad = () => {
    window.sout.tracker("invoked");
    const e = document.body.querySelector("#app5");
    const root = Client.createRoot(e);
    root.render(<DevOptionsProvider_Pad />);
};

function DevOptionsProvider() {
    // https://mui.com/joy-ui/customization/dark-mode/ 只能在嵌套里使用，这里套壳
    return (
        <CssVarsProvider>
            <DevOptions />
        </CssVarsProvider>
    );
}

function DevOptionsProvider_Pad() {
    // https://mui.com/joy-ui/customization/dark-mode/ 只能在嵌套里使用，这里套壳
    const [layout, setLayout] = React.useState<ModalDialogProps['layout'] | undefined>(
        undefined,
      );
      const [scroll, setScroll] = React.useState<boolean>(true);
      React.useEffect(()=>{
        setLayout('fullscreen');
      }, [])
    return (
        <CssVarsProvider>
                      <Modal
            open={!!layout}
            onClose={() => {
              setLayout(undefined);
            }}
          >
            <ModalDialog layout={layout}>
              <ModalClose />
              <DialogTitle>开发者选项</DialogTitle>
              <FormControl
                orientation="horizontal"
                sx={{ bgcolor: 'background.level2', p: 1, borderRadius: 'sm' }}
              >
                <FormLabel>Container overflow</FormLabel>
                <Switch
                  checked={scroll}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setScroll(event.target.checked)
                  }
                  sx={{ ml: 'auto' }}
                />
              </FormControl>
              <DevOptions />
            </ModalDialog>
          </Modal>
        </CssVarsProvider>
    );
}

function DevOptions() {
    const isFirstRenderRef = React.useRef(true); // 如果你只是想避免在初始化时执行副作用，可以使用useRef来存储一个标识，而不是使用状态变量。
    const { mode, setMode } = useColorScheme();
    setMode(window.siyuan.config.appearance.mode === 0 ? "light" : "dark");
    return (
        <SharedProps.Provider
            value={{
                isFirstRenderRef: isFirstRenderRef,
            }}
        >
            <div className="b3-label">
                vConsole
                <div className="fn__hr" />
                <Button
                    className="b3-button fn__block"
                    id="toggle_vConsole"
                    onClick={() => {
                        if (isPadAppMode()) {
                            window.vConsole?.show();
                            return;
                        }
                        const _e = document.querySelector("#toolbarConsole");
                        if (_e?.getAttribute("data-mode") === "0") {
                            window.vConsole?.showSwitch();
                            _e?.setAttribute("data-mode", "1");
                        } else {
                            window.vConsole?.hideSwitch();
                            _e?.setAttribute("data-mode", "0");
                        }
                    }}
                >
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg>
                        <use href="#iconTerminal" />
                    </svg>{" "}
                    {isPadAppMode() ? "打开 vConsole" : "切换 vConsole 浮标是否显示"}
                </Button>
                <div className="b3-label__text">如果已经显示，则隐藏；如果已经隐藏，则显示。</div>
            </div>

            <div className="b3-label">
                权限申请
                <div className="fn__hr" />
                <Button
                    className="b3-button fn__block"
                    id="toggle_vConsole"
                    onClick={() => {
                        window.JSAndroid?.requestPermissionAll();
                    }}
                >
                    批量申请合集
                </Button>
                <div className="b3-label__text">啦啦啦啦啦。</div>
            </div>

            <div className="b3-label">
                使用非捆绑的前端产物
                <div className="fn__hr" />
                <Button className="b3-button fn__block" id="unbundled_web" disabled>
                    使用非捆绑的前端产物
                </Button>
                <div className="b3-label__text">TODO</div>
            </div>

            <div className="b3-label">
                JSAndroid 接口测试
                <div className="fn__hr" />
                <JSAndroidSplitButton />
                <div className="b3-label__text">嘿嘿嘿</div>
            </div>
        </SharedProps.Provider>
    );
}

function JSAndroidSplitButton() {
    const [open, setOpen] = React.useState(false);
    // biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
    const actionRef = React.useRef<() => void | null>(null);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const options = [
        "JSAndroid.androidReboot",
        "JSAndroid.exitSillotAndroid",
        "JSAndroid.buglyPost1",
        "JSAndroid.buglyPost2",
        "JSAndroid.toggleFullScreenState",
        "JSAndroid.isMIUI",
        "JSAndroid.isOriginOS",
        "JSAndroid.getUA",
        "JSAndroid.showInputMethodPicker",
    ];

    const handleClick = e => {
        console.info(`You clicked ${options[selectedIndex]}`);
        const functionName = options[selectedIndex].replace("JSAndroid.", "");
        console.log("target: window.JSAndroid.", functionName);
        // 使用Object.prototype.hasOwnProperty来检查函数是否存在
        if (Object.prototype.hasOwnProperty.call(window.JSAndroid, functionName) && typeof window.JSAndroid[functionName] === "function") {
            // 调用对应的函数
            const result = window.JSAndroid[functionName]();
            console.log(functionName, " -> ", result);
        }
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    return (
        <React.Fragment>
            <ButtonGroup ref={anchorRef} variant="solid" color="success" aria-label="split button">
                <Button className="b3-button fn__block" onClick={handleClick}>
                    {options[selectedIndex]}
                </Button>
                <IconButton
                    aria-controls={open ? "split-button-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onMouseDown={() => {
                        // @ts-ignore
                        actionRef.current = () => setOpen(!open);
                    }}
                    onKeyDown={() => {
                        // @ts-ignore
                        actionRef.current = () => setOpen(!open);
                    }}
                    onClick={() => {
                        actionRef.current?.();
                    }}
                >
                    <ArrowDropDownIcon />
                </IconButton>
            </ButtonGroup>
            <Menu open={open} onClose={() => setOpen(false)} anchorEl={anchorRef.current}>
                {options.map((option, index) => (
                    <MenuItem key={option} selected={index === selectedIndex} onClick={event => handleMenuItemClick(event, index)}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );
}
