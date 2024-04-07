export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'AWS EKS Workshop',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      icon: 'i-simple-icons-github',
      to: 'https://github.com/CNCF-Lahore/EKS-Workshop',
      target: '_blank',
      'aria-label': 'Become a Contributor'
    }]
  },
  footer: {
    credits: 'This wont be possible without these contributors',
    colorMode: false,
    links: [{
      icon: 'i-simple-icons-nuxtdotjs',
      to: 'https://www.kcdlahore.org',
      target: '_blank',
      'aria-label': 'Website'
    }, {
      icon: 'i-simple-icons-slack',
      to: 'https://join.slack.com/t/cncflahore/shared_invite/zt-2egtejr9w-pAcNZ0YG8rPtXUyhoIelXQ',
      target: '_blank',
      'aria-label': 'Join Slack'
    }, {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/CNCF-Lahore/EKS-Workshop',
      target: '_blank',
      'aria-label': 'Become a Contributor'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/CNCF-Lahore/EKS-Workshop/tree/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/CNCF-Lahore/EKS-Workshop',
        target: '_blank',
      }]
    }
  }
})
