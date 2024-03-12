import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarEn: NavbarConfig = [
  {
    text: "References",
    children: [
      {
        text: 'About this site',
        children: [
          {
            text: "How this site was built",
            link: "/to/create-a-website.md",
          },
          {
            text: "GitHub Repository",
            link: "https://github.com/rGunti/how-did-that-work",
          },
        ]
      },
      {
        text: 'External Resources',
        children: [
          {
            text: "VuePress",
            link: "https://v2.vuepress.vuejs.org/",
          },
        ]
      }
    ],
  },
];
