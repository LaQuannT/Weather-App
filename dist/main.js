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
    const form = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('form'), loctionInput = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#location-input'), weatherContent = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.weather-content'), extraInfo = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.extra-info'), weatherIMG = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('img'), currentTempNum = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.temp > .num'), weatherConditionTxt = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.weather-condition'), locationTxt = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.location-txt'), feelsTempNum = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.feels-like-temp > .num'), humidityNum = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.humidity > .num');
    const search = (e) => {
        e.preventDefault();
        (0,_weather_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(loctionInput.value);
    };
    const displayContent = () => {
        form === null || form === void 0 ? void 0 : form.classList.remove('active');
        weatherContent === null || weatherContent === void 0 ? void 0 : weatherContent.classList.add('active');
        extraInfo === null || extraInfo === void 0 ? void 0 : extraInfo.classList.add('active-grid');
    };
    const renderData = (temp, condition, location, feelsLikeTemp, humidity, icon) => {
        currentTempNum.textContent = temp.toString();
        weatherConditionTxt.textContent = condition;
        locationTxt.textContent = location;
        feelsTempNum.textContent = feelsLikeTemp.toString();
        humidityNum.textContent = humidity.toString();
        weatherIMG.src = icon;
        displayContent();
    };
    const pageLoad = function () {
        form === null || form === void 0 ? void 0 : form.classList.add('active');
        form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
            search(e);
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
        console.log(data);
        _DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.renderData(buffer.currentTemp('celsius'), buffer.weatherCondition(), buffer.formatLocation(), buffer.feelslikeTemp('celsius'), buffer.currentHumidity(), buffer.weathericon());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWU7UUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztDQUNGOzs7Ozs7O1VDL0JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONEI7QUFDNUIsOENBQVksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLWRhdGEudHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci1vYmoudHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeVNlbGVjdG9yIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGEgfSBmcm9tICcuL3dlYXRoZXItZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBET00gPSAoKCkgPT4ge1xuICBjb25zdCBmb3JtID0gcXVlcnlTZWxlY3RvcignZm9ybScpLFxuICAgIGxvY3Rpb25JbnB1dCA9IHF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbi1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgd2VhdGhlckNvbnRlbnQgPSBxdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jb250ZW50JyksXG4gICAgZXh0cmFJbmZvID0gcXVlcnlTZWxlY3RvcignLmV4dHJhLWluZm8nKSxcbiAgICB3ZWF0aGVySU1HID0gcXVlcnlTZWxlY3RvcignaW1nJykgYXMgSFRNTEltYWdlRWxlbWVudCxcbiAgICBjdXJyZW50VGVtcE51bSA9IHF1ZXJ5U2VsZWN0b3IoJy50ZW1wID4gLm51bScpIGFzIEhUTUxTcGFuRWxlbWVudCxcbiAgICB3ZWF0aGVyQ29uZGl0aW9uVHh0ID0gcXVlcnlTZWxlY3RvcihcbiAgICAgICcud2VhdGhlci1jb25kaXRpb24nXG4gICAgKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudCxcbiAgICBsb2NhdGlvblR4dCA9IHF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi10eHQnKSBhcyBIVE1MU3BhbkVsZW1lbnQsXG4gICAgZmVlbHNUZW1wTnVtID0gcXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UtdGVtcCA+IC5udW0nKSBhcyBIVE1MU3BhbkVsZW1lbnQsXG4gICAgaHVtaWRpdHlOdW0gPSBxdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHkgPiAubnVtJykgYXMgSFRNTFNwYW5FbGVtZW50O1xuXG4gIGNvbnN0IHNlYXJjaCA9IChlOiBFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBnZXRXZWF0aGVyRGF0YShsb2N0aW9uSW5wdXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlDb250ZW50ID0gKCkgPT4ge1xuICAgIGZvcm0/LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHdlYXRoZXJDb250ZW50Py5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBleHRyYUluZm8/LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1ncmlkJyk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyRGF0YSA9IChcbiAgICB0ZW1wOiBudW1iZXIsXG4gICAgY29uZGl0aW9uOiBzdHJpbmcsXG4gICAgbG9jYXRpb246IHN0cmluZyxcbiAgICBmZWVsc0xpa2VUZW1wOiBudW1iZXIsXG4gICAgaHVtaWRpdHk6IG51bWJlcixcbiAgICBpY29uOiBzdHJpbmdcbiAgKSA9PiB7XG4gICAgY3VycmVudFRlbXBOdW0udGV4dENvbnRlbnQgPSB0ZW1wLnRvU3RyaW5nKCk7XG4gICAgd2VhdGhlckNvbmRpdGlvblR4dC50ZXh0Q29udGVudCA9IGNvbmRpdGlvbjtcbiAgICBsb2NhdGlvblR4dC50ZXh0Q29udGVudCA9IGxvY2F0aW9uO1xuICAgIGZlZWxzVGVtcE51bS50ZXh0Q29udGVudCA9IGZlZWxzTGlrZVRlbXAudG9TdHJpbmcoKTtcbiAgICBodW1pZGl0eU51bS50ZXh0Q29udGVudCA9IGh1bWlkaXR5LnRvU3RyaW5nKCk7XG4gICAgd2VhdGhlcklNRy5zcmMgPSBpY29uO1xuICAgIGRpc3BsYXlDb250ZW50KCk7XG4gIH07XG5cbiAgY29uc3QgcGFnZUxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9ybT8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICBmb3JtPy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgc2VhcmNoKGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IHBhZ2VMb2FkLCByZW5kZXJEYXRhIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgQ3VycmVudFdlYXRoZXIgfSBmcm9tICcuL3dlYXRoZXItb2JqJztcblxuZXhwb3J0IGNvbnN0IGRhdGFIYW5kbGVyID0gKGRhdGE6IGFueSkgPT4ge1xuICBsZXQgY2l0eSA9IGRhdGEubG9jYXRpb24ubmFtZSxcbiAgICBjb3VudHJ5ID0gZGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgIGZvcmVjYXN0ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgIGljb24gPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgdGVtcCA9IGRhdGEuY3VycmVudC50ZW1wX2MsXG4gICAgZmVlbHNUZW1wID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgIGh1bWlkaXR5ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xuICBsZXQgd2VhdGhlciA9IG5ldyBDdXJyZW50V2VhdGhlcihcbiAgICBjaXR5LFxuICAgIGNvdW50cnksXG4gICAgZm9yZWNhc3QsXG4gICAgdGVtcCxcbiAgICBmZWVsc1RlbXAsXG4gICAgaHVtaWRpdHksXG4gICAgaWNvblxuICApO1xuICByZXR1cm4gd2VhdGhlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBxdWVyeVNlbGVjdG9yID0gKHNlbGVjdG9yOiBzdHJpbmcsIHBhcmVudCA9IGRvY3VtZW50KSA9PiB7XG4gIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59O1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9ET00nO1xuaW1wb3J0IHsgZGF0YUhhbmRsZXIgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChsb2NhdGlvbjogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9YzE1M2NlOTYzYzY0NGZjYjk5ZDczMDA2MjMyODAzJnE9JHtsb2NhdGlvbn1gLFxuICAgICAgeyBtb2RlOiAnY29ycycgfVxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBsZXQgYnVmZmVyID0gZGF0YUhhbmRsZXIoZGF0YSk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICBET00ucmVuZGVyRGF0YShcbiAgICAgIGJ1ZmZlci5jdXJyZW50VGVtcCgnY2Vsc2l1cycpLFxuICAgICAgYnVmZmVyLndlYXRoZXJDb25kaXRpb24oKSxcbiAgICAgIGJ1ZmZlci5mb3JtYXRMb2NhdGlvbigpLFxuICAgICAgYnVmZmVyLmZlZWxzbGlrZVRlbXAoJ2NlbHNpdXMnKSxcbiAgICAgIGJ1ZmZlci5jdXJyZW50SHVtaWRpdHkoKSxcbiAgICAgIGJ1ZmZlci53ZWF0aGVyaWNvbigpXG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgdmFpbGQgbG9jYXRpb24hJyk7XG4gIH1cbn07XG4iLCJleHBvcnQgY2xhc3MgQ3VycmVudFdlYXRoZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9sb2NhdGlvbjogc3RyaW5nLFxuICAgIHByaXZhdGUgX2NvdW50cnk6IHN0cmluZyxcbiAgICBwcml2YXRlIF9jb25kaXRpb246IHN0cmluZyxcbiAgICBwcml2YXRlIF90ZW1wQzogbnVtYmVyLFxuICAgIHByaXZhdGUgX2ZlZWxzTGlrZVRlbXBDOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfaHVtaWRpdHk6IG51bWJlcixcbiAgICBwcml2YXRlIF9pY29uOiBzdHJpbmdcbiAgKSB7fVxuICBmb3JtYXRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fbG9jYXRpb259LCAke3RoaXMuX2NvdW50cnl9YDtcbiAgfVxuICB3ZWF0aGVyQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25kaXRpb247XG4gIH1cbiAgY3VycmVudFRlbXAodW5pdDogJ2NlbHNpdXMnIHwgJ2ZhaHJlbmhlaXQnKSB7XG4gICAgcmV0dXJuIHVuaXQgPT09ICdjZWxzaXVzJyA/IHRoaXMuX3RlbXBDIDogdGhpcy5fdGVtcEMgKiAxLjggKyAzMjtcbiAgfVxuICAvLyBjcmVhdGUgYSBmdW5jdGlvbiBzbyB0aGUgaSBkb250IGJyZWFrIHRoZSBEUlkgcnVsZVxuICBmZWVsc2xpa2VUZW1wKHVuaXQ6ICdjZWxzaXVzJyB8ICdmYWhyZW5oZWl0Jykge1xuICAgIHJldHVybiB1bml0ID09PSAnY2Vsc2l1cydcbiAgICAgID8gdGhpcy5fZmVlbHNMaWtlVGVtcENcbiAgICAgIDogdGhpcy5fZmVlbHNMaWtlVGVtcEMgKiAxLjggKyAzMjtcbiAgfVxuICBjdXJyZW50SHVtaWRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h1bWlkaXR5O1xuICB9XG4gIHdlYXRoZXJpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IERPTSB9IGZyb20gJy4vRE9NJztcbkRPTS5wYWdlTG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9