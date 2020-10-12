import React from "react";
import { ICurrentWeather } from "../../../models/weather";
import { getIconOfWeatherStatus } from "../../../helpers/getWeatherIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TempDisplay.scss";

interface ITempDisplay {
  currentWeather: ICurrentWeather
}

export const TempDisplay = ({ currentWeather }: ITempDisplay) => {
  const mainWeather: string = currentWeather?.weather?.[0].main;

  return (
    <div className="left-panel">
      <div className="temperature">
        <div className="temperature-icon">
          {mainWeather &&
          <FontAwesomeIcon icon={getIconOfWeatherStatus(mainWeather)} size="6x" />}
        </div>
        <div className="temperature-info">
          <h2>{currentWeather?.displayTemp}</h2>
          <h3>{mainWeather}</h3>
        </div>
      </div>
    </div>
  )
}
