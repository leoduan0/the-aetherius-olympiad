// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'The Aetherius Olympiad',
    description: 'The website for The Aetherius Olympiad',
    header: {
      position: 'left',
      logo: {
        path: '/tap-logo-light.png',
        pathDark: '/tap-logo-dark.png',
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
