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
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import loader from "@monaco-editor/loader";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
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

function CloseModal() {
  const [open, setOpen] = React.useState(true); // react hooks
  // 在 React 中， <></> 是 <React.Fragment/> 的语法糖
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
            <ModalClose variant="soft" />
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
            <Typography
              component="h2"
              id="close-modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
            >
              Modal title
            </Typography>
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
          </Sheet>
        </Modal>
      </CssVarsProvider>
    </React.Fragment>
  );
}

export default class MDDialog {
  public readonly root: any;
  public readonly id: string;
  public readonly nodeID: string;
  constructor(props: { id: string; nodeID: string }) {
    this.id = props.id;
    this.nodeID = props.nodeID;
    let e = document.getElementById(props.id);
    if (!e) {
      return;
    }
    this.root = Client.createRoot(e);
    this.root.render(<CloseModal />);
    /// #if !BROWSER
    let pp = path.join(
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
      window.sout.info(this.nodeID);
      fetchPost(
        "/api/block/getBlockKramdown",
        {
          id: this.nodeID,
        },
        (res) => {
          window.sout.success(res);
          if (res.code == 0) {
            let data = res.data.kramdown;
            let editor = monacoInstance.editor.create(
              document.getElementById("monaco-editor"),
              {
                value: data,
                contextmenu: true,
                language: "markdown",
                theme: "vs-dark",
                automaticLayout: true,
              }
            );
            window.sout.tracker(editor);
          } else {
            this.root.render();
            window.__.toastify.error({
              message: res.msg,
              position: "bottom-center",
              duration: 1,
            });
          }
        }
      );
    });
  }
}
