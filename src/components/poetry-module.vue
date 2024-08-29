<template>
  <div class="cards w-full h-full p-20px animate-name-fade animate-duration-500" v-show="!appStore.musicOpenState" @mouseenter="musicShow=true" @mouseleave="musicShow=false" @click.stop>
    <!--音乐播放器-->
    <Transition name="el-fade-in-linear">
      <div class="w-full absolute top-0 left-0 flex-center bg-black/10 p-y-4px rounded-tl-8px rounded-tr-8px" v-show="musicShow && appStore.musicLoad" @click="appStore.musicLoad=true">
        <MusicMenu theme="filled" size="18" fill="#efefef" class="w-18px h-18px block mr-8px" />
        <span class="text-0.95rem">打开音乐播放器</span>
      </div>
    </Transition>
    <!--每日一言-->
    <Transition name="el-fade-in-linear" mode="out-in">
      <div :key="poertyData.text" class="h-full flex flex-col justify-space-evenly">
        <span class="text-1.1rem word-break-all overflow-hidden text-ellipsis line-clamp-3">{{poertyData.text}}</span>
        <span class="mt-10px font-bold self-end text-1.1rem">
          -「&nbsp;{{ poertyData.from }}&nbsp;」
        </span>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import {useAppStore} from "@/store/modules/app";
import {onMounted, reactive, ref} from 'vue'
import { MusicMenu } from "@icon-park/vue-next";
import {getPoetry} from "@/api";
import {useMessage} from "naive-ui";

const message=useMessage()

const appStore=useAppStore()

//音乐面板按钮是否显示
const musicShow=ref(false)

const poertyData=reactive({
  text:'这里应该显示一句话',
  from:'Dylan'
})

const getData=async ()=>{
  try {
    const res=await getPoetry()
  }catch{
    message.error('一言获取失败')
    poertyData.text='这里应该显示一句话'
    poertyData.from='Dylan'
  }
}

onMounted(()=>{
  getData()
})
</script>

<style scoped>

</style>