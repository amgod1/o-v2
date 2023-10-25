import { normalizeDateNumber } from "./normalizeDateNumber"

export interface DateInfo {
  time: string
  date: string
}

export const getCurrentDateInfo = (): DateInfo => {
  const dateInfo = new Date()

  const time = [
    dateInfo.getHours(),
    dateInfo.getMinutes(),
    dateInfo.getSeconds(),
  ]
    .map((number) => normalizeDateNumber(number))
    .join(":")

  const date = [
    dateInfo.getDate(),
    dateInfo.getMonth() + 1,
    dateInfo.getFullYear(),
  ]
    .map((number) => normalizeDateNumber(number))
    .join(".")

  return { time, date }
}
