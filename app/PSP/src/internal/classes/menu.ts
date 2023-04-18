export interface IMenuItemOption {
    label?: string;
    click?: (element: HTMLElement) => void;
    type?: 'separator' | 'submenu' | 'readonly';
    accelerator?: string;
    action?: string;
    id?: string;
    submenu?: IMenuItemOption[];
    disabled?: boolean;
    icon?: string;
    iconHTML?: string;
    current?: boolean;
    bind?: (element: HTMLElement) => void;
}

export class Menu {
    menu: any;

    constructor(id: string) {
        const menu = window.siyuan?.menus?.menu;
        if (!menu) {
            throw Error('Siyuan internal menu not found!');
        }
        this.menu = menu;
        if (!id) {
            throw Error('Menu must has an id, got empty or undefined!');
        }
        menu.remove();
        menu.element.setAttribute('data-name', id);
    }

    addItem(item: MenuItem) {
        this.menu.append(item.element);
        return this;
    }

    addSeparator() {
        this.addItem(new MenuItem({ type: 'separator' }));
        return this;
    }

    showAtMouseEvent(event: MouseEvent) {
        this.menu.popup({ x: event.clientX, y: event.clientY });
        return this;
    }

    showAtPosition(position: { x: number; y: number }) {
        this.menu.popup({ x: position.x, y: position.y });
        return this;
    }

    close() {
        this.menu.remove();
    }
}

/**
 * Copy from siyuan source code
 */
export class MenuItem {
    public element: HTMLElement;

    constructor(options: IMenuItemOption) {
        this.element = document.createElement('button');
        if (options.disabled) {
            this.element.setAttribute('disabled', 'disabled');
        }
        if (options.type === 'separator') {
            this.element.classList.add('b3-menu__separator');
            return;
        }
        this.element.classList.add('b3-menu__item');
        if (options.current) {
            this.element.classList.add('b3-menu__item--selected');
        }
        if (options.click) {
            // 需使用 click，否则移动端无法滚动
            this.element.addEventListener('click', (event) => {
                if (this.element.getAttribute('disabled')) {
                    return;
                }
                options.click(this.element);
                event.preventDefault();
                event.stopImmediatePropagation();
                event.stopPropagation();
                window.siyuan.menus.menu.remove();
            });
        }
        let html = `<span class="b3-menu__label">${options.label}</span>`;
        if (options.iconHTML) {
            html = options.iconHTML + html;
        } else {
            html = `<svg class="b3-menu__icon${
                ['HTML (SiYuan)', window.siyuan.languages.template].includes(options.label) ? ' ft__error' : ''
            }" style="${options.icon === 'iconClose' ? 'height:10px;' : ''}"><use xlink:href="#${options.icon || ''}"></use></svg>${html}`;
        }
        // if (options.accelerator) {
        //     html += `<span class="b3-menu__accelerator">${updateHotkeyTip(options.accelerator)}</span>`;
        // }
        if (options.action) {
            html += `<svg class="b3-menu__action"><use xlink:href="#${options.action}"></use></svg>`;
        }
        if (options.id) {
            this.element.setAttribute('data-id', options.id);
        }
        if (options.type === 'readonly') {
            this.element.classList.add('b3-menu__item--readonly');
        }
        this.element.innerHTML = html;
        if (options.bind) {
            // 主题 rem craft 需要使用 b3-menu__item--custom 来区分自定义菜单 by 281261361
            this.element.classList.add('b3-menu__item--custom');
            options.bind(this.element);
        }
        if (options.submenu) {
            const submenuElement = document.createElement('div');
            submenuElement.classList.add('b3-menu__submenu');
            options.submenu.forEach((item) => {
                submenuElement.append(new MenuItem(item).element);
            });
            this.element.insertAdjacentHTML('beforeend', '<svg class="b3-menu__icon b3-menu__icon--arrow"><use xlink:href="#iconRight"></use></svg>');
            this.element.append(submenuElement);
        }
    }
}

export class MenuSeparator {}
