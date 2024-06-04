import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    {
        text: "首页",
        link: "/",
    },
    {
        text: "前端",
        items: [
            {
                text: "大前端(2024)",
                link: "/column/LargeFrontEnd2024/100_架构",
            },
            {
                text: "大前端(2023)",
                link: "/column/LargeFrontEnd2023/100_NoSQL",
            },
            {
                text: "面试",
                link: "/column/interview/document",
            },
        ],
    },
    {
        text: "关于",
        link: "/column/abount",
    },
];
