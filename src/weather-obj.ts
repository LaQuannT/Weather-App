export class CurrentWeather {
  constructor(
    private _location: string,
    private _country: string,
    private _condition: string,
    private _tempC: number,
    private _feelsLikeTempC: number,
    private _humidity: number,
    private _icon: string
  ) {}
  formatLocation() {
    return `${this._location}, ${this._country}`;
  }
  weatherCondition() {
    return this._condition;
  }
  currentTemp(unit: 'celsius' | 'fahrenheit') {
    return unit === 'celsius' ? this._tempC : this._tempC * 1.8 + 32;
  }
  // create a function so the i dont break the DRY rule
  feelslikeTemp(unit: 'celsius' | 'fahrenheit') {
    return unit === 'celsius'
      ? this._feelsLikeTempC
      : this._feelsLikeTempC * 1.8 + 32;
  }
  currentHumidity() {
    return this._humidity;
  }
  weathericon() {
    return this._icon;
  }
}
