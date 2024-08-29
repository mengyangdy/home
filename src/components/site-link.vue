<template>
  <div v-if="siteLinkList[0]" class="">
    <div class="m-x-0.25rem mt-2rem mb-1rem text-1.1rem flex items-center animate-name-fade animate-duration-500">
      <Icon size="20">
        <Link/>
      </Icon>
      <span class="ml-8px text-1.15rem drop-shadow-md">网站列表</span>
    </div>
    <Swiper v-if="siteLinkList[0]" :modules="[Pagination,Mousewheel]" :slides-per-view="1" :space-between="40"
            :pagination="{
        el: '.swiper-pagination',
        clickable: true,
        bulletElement: 'div',
      }" :mousewheel="true">
      <SwiperSlide v-for="site in siteLinkList" :key="site">
        <n-grid x-gap="12" :cols="3" class="h-220px">
          <n-gi v-for="(item,index) in site" :key="item" >
            <div class="w-full h-100px flex-center flex-row p-x-10px animation-fade cards">
              <Icon>
                <component :is="siteIcon[item.icon]"/>
              </Icon>
              <span class="text-1.1rem ml-8px">{{item.name}}</span>
            </div>
          </n-gi>
        </n-grid>
      </SwiperSlide>
      <div class="swiper-pagination"/>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import {Icon} from "@vicons/utils";
// 可前往 https://www.xicons.org 自行挑选并在此处引入
import {Link, Blog, CompactDisc, Cloud, Compass, Book, Fire, LaptopCode} from "@vicons/fa"; // 注意使用正确的类别
import {useAppStore} from "@/store/modules/app";

import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination, Mousewheel} from "swiper/modules";
import siteLinks from '@/assets/site-links.json'
import {computed} from "vue";

const appStore = useAppStore()

const siteLinkList = computed(() => {
  const result = []
  for (let i = 0; i < siteLinks.length; i+= 6) {
    const arr = siteLinks.slice(i, i + 6)
    result.push(arr)
  }
  return result
})


// 网站链接图标
const siteIcon = {
  Blog,
  Cloud,
  CompactDisc,
  Compass,
  Book,
  Fire,
  LaptopCode,
};

</script>

<style scoped>

</style>