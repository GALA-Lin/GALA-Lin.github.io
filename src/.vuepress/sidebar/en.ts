import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({

  "/": [
    "",
    {
      text: "Algo Course Guide",
      icon: "book",
      prefix: "Algorithm Design & Analysis Course Guide/",
      link: "Algorithm Design & Analysis Course Guide/",
      children: "structure",
    },
    "intro",
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    },
  ],
});
