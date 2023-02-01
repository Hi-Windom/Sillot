import { fetchPost } from '../util/fetch'
import Swal from 'sweetalert2'
import * as ace from 'brace'
// 引入扩展插件
import 'brace/ext/language_tools' // 自动补全 提示 很重要
import 'brace/ext/searchbox' // 搜索替换框 很有用
import 'brace/ext/whitespace' // 显示不可见字符
import 'brace/ext/emmet'
// 引入语言模式
import 'brace/mode/text'
import 'brace/mode/plain_text'
import 'brace/mode/c_cpp'
import 'brace/mode/csharp'
import 'brace/mode/css'
import 'brace/mode/dockerfile'
import 'brace/mode/golang'
import 'brace/mode/html'
import 'brace/mode/java'
import 'brace/mode/javascript'
import 'brace/mode/json'
import 'brace/mode/julia'
import 'brace/mode/kotlin'
import 'brace/mode/latex'
import 'brace/mode/less'
import 'brace/mode/lua'
import 'brace/mode/makefile'
import 'brace/mode/markdown'
import 'brace/mode/matlab'
import 'brace/mode/nsis'
import 'brace/mode/objectivec'
import 'brace/mode/perl'
import 'brace/mode/pgsql'
import 'brace/mode/php'
import 'brace/mode/powershell'
import 'brace/mode/python'
import 'brace/mode/r'
import 'brace/mode/ruby'
import 'brace/mode/scss'
import 'brace/mode/sql'
import 'brace/mode/swift'
import 'brace/mode/toml'
import 'brace/mode/typescript'
import 'brace/mode/vbscript'
import 'brace/mode/xml'
import 'brace/mode/yaml'
// 引入配色主题
import 'brace/theme/monokai'
import "brace/theme/chaos"
import "brace/theme/chrome"
import "brace/theme/cobalt"
import "brace/theme/tomorrow_night_blue"
// 引入 snippets
import 'brace/snippets/text'
import 'brace/snippets/plain_text'
import 'brace/snippets/c_cpp'
import 'brace/snippets/csharp'
import 'brace/snippets/css'
import 'brace/snippets/dockerfile'
import 'brace/snippets/golang'
import 'brace/snippets/html'
import 'brace/snippets/java'
import 'brace/snippets/javascript'
import 'brace/snippets/json'
import 'brace/snippets/julia'
import 'brace/snippets/kotlin'
import 'brace/snippets/latex'
import 'brace/snippets/less'
import 'brace/snippets/lua'
import 'brace/snippets/makefile'
import 'brace/snippets/markdown'
import 'brace/snippets/matlab'
import 'brace/snippets/nsis'
import 'brace/snippets/objectivec'
import 'brace/snippets/perl'
import 'brace/snippets/pgsql'
import 'brace/snippets/php'
import 'brace/snippets/powershell'
import 'brace/snippets/python'
import 'brace/snippets/r'
import 'brace/snippets/ruby'
import 'brace/snippets/scss'
import 'brace/snippets/sql'
import 'brace/snippets/swift'
import 'brace/snippets/toml'
import 'brace/snippets/typescript'
import 'brace/snippets/vbscript'
import 'brace/snippets/xml'
import 'brace/snippets/yaml'
const ace_themes: any = {
  monokai: 'ace/theme/monokai',
  chaos: "ace/theme/chaos",
  chrome: "ace/theme/chrome",
  cobalt: "ace/theme/cobalt",
  tomorrow_night_blue: "ace/theme/tomorrow_night_blue"
}
const ace_modes: any = {
  plaintext: 'ace/mode/plain_text',
  text: 'ace/mode/text',
  cpp: 'ace/mode/c_cpp',
  csharp: 'ace/mode/csharp',
  'c#': 'ace/mode/csharp',
  css: 'ace/mode/css',
  dockerfile: 'ace/mode/dockerfile',
  go: 'ace/mode/golang',
  html: 'ace/mode/html',
  java: 'ace/mode/java',
  javascript: 'ace/mode/javascript',
  js: 'ace/mode/javascript',
  json: 'ace/mode/json',
  julia: 'ace/mode/julia',
  kotlin: 'ace/mode/kotlin',
  latex: 'ace/mode/latex',
  less: 'ace/mode/less',
  lua: 'ace/mode/lua',
  makefile: 'ace/mode/makefile',
  markdown: 'ace/mode/markdown',
  matlab: 'ace/mode/matlab',
  nsis: 'ace/mode/nsis',
  objectivec: 'ace/mode/objectivec',
  perl: 'ace/mode/perl',
  pgsql: 'ace/mode/pgsql',
  php: 'ace/mode/php',
  powershell: 'ace/mode/powershell',
  python: 'ace/mode/python',
  r: 'ace/mode/r',
  ruby: 'ace/mode/ruby',
  scss: 'ace/mode/scss',
  sql: 'ace/mode/sql',
  swift: 'ace/mode/swift',
  toml: 'ace/mode/toml',
  typescript: 'ace/mode/typescript',
  ts: 'ace/mode/typescript',
  vbscript: 'ace/mode/vbscript',
  xml: 'ace/mode/xml',
  yaml: 'ace/mode/yaml'
}

export function exAce() {
  window.__.ace = {
    themes: ace_themes,
    modes: ace_modes,
    editor: null
  };
  window.__.ace.createEditor = async (id: string, initMode: string, initCode: string) => {
    let editor: any = false
    return await Swal.fire({
      title: '',
      html: /*html*/
        `<div class="ace-container" style="height: calc(100% - 10px);">
        <div id="ace_toolBar" style="height:38px;padding:5px;margin-right:58px;display:flex;font-size:16px;align-items:center;">
          <div id="ace_bindBlock" style="flex-grow:1;text-align:left;">正在编辑：[${id}]</div>
          <div id="ace_fontsizeSelector_container" style="margin:0 5px;"> 字号：
            <select id="ace_fontsizeSelector" class="b3-select fn__size200">
              <option value="12px">12px</option>
              <option value="14px">14px</option>
              <option value="16px" selected>16px</option>
              <option value="18px">18px</option>
              <option value="20px">20px</option>
              <option value="22px">22px</option>
            </select>
          </div>
          <div id="ace_modeSelector_container" style="margin:0 5px;"> 语言模式：
            <select id="ace_modeSelector" class="b3-select fn__size200">
            </select>
          </div>
          <div id="ace_themeSelector_container" style="margin:0 5px;"> 配色主题：
            <select id="ace_themeSelector" class="b3-select fn__size200">
              <option value="monokai">monokai</option>
              <option value="chaos">chaos</option>
              <option value="chrome">chrome</option>
              <option value="cobalt">cobalt</option>
              <option value="tomorrow_night_blue">tomorrow_night_blue</option>
            </select>
          </div>
        </div>
        <textarea id="aceEditorTextareaOriginElement"></textarea>
        </div>`,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      width: "100vw", // 点击遮罩关闭弹窗会导致焦点跑到文档开头，因此全屏弹窗只允许右上角控件关闭
      didOpen: (thisE) => {
        let _t = thisE.querySelector(`.ace-container textarea`) as HTMLElement
        if (_t) {
          editor = ace.edit("aceEditorTextareaOriginElement") // 放在最前面
          window.__.ace.editor = editor // 曲线救国
          let _swal2_container = thisE.parentElement // div.swal2-container
          let _HTML_c = thisE.querySelector(`#swal2-html-container`) as HTMLElement
          let _ace_c = _HTML_c.querySelector(`.ace-container`) as HTMLElement
          let _ace_e = _ace_c.querySelector(`.ace_editor`) as HTMLElement
          let _rule_line = thisE.querySelector(`.ace_print-margin`) as HTMLElement
          let _s_fontsize = _ace_c.querySelector(`#ace_fontsizeSelector`) as HTMLSelectElement
          let _s_mode = _ace_c.querySelector(`#ace_modeSelector`) as HTMLSelectElement
          let _s_theme = _ace_c.querySelector(`#ace_themeSelector`) as HTMLSelectElement
          _swal2_container.style.padding = "0"
          _swal2_container.style.zIndex = "998" // 默认的 1060 层级会遮挡 vue-toast-notification 或其他元素
          thisE.style.animation = "none"
          thisE.style.height = "100vh"
          let _s_mode_options = ''
          window._.forEach(window.__.ace.modes, (value: any, key: any) => {
            _s_mode_options += `<option value="${value}">${key}</option>`
          })
          _s_mode.innerHTML = _s_mode_options
          _s_fontsize.addEventListener('change', (e) => {
            window.__.ace.editor.setFontSize(_s_fontsize.value)
          })
          _s_mode.addEventListener('change', (e) => {
            window.__.ace.editor.getSession().setMode(_s_mode.value);
          })
          _s_theme.addEventListener('change', (e) => {
            window.__.ace.editor.setTheme(ace_themes[_s_theme.value]);
          })
          let _mode = window.__.ace.modes[initMode]
          if (_mode) {
            editor.getSession().setMode(_mode);
            _s_mode.value = _mode
          } else {
            editor.getSession().setMode(window.__.ace.modes.text);
            _s_mode.value = window.__.ace.modes.text
          }
          let _syMode = window.siyuan.config.appearance.mode
          if (_syMode && _syMode == 1) {
            // 暗黑模式
            editor.setTheme(ace_themes.chaos)
            _s_theme.value = 'chaos'
          } else {
            // 明亮模式
            editor.setTheme(ace_themes.chrome);
            _s_theme.value = 'chrome'
          }
          editor.setOptions({
            wrap: true, // 换行
            enableLiveAutocompletion: true, // ext/language_tools
            enableBasicAutocompletion: true, // ext/language_tools
            enableSnippets: true, // ext/language_tools
            tooltipFollowsMouse: true, // 鼠标提示
            minLines: 2, // 最少行数
            displayIndentGuides: false, // 显示参考线
            fadeFoldWidgets: true, // 淡入折叠部件
            showInvisibles: false, // 显示不可见字符 ext/whitespace
            animatedScroll: true, // 滚动动画
            vScrollBarAlwaysVisible: true, // 纵向滚动条始终可见
            useSoftTabs: true, // 使用软标签（使用空格替换tab）
            enableEmmet: true // 未知用途
          })
          editor.$blockScrolling = Infinity // Automatically scrolling cursor into view after selection change this will be disabled in the next version set editor.$blockScrolling = Infinity to disable this message
          editor.commands.addCommands([{
            name: "saveCode",
            bindKey: { win: "Ctrl-s", mac: "Ctrl-s" },
            exec: function (e: any) {
              let v = window.__.ace.editor.getValue()
              let data = "````" + initMode + "\n" + v
              fetchPost("/api/block/updateBlock", {
                "dataType": "markdown",
                "data": data,
                "id": id
              }, res => {
                window.__.toast.success("已保存", { position: "bottom", duration: 1300, queue: true });
              })
            },
            readOnly: true
          }]);
          _HTML_c.style.height = "100vh"
          _HTML_c.style.margin = "0"
          _HTML_c.style.backgroundColor = "var(--b3-theme-background)"
          _HTML_c.style.color = "var(--b3-theme-on-background)"
          _ace_e.style.height = "calc(100% - 40px)"
          _ace_e.style.margin = "0"
          _rule_line.style.left = "clamp(300px, 68vw, 900px)"
          editor.session.setTabSize(2)
          editor.setFontSize("16px")
          editor.setValue(initCode)
          editor.gotoLine(1)
          editor.resize() // 非常重要
          editor.getSession().on('change', () => {
            window.__.ace.editor.resize()
          })
          editor.getSession().selection.on('changeSelection', () => { });
          editor.getSession().selection.on('changeCursor', () => { });
          return editor; // 在 promise 里无法有效返回值
        } else {
          console.error("Invalid editor")
        }
      },
      willClose: (thisE) => {
        let v = window.__.ace.editor.getValue()
        let data = "````" + initMode + "\n" + v
        fetchPost("/api/block/updateBlock", {
          "dataType": "markdown",
          "data": data,
          "id": id
        }, res => {
          console.log(res)
          if (res.code == 0) {
            window.__.toast.success("已保存", { position: "bottom", duration: 1300, queue: true });
          }
          else {
            window.__.toast.error(res.msg, { position: "bottom", duration: 3100, queue: false });
          }
          editor?.destroy();
          editor?.container.remove();
        })
      }
    })
  }
}