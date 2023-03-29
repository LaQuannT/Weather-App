import { DOM } from './DOM';
import { dataHandler } from './functions';

export const getWeatherData = async (location: string) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=c153ce963c644fcb99d73006232803&q=${location}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    let buffer = dataHandler(data);
    console.log(data);

    DOM.renderData(
      buffer.currentTemp('celsius'),
      buffer.weatherCondition(),
      buffer.formatLocation(),
      buffer.feelslikeTemp('celsius'),
      buffer.currentHumidity(),
      buffer.weathericon()
    );
  } catch (error) {
    alert('Please enter a vaild location!');
  }
};
