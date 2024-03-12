import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    locales: {
      '/' : {
        selectedLanguageName: 'English'
      },
      '/de/': {
        selectedLanguageName: 'Deutsch'
      }
    }
  }),

  lang: 'en-US',
  title: 'How did this work?',
  description: 'Because nobody is gonna remember this.',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'How did this work?',
      description: 'Because nobody is gonna remember this.',
    },
    '/de/': {
      lang: 'de-DE',
      title: 'Wie funktioniert das?',
      description: 'Weil sich das Keiner merken kann.',
    },
  }
})
