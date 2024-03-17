import {Tab} from "../layout/Tab";
import {Protyle} from "../protyle";
import {Model} from "../layout/Model";
import {setPadding} from "../protyle/ui/initUI";
/// #if !BROWSER
import {setModelsHash} from "../window/setHeader";
/// #endif
import {countBlockWord} from "../layout/status";
import {App} from "../index";
import {fullscreen} from "../protyle/breadcrumb/action";

export class Editor extends Model {
    public element: HTMLElement;
    public editor: Protyle;
    public headElement: HTMLElement;

    constructor(options: {
        app: App,
        tab: Tab,
        blockId: string,
        rootId: string,
        mode?: TEditorMode,
        action?: string[],
    }) {
        super({
            app: options.app,
            id: options.tab.id,
        });
        if (window.siyuan.config.fileTree.openFilesUseCurrentTab) {
            options.tab.headElement.classList.add("item--unupdate");
        }
        this.headElement = options.tab.headElement;
        this.element = options.tab.panelElement;
        this.initProtyle(options);
    }

    private initProtyle(options: {
        blockId: string,
        action?: string[]
        rootId: string,
        mode?: TEditorMode,
    }) {
        this.editor = new Protyle(this.app, this.element, {
            action: options.action || [],
            blockId: options.blockId,
            rootId: options.rootId,
            mode: options.mode,
            render: {
                title: true,
                background: true,
                scroll: true,
            },
            typewriterMode: true,
            after: (editor) => {
                if (window.siyuan.editorIsFullscreen) {
                    fullscreen(editor.protyle.element);
                    setPadding(editor.protyle);
                }
                countBlockWord([], editor.protyle.block.rootID);
                /// #if !BROWSER
                setModelsHash();
                /// #endif
            },
        });
        // 需在 after 回调之前，否则不会聚焦 https://github.com/siyuan-note/siyuan/issues/5303
        this.editor.protyle.model = this;
    }
}
