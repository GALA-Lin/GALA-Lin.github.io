import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "算法设计与分析课程攻略",
      icon: "laptop-code",
      prefix: "算法设计与分析课程攻略/",
      link: "算法设计与分析课程攻略/",
      children: "structure",
    },
    {
      text: "基础算法笔记",
      icon: "laptop-code",
      prefix: "Algo_note/",
      link: "Algo_note/",
      children: "structure",
    },
    "intro",
  ],
});
