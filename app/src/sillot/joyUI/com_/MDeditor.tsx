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
import Option from "@mui/joy/Option";
import Chip from "@mui/joy/Chip";
import CircularProgress from "@mui/joy/CircularProgress";
import HashLoader from "react-spinners/HashLoader";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import loader from "@monaco-editor/loader";
// import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import { uriFromPath } from "../../util/path";
import { fetchPost } from "../../../util/fetch";
const path = require("path");

const marksCodeFontSize = [
  {
    value: 8,
    label: "8px",
  },
  {
    value: 16,
    label: "16px",
  },
  {
    value: 22,
    label: "22px",
  },
  {
    value: 28,
    label: "28px",
  },
];

function getCodeFontSizeAria(value: number) {
  return `${value}px`;
}

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
        console.log("Here is the monaco instance", monacoInstance);
        const _editor = monacoInstance.editor.create(
          document.getElementById("monaco-editor"),
          {
            value: "",
            language: "markdown",
            theme: "vs-dark",
            acceptSuggestionOnCommitCharacter: true, // 接受关于提交字符的建议
            acceptSuggestionOnEnter: "on", // 接受输入建议
            accessibilityPageSize: 10, // 辅助功能页面大小 Number 说明：控制编辑器中可由屏幕阅读器读出的行数。警告：这对大于默认值的数字具有性能含义。
            accessibilitySupport: "on", // 辅助功能支持 控制编辑器是否应在为屏幕阅读器优化的模式下运行。
            autoClosingBrackets: "always", // 是否自动添加结束括号(包括中括号)
            autoClosingDelete: "always", // 是否自动删除结束括号(包括中括号)
            autoClosingOvertype: "always", // 是否关闭改写 即使用insert模式时是覆盖后面的文字还是不覆盖后面的文字
            autoClosingQuotes: "always", // 是否自动添加结束的单引号 双引号
            autoIndent: "advanced", // 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
            automaticLayout: true, // 自动布局
            codeLens: true, // 是否显示codeLens 通过 CodeLens，你可以在专注于工作的同时了解代码所发生的情况 – 而无需离开编辑器。 可以查找代码引用、代码更改、关联的 Bug、工作项、代码评审和单元测试。
            codeLensFontFamily: "", // codeLens的字体样式
            codeLensFontSize: 14, // codeLens的字体大小
            colorDecorators: true, // 呈现内联色彩装饰器和颜色选择器
            comments: {
              ignoreEmptyLines: true, // 插入行注释时忽略空行。默认为真。
              insertSpace: true, // 在行注释标记之后和块注释标记内插入一个空格。默认为真。
            }, // 注释配置
            contextmenu: true, // 启用上下文菜单
            columnSelection: false, // 启用列编辑 按下shift键位然后按↑↓键位可以实现列选择 然后实现列编辑
            autoSurround: "never", // 是否应自动环绕选择
            copyWithSyntaxHighlighting: true, // 是否应将语法突出显示复制到剪贴板中 即 当你复制到word中是否保持文字高亮颜色
            cursorBlinking: "smooth", // 光标动画样式
            cursorSmoothCaretAnimation: "on", // 是否启用光标平滑插入动画  当你在快速输入文字的时候 光标是直接平滑的移动还是直接"闪现"到当前文字所处位置
            cursorStyle: "line", // 光标样式
            cursorSurroundingLines: 3, // 光标环绕行数 当文字输入超过屏幕时 环绕行数越大 光标在滚动条中位置越居中
            cursorSurroundingLinesStyle: "all", // 光标环绕样式
            cursorWidth: 2, // <=25 光标宽度
            minimap: {
              enabled: true, // 是否启用预览图
            },
            folding: true, // 是否启用代码折叠
            links: true, // 是否点击链接
            overviewRulerBorder: false, // 是否应围绕概览标尺绘制边框
            renderLineHighlight: "gutter", // 当前行突出显示方式
            roundedSelection: false, // 选区是否有圆角
            scrollBeyondLastLine: false, // 设置编辑器是否可以滚动到最后一行之后
            readOnly: false, // 是否为只读模式
          }
        );

        setEditor(_editor);
        _editor.onDidChangeModelContent(() => {
          window.sout.log(_editor.getValue())
        })
        window.sout.tracker(_editor);
      });
    },
    [] // 空数组保证只执行一次
  );
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
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
          setLoading(false);
          document.getElementById("monaco-editor-CircularProgress").style.display = "none";
          document.getElementById("monaco-editor-container").style.display = "inherit"
          window.sout.tracker(editor);
        } else {
          setLoading(false);
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
    <React.Fragment>
      {/* 必须使用CssVarsProvider覆盖样式才会生效 */}
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
              style={{ display: { loading } ? "inherit" : "none" }}
            />
            <div id="monaco-editor-container" style={{ display: { loading } ? "none" : "inherit" }}>
              <EditorContainer nodeID={nodeID} />
            </div>
          </Sheet>
        </Modal>
      </CssVarsProvider>
    </React.Fragment>
  );
}

function Configer() {
  return (
    <>
      <Typography component="span">
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
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
          style={{ maxWidth: "13em", margin: "2% 0" }}
        >
          <Option value="MD">Markdown</Option>
          <Option value="KMD">KMarkdown</Option>
        </Select>
      </Typography>
      <Checkbox
        color="primary"
        label="及时保存"
        size="md"
        variant="soft"
        style={{ margin: "0 1em" }}
      />
      <Checkbox
        color="primary"
        label="自动换行"
        size="md"
        variant="soft"
        style={{ margin: "0 1em" }}
      />
      <Typography
        component="label"
        endDecorator={
          <Switch
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
        编辑模式
      </Typography>
      <Slider
        aria-label="Code fontSize"
        defaultValue={16}
        min={8}
        max={28}
        getAriaValueText={getCodeFontSizeAria}
        step={2}
        valueLabelDisplay="auto"
        marks={marksCodeFontSize}
      />
    </>
  );
}

function EditorContainer(props: { nodeID: string }) {
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
        Modal title
      </Typography>
      <Configer />
      <div
        id="monaco-editor"
        className="editor-monaco"
        style={{
          width: "800px",
          maxWidth: "88vw",
          maxHeight: "calc(100vh - 300px)",
          height: "600px",
          border: "1px solid #ccc",
        }}
      ></div>
    </>
  );
}
