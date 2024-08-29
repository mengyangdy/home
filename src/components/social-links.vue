<template>
  <div
      class="group mt-1rem flex items-center justify-between max-w-460px w-full h-42px bg-transparent rounded-6px backdrop-blur-0 animate-name-fade animate-duration-500 transition-bg-color duration-300 transition-backdrop-filter duration-300 hover:(bg-black/40 backdrop-blur-5)">
    <div class="flex-center">
      <a href="item.url" target="_blank" v-for="(item) in socialLinks" :key="item.name" @mouseenter="tip=item.tip" @mouseleave="tip='通过这里联系我吧'">
        <img :src="item.icon" :alt="item.name" class="m-x-12px transition-transform duration-300 hover:scale-110 active:scale-100 h-24px">
      </a>
    </div>
    <span class="mr-4 animate-fade hidden group-hover:block">{{tip}}</span>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import socialLinks from '@/assets/socialLinks.json'

const tip = ref<string>("通过这里联系我吧")
</script>

<style scoped>

</style>