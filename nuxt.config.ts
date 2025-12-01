// nuxt.config.ts (修正後的配置，移除所有 SCSS 路徑)

// 移除 import path from 'path'; 等相關內容

export default defineNuxtConfig({

  ssr: false, 
  target: 'static',
  modules: [
    '@nuxt/content',
  ],

 app: {
    head: {
      // 在這裡配置所有需要添加到 <head> 的外部資源
      script: [
        { 
          // 引入 Font Awesome 的 kit.js 腳本
          src: 'https://kit.fontawesome.com/ba7733ae26.js', 
          crossorigin: 'anonymous', 
          defer: true // 推薦使用 defer，確保網頁內容先載入
        }
      ],
      
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 移除 additionalData 設置
          // additionalData: `@import "${variablesPath}";` 
        }
      }
    }
  },
  

})

