import { defineConfig } from "vitepress";
import { nav, sidebar } from "./relaConf";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/luyuxiang-blog",
    title: "mixtet",
    description: "mixtet博客",
    themeConfig: {
        // 头部导航框
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

        // github 链接
        socialLinks: [{ icon: "github", link: "https://github.com/mixtet/luyuxiang-blog/tree/master" }],

        logo: "/avatar.png",

        // 侧边栏导航
        outline: {
            level: [1, 6],
            label: "目录",
        },
    },
});
