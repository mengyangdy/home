
/**
 * 获取每日一言数据
 */
export const getPoetry=async ()=>{
  const res=await fetch("https://v1.hitokoto.cn")
  return await res.json()
}

/**
 * 获取高德地理位置信息
 * @param key
 */
export async function getAdCode(key:string){
  const res=await fetch(`https://restapi.amap.com/v3/ip?key=${key}`)
  return await res.json()
}

/**
 * 根据高德地理位置获取天气信息
 * @param key
 * @param city
 */
export const getWeather=async (key,city)=>{
  const res = await fetch(
    `https://restapi.amap.com/v3/weather/weatherInfo?key=${key}&city=${city}`,
  );
  return await res.json();
}

/**
 * 获取教书先生天气API
 */
export const getOtherWeather=async ()=>{
  const res = await fetch("https://api.oioweb.cn/api/weather/GetWeather");
  return await res.json();s
}