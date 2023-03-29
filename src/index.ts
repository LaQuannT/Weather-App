import { getWeatherData } from './weather-data';
import { CurrentWeather } from './weather-obj';

const form = document.querySelector('form');
form?.classList.add('active');

export const dataHandler = (data: any) => {
  let city = data.location.name;
  let country = data.location.country;
  let forecast = data.current.condition.text;
  let icon = data.current.condition.icon;
  let temp = data.current.temp_c;
  let feelsTemp = data.current.feelslike_c;
  let humidity = data.current.humidity;
  let weather = new CurrentWeather(
    city,
    country,
    forecast,
    temp,
    feelsTemp,
    humidity,
    icon
  );
  console.log(weather);
};

getWeatherData('manchester');
