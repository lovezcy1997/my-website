// nuxt.config.ts
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
    // ===== 开发工具 =====
    devtools: {enabled: false},

    // ===== TypeScript =====
    typescript: {
        typeCheck: false,
        strict: true
    },

    // ===== SSR =====
    ssr: false,

    // ===== 渲染模式控制 =====
    nitro: {
        preset: 'node-server',
        externals: {
            inline: ['@prisma/client']
        }
    },

    // ===== 路由规则 =====
    routeRules: {
        '/': {prerender: true}

    },

    // ===== 插件 =====
    plugins: [
        '~/plugins/directives.ts'
    ],

    // ===== CSS =====
    css: [],

    // ===== 应用配置 =====
    app: {
        head: {
            titleTemplate: '我的官网',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},

                {name: 'description', content: '这是一个个人网站'},
                {name: 'keywords', content: '个人网站, 个人博客, 个人项目'},
                {name: 'keywords', content: '蔚来,电动汽车,智能汽车'}
            ]
        },

    },
} as any)