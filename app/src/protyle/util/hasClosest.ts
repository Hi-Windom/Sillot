export const hasClosestByTag = (element: Node, nodeName: string) => {
    window.sout.tracker("invoked");
    if (!element) {
        return false;
    }
    if (element.nodeType === 3) {
        element = element.parentElement;
    }
    let e = element as HTMLElement;
    let isClosest = false;
    while (e && !isClosest && !e.classList.contains("b3-typography")) {
        if (e.nodeName.indexOf(nodeName) === 0) {
            isClosest = true;
        } else {
            e = e.parentElement;
        }
    }
    return isClosest && e;
};

export const hasTopClosestByClassName = (element: Node, className: string, top = false) => {
    // window.sout.tracker("invoked"); // 这里调用频繁
    let closest = hasClosestByClassName(element, className, top);
    let parentClosest: boolean | HTMLElement = false;
    let findTop = false;
    while (closest && (top ? closest.tagName !== "BODY" : !closest.classList.contains("protyle-wysiwyg")) && !findTop) {
        parentClosest = hasClosestByClassName(closest.parentElement, className, top);
        if (parentClosest) {
            closest = parentClosest;
        } else {
            findTop = true;
        }
    }
    return closest || false;
};

export const hasTopClosestByTag = (element: Node, nodeName: string) => {
    window.sout.tracker("invoked");
    let closest = hasClosestByTag(element, nodeName);
    let parentClosest: boolean | HTMLElement = false;
    let findTop = false;
    while (closest && !closest.classList.contains("protyle-wysiwyg") && !findTop) {
        parentClosest = hasClosestByTag(closest.parentElement, nodeName);
        if (parentClosest) {
            closest = parentClosest;
        } else {
            findTop = true;
        }
    }
    return closest || false;
};

export const hasTopClosestByAttribute = (element: Node, attr: string, value: string | null, top = false) => {
    window.sout.tracker("invoked");
    let closest = hasClosestByAttribute(element, attr, value, top);
    let parentClosest: boolean | HTMLElement = false;
    let findTop = false;
    while (closest && !closest.classList.contains("protyle-wysiwyg") && !findTop) {
        parentClosest = hasClosestByAttribute(closest.parentElement, attr, value, top);
        if (parentClosest) {
            closest = parentClosest;
        } else {
            findTop = true;
        }
    }
    return closest || false;
};

/**
 * 查找具有特定属性和值的最近的父元素
 * 
 * @param {Node} element - 起始元素，用于在其父元素中搜索
 * @param {string} attr - 要检查的属性名
 * @param {string | null} value - 要匹配的属性值，如果是null，则检查属性的存在
 * @param {boolean} [top=false] - 是否在到达BODY元素之前停止搜索
 * 
 * @returns {boolean | HTMLElement} - 如果找到匹配的元素，则返回该元素；否则返回false
 */
export const hasClosestByAttribute = (element: Node, attr: string, value: string | null, top = false) => {
    // window.sout.tracker("invoked"); // 这里调用频繁
    if (!element) {
        return false;
    }
    if (element.nodeType === 3) {
        element = element.parentElement;
    }
    let e = element as HTMLElement;
    let isClosest = false;
    while (e && !isClosest && (top ? e.tagName !== "BODY" : !e.classList.contains("protyle-wysiwyg"))) {
        if (typeof value === "string" && e.getAttribute(attr)?.split(" ").includes(value)) {
            isClosest = true;
        } else if (typeof value !== "string" && e.hasAttribute(attr)) {
            isClosest = true;
        } else {
            e = e.parentElement;
        }
    }
    return isClosest && e;
};

export const hasClosestBlock = (element: Node) => {
    // window.sout.tracker("invoked"); // 这里调用频繁
    const nodeElement = hasClosestByAttribute(element, "data-node-id", null);
    if (nodeElement && nodeElement.tagName !== "BUTTON" && nodeElement.getAttribute("data-type")?.startsWith("Node")) {
        return nodeElement;
    }
    return false;
};

export const hasClosestByMatchTag = (element: Node, nodeName: string) => {
    // window.sout.tracker("invoked"); // 这里调用频繁
    if (!element) {
        return false;
    }
    if (element.nodeType === 3) {
        element = element.parentElement;
    }
    let e = element as HTMLElement;
    let isClosest = false;
    while (e && !isClosest && !e.classList.contains("protyle-wysiwyg")) {
        if (e.nodeName === nodeName) {
            isClosest = true;
        } else {
            e = e.parentElement;
        }
    }
    return isClosest && e;
};

export const hasClosestByClassName = (element: Node, className: string, top = false) => {
    // window.sout.tracker("invoked"); // 这里调用频繁
    if (!element) {
        return false;
    }
    if (element.nodeType === 3) {
        element = element.parentElement;
    }
    let e = element as HTMLElement;
    let isClosest = false;
    while (e && !isClosest && (top ? e.tagName !== "BODY" : !e.classList.contains("protyle-wysiwyg"))) {
        if (e.classList?.contains(className)) {
            isClosest = true;
        } else {
            e = e.parentElement;
        }
    }
    return isClosest && e;
};
