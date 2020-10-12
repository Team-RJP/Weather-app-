import { ICurrentWeather } from "../models/weather";

enum Month {
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
}

enum Day {
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
}

export function formatAdvancedTime(newDate: any) {
  const date = newDate.getDate();
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const hour = addZero(newDate.getHours());
  const minutes = addZero(newDate.getMinutes());
  const seconds = addZero(newDate.getSeconds());

  return `${year} ${Month[month]} ${date} ${hour}:${minutes}:${seconds}`
}

export function formatSimpleTime(newDate: any): string {
  const day = newDate.getDay();
  const date = newDate.getDate();
  const month = newDate.getMonth();
  const simpleDate: string = `${Day[day]}, ${date} ${Month[month]}`

  return simpleDate;
}

export const formatSunTimes = (weather: ICurrentWeather): { sunrise: string; sunset: string } => {
  const sunriseDate = new Date(weather.sunrise * 1000);
  const sunsetDate = new Date(weather.sunset * 1000);

  return {
    sunrise: addZero(sunriseDate.getHours()) + ':' + addZero(sunriseDate.getMinutes()),
    sunset: addZero(sunsetDate.getHours()) + ':' + addZero(sunsetDate.getMinutes())
  }
}

export const addZero = (time: number) => {
  return ('0' + time.toString()).slice(-2)
}

