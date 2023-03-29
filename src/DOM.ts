import { querySelector } from './functions';
import { getWeatherData } from './weather-data';

export const DOM = (() => {
  const form = querySelector('form'),
    loctionInput = querySelector('#location-input') as HTMLInputElement,
    weatherContent = querySelector('.weather-content'),
    extraInfo = querySelector('.extra-info'),
    weatherIMG = querySelector('img') as HTMLImageElement,
    currentTempNum = querySelector('.temp > .num') as HTMLSpanElement,
    weatherConditionTxt = querySelector(
      '.weather-condition'
    ) as HTMLParagraphElement,
    locationTxt = querySelector('.location-txt') as HTMLSpanElement,
    feelsTempNum = querySelector('.feels-like-temp > .num') as HTMLSpanElement,
    humidityNum = querySelector('.humidity > .num') as HTMLSpanElement;

  const search = (e: Event) => {
    e.preventDefault();
    getWeatherData(loctionInput.value);
  };

  const displayContent = () => {
    form?.classList.remove('active');
    weatherContent?.classList.add('active');
    extraInfo?.classList.add('active-grid');
  };

  const renderData = (
    temp: number,
    condition: string,
    location: string,
    feelsLikeTemp: number,
    humidity: number,
    icon: string
  ) => {
    currentTempNum.textContent = temp.toString();
    weatherConditionTxt.textContent = condition;
    locationTxt.textContent = location;
    feelsTempNum.textContent = feelsLikeTemp.toString();
    humidityNum.textContent = humidity.toString();
    weatherIMG.src = icon;
    displayContent();
  };

  const pageLoad = function () {
    form?.classList.add('active');

    form?.addEventListener('submit', (e) => {
      search(e);
    });
  };

  return { pageLoad, renderData };
})();
