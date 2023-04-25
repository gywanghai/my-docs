import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en": [
    "",
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    }
  ],
});
