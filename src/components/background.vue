<template>
  <div class="absolute top-0 left-0 w-full h-full transition-all duration-250 z--1" :class="appStore.bgShow?'z-1':''">
    <img v-show="appStore.wallpaperLoadingStatus" class="absolute left-0 top-0 w-full h-full object-cover backface-hidden blur-20px brightness-30 transition-filter duration-300 transition-transform duration-300 animate-name-fade-blur-in animate-duration-800 timing-func-cubic-bezier(0.25, 0.46, 0.45, 0.94) animate-fill-mode-forwards" :src="bgUrl" alt="背景图片" @load="imgLoadComplete" @error.once="imgLoadError" @animationend="imgAnimationEnd">
    <div :class="appStore.bgShow?'opacity-0 transition-all duration-1500':'opacity-100'" class="absolute top-0 left-0 w-full h-full transition duration-1500" style="background-image: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);"></div>
    <Transition name="fade" mode="out-in">
      <a v-if="appStore.bgShow && appStore.wallpaperType !=='3'" :href="bgUrl"
         target="_blank" class="text-16px text-white absolute bottom-30px left-0 top-0 mx-auto p-[20px_26px] rounded-[8px] g-black/18.82% w-120px h-120px flex-center">下载壁纸</a>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import {useAppStore} from '@/store/modules/app';
import {onMounted, ref, h, watch, onBeforeUnmount} from "vue";
import {useMessage, NIcon} from 'naive-ui'


interface Emits {
  (e: 'loadComplete'): void
}

const emit = defineEmits<Emits>()

import {Error} from "@icon-park/vue-next";

const message = useMessage()

const appStore = useAppStore()
const bgUrl = ref<string | null>(null)


const bgRandom = Math.floor(Math.random() * 10 + 1)

onMounted(() => {
  // 加载壁纸
  changeBg(appStore.wallpaperType)
})

function changeBg(type: string) {
  if (type === '0') {
    bgUrl.value = `/images/background${bgRandom}.jpg`
  } else if (type === '1') {
    bgUrl.value = "https://api.dujin.org/bing/1920.php";
  } else if (type === '2') {
    bgUrl.value = "https://api.vvhan.com/api/wallpaper/views";
  } else if (type === '3') {
    bgUrl.value = "https://api.vvhan.com/api/wallpaper/acg"
  }
}


const imgTimeout = ref<number | null>(null);

// 图片加载完成
const imgLoadComplete = () => {
  imgTimeout.value = setTimeout(() => {
    appStore.setWallpaperLoadingStatus(true)
  }, Math.floor(Math.random() * (600 - 300 + 1)) + 300)
}

// 图片加载失败
const imgLoadError = (err) => {
  message.error(
      '壁纸加载失败，已切换默认壁纸', {
        icon: () => h(NIcon, null, {default: () => h(Error)})
      }
  )
}

// 图片动画完成
const imgAnimationEnd = () => {
  emit('loadComplete')
}

watch(() => appStore.wallpaperType, (value: string) => {
  changeBg(value)
})

onBeforeUnmount(()=>{
  if(imgTimeout.value) clearTimeout(imgTimeout.value)
})

</script>