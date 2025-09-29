import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "所有文章",
    icon: "code",
    link: "/zh/article/",
  },
  {
    text: "算法课攻略",
    icon: "book",
    link: "/zh/算法设计与分析课程攻略/",
  },
  {
    text: "基础算法笔记",
    icon: "book",
    link: "/zh/Algo_note/",
  },
  {
    text: "项目经验",
    icon: "code",
    link: "/zh/project/",
  },
  {
    text: "关于我",
    icon: "info",
    link: "/zh/intro",
  },
]);
