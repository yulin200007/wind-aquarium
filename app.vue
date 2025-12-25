<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// 這是一個空的 setup 區塊，保持 Nuxt 應用程式的運行
</script>

<style lang="scss">
/* 關鍵修正：在這裡使用標準的相對路徑引入 SCSS */
/* 因為我們移除了複雜的配置，這裡的路徑解析會更穩定 */

@import "./assets/scss/main.scss"; 
</style>
