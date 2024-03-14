import { defineConfig } from '@jcamp/vitepress-blog-theme/config'

const PAGE_DATA = {
  title: 'How did that work?',
  description: 'Because nobody is gonna remember this.',
  defaultAuthor: 'Raphael',
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: PAGE_DATA.title,
  description: PAGE_DATA.description,
  themeConfig: {
    blog: {
      title: PAGE_DATA.title,
      description: PAGE_DATA.description,
      defaultAuthor: PAGE_DATA.defaultAuthor,
      categoryIcons: {
        article: 'i-[heroicons-outline/book-open]',
        tutorial: 'i-[heroicons-outline/academic-cap]',
        document: 'i-[heroicons-outline/annotation]',
        announcement: 'i-[heroicons-outline/megaphone]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[carbon/logo-vue]',
        'web development': 'i-[carbon/earth-filled]',
      },
    },
    search: {
      provider: 'local',
    },
    nav: [
      {
        text: 'Tags',
        link: '/blog/tags',
        activeMatch: '/blog/tags',
      },
      {
        text: 'Archives',
        link: '/blog/archives',
        activeMatch: '/blog/archives',
      },
    ],

    sidebar: [],

    markdown: {
      image: {
        lazyLoading: true
      }
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/rgunti/how-did-that-work',
      },
    ],
  },
})
