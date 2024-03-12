import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarDe: NavbarConfig = [
  {
    text: "Referenzen",
    children: [
      {
        text: 'Über diese Seite',
        children: [
          {
            text: "Wie die Seite erstellt wurde",
            link: "/auf-deutsch/eine/website-erstellen.md",
          },
          {
            text: "GitHub Repository",
            link: "https://github.com/rGunti/how-did-that-work",
          },
        ]
      },
      {
        text: 'Externe Resourcen',
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
