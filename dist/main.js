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
    const form = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('form'), loctionInput = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#location-input'), weatherContent = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.weather-content'), extraInfo = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.extra-info');
    const search = (e) => {
        e.preventDefault();
        (0,_weather_data__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(loctionInput.value);
        displayContent();
    };
    const displayContent = () => {
        form === null || form === void 0 ? void 0 : form.classList.remove('active');
        weatherContent === null || weatherContent === void 0 ? void 0 : weatherContent.classList.add('active');
        extraInfo === null || extraInfo === void 0 ? void 0 : extraInfo.classList.add('active-grid');
    };
    const pageLoad = function () {
        form === null || form === void 0 ? void 0 : form.classList.add('active');
        form === null || form === void 0 ? void 0 : form.addEventListener('submit', search);
    };
    return { pageLoad };
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
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.ts");
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
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.dataHandler)(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0lBQ0QsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0NBQ0Y7Ozs7Ozs7VUMvQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040QjtBQUM1Qiw4Q0FBWSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00udHMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zLnRzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXItZGF0YS50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLW9iai50cyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXJ5U2VsZWN0b3IgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gJy4vd2VhdGhlci1kYXRhJztcblxuZXhwb3J0IGNvbnN0IERPTSA9ICgoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBxdWVyeVNlbGVjdG9yKCdmb3JtJyksXG4gICAgbG9jdGlvbklucHV0ID0gcXVlcnlTZWxlY3RvcignI2xvY2F0aW9uLWlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudCxcbiAgICB3ZWF0aGVyQ29udGVudCA9IHF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNvbnRlbnQnKSxcbiAgICBleHRyYUluZm8gPSBxdWVyeVNlbGVjdG9yKCcuZXh0cmEtaW5mbycpO1xuXG4gIGNvbnN0IHNlYXJjaCA9IChlOiBFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBnZXRXZWF0aGVyRGF0YShsb2N0aW9uSW5wdXQudmFsdWUpO1xuICAgIGRpc3BsYXlDb250ZW50KCk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgZm9ybT8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgd2VhdGhlckNvbnRlbnQ/LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGV4dHJhSW5mbz8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWdyaWQnKTtcbiAgfTtcblxuICBjb25zdCBwYWdlTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3JtPy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIGZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNlYXJjaCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcGFnZUxvYWQgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBDdXJyZW50V2VhdGhlciB9IGZyb20gJy4vd2VhdGhlci1vYmonO1xuXG5leHBvcnQgY29uc3QgZGF0YUhhbmRsZXIgPSAoZGF0YTogYW55KSA9PiB7XG4gIGxldCBjaXR5ID0gZGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgIGNvdW50cnkgPSBkYXRhLmxvY2F0aW9uLmNvdW50cnksXG4gICAgZm9yZWNhc3QgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgaWNvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbixcbiAgICB0ZW1wID0gZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICBmZWVsc1RlbXAgPSBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgaHVtaWRpdHkgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHk7XG4gIGxldCB3ZWF0aGVyID0gbmV3IEN1cnJlbnRXZWF0aGVyKFxuICAgIGNpdHksXG4gICAgY291bnRyeSxcbiAgICBmb3JlY2FzdCxcbiAgICB0ZW1wLFxuICAgIGZlZWxzVGVtcCxcbiAgICBodW1pZGl0eSxcbiAgICBpY29uXG4gICk7XG4gIHJldHVybiB3ZWF0aGVyO1xufTtcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5U2VsZWN0b3IgPSAoc2VsZWN0b3I6IHN0cmluZywgcGFyZW50ID0gZG9jdW1lbnQpID0+IHtcbiAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn07XG4iLCJpbXBvcnQgeyBkYXRhSGFuZGxlciB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKGxvY2F0aW9uOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT1jMTUzY2U5NjNjNjQ0ZmNiOTlkNzMwMDYyMzI4MDMmcT0ke2xvY2F0aW9ufWAsXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGRhdGFIYW5kbGVyKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWlsZCBsb2NhdGlvbiEnKTtcbiAgfVxufTtcbiIsImV4cG9ydCBjbGFzcyBDdXJyZW50V2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2xvY2F0aW9uOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfY291bnRyeTogc3RyaW5nLFxuICAgIHByaXZhdGUgX2NvbmRpdGlvbjogc3RyaW5nLFxuICAgIHByaXZhdGUgX3RlbXBDOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfZmVlbHNMaWtlVGVtcEM6IG51bWJlcixcbiAgICBwcml2YXRlIF9odW1pZGl0eTogbnVtYmVyLFxuICAgIHByaXZhdGUgX2ljb246IHN0cmluZ1xuICApIHt9XG4gIGZvcm1hdExvY2F0aW9uKCkge1xuICAgIHJldHVybiBgJHt0aGlzLl9sb2NhdGlvbn0sICR7dGhpcy5fY291bnRyeX1gO1xuICB9XG4gIHdlYXRoZXJDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmRpdGlvbjtcbiAgfVxuICBjdXJyZW50VGVtcCh1bml0OiAnY2Vsc2l1cycgfCAnZmFocmVuaGVpdCcpIHtcbiAgICByZXR1cm4gdW5pdCA9PT0gJ2NlbHNpdXMnID8gdGhpcy5fdGVtcEMgOiB0aGlzLl90ZW1wQyAqIDEuOCArIDMyO1xuICB9XG4gIC8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHNvIHRoZSBpIGRvbnQgYnJlYWsgdGhlIERSWSBydWxlXG4gIGZlZWxzbGlrZVRlbXAodW5pdDogJ2NlbHNpdXMnIHwgJ2ZhaHJlbmhlaXQnKSB7XG4gICAgcmV0dXJuIHVuaXQgPT09ICdjZWxzaXVzJ1xuICAgICAgPyB0aGlzLl9mZWVsc0xpa2VUZW1wQ1xuICAgICAgOiB0aGlzLl9mZWVsc0xpa2VUZW1wQyAqIDEuOCArIDMyO1xuICB9XG4gIGN1cnJlbnRIdW1pZGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5faHVtaWRpdHk7XG4gIH1cbiAgd2VhdGhlcmljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9ET00nO1xuRE9NLnBhZ2VMb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=