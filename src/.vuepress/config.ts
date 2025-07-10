import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "22lin04",
      description: "GALA-Lin's blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "22lin04",
      description: "GALA-Lin的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
