import { useMessage } from 'naive-ui'
import dayjs from "dayjs";

const message=useMessage()

/**
 * 获取当前时间
 */
export const getCurrentTime = () => {
  let time = new Date()
  let year = time.getFullYear()
  let month = time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1
  let day = time.getDay() < 10 ? '0' + time.getDate() : time.getDate()
  let hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
  let minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
  let second = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
  let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  let currentTime = {
    year,
    month,
    day,
    hour,
    minute,
    second,
    weekday: weekday[time.getDay()],
  };
  return currentTime
}

export function getTimeCapsule() {
  const now = dayjs()
  const dayText = {
    day: '今日',
    week: '本周',
    month: '本月',
    year: '本年'
  }

  const getDifference=(unit)=>{
    const start=now.startOf(unit)

    const end=now.endOf(unit)
    const total=end.diff(start,unit === 'day'?'hour':'day')+1
    let passed=now.diff(start,unit === 'day'?'hour':'day')
    if (unit === 'week'){
      passed=(passed+6)%7
    }

    const remaining=total-passed
    const percentage=(passed/total)*100

    return {
      name:dayText[unit],
      total:total,
      passed:passed,
      remaining:remaining,
      percentage:percentage.toFixed(2)
    }
  }

  return {
    day:getDifference('day'),
    week: getDifference('week'),
    month:getDifference('month'),
    year:getDifference('year')
  }
}

// 欢迎提示语
export const helloInit=()=>{
  const hour=newDate.getHours
  let helloText=''
  if (hour < 6) {
    helloText = "凌晨好";
  } else if (hour < 9) {
    helloText = "早上好";
  } else if (hour < 12) {
    helloText = "上午好";
  } else if (hour < 14) {
    helloText = "中午好";
  } else if (hour < 17) {
    helloText = "下午好";
  } else if (hour < 19) {
    helloText = "傍晚好";
  } else if (hour < 22) {
    helloText = "晚上好";
  } else {
    helloText = "夜深了";
  }
  message.warning(`<strong>${hello}</strong> 欢迎来到我的主页`)
}



