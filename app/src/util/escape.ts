export const escapeHtml = (html: string) => {
    window.sout.tracker("invoked");
    if (!html) {
        return html;
    }
    return html.replace(/&/g, "&amp;").replace(/</g, "&lt;");
};

export const escapeGreat = (html: string) => {
    window.sout.tracker("invoked");
    return html.replace(/</g, "&lt;");
};

export const escapeAttr = (html: string) => {
    // window.sout.tracker("invoked"); // 这里调用频繁
    return html.replace(/"/g, "&quot;").replace(/'/g, "&apos;");
};

export const escapeAriaLabel = (html: string) => {
    window.sout.tracker("invoked");
    return html.replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        .replace(/</g, "&amp;lt;").replace(/&lt;/g, "&amp;lt;");
};
