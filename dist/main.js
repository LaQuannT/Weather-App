/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataHandler": () => (/* binding */ dataHandler)
/* harmony export */ });
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ "./src/weather-data.ts");
/* harmony import */ var _weather_obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-obj */ "./src/weather-obj.ts");


const form = document.querySelector('form');
form === null || form === void 0 ? void 0 : form.classList.add('active');
const dataHandler = (data) => {
    let city = data.location.name;
    let country = data.location.country;
    let forecast = data.current.condition.text;
    let icon = data.current.condition.icon;
    let temp = data.current.temp_c;
    let feelsTemp = data.current.feelslike_c;
    let humidity = data.current.humidity;
    let weather = new _weather_obj__WEBPACK_IMPORTED_MODULE_1__.CurrentWeather(city, country, forecast, temp, feelsTemp, humidity, icon);
    console.log(weather);
};
(0,_weather_data__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)('manchester');


/***/ }),

/***/ "./src/weather-data.ts":
/*!*****************************!*\
  !*** ./src/weather-data.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const getWeatherData = (location) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`http://api.weatherapi.com/v1/current.json?key=c153ce963c644fcb99d73006232803&q=${location}`, { mode: 'cors' });
        const data = yield response.json();
        console.log(data);
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.dataHandler)(data);
    }
    catch (error) {
        alert('Please enter a vaild location!');
    }
});


/***/ }),

/***/ "./src/weather-obj.ts":
/*!****************************!*\
  !*** ./src/weather-obj.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentWeather": () => (/* binding */ CurrentWeather)
/* harmony export */ });
class CurrentWeather {
    constructor(_location, _country, _condition, _tempC, _feelsLikeTempC, _humidity, _icon) {
        this._location = _location;
        this._country = _country;
        this._condition = _condition;
        this._tempC = _tempC;
        this._feelsLikeTempC = _feelsLikeTempC;
        this._humidity = _humidity;
        this._icon = _icon;
    }
    formatLocation() {
        return `${this._location}, ${this._country}`;
    }
    weatherCondition() {
        return this._condition;
    }
    currentTemp(unit) {
        return unit === 'celsius' ? this._tempC : this._tempC * 1.8 + 32;
    }
    // create a function so the i dont break the DRY rule
    feelslikeTemp(unit) {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxDQUFDLElBQThCO1FBQzFDLE9BQU8sSUFBSSxLQUFLLFNBQVM7WUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlO1lBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUNELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztDQUNGOzs7Ozs7O1VDL0JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci1kYXRhLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXItb2JqLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFdlYXRoZXJEYXRhIH0gZnJvbSAnLi93ZWF0aGVyLWRhdGEnO1xuaW1wb3J0IHsgQ3VycmVudFdlYXRoZXIgfSBmcm9tICcuL3dlYXRoZXItb2JqJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmZvcm0/LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG5leHBvcnQgY29uc3QgZGF0YUhhbmRsZXIgPSAoZGF0YTogYW55KSA9PiB7XG4gIGxldCBjaXR5ID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xuICBsZXQgY291bnRyeSA9IGRhdGEubG9jYXRpb24uY291bnRyeTtcbiAgbGV0IGZvcmVjYXN0ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBsZXQgaWNvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgbGV0IHRlbXAgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xuICBsZXQgZmVlbHNUZW1wID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jO1xuICBsZXQgaHVtaWRpdHkgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHk7XG4gIGxldCB3ZWF0aGVyID0gbmV3IEN1cnJlbnRXZWF0aGVyKFxuICAgIGNpdHksXG4gICAgY291bnRyeSxcbiAgICBmb3JlY2FzdCxcbiAgICB0ZW1wLFxuICAgIGZlZWxzVGVtcCxcbiAgICBodW1pZGl0eSxcbiAgICBpY29uXG4gICk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xufTtcblxuZ2V0V2VhdGhlckRhdGEoJ21hbmNoZXN0ZXInKTtcbiIsImltcG9ydCB7IGRhdGFIYW5kbGVyIH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChsb2NhdGlvbjogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9YzE1M2NlOTYzYzY0NGZjYjk5ZDczMDA2MjMyODAzJnE9JHtsb2NhdGlvbn1gLFxuICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBkYXRhSGFuZGxlcihkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgdmFpbGQgbG9jYXRpb24hJyk7XG4gIH1cbn07XG4iLCJleHBvcnQgY2xhc3MgQ3VycmVudFdlYXRoZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9sb2NhdGlvbjogc3RyaW5nLFxuICAgIHByaXZhdGUgX2NvdW50cnk6IHN0cmluZyxcbiAgICBwcml2YXRlIF9jb25kaXRpb246IHN0cmluZyxcbiAgICBwcml2YXRlIF90ZW1wQzogbnVtYmVyLFxuICAgIHByaXZhdGUgX2ZlZWxzTGlrZVRlbXBDOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfaHVtaWRpdHk6IG51bWJlcixcbiAgICBwcml2YXRlIF9pY29uOiBzdHJpbmdcbiAgKSB7fVxuICBmb3JtYXRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fbG9jYXRpb259LCAke3RoaXMuX2NvdW50cnl9YDtcbiAgfVxuICB3ZWF0aGVyQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25kaXRpb247XG4gIH1cbiAgY3VycmVudFRlbXAodW5pdDogJ2NlbHNpdXMnIHwgJ2ZhaHJlbmhlaXQnKSB7XG4gICAgcmV0dXJuIHVuaXQgPT09ICdjZWxzaXVzJyA/IHRoaXMuX3RlbXBDIDogdGhpcy5fdGVtcEMgKiAxLjggKyAzMjtcbiAgfVxuICAvLyBjcmVhdGUgYSBmdW5jdGlvbiBzbyB0aGUgaSBkb250IGJyZWFrIHRoZSBEUlkgcnVsZVxuICBmZWVsc2xpa2VUZW1wKHVuaXQ6ICdjZWxzaXVzJyB8ICdmYWhyZW5oZWl0Jykge1xuICAgIHJldHVybiB1bml0ID09PSAnY2Vsc2l1cydcbiAgICAgID8gdGhpcy5fZmVlbHNMaWtlVGVtcENcbiAgICAgIDogdGhpcy5fZmVlbHNMaWtlVGVtcEMgKiAxLjggKyAzMjtcbiAgfVxuICBjdXJyZW50SHVtaWRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h1bWlkaXR5O1xuICB9XG4gIHdlYXRoZXJpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9