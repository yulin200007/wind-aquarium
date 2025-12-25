<script setup lang="ts">
import { ref } from 'vue'

// 【JS 邏輯轉移】：以前是用 classList.toggle('active')
// 【Vue 思維】：定義一個布林值狀態，為 true 時 class 就存在
const isMenuOpen = ref(false) 

// 【JS 邏輯轉移】：以前 title1, title2, title3 要寫三個監聽器
// 【Vue 思維】：用一個變數紀錄「目前哪一個被打開」，null 代表都關閉
const activeGroup = ref<number | null>(null)

// 漢堡選單切換函式
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  
  // 原生 JS: body.classList.toggle('no-scroll')
  // Nuxt 寫法: 確保在瀏覽器端執行時操作 body
  if (process.client) {
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
  }
}

// 導覽群組切換函式
const toggleGroup = (index: number) => {
  // 如果點擊的是已經打開的，就設為 null (關閉)；否則就設為該 index (打開)
  activeGroup.value = activeGroup.value === index ? null : index
}
</script>

<template>
  <div 
    class="topnav__navhanbergar" 
    :class="{ 'is-active': isMenuOpen }" 
    @click="toggleMenu"
  >
    </div>

  <div class="header__navgroup--group">
    <h5 class="title1" @click="toggleGroup(1)">營業資訊</h5>
    
    <div class="header__navgroup--set" :class="{ 'active': activeGroup === 1 }">
       </div>
  </div>
</template>