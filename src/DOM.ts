import { querySelector } from './functions';
import { getWeatherData } from './weather-data';

export const DOM = (() => {
  const form = querySelector('form'),
    appName = querySelector('#app-name') as HTMLParagraphElement,
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

  const displayContent = (action: 'show' | 'hide') => {
    if (action === 'show') {
      form?.classList.remove('active');
      weatherContent?.classList.add('active');
      extraInfo?.classList.add('active-grid');
    }
    if (action === 'hide') {
      loctionInput.value = '';
      form?.classList.add('active');
      weatherContent?.classList.remove('active');
      extraInfo?.classList.remove('active-grid');
    }
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
    displayContent('show');
  };

  const pageLoad = function () {
    displayContent('hide');

    form?.addEventListener('submit', (e) => {
      search(e);
    });

    appName.addEventListener('click', (e) => {
      displayContent('hide');
    });
  };

  return { pageLoad, renderData };
})();
