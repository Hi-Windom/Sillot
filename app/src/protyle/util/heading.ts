export const removeFoldHeading = (nodeElement: Element) => {
    window.sout.tracker("invoked");
    const nodeH = Number.parseInt(nodeElement.getAttribute("data-subtype").substring(1));
    let nextElement = nodeElement.nextElementSibling;
    while (nextElement) {
        const currentH = Number.parseInt(nextElement.getAttribute("data-subtype")?.substring(1));
        if (!nextElement.classList.contains("protyle-attr") && // 超级块末尾为属性
            (Number.isNaN(currentH) || currentH > nodeH)) {
            const tempElement = nextElement;
            nextElement = nextElement.nextElementSibling;
            tempElement.remove();
        } else {
            break;
        }
    }
};
