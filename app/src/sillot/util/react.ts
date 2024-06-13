export const unmountReactRootsArray = (roots) => {
    if (!roots || roots.length === 0) { return; }
    for (let i = roots.length - 1; i >= 0; i--) {
        const root = roots[i];
        if (root?.unmount) {
            root.unmount();
            roots.splice(i, 1);
        }
    }
}

export const unmountAllMobileSettingsPanelReactRoots = () => {
    unmountReactRootsArray(window.Sillot.android?.AppearanceReactRoots);
    unmountReactRootsArray(window.Sillot.android?.DevOptionsReactRoots);
}
