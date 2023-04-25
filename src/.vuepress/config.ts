import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "码农二师兄的小站",
      description: "码农二师兄的小站",
    },
    // "/en/": {    
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
