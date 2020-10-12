import React from "react"
import { formatSunTimes } from "../../../helpers";
import { ICurrentWeather } from "../../../models/weather";
import "./RightPanel.scss";

interface IRightPanel {
  currentWeather: ICurrentWeather;
}

export const Pillbox = ({ text }: { text: string }) => {
  return (
    <div className="pillbox">
      {text}
    </div>
  )
}

export const RightPanel = ({ currentWeather }: IRightPanel) => {
  const { sunrise, sunset } = formatSunTimes(currentWeather);

  return (
    <div className="right-panel">
      <div className="group">
        <Pillbox text="Wind"/> {currentWeather.wind_speed} mph
      </div>
      <div className="group">
        <Pillbox text="Humidity"/> {currentWeather.humidity}%
      </div>
      <div className="group">
        <Pillbox text="Sunrise"/> {sunrise}
      </div>
      <div className="group">
        <Pillbox text="Sunset"/> {sunset}
      </div>
    </div>
  )
}
