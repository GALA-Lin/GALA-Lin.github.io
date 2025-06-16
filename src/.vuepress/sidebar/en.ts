import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "CUPK Algo Course Guide",
      icon: "book",
      prefix: "Algorithm Design & Analysis Course Guide/",
      link: "Algorithm Design & Analysis Course Guide/",
      children: "structure",
    },
    {
      text: "Algo_note",
      icon: "laptop-code",
      prefix: "Algo_note/",
      link: "Algo_note/",
      children: "structure",
    },
    "intro",
    
  ],
});
