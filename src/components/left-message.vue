<template>
  <div>
    <div class="flex flex-row items-center max-w-460px animate-name-fade animate-duration-500">
      <img :src="appLogo" alt="logo" class="rounded-50% w-120px">
      <div class="w-full pl-22px translate-y--8px text-pacifico overflow-hidden whitespace-nowrap text-ellipsis">
        <span>{{ siteUrl[0] }}</span>
        <span>{{ siteUrl[1] }}</span>
      </div>
    </div>
    <div @click="changeBox">
      <div>
        <Icon size="16">
          <QuoteLeft/>
        </Icon>
        <Transition name="fade" mode="out-in">
          <div>
            <p></p>
            <p></p>
          </div>
        </Transition>
        <Icon size="16">
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
console.log("=>(left-message.vue:42) appLogo", appLogo);
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
console.log("=>(left-message.vue:43) siteUrl", siteUrl);


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