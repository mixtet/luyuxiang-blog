import { defineConfig } from "vitepress";
import { nav, sidebar } from "./relaConf";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/luyuxiang-blog",
    title: "mixtet",
    description: "mixtet博客",
    themeConfig: {
        search: {
            provider: "local",
        },
        // https://vitepress.dev/reference/default-theme-config
        // nav: [
        //     { text: "Home", link: "/" },
        //     { text: "Examples", link: "/markdown-examples" },
        // ],
        // 导航条
        nav,

        // 侧边栏
        sidebar,

        // sidebar: [
        //     {
        //         text: "Examples",
        //         items: [
        //             { text: "Markdown Examples", link: "/markdown-examples" },
        //             { text: "Runtime API Examples", link: "/api-examples" },
        //         ],
        //     },
        // ],

        socialLinks: [{ icon: "github", link: "https://github.com/mixtet/luyuxiang-blog/tree/master" }],

        logo: "/avatar.png",

        outline: {
            level: [1, 6],
            label: "目录",
        },
    },
});
