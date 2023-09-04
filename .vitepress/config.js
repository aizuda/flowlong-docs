import { defineConfig } from "vitepress";

const nav = [
  { text: "主页", link: "/" },
  {
    text: "指南",
    items: [
      { text: "快速开始", link: "/docs/" },
    ],
  },
  {
    text: "配置",
    items: [
      { text: "配置", link: "/config/" },
    ],
  },
  { text: "问答", link: "/config/" },
];

const sidebar = {
  "/startup/": [
    {
      text: "快速开始",
      items: [{ text: "快速开始", link: "/startup/" }],
    },
  ],
  "/config/": [
    {
      text: "配置",
      collapsed: false,
      items: [{ text: "配置", link: "/config/" }],
    },
  ],
};

const socialLinks = [

  { icon: "github", link: "https://github.com/aizuda/flowlong" },
  {
    icon: {
      svg: '<svg x="5" y="5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23"></path></svg>',
    },
    link: "https://gitee.com/aizuda/flowlong",
  },
];

export default defineConfig({
  title: "FlowLong 飞龙工作流引擎",
  description: "真正的国产工作流引擎 json 格式实例模型、简易审批流程设计器、🚩为中国特色审批匠心打造❗",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  srcDir: "./src",
  assetsDir: "static",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/logo.svg",
    search: {
      provider: "algolia",
      options: {
        appId: "...",
        apiKey: "...",
        indexName: "...",
      },
    },
    nav,
    sidebar,
    footer: {
      message: "更适合中国人的工作流引擎",
      copyright: "Copyright © 2023 FlowLong",
    },
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    // carbonAds: {
    // code: 'your-carbon-code',
    // placement: 'your-carbon-placement'
    // },
    socialLinks,
  },
});
