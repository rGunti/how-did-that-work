import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { navbarEn, sidebarEn, navbarDe, sidebarDe } from './configs';

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    hostname: 'https://how.did-that.work',
    docsDir: 'docs',
    locales: {
      '/' : {
        selectedLanguageName: 'English',
        navbar: navbarEn,
        sidebar: sidebarEn,
      },
      '/auf-deutsch/': {
        selectedLanguageName: 'Deutsch',
        selectLanguageText: 'Sprache',
        selectLanguageAriaLabel: 'Wähle eine Sprache',
        navbar: navbarDe,
        sidebar: sidebarDe,
      }
    }
  }),

  lang: 'en-US',
  title: 'How did that work?',
  description: 'Because nobody is gonna remember this.',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'How did that work?',
      description: 'Because nobody is gonna remember this.',
    },
    '/auf-deutsch/': {
      lang: 'de-DE',
      title: 'Wie funktioniert das?',
      description: 'Weil sich das Keiner merken kann.',
    },
  },

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/auf-deutsch/': {
          placeholder: 'Suchen',
        },
      },
    }),
    pwaPlugin({}),
  ],

  shouldPrefetch: false,
})
