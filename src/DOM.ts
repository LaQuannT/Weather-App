import { querySelector } from './functions';
import { getWeatherData } from './weather-data';

export const DOM = (() => {
  const form = querySelector('form'),
    loctionInput = querySelector('#location-input') as HTMLInputElement,
    weatherContent = querySelector('.weather-content'),
    extraInfo = querySelector('.extra-info');

  const search = (e: Event) => {
    e.preventDefault();
    getWeatherData(loctionInput.value);
    displayContent();
  };

  const displayContent = () => {
    form?.classList.remove('active');
    weatherContent?.classList.add('active');
    extraInfo?.classList.add('active-grid');
  };

  const pageLoad = function () {
    form?.classList.add('active');

    form?.addEventListener('submit', search);
  };

  return { pageLoad };
})();
