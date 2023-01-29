import {fetchPost} from '../util/fetch'
import Swal from 'sweetalert2'
import * as ace from 'brace'
// 引入扩展插件
import 'brace/ext/language_tools' // 自动补全 提示 很重要
import 'brace/ext/searchbox' // 搜索替换框 很有用
import 'brace/ext/whitespace' // 显示不可见字符
import 'brace/ext/emmet'
// 引入语言模式
import 'brace/mode/text'
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
const ace_themes = {
  monokai: 'ace/theme/monokai',
  chaos: "ace/theme/chaos",
  chrome: "ace/theme/chrome",
  cobalt: "ace/theme/cobalt",
  tomorrow_night_blue: "ace/theme/tomorrow_night_blue"
}
const ace_modes = {
  '': 'ace/mode/text',
  text: 'ace/mode/text',
  default: 'ace/mode/text',
  plaintext: 'ace/mode/text',
  cpp: 'ace/mode/c_cpp',
  csharp: 'ace/mode/csharp',
  'c#': 'ace/mode/csharp',
  css: 'ace/mode/css',
  dockerfile: 'ace/mode/dockerfile',
  go: 'ace/mode/golang',
  html: 'ace/mode/html',
  java: 'ace/mode/java',
  javjsascript: 'ace/mode/javascript',
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
  window.__ace = {
    themes: ace_themes,
    modes: ace_modes,
    editor: null
  };
  window.__ace.createEditor = async (id: string, initMode: string, initCode: string) => {
    let editor: any = false
    return await Swal.fire({
      title: '',
      html:
        `<div class="ace-container" style="height:100%">
        <div id="ace_statusBar"></div>
        <textarea id="aceEditorTextareaOriginElement"></textarea>
        </div>`,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      width: "88vw",
      didOpen: (thisE) => {
        let _t = thisE.querySelector(`.ace-container textarea`) as HTMLElement
        if (_t) {
          thisE.style.height = "85vh"
          editor = ace.edit("aceEditorTextareaOriginElement")
          window.__ace.editor = editor // 曲线救国
          let _mode = window.__ace.modes[initMode]
          if (_mode) {
            editor.getSession().setMode(_mode);
          } else {
            editor.getSession().setMode(window.__ace.modes.default);
          }
          editor.setTheme(ace_themes.chrome);
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
            bindKey: {win: "Ctrl-s", mac: "Ctrl-s"},
            exec: function(e:any) {
              console.warn("保存未实现");
            },
            readOnly: true
          }]);
          editor.session.setTabSize(2)
          editor.setFontSize("16px")
          let _HTML_c = thisE.querySelector(`#swal2-html-container`) as HTMLElement
          _HTML_c.style.height = "85vh"
          _HTML_c.style.padding = "30px 50px 0 0"
          _HTML_c.style.margin = "0"
          let _ace_c = _HTML_c.querySelector(`.ace-container`) as HTMLElement
          _ace_c.style.height = "calc(100% - 30px)"
          let _ace_e = _ace_c.querySelector(`.ace_editor`) as HTMLElement
          // _ace_e.style.fontSize = "16px"
          _ace_e.style.height = "100%"
          _ace_e.style.margin = "0"
          editor.setValue(initCode)
          editor.gotoLine(1)
          editor.resize() // 非常重要
          editor.getSession().on('change', ()=> {
            window.__ace.editor.resize()
          })
          editor.getSession().selection.on('changeSelection', ()=>{});
          editor.getSession().selection.on('changeCursor', ()=>{});
          return editor; // 在 promise 里无法有效返回值
        } else {
          console.error("Invalid editor")
        }
      },
      willClose: (thisE) => {
        let v = window.__ace.editor.getValue()
        let data = "````" + initMode + "\n" + v
        fetchPost("/api/block/updateBlock", {
          "dataType": "markdown",
          "data": data,
          "id": id
        }, res => {
          console.warn(res)
          editor?.destroy();
          editor?.container.remove();
        })
      }
    })
  }
  // 简单用法：
  // let y = __ace()
  // y.setValue(`function g(y){
  //     console.log("ok")
  //     return false
  // }
  // f(`)
  // y.getSession().on('change', function() {
  //     console.log(y.getValue())
  //   })
  // y.getSession().selection.on('changeSelection', function(e) {
  //     console.warn(y.session.getTextRange(y.getSelectionRange()))
  // });
}