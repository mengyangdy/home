import {SetupStoreId} from "@/enum/store";
import {defineStore} from "pinia";
import {ref} from "vue";

export const useAppStore = defineStore(SetupStoreId.App, () => {
  const wallpaperLoadingStatus = ref<boolean>(false)
  const innerWidth = ref(null)
  const wallpaperType = ref('0')
  const siteDateShow = ref(false)
  const bgShow = ref(false)
  const openState = ref(false)
  const musicOpenState = ref(false) //音乐面板开启的状态
  const musicLoad = ref(false) //音乐是否加载完成


  function setOpenState(flag: boolean) {
    openState.value = flag
  }

  function setWallpaperLoadingStatus(flag: boolean) {
    wallpaperLoadingStatus.value = flag
  }


  return {
    wallpaperLoadingStatus,
    wallpaperType,
    setWallpaperLoadingStatus,
    bgShow,
    openState,
    setOpenState,
    musicOpenState,
    musicLoad
  }
})