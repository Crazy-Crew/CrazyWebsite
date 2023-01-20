// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        buildAssetsDir: '/public',
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
                    href: '/public/assets/favicon.ico'
                }
            ]
        }
    }
})