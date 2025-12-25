<script setup lang="ts">
import { ref } from 'vue'

// 這裡放剛才寫的 TS 邏輯
const isMenuOpen = ref<boolean>(false)
const activeGroup = ref<number | null>(null)
const isLangOpen = ref<boolean>(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (process.client) {
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
  }
}

const toggleGroup = (index: number) => {
  activeGroup.value = activeGroup.value === index ? null : index
}
</script>

<template>
  <header> ... </header>
</template>

<style scoped>
  /* 這裡放原本的 SCSS/CSS */
</style>