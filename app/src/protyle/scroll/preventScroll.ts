export const preventScroll = (protyle: IProtyle, scrollTop = 0, timeout = 1000) => {
    // 防止滚动条滚动后调用 get 请求
    window.sout.tracker(scrollTop)
    protyle.scroll.lastScrollTop = -1;
    setTimeout(() => {
        protyle.scroll.lastScrollTop = scrollTop;
    }, timeout);
};
