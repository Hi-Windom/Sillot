
export class ToolbarItem {
    element: string;

    el: Element;

    parentEl: Element;

    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    onClick(event: MouseEvent) { }

    setEl(element: Element) {
        this.el = element;
    }

    setParentEl(parentEl: Element) {
        this.parentEl = parentEl;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    onMount() { }
}