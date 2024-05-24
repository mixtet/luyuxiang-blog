import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
    "/column/LargeFrontEnd2024": [
        {
            text: "大前端2024",
            items: [
                {
                    text: "架构",
                    link: "/column/LargeFrontEnd2024/100_架构",
                },
                {
                    text: "需求分析能力",
                    link: "/column/LargeFrontEnd2024/200_需求分析能力",
                },
                {
                    text: "前端开发&调试双击破, nvm",
                    link: "/column/LargeFrontEnd2024/300_前端开发&调试双击破",
                },
            ],
        },
    ],
    "/column/interview": [
        {
            text: "面试",
            items: [
                {
                    text: "前端基础,查缺补漏",
                    link: "/column/interview/baseWeb",
                },
                {
                    text: "前端面试",
                    link: "/column/interview/document",
                },
                {
                    text: "前端面试题目",
                    link: "/column/interview/topic",
                },
            ],
        },
    ],
};
