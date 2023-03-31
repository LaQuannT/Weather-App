/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.ts":
/*!********************!*\
  !*** ./src/DOM.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM": () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.ts");
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-data */ "./src/weather-data.ts");


const DOM = (() => {
    const form = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('form'), appName = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#app-name'), loctionInput = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#location-input'), weatherContent = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.weather-content'), extraInfo = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.extra-info'), weatherIMG = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('img'), currentTempNum = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.temp > .num'), weatherConditionTxt = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.weather-condition'), locationTxt = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.location-txt'), feelsTempNum = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.feels-like-temp > .num'), humidityNum = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.humidity > .num');
    const search = (e) => {
        e.preventDefault();
        (0,_weather_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(loctionInput.value);
    };
    const displayContent = (action) => {
        if (action === 'show') {
            form === null || form === void 0 ? void 0 : form.classList.remove('active');
            weatherContent === null || weatherContent === void 0 ? void 0 : weatherContent.classList.add('active');
            extraInfo === null || extraInfo === void 0 ? void 0 : extraInfo.classList.add('active-grid');
        }
        if (action === 'hide') {
            loctionInput.value = '';
            form === null || form === void 0 ? void 0 : form.classList.add('active');
            weatherContent === null || weatherContent === void 0 ? void 0 : weatherContent.classList.remove('active');
            extraInfo === null || extraInfo === void 0 ? void 0 : extraInfo.classList.remove('active-grid');
        }
    };
    const renderData = (temp, condition, location, feelsLikeTemp, humidity, icon) => {
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
        form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
            search(e);
        });
        appName.addEventListener('click', (e) => {
            displayContent('hide');
        });
    };
    return { pageLoad, renderData };
})();


/***/ }),

/***/ "./src/functions.ts":
/*!**************************!*\
  !*** ./src/functions.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataHandler": () => (/* binding */ dataHandler),
/* harmony export */   "querySelector": () => (/* binding */ querySelector)
/* harmony export */ });
/* harmony import */ var _weather_obj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-obj */ "./src/weather-obj.ts");

const dataHandler = (data) => {
    let city = data.location.name, country = data.location.country, forecast = data.current.condition.text, icon = data.current.condition.icon, temp = data.current.temp_c, feelsTemp = data.current.feelslike_c, humidity = data.current.humidity;
    let weather = new _weather_obj__WEBPACK_IMPORTED_MODULE_0__.CurrentWeather(city, country, forecast, temp, feelsTemp, humidity, icon);
    return weather;
};
const querySelector = (selector, parent = document) => {
    return parent.querySelector(selector);
};


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
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.ts");
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
        let buffer = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.dataHandler)(data);
        _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.renderData(buffer.currentTemp(), buffer.weatherCondition(), buffer.formatLocation(), buffer.feelslikeTemp(), buffer.currentHumidity(), buffer.weathericon());
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.ts");

_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.pageLoad();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsUUFBUSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUNELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0Y7Ozs7Ozs7VUM1QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040QjtBQUM1Qiw4Q0FBWSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00udHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXItZGF0YS50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLW9iai50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXJ5U2VsZWN0b3IgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gJy4vd2VhdGhlci1kYXRhJztcblxuZXhwb3J0IGNvbnN0IERPTSA9ICgoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBxdWVyeVNlbGVjdG9yKCdmb3JtJyksXG4gICAgYXBwTmFtZSA9IHF1ZXJ5U2VsZWN0b3IoJyNhcHAtbmFtZScpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50LFxuICAgIGxvY3Rpb25JbnB1dCA9IHF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbi1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgd2VhdGhlckNvbnRlbnQgPSBxdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jb250ZW50JyksXG4gICAgZXh0cmFJbmZvID0gcXVlcnlTZWxlY3RvcignLmV4dHJhLWluZm8nKSxcbiAgICB3ZWF0aGVySU1HID0gcXVlcnlTZWxlY3RvcignaW1nJykgYXMgSFRNTEltYWdlRWxlbWVudCxcbiAgICBjdXJyZW50VGVtcE51bSA9IHF1ZXJ5U2VsZWN0b3IoJy50ZW1wID4gLm51bScpIGFzIEhUTUxTcGFuRWxlbWVudCxcbiAgICB3ZWF0aGVyQ29uZGl0aW9uVHh0ID0gcXVlcnlTZWxlY3RvcihcbiAgICAgICcud2VhdGhlci1jb25kaXRpb24nXG4gICAgKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudCxcbiAgICBsb2NhdGlvblR4dCA9IHF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi10eHQnKSBhcyBIVE1MU3BhbkVsZW1lbnQsXG4gICAgZmVlbHNUZW1wTnVtID0gcXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UtdGVtcCA+IC5udW0nKSBhcyBIVE1MU3BhbkVsZW1lbnQsXG4gICAgaHVtaWRpdHlOdW0gPSBxdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHkgPiAubnVtJykgYXMgSFRNTFNwYW5FbGVtZW50O1xuXG4gIGNvbnN0IHNlYXJjaCA9IChlOiBFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBnZXRXZWF0aGVyRGF0YShsb2N0aW9uSW5wdXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlDb250ZW50ID0gKGFjdGlvbjogJ3Nob3cnIHwgJ2hpZGUnKSA9PiB7XG4gICAgaWYgKGFjdGlvbiA9PT0gJ3Nob3cnKSB7XG4gICAgICBmb3JtPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIHdlYXRoZXJDb250ZW50Py5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGV4dHJhSW5mbz8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWdyaWQnKTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbiA9PT0gJ2hpZGUnKSB7XG4gICAgICBsb2N0aW9uSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGZvcm0/LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgd2VhdGhlckNvbnRlbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgZXh0cmFJbmZvPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtZ3JpZCcpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJEYXRhID0gKFxuICAgIHRlbXA6IG51bWJlcixcbiAgICBjb25kaXRpb246IHN0cmluZyxcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgIGZlZWxzTGlrZVRlbXA6IG51bWJlcixcbiAgICBodW1pZGl0eTogbnVtYmVyLFxuICAgIGljb246IHN0cmluZ1xuICApID0+IHtcbiAgICBjdXJyZW50VGVtcE51bS50ZXh0Q29udGVudCA9IHRlbXAudG9TdHJpbmcoKTtcbiAgICB3ZWF0aGVyQ29uZGl0aW9uVHh0LnRleHRDb250ZW50ID0gY29uZGl0aW9uO1xuICAgIGxvY2F0aW9uVHh0LnRleHRDb250ZW50ID0gbG9jYXRpb247XG4gICAgZmVlbHNUZW1wTnVtLnRleHRDb250ZW50ID0gZmVlbHNMaWtlVGVtcC50b1N0cmluZygpO1xuICAgIGh1bWlkaXR5TnVtLnRleHRDb250ZW50ID0gaHVtaWRpdHkudG9TdHJpbmcoKTtcbiAgICB3ZWF0aGVySU1HLnNyYyA9IGljb247XG4gICAgZGlzcGxheUNvbnRlbnQoJ3Nob3cnKTtcbiAgfTtcblxuICBjb25zdCBwYWdlTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwbGF5Q29udGVudCgnaGlkZScpO1xuXG4gICAgZm9ybT8uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgIHNlYXJjaChlKTtcbiAgICB9KTtcblxuICAgIGFwcE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZGlzcGxheUNvbnRlbnQoJ2hpZGUnKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBwYWdlTG9hZCwgcmVuZGVyRGF0YSB9O1xufSkoKTtcbiIsImltcG9ydCB7IEN1cnJlbnRXZWF0aGVyIH0gZnJvbSAnLi93ZWF0aGVyLW9iaic7XG5cbmV4cG9ydCBjb25zdCBkYXRhSGFuZGxlciA9IChkYXRhOiBhbnkpID0+IHtcbiAgbGV0IGNpdHkgPSBkYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgY291bnRyeSA9IGRhdGEubG9jYXRpb24uY291bnRyeSxcbiAgICBmb3JlY2FzdCA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICBpY29uID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxuICAgIHRlbXAgPSBkYXRhLmN1cnJlbnQudGVtcF9jLFxuICAgIGZlZWxzVGVtcCA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICBodW1pZGl0eSA9IGRhdGEuY3VycmVudC5odW1pZGl0eTtcbiAgbGV0IHdlYXRoZXIgPSBuZXcgQ3VycmVudFdlYXRoZXIoXG4gICAgY2l0eSxcbiAgICBjb3VudHJ5LFxuICAgIGZvcmVjYXN0LFxuICAgIHRlbXAsXG4gICAgZmVlbHNUZW1wLFxuICAgIGh1bWlkaXR5LFxuICAgIGljb25cbiAgKTtcbiAgcmV0dXJuIHdlYXRoZXI7XG59O1xuXG5leHBvcnQgY29uc3QgcXVlcnlTZWxlY3RvciA9IChzZWxlY3Rvcjogc3RyaW5nLCBwYXJlbnQgPSBkb2N1bWVudCkgPT4ge1xuICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufTtcbiIsImltcG9ydCB7IERPTSB9IGZyb20gJy4vRE9NJztcbmltcG9ydCB7IGRhdGFIYW5kbGVyIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyAobG9jYXRpb246IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PWMxNTNjZTk2M2M2NDRmY2I5OWQ3MzAwNjIzMjgwMyZxPSR7bG9jYXRpb259YCxcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgbGV0IGJ1ZmZlciA9IGRhdGFIYW5kbGVyKGRhdGEpO1xuICAgIERPTS5yZW5kZXJEYXRhKFxuICAgICAgYnVmZmVyLmN1cnJlbnRUZW1wKCksXG4gICAgICBidWZmZXIud2VhdGhlckNvbmRpdGlvbigpLFxuICAgICAgYnVmZmVyLmZvcm1hdExvY2F0aW9uKCksXG4gICAgICBidWZmZXIuZmVlbHNsaWtlVGVtcCgpLFxuICAgICAgYnVmZmVyLmN1cnJlbnRIdW1pZGl0eSgpLFxuICAgICAgYnVmZmVyLndlYXRoZXJpY29uKClcbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWlsZCBsb2NhdGlvbiEnKTtcbiAgfVxufTtcbiIsImV4cG9ydCBjbGFzcyBDdXJyZW50V2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2xvY2F0aW9uOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfY291bnRyeTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2NvbmRpdGlvbjogc3RyaW5nLFxuICAgIHByaXZhdGUgX3RlbXBDOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfZmVlbHNMaWtlVGVtcEM6IG51bWJlcixcbiAgICBwcml2YXRlIF9odW1pZGl0eTogbnVtYmVyLFxuICAgIHByaXZhdGUgX2ljb246IHN0cmluZ1xuICApIHt9XG4gIGZvcm1hdExvY2F0aW9uKCkge1xuICAgIHJldHVybiBgJHt0aGlzLl9sb2NhdGlvbn0sICR7dGhpcy5fY291bnRyeX1gO1xuICB9XG4gIHdlYXRoZXJDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmRpdGlvbjtcbiAgfVxuICBjdXJyZW50VGVtcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcEM7XG4gIH1cbiAgZmVlbHNsaWtlVGVtcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmVlbHNMaWtlVGVtcEM7XG4gIH1cbiAgY3VycmVudEh1bWlkaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9odW1pZGl0eTtcbiAgfVxuICB3ZWF0aGVyaWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbi5zcGxpdCgnLycpLnNwbGljZSgzKS5qb2luKCcvJyk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9ET00nO1xuRE9NLnBhZ2VMb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=