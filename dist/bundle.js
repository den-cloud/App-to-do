/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* GLobal Rules */\\r\\n.to-do-list .line-through {\\r\\n  text-decoration: line-through;\\r\\n  color: rgba(0, 0, 0, 0.596);\\r\\n}\\r\\n\\r\\n.to-do-list .d-none {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #f6f6f6;\\r\\n  position: relative;\\r\\n  height: 100vh;\\r\\n  overflow: hidden;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.editing-state {\\r\\n  background-color: #afafaf4d;\\r\\n}\\r\\n\\r\\n/* Start List */\\r\\n.to-do-list {\\r\\n  background-color: white;\\r\\n  padding: 0;\\r\\n  width: 55%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  overflow-x: hidden;\\r\\n  box-shadow: 0 0 6px 1px #00000045;\\r\\n  transform: translate(-50%, -50%);\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n}\\r\\n\\r\\n.to-do-list .title {\\r\\n  display: flex;\\r\\n  font-weight: 200;\\r\\n  font-size: 17px;\\r\\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\r\\n  width: 100%;\\r\\n  padding: 0 0 10px 10px;\\r\\n  border-bottom: 1px solid #00000045;\\r\\n}\\r\\n\\r\\n.to-do-list .title i.fa-sync-alt {\\r\\n  margin: 0 15px 0 auto;\\r\\n  color: #0000008a;\\r\\n}\\r\\n\\r\\n.to-do-list .input-container {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.to-do-list .input-container .task-input {\\r\\n  width: 98%;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  font-size: 17px;\\r\\n  background-color: transparent;\\r\\n  padding: 10px 0 10px 10px;\\r\\n  border-bottom: 1px solid #00000045;\\r\\n}\\r\\n\\r\\n.to-do-list .input-container .task-input::placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.to-do-list .input-container i.fa-level-down-alt {\\r\\n  font-size: 14px;\\r\\n  margin: 0 15px 0 -25px;\\r\\n  color: #0000008a;\\r\\n  transform: rotate(90deg);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.to-do-list .input-container .alert {\\r\\n  color: rgb(124, 7, 7);\\r\\n  font-size: 18px;\\r\\n  width: 100%;\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.to-do-list .list {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.to-do-list .list .empty-list {\\r\\n  text-align: center;\\r\\n  font-family: sans-serif;\\r\\n  color: #7e7e89;\\r\\n  height: 100px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.to-do-list .list .list_item {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  font-size: 18px;\\r\\n  border-bottom: 1px solid #00000045;\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\n.to-do-list .list .list_item input[type=\\\"checkbox\\\"] {\\r\\n  margin: 0 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.to-do-list .list .list_item input[type=\\\"text\\\"] {\\r\\n  width: 90%;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  padding: 15px;\\r\\n  font-size: 18px;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.to-do-list .list .list_item input[type=\\\"text\\\"]::placeholder {\\r\\n  color: black;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.to-do-list .list .list_item i#move-icon {\\r\\n  font-size: 15px;\\r\\n  margin: 0 15px 0 5px;\\r\\n  color: #0000008a;\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.to-do-list .list .list_item i#trash-icon {\\r\\n  font-size: 18px;\\r\\n  margin: 0 15px 0 5px;\\r\\n  color: #0000008a;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.to-do-list .list .list_item:last-of-type {\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.to-do-list .btn {\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background-color: #f6f6f6;\\r\\n  padding: 10px;\\r\\n  cursor: pointer;\\r\\n  font-size: 20px;\\r\\n  color: #7e7e7e;\\r\\n  border-top: 1px solid #00000045;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 576px) {\\r\\n  .to-do-list {\\r\\n    width: 96%;\\r\\n  }\\r\\n\\r\\n  .to-do-list .input-container .task-input {\\r\\n    width: 94%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 576px) and (max-width: 991px) {\\r\\n  .to-do-list {\\r\\n    width: 80%;\\r\\n  }\\r\\n\\r\\n  .to-do-list .input-container .task-input {\\r\\n    width: 97%;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Start Footer */\\r\\n.footer {\\r\\n  width: 100%;\\r\\n  background-color: #fff;\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  right: -10px;\\r\\n  padding: 8px;\\r\\n  text-align: center;\\r\\n  font-size: 20px;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  box-shadow: 0 4px 9px 1px #480404ab;\\r\\n}\\r\\n\\r\\n.footer p i.fa {\\r\\n  color: rgb(155, 4, 4);\\r\\n}\\r\\n\\r\\n.footer div.contacts a {\\r\\n  margin-right: 10px;\\r\\n  font-size: 20px;\\r\\n  color: #000;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://app-to-do/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://app-to-do/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://app-to-do/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://app-to-do/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://app-to-do/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://app-to-do/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://app-to-do/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://app-to-do/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://app-to-do/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://app-to-do/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _js_changeState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/changeState.js */ \"./src/js/changeState.js\");\n/* harmony import */ var _js_addRemove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/addRemove.js */ \"./src/js/addRemove.js\");\n\r\n\r\n\r\n\r\n// Call HTML Elements\r\nconst mainListContainer = document.getElementById('list');\r\nconst addIcon = document.getElementById('add-icon');\r\nconst inputField = document.querySelector('.input-container');\r\nconst clearSelectedBtn = document.getElementById('clear-selected');\r\n\r\nclass List {\r\n  constructor() {\r\n    const newList = JSON.parse(localStorage.getItem('newList'));\r\n    if (newList) {\r\n      this.listObj = newList;\r\n    } else {\r\n      this.listObj = [];\r\n    }\r\n  }\r\n\r\n  createItems(listContainer) {\r\n    inputField.addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n      return (0,_js_addRemove_js__WEBPACK_IMPORTED_MODULE_2__.add)(this.listObj);\r\n    });\r\n    addIcon.addEventListener('click', () => (0,_js_addRemove_js__WEBPACK_IMPORTED_MODULE_2__.add)(this.listObj));\r\n    clearSelectedBtn.addEventListener('click', () => (0,_js_addRemove_js__WEBPACK_IMPORTED_MODULE_2__.removeAllCompleted)(this.listObj));\r\n\r\n    if (this.listObj.length) {\r\n      this.listObj.forEach((task) => {\r\n        const li = document.createElement('li');\r\n        li.id = task.index;\r\n        li.className = 'list_item';\r\n        // checkbox\r\n        const checkBox = document.createElement('input');\r\n        checkBox.type = 'checkbox';\r\n        // description\r\n        const desc = document.createElement('input');\r\n        desc.className = 'desc';\r\n        desc.type = 'text';\r\n        li.append(checkBox, desc);\r\n        // Icon\r\n        li.innerHTML += `\r\n        <i class=\"fas fa-ellipsis-v drag-icon\" id=\"move-icon\"></i>\r\n        <i class=\"fas fa-trash d-none\" id=\"trash-icon\"></i>\r\n        `;\r\n        if (task.completed) {\r\n          li.childNodes[0].checked = 'true';\r\n          li.childNodes[1].classList.add('line-through');\r\n        }\r\n        li.childNodes[1].value = task.description;\r\n        // Add Events\r\n        li.childNodes[0].addEventListener('change', () => (0,_js_changeState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(li.childNodes[0], task.index, this.listObj));\r\n\r\n        li.childNodes[1].addEventListener('click', () => {\r\n          li.classList.add('editing-state');\r\n          li.childNodes[3].classList.add('d-none');\r\n          li.childNodes[5].classList.remove('d-none');\r\n        });\r\n\r\n        li.childNodes[1].addEventListener('blur', () => {\r\n          li.classList.remove('editing-state');\r\n          setTimeout(() => {\r\n            li.childNodes[3].classList.remove('d-none');\r\n            li.childNodes[5].classList.add('d-none');\r\n          }, 400);\r\n        });\r\n\r\n        li.childNodes[1].addEventListener('input', () => (0,_js_addRemove_js__WEBPACK_IMPORTED_MODULE_2__.edit)(li.childNodes[1], task.index, this.listObj));\r\n        li.childNodes[5].addEventListener('click', () => (0,_js_addRemove_js__WEBPACK_IMPORTED_MODULE_2__.remove)(this.listObj, task.index, listContainer));\r\n        return listContainer.append(li);\r\n      });\r\n    } else {\r\n      const emptyList = document.createElement('h2');\r\n      emptyList.className = 'empty-list';\r\n      emptyList.textContent = 'Add Something today';\r\n      listContainer.append(emptyList);\r\n    }\r\n  }\r\n}\r\nconst list = new List();\r\nlist.createItems(mainListContainer);\n\n//# sourceURL=webpack://app-to-do/./src/index.js?");

/***/ }),

/***/ "./src/js/addRemove.js":
/*!*****************************!*\
  !*** ./src/js/addRemove.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"remove\": () => (/* binding */ remove),\n/* harmony export */   \"edit\": () => (/* binding */ edit),\n/* harmony export */   \"removeAllCompleted\": () => (/* binding */ removeAllCompleted)\n/* harmony export */ });\nconst add = (list) => {\r\n  const inputField = document.querySelector('.input-container .task-input');\r\n  const spanalert = document.querySelector('.input-container .alert');\r\n  if (inputField.value === '') {\r\n    spanalert.textContent = 'Please, Type something to add';\r\n  } else {\r\n    spanalert.textContent = '';\r\n    list.push({\r\n      description: inputField.value,\r\n      completed: false,\r\n      index: list.length + 1,\r\n    });\r\n    localStorage.setItem('newList', JSON.stringify(list));\r\n  }\r\n  return window.location.reload();\r\n};\r\n\r\nconst remove = (list, index) => {\r\n  const listFilterd = list.filter((item) => item.index !== index);\r\n  const newList = listFilterd.map((item, index) => {\r\n    item.index = index + 1;\r\n    return item;\r\n  });\r\n  localStorage.setItem('newList', JSON.stringify(newList));\r\n  return window.location.reload();\r\n};\r\n\r\nconst edit = (desc, index, list) => {\r\n  list[index - 1].description = desc.value;\r\n  return localStorage.setItem('newList', JSON.stringify(list));\r\n};\r\n\r\nconst removeAllCompleted = (list) => {\r\n  const filterList = list.filter((task) => task.completed === false);\r\n  const newList = filterList.map((item, index) => {\r\n    item.index = index + 1;\r\n    return item;\r\n  });\r\n  localStorage.setItem('newList', JSON.stringify(newList));\r\n  return window.location.reload();\r\n};\n\n//# sourceURL=webpack://app-to-do/./src/js/addRemove.js?");

/***/ }),

/***/ "./src/js/changeState.js":
/*!*******************************!*\
  !*** ./src/js/changeState.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst changeState = (checkBox, index, list) => {\r\n  const desc = document.getElementsByClassName('desc');\r\n  if (checkBox.checked) {\r\n    list[index - 1].completed = true;\r\n  } else {\r\n    list[index - 1].completed = false;\r\n  }\r\n  if (desc[index - 1].classList.contains('line-through')) {\r\n    desc[index - 1].classList.remove('line-through');\r\n  } else {\r\n    desc[index - 1].classList.add('line-through');\r\n  }\r\n  return localStorage.setItem('newList', JSON.stringify(list));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeState);\n\n//# sourceURL=webpack://app-to-do/./src/js/changeState.js?");

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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;