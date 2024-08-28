<template>
  <NMessageProvider>
    <Background/>
    <Transition name="fade" mode="out-in">
      <main id="main" v-if="appStore.wallpaperLoadingStatus"
            class="absolute top-o left-0 w-full h-full scale-120 transition-transform duration-300 animate-name-fade-blur-main-in duration-650 timing-func-cubic-bezier(0.25,0.46,0.45,0.94) animate-fill-mode-forwards animate-delay-500">
        <div class="w-full h-screen m-0 mx-auto p-0 pl-[0.5vw] pr-[0.5vw]">
          <section v-show="!appStore.openState">
            <MainLeft/>
          </section>
          <section v-show="appStore.openState" @click="appStore.setOpenState(false)">

          </section>
        </div>
        <transition name="fade" mode="out-in">
          Footer
        </transition>
      </main>
    </Transition>
  </NMessageProvider>
</template>

<script setup lang="ts">
import {useAppStore} from "@/store/modules/app";

const appStore = useAppStore()
</script>


<style scoped>

</style>
