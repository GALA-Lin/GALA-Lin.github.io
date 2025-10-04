import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Articles",
    icon: "code",
    link: "/article/",
  },
  {
    text: "CUPK Algo Course Guide",
    icon: "book",
    link:"/Algorithm Design & Analysis Course Guide/",
  },
  {
    text: "Algo_note",
    icon: "book",
    link: "/Algo_note/",
  },
  {
    text: "projects",
    icon: "code",
    link: "/project/",
  },
  {
    text: "About Me",
    icon: "info",
    link: "/intro",
  },
]);
