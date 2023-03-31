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
  currentTemp() {
    return this._tempC;
  }
  feelslikeTemp() {
    return this._feelsLikeTempC;
  }
  currentHumidity() {
    return this._humidity;
  }
  weathericon() {
    return this._icon.split('/').splice(3).join('/');
  }
}
