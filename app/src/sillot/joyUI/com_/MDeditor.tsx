import * as React from "react";
import * as Client from "react-dom/client";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import Checkbox from "@mui/joy/Checkbox";
import Slider from "@mui/joy/Slider";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Switch from "@mui/joy/Switch";
import Select, { selectClasses } from "@mui/joy/Select";
import Option, { optionClasses } from "@mui/joy/Option";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import ListItemDecorator, {
  listItemDecoratorClasses,
} from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import Check from "@mui/icons-material/Check";
import CircularProgress from "@mui/joy/CircularProgress";
import HashLoader from "react-spinners/HashLoader";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import loader from "@monaco-editor/loader";
import { uriFromPath } from "../../util/path";
import { fetchPost } from "../../../util/fetch";
const path = require("path");
import { initEditorOptions } from "./monaco-editor-confige";
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

// const marksCodeFontSize = [
//   {
//     value: 8,
//     label: "8px",
//   },
//   {
//     value: 16,
//     label: "16px",
//   },
//   {
//     value: 22,
//     label: "22px",
//   },
//   {
//     value: 28,
//     label: "28px",
//   },
// ];

// function getCodeFontSizeAria(value: number) {
//   return `${value}px`;
// }

const SharedProps = React.createContext(null);

export default function MDDialog(props: { id: any; nodeID: any }) {
  const id = props.id;
  const nodeID = props.nodeID;
  const e = document.getElementById(id);
  if (!e) {
    return;
  }
  const root = Client.createRoot(e);
  // 在 React 中， <></> 是 <React.Fragment/> 的语法糖
  root.render(
    <>
      <Loader nodeID={nodeID} />
    </>
  );
}

function Loader(props: { nodeID: any }) {
  const [open, setOpen] = React.useState(true); // react hooks
  const [editor, setEditor] = React.useState(null);
  const nodeID = props.nodeID;
  React.useEffect(
    () => {
      /// #if !BROWSER
      const pp = path.join(
        __dirname,
        "../../app/node_modules/monaco-editor/min/vs"
      ); // 思源路径特殊
      // console.log(pp)
      loader.config({
        paths: {
          vs: uriFromPath(pp),
        },
        "vs/nls": {
          availableLanguages: {
            "*": "zh-cn",
          },
        },
      });
      /// #endif
      loader.init().then((monacoInstance) => {
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
        monacoInstance.editor.defineTheme(
          "Tomorrow-Night-Eighties",
          TomorrowNightEighties
        );
        monacoInstance.editor.defineTheme("Zenburnesque", Zenburnesque);
        const _editor = monacoInstance.editor.create(
          document.getElementById("monaco-editor"),
          initEditorOptions
        );

        setEditor(_editor);
        _editor.onDidChangeModelContent(() => {
          window.sout.log(_editor.getValue());
        });
        window.sout.tracker(_editor);
      });
    },
    [] // 空数组保证只执行一次
  );
  const [loading, setLoading] = React.useState({ display: "inherit" }); // 顺序重要
  React.useEffect(() => {
    if (!editor) return; // 第一次初始化时不执行
    fetchPost(
      "/api/block/getBlockKramdown",
      {
        id: nodeID,
      },
      (res) => {
        if (res.code == 0 && editor) {
          window.sout.info(nodeID);
          window.sout.success(res);
          editor.setValue(res.data.kramdown);
          setOpen(true);
          setLoading({ display: "none" });
          // document.getElementById("monaco-editor-CircularProgress").style.display = "none";
          document.getElementById("monaco-editor-container").style.display =
            "inherit";
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
      }}
    >
      {/* 必须使用CssVarsProvider包裹，样式才会生效 */}
      <CssVarsProvider>
        <Modal
          aria-labelledby="close-modal-title"
          color="primary"
          open={open}
          onClose={(event, reason) => {
            alert(`Reason: ${reason}`);
            setOpen(false);
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Sheet
            variant="plain"
            color="neutral"
            sx={{
              minWidth: 300,
              borderRadius: "md",
              p: 3,
            }}
          >
            {/* <HashLoader color="#36d7b7" size={186} speedMultiplier={1} /> */}
            <CircularProgress
              id="monaco-editor-CircularProgress"
              variant="plain"
              style={loading}
            />
            <div
              id="monaco-editor-container"
              style={{ display: { loading } ? "none" : "inherit" }}
            >
              <EditorContainer />
            </div>
          </Sheet>
        </Modal>
      </CssVarsProvider>
    </SharedProps.Provider>
  );
}

function Configer() {
  const [readonly, setReadonly] = React.useState(true);
  const _props = React.useContext(SharedProps);
  const group = {
    "build-in": ["vs", "vs-dark", "hc-light", "hc-black"],
    light: ["IPlastic", "Katzenmilch", "Solarized-light"],
    dark: [
      "Birds-of-Paradise",
      "Blackboard",
      "Cobalt",
      "Cobalt2",
      "Dracula",
      "IdleFingers",
      "Monokai",
      "Night-Owl",
      "Sunburst",
      "Tomorrow-Night-Eighties",
      "Zenburnesque",
    ],
  };
  const colors = {
    "build-in": "primary",
    light: "neutral",
    dark: "success",
  };
  return (
    <>
      <Typography
        component="div"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Select
          color="primary"
          placeholder="Mode"
          defaultValue="KMD"
          variant="soft"
          indicator={<KeyboardArrowDown />}
          endDecorator={
            <Chip size="sm" color="danger" variant="soft">
              2+
            </Chip>
          }
          sx={{
            width: 240,
            flex: 1,
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
          style={{ minWidth: "13em", margin: "1% 0.3%" }} // 方便调试，写在joyUI提供的 sx 里也行
        >
          <Option value="MD">Markdown</Option>
          <Option value="KMD">KMarkdown</Option>
        </Select>
        <Select
          color="primary"
          placeholder="Theme"
          defaultValue=""
          variant="soft"
          indicator={<KeyboardArrowDown />}
          slotProps={{
            listbox: {
              component: "div",
              sx: {
                maxHeight: 240,
                overflow: "auto",
                "--List-padding": "0px",
              },
            },
          }}
          endDecorator={
            <Chip size="sm" color="neutral" variant="soft">
              16
            </Chip>
          }
          sx={{
            width: 240,
            flex: 1,
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
          style={{ minWidth: "20em", margin: "1% 0.3%" }}
          onChange={(e, newValue) =>
            _props.editor.updateOptions({ theme: newValue })
          }
        >
          {Object.entries(group).map(([name, items], index) => (
            <React.Fragment key={name}>
              {index !== 0 && <ListDivider role="none" />}
              <List
                aria-labelledby={`select-group-${name}`}
                sx={{ "--List-decorator-size": "28px" }}
              >
                <ListItem id={`select-group-${name}`} sticky>
                  <Typography
                    level="body3"
                    textTransform="uppercase"
                    letterSpacing="md"
                  >
                    {name} ({items.length})
                  </Typography>
                </ListItem>
                {items.map((item) => (
                  <Option
                    key={item}
                    value={item}
                    label={
                      <React.Fragment>
                        <Chip
                          size="sm"
                          color={colors[name]}
                          sx={{ borderRadius: "xs", mr: 1, ml: -0.5 }}
                        >
                          {name}
                        </Chip>{" "}
                        {item}
                      </React.Fragment>
                    }
                    sx={{
                      [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]:
                        {
                          opacity: 1,
                        },
                    }}
                  >
                    <ListItemDecorator sx={{ opacity: 0 }}>
                      <Check />
                    </ListItemDecorator>
                    {item}
                  </Option>
                ))}
              </List>
            </React.Fragment>
          ))}
        </Select>
        <Checkbox
          color="primary"
          label="及时保存"
          size="lg"
          variant="soft"
          disabled
          style={{ margin: "0 1em", flex: 1 }}
        />
        <Checkbox
          color="primary"
          label="自动换行"
          size="lg"
          variant="soft"
          defaultChecked
          style={{ margin: "0 1em", flex: 1 }}
          onChange={(event) => {
            let isChecked = event.target.checked;
            _props.editor.updateOptions({ wordWrap: isChecked ? "on" : "off" });
          }}
        />
        <Typography
          component="label"
          sx={{ margin: 0 }}
          endDecorator={
            <Switch
              checked={readonly}
              onChange={(event) => {
                let isChecked = event.target.checked;
                _props.editor.updateOptions({ readOnly: isChecked }); // https://www.cnblogs.com/zzsdream/p/14055963.html
                setReadonly(event.target.checked);
              }}
              slotProps={{
                track: {
                  children: (
                    <>
                      <Typography
                        component="span"
                        level="inherit"
                        sx={{ ml: "10px" }}
                      >
                        On
                      </Typography>
                      <Typography
                        component="span"
                        level="inherit"
                        sx={{ mr: "8px" }}
                      >
                        Off
                      </Typography>
                    </>
                  ),
                },
              }}
              sx={{
                "--Switch-thumb-size": "27px",
                "--Switch-track-width": "64px",
                "--Switch-track-height": "31px",
              }}
            />
          }
        >
          只读模式
        </Typography>
      </Typography>
      {/* <Slider // 懒得写业务逻辑了，反正可以用 ctrl + wheel 缩放
        aria-label="Code fontSize"
        defaultValue={16}
        min={8}
        max={28}
        getAriaValueText={getCodeFontSizeAria}
        step={2}
        valueLabelDisplay="auto"
        marks={marksCodeFontSize}
      /> */}
    </>
  );
}

function EditorContainer() {
  const _props = React.useContext(SharedProps);
  return (
    <>
      <ModalClose variant="soft" />
      <Typography
        component="h2"
        id="close-modal-title"
        level="h4"
        textColor="inherit"
        fontWeight="lg"
      >
        {_props.nodeID}
      </Typography>
      <Configer />
      <div
        id="monaco-editor"
        className="editor-monaco"
        style={{
          width: "85vw",
          maxWidth: "2000px",
          maxHeight: "calc(100vh - 300px)",
          height: "600px",
          border: "1px solid #ccc",
        }}
      ></div>
    </>
  );
}
