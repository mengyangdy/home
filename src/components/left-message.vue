<template>
  <div>
    <div class="flex flex-row items-center max-w-560px animate-name-fade animate-duration-500 ">
      <img :src="`${appLogo}`" alt="logo" class="rounded-50% w-120px">
      <div class="w-full pl-22px translate-y--8px text-pacifico overflow-hidden whitespace-nowrap text-ellipsis h-132px">
        <span class="text-5rem">{{ siteUrl[0] }}</span>
        <span class="ml-6px text-2rem">{{ siteUrl[1] }}</span>
      </div>
    </div>
    <div class="cards p-1rem mt-3rem max-w-460px animate-name-fade animate-duration-500" @click="changeBox">
      <div class="flex justify-between">
        <Icon size="16">
          <QuoteLeft/>
        </Icon>
        <Transition name="fade" mode="out-in">
          <div :key="descText.hello + descText.text" class="m-x-1rem m-y-0.75rem leading-2rem mr-auto transition-property-opacity transition-duration-200" >
            <p class="text-pacifico">{{descText.hello}}</p>
            <p>{{descText.text}}</p>
          </div>
        </Transition>
        <Icon size="16" class="self-end">
          <QuoteRight/>
        </Icon>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {Icon} from "@vicons/utils";
import {QuoteLeft, QuoteRight} from "@vicons/fa";
import {Error} from "@icon-park/vue-next";
import {useAppStore} from "@/store/modules/app";
import {computed, h, reactive} from "vue";
import {NIcon} from "naive-ui";

const appStore = useAppStore()
const appLogo = import.meta.env.VITE_APP_MAIN_LOGO
const siteUrl = computed(() => {
  const url = import.meta.env.VITE_APP_URL
  if (!url) return 'imsyy.top'.split('.')

  // 判断协议前缀
  if (url.startsWith('http://') || url.startsWith('https://')) {
    const urlFormat = url.replace(/^(https?:\/\/)/, '')
    return urlFormat.split('.')
  }
  return url.split('.')
})


const descText = reactive({
  hello: import.meta.env.VITE_DESC_HELLO,
  text: import.meta.env.VITE_DESC_TEXT
})

const changeBox = () => {
  if (appStore.getInnerWidth >= 721) {
    appStore.boxOpenState = !appStore.boxOpenState
  } else {
    message.error(
        '当前页面宽度不足以开启盒子', {
          icon: () => h(NIcon, null, {default: () => h(Error)})
        }
    )
  }
}
</script>

<style scoped>

</style>