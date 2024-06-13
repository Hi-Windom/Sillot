import * as React from "react";
import * as Client from "react-dom/client";
import { CssVarsProvider, Option, useColorScheme } from "@mui/joy";
import { Select_KeyboardArrowDown } from "../sillot/joyUI/base/selector";

export const renderNewDailyNoteSelect = async (notebooks, defaultValue, container: HTMLElement) => {
    console.log("defaultValue", defaultValue);
    const root = Client.createRoot(container);
    root.render(
        <CssVarsProvider>
            <Select_newDailyNote notebooks={notebooks} defaultValue={defaultValue} />
        </CssVarsProvider>
    );
    if (!window.Sillot.android.NewDailyNoteSelectReactRoots) {
        window.Sillot.android.NewDailyNoteSelectReactRoots = [];
    }
    window.Sillot.android.NewDailyNoteSelectReactRoots.push(root); // 在 dialog.destroy() 中 unmount
};

const Select_newDailyNote = ({ notebooks, defaultValue }) => {
    const [selectedNotebookId, setSelectedNotebookId] = React.useState("");
    const { mode, setMode } = useColorScheme();
    setMode(window.siyuan.config.appearance.mode === 0 ? "light" : "dark");
    const handleNotebookChange = (e, v) => {
        setSelectedNotebookId(v);
    };

    return (
        <Select_KeyboardArrowDown
            className="selectedNotebook fn__block"
            defaultValue={defaultValue}
            value={selectedNotebookId}
            onChange={handleNotebookChange}
        >
            {notebooks.map(item => {
                if (!item.closed) {
                    return (
                        <Option key={item.id} value={item.id}>
                            {item.name}
                        </Option>
                    );
                }
            })}
        </Select_KeyboardArrowDown>
    );
};
