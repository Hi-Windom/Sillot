import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
    site: "https://sillot.db.sc.cn",
    prefetch: true, // REF https://docs.astro.build/zh-cn/guides/prefetch/
    plugins: [
        starlightLinksValidator({
            errorOnFallbackPages: false, // 未翻译的页面不会报错
            errorOnRelativeLinks: false,
        }),
    ],
    integrations: [
        // [src/content/docs/] 将由 starlight 负责样式，[src/pages/] 则不受影响，在自定义页面中使用 Starlight 布局，请使用 <StarlightPage /> 组件包装页面内容。
        // REF https://starlight.astro.build/zh-cn/guides/pages/
        starlight({
            title: "Sillot Docs 🦢",
            logo: {
                src: "./src/assets/icon.svg",
            },
            social: {
                github: "https://github.com/Hi-Windom/Sillot",
            },
            editLink: {
                baseUrl: "https://github.com/Hi-Windom/Sillot/edit/master/docs/starlight",
            },
            lastUpdated: true,
            defaultLocale: "root", // 可选
            locales: {
                root: {
                    label: "简体中文",
                    lang: "zh-CN", // lang 是 root 语言必须的
                },
                // 英文文档在 `src/content/docs/en/` 中。
                en: { label: "English", lang: "en" },
                ja: { label: "日本語", lang: "ja" },
                es: { label: "Español", lang: "es" },
                ru: { label: "Русский", lang: "ru" },
            },
            sidebar: [
                // REF https://starlight.astro.build/zh-cn/guides/sidebar/
                {
                    label: "Guides",
                    autogenerate: { directory: "/guides" },
                },
                {
                    label: "Reference",
                    collapsed: true, // 默认折叠分组
                    autogenerate: { directory: "reference" },
                },
                {
                    label: "汐洛宝典",
                    autogenerate: { directory: "汐洛宝典" },
                },
                {
                    label: "依赖更新",
                    autogenerate: { directory: "依赖更新" },
                },
            ],
        }),
    ],
    components: {
        FeedbackComponent: "./src/components/FeedbackComponent.astro",
    },
});
