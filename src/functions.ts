import { CurrentWeather } from './weather-obj';

export const dataHandler = (data: any) => {
  let city = data.location.name,
    country = data.location.country,
    forecast = data.current.condition.text,
    icon = data.current.condition.icon,
    temp = data.current.temp_c,
    feelsTemp = data.current.feelslike_c,
    humidity = data.current.humidity;
  let weather = new CurrentWeather(
    city,
    country,
    forecast,
    temp,
    feelsTemp,
    humidity,
    icon
  );
  return weather;
};

export const querySelector = (selector: string, parent = document) => {
  return parent.querySelector(selector);
};
