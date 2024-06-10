import * as React from "react";
import * as Client from "react-dom/client";
import { Option } from "@mui/joy";
import { Select_KeyboardArrowDown } from "../sillot/joyUI/base/selector";

export const renderNewDailyNoteSelect = async (notebooks, defaultValue, container: HTMLElement) => {
    console.log("defaultValue", defaultValue);
    const root = Client.createRoot(container);
    root.render(<Select_newDailyNote notebooks={notebooks} defaultValue={defaultValue} />);
    if (!window.Sillot.android.NewDailyNoteSelectReactRoots) {
        window.Sillot.android.NewDailyNoteSelectReactRoots = [];
    }
    window.Sillot.android.NewDailyNoteSelectReactRoots.push(root); // 在 dialog.destroy() 中 unmount
};

const Select_newDailyNote = ({ notebooks, defaultValue }) => {
    const [selectedNotebookId, setSelectedNotebookId] = React.useState("");

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
