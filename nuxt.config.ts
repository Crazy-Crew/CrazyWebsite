// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
            title: 'CrazyCrew',
            meta: [
                {
                    name: 'og:url',
                    content: 'https://crazycrew.us'
                }
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/assets/favicon.ico'
                }
            ]
        }
    }
})