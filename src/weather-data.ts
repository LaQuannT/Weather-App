import { dataHandler } from './index';

export const getWeatherData = async (location: string) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=c153ce963c644fcb99d73006232803&q=${location}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    console.log(data);
    dataHandler(data);
  } catch (error) {
    alert('Please enter a vaild location!');
  }
};
