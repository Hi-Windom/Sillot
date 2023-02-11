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
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import loader from "@monaco-editor/loader";
import { uriFromPath } from "../../util/path";
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

            <Select
              color="primary"
              placeholder="Mode"
              defaultValue="MD"
              variant="soft"
            >
              <Option value="MD">Markdown</Option>
              <Option value="KMD">KMarkdown</Option>
            </Select>
            <Checkbox
              color="primary"
              label="及时保存"
              size="md"
              variant="soft"
            />
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
  constructor(props: { id: string }) {
    this.id = props.id;
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
      monacoInstance.editor.create(document.getElementById("monaco-editor"), {
        value: "123",
        contextmenu: true,
        language: "markdown",
        theme: "vs-dark",
      });
    });
  }
}
