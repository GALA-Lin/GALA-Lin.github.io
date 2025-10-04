import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { commentPlugin } from '@vuepress/plugin-comment'


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
  plugins: [
    commentPlugin({
      provider: 'Giscus', // Artalk | Giscus | Waline | Twikoo
      repo: "GALA-Lin/GALA-Lin.github.io", // 仓库名
      repoId: "R_kgDOO7liCw", // 仓库ID
      category: "Announcements", // 分类
      categoryId: "DIC_kwDOO7liC84CwPgD", // 分类ID
      lazyLoading: true, // 延迟加载
      // 服务商特定选项
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
