/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/bg.js":
/*!******************!*\
  !*** ./js/bg.js ***!
  \******************/
/***/ (() => {

eval("const bg = document.querySelector(\".bg\");\r\n\r\nconst img1 = \"ken-cheung-KonWFWUaAuk-unsplash.jpg\";\r\nconst img2 = \"Colle-Nivolet-SplitShire-20-5273.jpg\";\r\nconst img3 = \"Sunset-On-Lake-SplitShire-18-07463.jpg\";\r\nconst img4 = \"SplitShire-20-08742.jpg\";\r\nconst img5 = \"SplitShire-London-Collection-5384.jpg\";\r\nconst bgArray = [img1, img2, img3, img4, img5];\r\n\r\nconst loadBg = () => {\r\n  const rndNum = Math.floor(Math.random() * bgArray.length);\r\n  console.log(rndNum);\r\n  bg.style.backgroundImage = `url(image/${bgArray[rndNum]})`;\r\n};\r\n\r\nfunction init() {\r\n  loadBg();\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://JS-Momentum/./js/bg.js?");

/***/ }),

/***/ "./js/clock.js":
/*!*********************!*\
  !*** ./js/clock.js ***!
  \*********************/
/***/ (() => {

eval("const clock = document.querySelector(\"h1\");\r\n\r\nconst renewClock = () => {\r\n  const clockObject = new Date();\r\n  const clockHours = clockObject.getHours();\r\n  const clockMinutes = clockObject.getMinutes();\r\n  const clockSeconds = clockObject.getSeconds();\r\n\r\n  clock.innerText = `${clockHours < 10 ? `0${clockHours}` : clockHours}:${\r\n    clockMinutes < 10 ? `0${clockMinutes}` : clockMinutes\r\n  }:${clockSeconds < 10 ? `0${clockSeconds}` : clockSeconds}`;\r\n};\r\n\r\nfunction init() {\r\n  renewClock();\r\n  setInterval(renewClock, 1000);\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://JS-Momentum/./js/clock.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/reset.css */ \"./css/reset.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _bg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bg.js */ \"./js/bg.js\");\n/* harmony import */ var _bg_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bg_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clock.js */ \"./js/clock.js\");\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clock_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.js */ \"./js/weather.js\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_weather_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _work_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work.js */ \"./js/work.js\");\n/* harmony import */ var _work_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_work_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.js */ \"./js/info.js\");\n/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_info_js__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://JS-Momentum/./js/index.js?");

/***/ }),

/***/ "./js/info.js":
/*!********************!*\
  !*** ./js/info.js ***!
  \********************/
/***/ (() => {

eval("const infoBtn = document.querySelector(\".info-icon\");\r\nconst modal = document.querySelector(\".modal-container\");\r\nconst close = document.querySelector(\".modal-close\");\r\n\r\nconst clickInfoBtn = () => {\r\n  modal.classList.remove(\"jsModal\");\r\n};\r\n\r\nconst clickClose = () => {\r\n  modal.classList.add(\"jsModal\");\r\n};\r\n\r\nfunction init() {\r\n  infoBtn.addEventListener(\"click\", clickInfoBtn);\r\n  close.addEventListener(\"click\", clickClose);\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://JS-Momentum/./js/info.js?");

/***/ }),

/***/ "./js/weather.js":
/*!***********************!*\
  !*** ./js/weather.js ***!
  \***********************/
/***/ (() => {

eval("const spanWeather = document.querySelector(\".jsWeather\");\r\n\r\nconst API_KEY = \"9bbfaa1e592ee0e289f83512ad6b59c3\";\r\nconst SECTION = \"SECTION\";\r\n\r\nconst getWeather = (lat, lng) => {\r\n  fetch(\r\n    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`\r\n  )\r\n    .then((response) => {\r\n      return response.json();\r\n    })\r\n    .then((json) => {\r\n      const temperature = json.main.temp;\r\n      const place = json.name;\r\n      spanWeather.innerText = `온도: ${temperature}℃ - 위치: ${place}`;\r\n    });\r\n};\r\n\r\nconst geoSuccess = (position) => {\r\n  const sectionLatitude = position.coords.latitude;\r\n  const sectionLongitude = position.coords.longitude;\r\n  const sectionObject = {\r\n    latitude: sectionLatitude,\r\n    longitude: sectionLongitude,\r\n  };\r\n  localStorage.setItem(SECTION, JSON.stringify(sectionObject));\r\n  getWeather(sectionObject.latitude, sectionObject.longitude);\r\n};\r\n\r\nconst getError = () => {\r\n  spanWeather.innerText = \"날씨, 위치 정보 동기화를 실패하였습니다.\";\r\n};\r\n\r\nconst askSection = () => {\r\n  navigator.geolocation.getCurrentPosition(geoSuccess, getError);\r\n};\r\n\r\nconst loadSection = () => {\r\n  const currentSection = localStorage.getItem(SECTION);\r\n\r\n  if (currentSection === null) {\r\n    askSection();\r\n  } else {\r\n    const parseSection = JSON.parse(currentSection);\r\n    getWeather(parseSection.latitude, parseSection.longitude);\r\n  }\r\n};\r\n\r\nfunction init() {\r\n  loadSection();\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://JS-Momentum/./js/weather.js?");

/***/ }),

/***/ "./js/work.js":
/*!********************!*\
  !*** ./js/work.js ***!
  \********************/
/***/ (() => {

eval("const workForm = document.querySelector(\".work-container\");\r\nconst input = workForm.querySelector(\"#jsInputWork\");\r\nconst ulSchedule = document.querySelector(\".ul-schedule\");\r\nconst ulFinished = document.querySelector(\".ul-finished\");\r\n\r\nconst SCHEDULE = \"SCHEDULE\";\r\nconst FINISHED = \"FINISHED\";\r\n\r\nlet scheduleValue = [];\r\nlet finishedValue = [];\r\n\r\nconst clickClearBtn = (event) => {\r\n  let btnText = \"\";\r\n  const eventTarget = event.target.parentNode;\r\n  const temp = eventTarget.parentNode.classList.value;\r\n\r\n  if (temp === \"ul-schedule\") {\r\n    btnText = \"⏪\";\r\n    const renewFinishedValue = scheduleValue.filter((finValue) => {\r\n      return finValue.id === Number(eventTarget.id);\r\n    });\r\n\r\n    clickDelBtn(event);\r\n    createSchedule(\r\n      renewFinishedValue[0].text,\r\n      btnText,\r\n      ulFinished,\r\n      renewFinishedValue[0].id\r\n    );\r\n    finishedValue.push(renewFinishedValue[0]);\r\n    saveFinished();\r\n  } else if (temp === \"ul-finished\") {\r\n    btnText = \"✅\";\r\n    const renewScheduleValue = finishedValue.filter((scValue) => {\r\n      return scValue.id === Number(eventTarget.id);\r\n    });\r\n\r\n    clickDelBtn(event);\r\n    createSchedule(\r\n      renewScheduleValue[0].text,\r\n      btnText,\r\n      ulSchedule,\r\n      renewScheduleValue[0].id\r\n    );\r\n    scheduleValue.push(renewScheduleValue[0]);\r\n    saveSchedule();\r\n  }\r\n};\r\n\r\nconst clickDelBtn = (event) => {\r\n  const eventTarget = event.target.parentNode;\r\n  const eventTargetParent = eventTarget.parentNode;\r\n  const temp = eventTargetParent.classList.value; // string\r\n\r\n  if (temp === \"ul-schedule\") {\r\n    const renewScheduleValue = scheduleValue.filter((scValue) => {\r\n      return scValue.id !== Number(eventTarget.id);\r\n    });\r\n\r\n    scheduleValue = renewScheduleValue;\r\n    saveSchedule();\r\n  } else if (temp === \"ul-finished\") {\r\n    const renewFinishedValue = finishedValue.filter((finValue) => {\r\n      return finValue.id !== Number(eventTarget.id);\r\n    });\r\n\r\n    finishedValue = renewFinishedValue;\r\n    saveFinished();\r\n  }\r\n\r\n  eventTargetParent.removeChild(eventTarget);\r\n};\r\n\r\nconst createSchedule = (spanText, btnText, location, id) => {\r\n  const li = document.createElement(\"li\");\r\n  const span = document.createElement(\"span\");\r\n  const delBtn = document.createElement(\"button\");\r\n  const clearBtn = document.createElement(\"button\");\r\n\r\n  span.innerText = spanText;\r\n  delBtn.innerText = \"❌\";\r\n  clearBtn.innerText = btnText;\r\n\r\n  li.appendChild(span);\r\n  li.appendChild(delBtn);\r\n  li.appendChild(clearBtn);\r\n  location.appendChild(li);\r\n  li.id = id;\r\n\r\n  delBtn.addEventListener(\"click\", clickDelBtn);\r\n  clearBtn.addEventListener(\"click\", clickClearBtn);\r\n};\r\n\r\nconst loadSchedule = () => {\r\n  const currentSchedule = localStorage.getItem(SCHEDULE);\r\n\r\n  if (currentSchedule !== null) {\r\n    const parseCurrentSchedule = JSON.parse(currentSchedule);\r\n    const clearBtn = \"✅\";\r\n\r\n    Array.from(parseCurrentSchedule).forEach((scheduleValues) => {\r\n      createSchedule(\r\n        scheduleValues.text,\r\n        clearBtn,\r\n        ulSchedule,\r\n        scheduleValues.id\r\n      );\r\n    });\r\n\r\n    scheduleValue = parseCurrentSchedule;\r\n  }\r\n};\r\n\r\nconst loadFinished = () => {\r\n  const currentFinished = localStorage.getItem(FINISHED);\r\n\r\n  if (currentFinished !== null) {\r\n    const parseCurrentFinished = JSON.parse(currentFinished);\r\n    const clearBtn = \"⏪\";\r\n\r\n    Array.from(parseCurrentFinished).forEach((finishedValues) => {\r\n      createSchedule(\r\n        finishedValues.text,\r\n        clearBtn,\r\n        ulFinished,\r\n        finishedValues.id\r\n      );\r\n    });\r\n\r\n    finishedValue = parseCurrentFinished;\r\n  }\r\n};\r\n\r\nconst saveSchedule = () => {\r\n  localStorage.setItem(SCHEDULE, JSON.stringify(scheduleValue));\r\n};\r\n\r\nconst saveFinished = () => {\r\n  localStorage.setItem(FINISHED, JSON.stringify(finishedValue));\r\n};\r\n\r\nconst submitWork = (event) => {\r\n  event.preventDefault();\r\n  const submitSchedule = input.value;\r\n  const liId = scheduleValue.length + 1;\r\n  input.value = \"\";\r\n  const clearBtn = \"✅\";\r\n  const scheduleObj = {\r\n    text: submitSchedule,\r\n    id: scheduleValue.length + 1,\r\n  };\r\n\r\n  scheduleValue.push(scheduleObj);\r\n  saveSchedule();\r\n  createSchedule(submitSchedule, clearBtn, ulSchedule, liId);\r\n};\r\n\r\nfunction init() {\r\n  loadSchedule();\r\n  loadFinished();\r\n  workForm.addEventListener(\"submit\", submitWork);\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://JS-Momentum/./js/work.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\r\\n\\r\\n/* Document\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * 1. Correct the line height in all browsers.\\r\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\r\\n */\\r\\n\\r\\nhtml {\\r\\n  line-height: 1.15; /* 1 */\\r\\n  -webkit-text-size-adjust: 100%; /* 2 */\\r\\n}\\r\\n\\r\\n/* Sections\\r\\n       ========================================================================== */\\r\\n\\r\\n/**\\r\\n     * Remove the margin in all browsers.\\r\\n     */\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Render the `main` element consistently in IE.\\r\\n     */\\r\\n\\r\\nmain {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Correct the font size and margin on `h1` elements within `section` and\\r\\n     * `article` contexts in Chrome, Firefox, and Safari.\\r\\n     */\\r\\n\\r\\nh1 {\\r\\n  font-size: 2em;\\r\\n  margin: 0.67em 0;\\r\\n}\\r\\n\\r\\n/* Grouping content\\r\\n       ========================================================================== */\\r\\n\\r\\n/**\\r\\n     * 1. Add the correct box sizing in Firefox.\\r\\n     * 2. Show the overflow in Edge and IE.\\r\\n     */\\r\\n\\r\\nhr {\\r\\n  box-sizing: content-box; /* 1 */\\r\\n  height: 0; /* 1 */\\r\\n  overflow: visible; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n     * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n     * 2. Correct the odd `em` font sizing in all browsers.\\r\\n     */\\r\\n\\r\\npre {\\r\\n  font-family: monospace, monospace; /* 1 */\\r\\n  font-size: 1em; /* 2 */\\r\\n}\\r\\n\\r\\n/* Text-level semantics\\r\\n       ========================================================================== */\\r\\n\\r\\n/**\\r\\n     * Remove the gray background on active links in IE 10.\\r\\n     */\\r\\n\\r\\na {\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * 1. Remove the bottom border in Chrome 57-\\r\\n     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\r\\n     */\\r\\n\\r\\nabbr[title] {\\r\\n  border-bottom: none; /* 1 */\\r\\n  text-decoration: underline; /* 2 */\\r\\n  text-decoration: underline dotted; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Add the correct font weight in Chrome, Edge, and Safari.\\r\\n     */\\r\\n\\r\\nb,\\r\\nstrong {\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n     * 2. Correct the odd `em` font sizing in all browsers.\\r\\n     */\\r\\n\\r\\ncode,\\r\\nkbd,\\r\\nsamp {\\r\\n  font-family: monospace, monospace; /* 1 */\\r\\n  font-size: 1em; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Add the correct font size in all browsers.\\r\\n     */\\r\\n\\r\\nsmall {\\r\\n  font-size: 80%;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Prevent `sub` and `sup` elements from affecting the line height in\\r\\n     * all browsers.\\r\\n     */\\r\\n\\r\\nsub,\\r\\nsup {\\r\\n  font-size: 75%;\\r\\n  line-height: 0;\\r\\n  position: relative;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\nsub {\\r\\n  bottom: -0.25em;\\r\\n}\\r\\n\\r\\nsup {\\r\\n  top: -0.5em;\\r\\n}\\r\\n\\r\\n/* Embedded content\\r\\n       ========================================================================== */\\r\\n\\r\\n/**\\r\\n     * Remove the border on images inside links in IE 10.\\r\\n     */\\r\\n\\r\\nimg {\\r\\n  border-style: none;\\r\\n}\\r\\n\\r\\n/* Forms\\r\\n       ========================================================================== */\\r\\n\\r\\n/**\\r\\n     * 1. Change the font styles in all browsers.\\r\\n     * 2. Remove the margin in Firefox and Safari.\\r\\n     */\\r\\n\\r\\nbutton,\\r\\ninput,\\r\\noptgroup,\\r\\nselect,\\r\\ntextarea {\\r\\n  font-family: inherit; /* 1 */\\r\\n  font-size: 100%; /* 1 */\\r\\n  line-height: 1.15; /* 1 */\\r\\n  margin: 0; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Show the overflow in IE.\\r\\n     * 1. Show the overflow in Edge.\\r\\n     */\\r\\n\\r\\nbutton,\\r\\ninput {\\r\\n  /* 1 */\\r\\n  overflow: visible;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Remove the inheritance of text transform in Edge, Firefox, and IE.\\r\\n     * 1. Remove the inheritance of text transform in Firefox.\\r\\n     */\\r\\n\\r\\nbutton,\\r\\nselect {\\r\\n  /* 1 */\\r\\n  text-transform: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Correct the inability to style clickable types in iOS and Safari.\\r\\n     */\\r\\n\\r\\nbutton,\\r\\n[type=\\\"button\\\"],\\r\\n[type=\\\"reset\\\"],\\r\\n[type=\\\"submit\\\"] {\\r\\n  -webkit-appearance: button;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Remove the inner border and padding in Firefox.\\r\\n     */\\r\\n\\r\\nbutton::-moz-focus-inner,\\r\\n[type=\\\"button\\\"]::-moz-focus-inner,\\r\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\r\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\r\\n  border-style: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Restore the focus styles unset by the previous rule.\\r\\n     */\\r\\n\\r\\nbutton:-moz-focusring,\\r\\n[type=\\\"button\\\"]:-moz-focusring,\\r\\n[type=\\\"reset\\\"]:-moz-focusring,\\r\\n[type=\\\"submit\\\"]:-moz-focusring {\\r\\n  outline: 1px dotted ButtonText;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Correct the padding in Firefox.\\r\\n     */\\r\\n\\r\\nfieldset {\\r\\n  padding: 0.35em 0.75em 0.625em;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * 1. Correct the text wrapping in Edge and IE.\\r\\n     * 2. Correct the color inheritance from `fieldset` elements in IE.\\r\\n     * 3. Remove the padding so developers are not caught out when they zero out\\r\\n     *    `fieldset` elements in all browsers.\\r\\n     */\\r\\n\\r\\nlegend {\\r\\n  box-sizing: border-box; /* 1 */\\r\\n  color: inherit; /* 2 */\\r\\n  display: table; /* 1 */\\r\\n  max-width: 100%; /* 1 */\\r\\n  padding: 0; /* 3 */\\r\\n  white-space: normal; /* 1 */\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\r\\n     */\\r\\n\\r\\nprogress {\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Remove the default vertical scrollbar in IE 10+.\\r\\n     */\\r\\n\\r\\ntextarea {\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * 1. Add the correct box sizing in IE 10.\\r\\n     * 2. Remove the padding in IE 10.\\r\\n     */\\r\\n\\r\\n[type=\\\"checkbox\\\"],\\r\\n[type=\\\"radio\\\"] {\\r\\n  box-sizing: border-box; /* 1 */\\r\\n  padding: 0; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Correct the cursor style of increment and decrement buttons in Chrome.\\r\\n     */\\r\\n\\r\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\r\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * 1. Correct the odd appearance in Chrome and Safari.\\r\\n     * 2. Correct the outline style in Safari.\\r\\n     */\\r\\n\\r\\n[type=\\\"search\\\"] {\\r\\n  -webkit-appearance: textfield; /* 1 */\\r\\n  outline-offset: -2px; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Remove the inner padding in Chrome and Safari on macOS.\\r\\n     */\\r\\n\\r\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\r\\n  -webkit-appearance: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * 1. Correct the inability to style clickable types in iOS and Safari.\\r\\n     * 2. Change font properties to `inherit` in Safari.\\r\\n     */\\r\\n\\r\\n::-webkit-file-upload-button {\\r\\n  -webkit-appearance: button; /* 1 */\\r\\n  font: inherit; /* 2 */\\r\\n}\\r\\n\\r\\n/* Interactive\\r\\n       ========================================================================== */\\r\\n\\r\\n/*\\r\\n     * Add the correct display in Edge, IE 10+, and Firefox.\\r\\n     */\\r\\n\\r\\ndetails {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/*\\r\\n     * Add the correct display in all browsers.\\r\\n     */\\r\\n\\r\\nsummary {\\r\\n  display: list-item;\\r\\n}\\r\\n\\r\\n/* Misc\\r\\n       ========================================================================== */\\r\\n\\r\\n/**\\r\\n     * Add the correct display in IE 10+.\\r\\n     */\\r\\n\\r\\ntemplate {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n     * Add the correct display in IE 10.\\r\\n     */\\r\\n\\r\\n[hidden] {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JS-Momentum/./css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _image_rec_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/rec.png */ \"./image/rec.png\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_image_rec_png__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0 auto;\\r\\n  font-family: \\\"Roboto Condensed\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.bg {\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.info-container {\\r\\n  position: absolute;\\r\\n  top: 5%;\\r\\n  right: 5%;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.info-icon {\\r\\n  margin: 0 0.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.info-icon:hover {\\r\\n  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.main-container {\\r\\n  position: absolute;\\r\\n  top: 30%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -40%);\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.main-flex-container {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.main-flex-container h1 {\\r\\n  font-size: 7rem;\\r\\n  margin-bottom: 0.3rem;\\r\\n}\\r\\n\\r\\n.jsWeather {\\r\\n  color: #ffcdd2;\\r\\n}\\r\\n\\r\\n.input-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-top: 1.3rem;\\r\\n}\\r\\n\\r\\n.inputName {\\r\\n  width: 400px;\\r\\n  height: 100px;\\r\\n  font-size: 2rem;\\r\\n  background-color: rgba(255, 255, 255, 0.2);\\r\\n  border-radius: 7px;\\r\\n  border-style: none;\\r\\n  color: #fff;\\r\\n  outline: none;\\r\\n  text-align: center;\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.getName {\\r\\n  width: 200px;\\r\\n  height: 100px;\\r\\n  font-size: 3rem;\\r\\n  background-color: rgba(255, 255, 255, 0);\\r\\n  border-radius: 7px;\\r\\n  border-style: none;\\r\\n  color: #fff;\\r\\n  outline: none;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.inputWork {\\r\\n  width: 300px;\\r\\n  height: 50px;\\r\\n  background-color: rgba(255, 255, 255, 0.2);\\r\\n  border-radius: 7px;\\r\\n  border-style: none;\\r\\n  color: #fff;\\r\\n  outline: none;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.bottom-container {\\r\\n  position: absolute;\\r\\n  bottom: 15%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, +15%);\\r\\n  width: 800px;\\r\\n  height: 400px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.schedule-title {\\r\\n  position: absolute;\\r\\n  top: 8%;\\r\\n  left: 16.5%;\\r\\n  width: 140px;\\r\\n  height: 40px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: #fff;\\r\\n  border-radius: 5px;\\r\\n  font-size: 1.2rem;\\r\\n  color: #9e9e9e;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.schedule-title span {\\r\\n  margin-left: 0.5rem;\\r\\n}\\r\\n\\r\\n.schedule-container {\\r\\n  width: 300px;\\r\\n  height: 300px;\\r\\n  background-color: rgba(255, 255, 255, 0.3);\\r\\n  border-radius: 30px;\\r\\n  margin-right: 3rem;\\r\\n}\\r\\n\\r\\n.ul-schedule {\\r\\n  margin-top: 2rem;\\r\\n  list-style: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n.ul-schedule li {\\r\\n  height: 30px;\\r\\n  line-height: 30px;\\r\\n}\\r\\n\\r\\nul button {\\r\\n  background-color: transparent;\\r\\n  border-style: none;\\r\\n  outline: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.finished-title {\\r\\n  position: absolute;\\r\\n  top: 8%;\\r\\n  right: 16.5%;\\r\\n  width: 140px;\\r\\n  height: 40px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: #fff;\\r\\n  border-radius: 5px;\\r\\n  font-size: 1.2rem;\\r\\n  color: #9e9e9e;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.finished-title span {\\r\\n  margin-left: 0.5rem;\\r\\n}\\r\\n\\r\\n.finished-container {\\r\\n  width: 300px;\\r\\n  height: 300px;\\r\\n  background-color: rgba(255, 255, 255, 0.3);\\r\\n  border-radius: 30px;\\r\\n  margin-left: 3rem;\\r\\n}\\r\\n\\r\\n.ul-finished {\\r\\n  margin-top: 2rem;\\r\\n  list-style: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n.modal-container {\\r\\n  width: 600px;\\r\\n  height: 500px;\\r\\n  position: relative;\\r\\n  top: 30%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -30%);\\r\\n  background-color: #fff;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.info-express {\\r\\n  list-style: none;\\r\\n  padding: 1rem 0 0 1rem;\\r\\n  margin: 0;\\r\\n  opacity: 0.7;\\r\\n}\\r\\n\\r\\n.info-express li {\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.instructions-span {\\r\\n  padding-left: 1rem;\\r\\n  margin-bottom: 1rem;\\r\\n  opacity: 0.7;\\r\\n}\\r\\n\\r\\n.instructions-express {\\r\\n  padding: 1rem 0 0 1.5rem;\\r\\n  margin: 0;\\r\\n  opacity: 0.7;\\r\\n}\\r\\n\\r\\n.instructions-express li {\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.modal-close {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  right: -5%;\\r\\n  font-size: 2rem;\\r\\n  color: #fff;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.jsModal {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 780px) {\\r\\n  .bg {\\r\\n    height: 120vh;\\r\\n  }\\r\\n\\r\\n  .bottom-container {\\r\\n    bottom: 1%;\\r\\n    height: 500px;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .schedule-title {\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n  }\\r\\n\\r\\n  .schedule-container {\\r\\n    padding: 0;\\r\\n    margin: 2rem 0 4rem 0;\\r\\n  }\\r\\n\\r\\n  .finished-container {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    height: 400px;\\r\\n  }\\r\\n\\r\\n  .finished-title {\\r\\n    top: 50%;\\r\\n    right: 50%;\\r\\n    transform: translate(+50%, +20%);\\r\\n  }\\r\\n\\r\\n  .modal-container {\\r\\n    width: 400px;\\r\\n    height: 550px;\\r\\n    font-size: 0.8rem;\\r\\n  }\\r\\n\\r\\n  .modal-close {\\r\\n    right: -7%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JS-Momentum/./css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://JS-Momentum/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://JS-Momentum/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./image/rec.png":
/*!***********************!*\
  !*** ./image/rec.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2288cda37433085bba05b6600f74cc3e.png\");\n\n//# sourceURL=webpack://JS-Momentum/./image/rec.png?");

/***/ }),

/***/ "./css/reset.css":
/*!***********************!*\
  !*** ./css/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./css/reset.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://JS-Momentum/./css/reset.css?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://JS-Momentum/./css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JS-Momentum/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;