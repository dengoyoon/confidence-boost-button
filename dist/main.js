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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("const confidenceButton = document.querySelector(\"#confidence__button\");\nconst confidenceText = document.querySelector(\"#confidence__text\");\n\nfunction* arrayLoopGenerator(arr) {\n  let i = 0;\n  while (true) {\n    yield arr[i++];\n    if (i === arr.length - 1) i = 0;\n  }\n}\n\nconst messages = arrayLoopGenerator([\"개쳐발랐죠?\", \"이놈의 자신감 부족놈!\"]);\n\nconst updateText = (el, text) => (el.innerHTML = text);\n\nlet frame = 0;\nlet index = 0;\nlet requestId;\nconst initValues = () => {\n  frame = 0;\n  index = 0;\n  requestId = undefined;\n};\n\nconfidenceButton.addEventListener(\"click\", () => {\n  updateText(confidenceText, \".\");\n  initValues();\n  riseNumber(confidenceText);\n});\nconst riseNumber = () => {\n  frame += 1;\n  if (frame % 5 === 0) {\n    index += 1;\n    updateText(confidenceText, messages.next().value.slice(0, index));\n  }\n  if (index === messages.next().value.length)\n    window.cancelAnimationFrame(requestId);\n  else requestId = window.requestAnimationFrame(riseNumber);\n};\n\n\n//# sourceURL=webpack://confidence-boost-button/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;