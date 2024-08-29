<template>
  <div class="h-165px flex row items-center justify-between">
    <n-grid x-gap="12" :cols="2">
      <n-gi>
        <div class="w-full h-full">
          <PoetryModule/>
          <!--<MusicModule />-->
        </div>
      </n-gi>
      <n-gi>
        <div class="cards p-20px flex flex-col items-center justify-between animate-name-fade animate-duration-500">
          <div v-if="currentTime" class="text-1.1rem text-center">
            <div class="text-ellipsis overflow-x-hidden whitespace-nowrap">
              <span>{{ currentTime.year }}&nbsp;年&nbsp;</span>
              <span>{{ currentTime.month }}&nbsp;月&nbsp;</span>
              <span>{{ currentTime.day }}&nbsp;日&nbsp;</span>
              <span>{{ currentTime.weekday }}</span>
            </div>
            <div class="pt-10px text-3.25rem tracking-2px">
              <span> {{ currentTime.hour }}:{{ currentTime.minute }}:{{ currentTime.second }}</span>
            </div>
            <div class="text-center w-full text-ellipsis overflow-x-hidden whitespace-nowrap">
              <span>{{ weatherData.adCode.city }}&nbsp;</span>
              <span>{{ weatherData.weather.weather }}&nbsp;</span>
              <span>{{ weatherData.weather.temperature }}℃</span>
              <span>
      &nbsp;{{
                  weatherData.weather.winddirection?.endsWith("风")
                      ? weatherData.weather.winddirection
                      : weatherData.weather.winddirection + "风"
                }}&nbsp;
    </span>
              <span>{{ weatherData.weather.windpower }}&nbsp;级</span>
            </div>
          </div>
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import {useAppStore} from "@/store/modules/app";
import {onBeforeMount, onMounted, ref,reactive} from "vue";
import {getCurrentTime} from "@/utils/time";
import {getAdCode, getWeather, getOtherWeather} from '@/api'

const appStore = useAppStore()

// 高德开发者 Key
const mainKey = import.meta.env.VITE_WEATHER_KEY;

const currentTime = ref(null)
const timeInterval = ref(null)
const playerHasId = import.meta.env.VITE_SONG_ID

// 更新时间
const updateTimeData = () => {
  currentTime.value = getCurrentTime()
}
//
onMounted(() => {
  updateTimeData()
  timeInterval.value = setInterval(updateTimeData, 1000)
})
onBeforeMount(() => {
  clearInterval(timeInterval.value)
})

// 天气数据
const weatherData = reactive({
  adCode: {
    city: null, // 城市
    adcode: null, // 城市编码
  },
  weather: {
    weather: null, // 天气现象
    temperature: null, // 实时气温
    winddirection: null, // 风向描述
    windpower: null, // 风力级别
  },
});

/**
 * 取出平均值
 */
const getAverageData = async (min,max) => {
  try {
    const average = (Number(min) + Number(max)) / 2
    return Math.round(average)
  } catch (e) {
    return 'NaN'
  }
}

const getWeatherData = async () => {
  try {
    if (!mainKey) {
      const result = await getOtherWeather()
      const data = result.result
      weatherData.adCode = {
        city: data.city.City || "未知地区",
      }
      weatherData.weather = {
        weather: data.condition.day_weather,
        temperature: getAverageData(data.condition.min_degree, data.condition.max_degree),
        winddirection: data.condition.day_wind_direction,
        windpower: data.condition.day_wind_power,
      };
    } else {
      const adCode = await getAdCode(mainKey);
      if (adCode.infocode !== "10000") {
        throw "地区查询失败";
      }
      weatherData.adCode = {
        city: adCode.city,
        adcode: adCode.adcode,
      };

      // 获取天气信息
      const result = await getWeather(mainKey, weatherData.adCode.adcode);
      weatherData.weather = {
        weather: result.lives[0].weather,
        temperature: result.lives[0].temperature,
        winddirection: result.lives[0].winddirection,
        windpower: result.lives[0].windpower,
      };
    }
  } catch (e) {

  }
}

onMounted(() => {
  getWeatherData()
})
</script>

<style scoped>

</style>