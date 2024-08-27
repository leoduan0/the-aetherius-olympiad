// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'The Aetherius Olympiad',
    description: 'The website for The Aetherius Olympiad, a competition in mathematics and physics.',
    header: {
      position: 'left',
      logo: {
        path: '/tao-logo-light.png',
        pathDark: '/tao-logo-dark.png',
        alt: 'logo',
      },
    },
    footer: {
      credits: {
        enabled: false,
        repository: 'https://www.github.com/nuxt-themes/alpine',
      },
      navigation: false,
      alignment: 'center',
      message: '',
    },
    socials: {
      github: 'leoduan0/the-aetherius-olympiad',
    },
  },
})
