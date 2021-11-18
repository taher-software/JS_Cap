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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\r\\n  font-family: monospace, sans-serif;\\r\\n  width: 100%;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.isblur {\\r\\n  filter: blur(4px);\\r\\n}\\r\\n\\r\\n.noscroll {\\r\\n  position: fixed;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  width: 60%;\\r\\n  margin-left: 20%;\\r\\n  margin-top: 5%;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nheader img {\\r\\n  width: 12.5%;\\r\\n  border: 1px solid rgb(212, 189, 109);\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\nheader p {\\r\\n  margin-left: 10%;\\r\\n  font-family: monospace, sans-serif;\\r\\n  font-size: 18px;\\r\\n  font-weight: 600;\\r\\n  line-height: 1.8;\\r\\n  background: linear-gradient(rgb(212, 189, 109), rgb(220, 58, 55));\\r\\n  -webkit-background-clip: text;\\r\\n  color: transparent;\\r\\n}\\r\\n\\r\\n.chicken {\\r\\n  text-decoration: underline;\\r\\n  font-weight: bold;\\r\\n  text-decoration-color: rgb(212, 189, 109);\\r\\n  text-decoration-thickness: 2px;\\r\\n  text-underline-offset: 2px;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  position: fixed;\\r\\n  overflow-y: scroll;\\r\\n  scroll-behavior: smooth;\\r\\n  top: 5%;\\r\\n  left: 15%;\\r\\n  bottom: 5%;\\r\\n  width: 60%;\\r\\n  border: none;\\r\\n  background-color: rgba(150, 45, 22, 0.952);\\r\\n  margin: 0 auto;\\r\\n  padding: 2rem 3rem 0;\\r\\n  z-index: 100;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.meal_photo {\\r\\n  display: flex;\\r\\n  margin-left: 15rem;\\r\\n}\\r\\n\\r\\n.close_btn {\\r\\n  margin-left: 15rem;\\r\\n  font-size: 24px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.dish_title {\\r\\n  font-size: 32px;\\r\\n}\\r\\n\\r\\n.dish_info {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\n#youtube_link {\\r\\n  text-decoration: none;\\r\\n  color: rgb(75, 0, 0);\\r\\n  background-color: rgb(236, 122, 84);\\r\\n  border-radius: 10px;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n#comment_title {\\r\\n  font-size: 32px;\\r\\n  text-align: center;\\r\\n  margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.comments ul {\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  font-size: 20px;\\r\\n  list-style: none;\\r\\n  padding: 1rem 10px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.comment:first-child {\\r\\n  padding-top: 0;\\r\\n}\\r\\n\\r\\n.comment:nth-child(even) {\\r\\n  background-color: tomato;\\r\\n  border-radius: 2rem;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#comment_form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 50%;\\r\\n  text-align: center;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n#comment_form h3 {\\r\\n  font-size: 24px;\\r\\n  margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.form_item {\\r\\n  margin: 20px auto;\\r\\n  border: hidden;\\r\\n  border-radius: 30px;\\r\\n  padding: 25px;\\r\\n  resize: none;\\r\\n}\\r\\n\\r\\n#yourname {\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#submit_btn {\\r\\n  width: 20%;\\r\\n  background-color: tomato;\\r\\n  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.95);\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\ninput:focus::placeholder,\\r\\ntextarea:focus::placeholder {\\r\\n  color: transparent;\\r\\n}\\r\\n\\r\\n.items {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  grid-template-rows: repeat(2, 1fr);\\r\\n  margin: 5% 22.5% 10% 22.5%;\\r\\n\\r\\n  /* margin-left: 22.5%;\\r\\n  margin-top: 5%; */\\r\\n  width: 55%;\\r\\n  grid-column-gap: 20%;\\r\\n  grid-row-gap: 10%;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.image-item {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.item-data {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.item-data p {\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  background: linear-gradient(rgb(128, 128, 128), rgb(255, 255, 0));\\r\\n  -webkit-background-clip: text;\\r\\n  color: transparent;\\r\\n  line-height: 1.2;\\r\\n  font-weight: 600;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  width: 15%;\\r\\n  height: 60%;\\r\\n}\\r\\n\\r\\n.likes-nbr {\\r\\n  align-self: flex-end;\\r\\n  color: rgb(236, 69, 89);\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  height: 35px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  background-color: white;\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.btn span {\\r\\n  background-color: rgb(236, 69, 89);\\r\\n  height: 20px;\\r\\n  width: 75%;\\r\\n  border-radius: 5% 0 0 5%;\\r\\n  align-items: center;\\r\\n  padding: 7px 0;\\r\\n  color: rgb(212, 189, 109);\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  font-weight: 600;\\r\\n  font-size: 14px;\\r\\n  line-height: 1.4;\\r\\n}\\r\\n\\r\\n.comment-icon img {\\r\\n  height: 80%;\\r\\n  margin-top: 10%;\\r\\n}\\r\\n\\r\\n.comment-icon {\\r\\n  height: 20px;\\r\\n  width: 24%;\\r\\n  background-color: rgba(193, 193, 193, 0.5);\\r\\n  padding: 7px 0;\\r\\n}\\r\\n\\r\\n#main {\\r\\n  width: 100vw;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n#footer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  z-index: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: max-content;\\r\\n  color: rgb(212, 189, 109);\\r\\n  border: 2px solid black;\\r\\n  background-color: rgb(163, 49, 4);\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n#footer h3 {\\r\\n  text-align: center;\\r\\n  padding: 1rem;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.hr {\\r\\n  width: 43rem;\\r\\n  margin: 0 auto;\\r\\n  background: rgb(212, 189, 109);\\r\\n  border: 1px solid rgb(212, 189, 109);\\r\\n}\\r\\n\\r\\nh3 a.github_link {\\r\\n  color: inherit;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComm = async () => {\n  const subBtn = document.querySelector('#submit_btn');\n  const comUl = document.querySelector('#comment_div');\n  const id = subBtn.getAttribute('data');\n  const comCount = document.querySelector('#com_count');\n  const get = () => fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sNKLeXAeMyPD4Nokxkg0/comments?item_id=${id}`)\n    .then((res) => res.json());\n\n  const mealCom = await get();\n  comCount.innerHTML = `${mealCom.length > 0 ? `${mealCom.length}` : '0'}`;\n\n  comUl.innerHTML = '';\n\n  \n\n  if (mealCom.length > 0) {\n    mealCom.forEach((e) => {\n      console.log(typeof(mealCom))\n      const comLi = document.createElement('li');\n      comLi.className = 'comment';\n      comLi.innerHTML = `\n      <span class=\"bold\">${e.creation_date} ${e.username}</span>: ${e.comment}\n      `;\n      comUl.appendChild(comLi);\n    });\n  }\n};\n\nconst postComm = () => {\n  const userInp = document.querySelector('#yourname');\n  const userCom = document.querySelector('#insight');\n  const subBtn = document.querySelector('#submit_btn');\n  const post = (id, name, insight) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sNKLeXAeMyPD4Nokxkg0/comments',\n    {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n      body: JSON.stringify(\n        {\n          item_id: id,\n          username: name,\n          comment: insight,\n        },\n      ),\n    })\n    .then((res) => res.text());\n  getComm();\n\n  subBtn.addEventListener('click', async (e) => {\n    e.preventDefault();\n\n    const id = subBtn.getAttribute('data');\n    const name = userInp.value;\n    const comment = userCom.value;\n    if (name !== '' && comment !== '') {\n      userInp.value = '';\n      userCom.value = '';\n      await post(id, name, comment)\n        .then(() => getComm());\n    } else {\n      alert('Please insert both your name and comment');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComm);\n\n\n//# sourceURL=webpack://webpack-demo/./src/comments.js?");

/***/ }),

/***/ "./src/consume_meals.js":
/*!******************************!*\
  !*** ./src/consume_meals.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"url\": () => (/* binding */ url),\n/* harmony export */   \"consumeMeals\": () => (/* binding */ consumeMeals),\n/* harmony export */   \"counterHomeItems\": () => (/* binding */ counterHomeItems)\n/* harmony export */ });\nconst url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';\nconst consumeMeals = async () => {\n  const resp = await fetch(url);\n  return resp.json();\n};\n\nconst counterHomeItems = (container, nbrItems) => {\n  const elemnts = container.children;\n  if (elemnts.length === nbrItems) return true;\n  return false;\n};\n\n\n//# sourceURL=webpack://webpack-demo/./src/consume_meals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_Images_logo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/Images/logo.jpg */ \"./src/assets/Images/logo.jpg\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _assets_Images_like_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/Images/like.png */ \"./src/assets/Images/like.png\");\n/* harmony import */ var _assets_Images_comment_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/Images/comment.png */ \"./src/assets/Images/comment.png\");\n/* harmony import */ var _consume_meals_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consume_meals.js */ \"./src/consume_meals.js\");\n/* harmony import */ var _manage_likes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-likes.js */ \"./src/manage-likes.js\");\n\n\n\n\n\n\n\n\n// declarate variables //\nconst header = document.querySelector('header');\nconst cards = document.querySelector('.items');\n// build the home page header //\nheader.innerHTML = `<img src=${_assets_Images_logo_jpg__WEBPACK_IMPORTED_MODULE_1__} alt='logo'>`\n  + '<p class=\"chicken\"> Chicken meals(6)</p>'\n  + '<p> Sea food meals</p>'\n  + '<p> Meat meals </p>';\nheader.className = 'header';\n// //\nconst load = async () => {\n  const res = await ((0,_consume_meals_js__WEBPACK_IMPORTED_MODULE_5__.consumeMeals)());\n  const itemsArray = res.meals;\n  let i = 0;\n  const itemsIndex = {};\n  const resp = await (0,_manage_likes_js__WEBPACK_IMPORTED_MODULE_6__.getLikes)();\n  let likes = [];\n  if ((!resp.status) || (resp.status !== 200)) {\n    likes = resp.json();\n  }\n  while (!(0,_consume_meals_js__WEBPACK_IMPORTED_MODULE_5__.counterHomeItems)(cards, 6)) {\n    const item = itemsArray[i];\n    if ((!!item.strMeal) && (item.strMeal !== '') && (!!item.strMealThumb)) {\n      itemsIndex[i] = item.idMeal;\n      let j = likes.length;\n      let nbrLikes = 0;\n      if (j > 0) {\n        for (let k = 0; k < likes.length; k += 1) {\n          const itemObj = likes[k];\n          if (itemObj.item_id === itemsIndex[i]) {\n            nbrLikes = itemObj.likes;\n            break;\n          }\n          j -= 1;\n        }\n      }\n      if (j === 0) {\n        nbrLikes = 0;\n        (0,_manage_likes_js__WEBPACK_IMPORTED_MODULE_6__.postLikes)(itemsIndex[i], nbrLikes);\n      }\n      const div = document.createElement('div');\n      div.innerHTML = `<img src=${item.strMealThumb} alt = 'image item' class='image-item'>`\n      + `<div class='item-data'><p>${item.strMeal}</p><img src=${_assets_Images_like_png__WEBPACK_IMPORTED_MODULE_3__} alt='like icon' class='like'></div>`\n      + `<p class='likes-nbr'><span>${nbrLikes}</span> likes</p>`\n      + `<button class=\"btn\" id = \"${itemsIndex[i]}\"> <span>Comments</span> <div class='comment-icon'><img src=${_assets_Images_comment_png__WEBPACK_IMPORTED_MODULE_4__} ></div></button>`;\n      div.className = 'card';\n      div.style.gridColumn = `${(i % 3) + 1}/ span 1`;\n      div.style.gridRow = `${Math.floor(i / 3) + 1}/ span 1`;\n      cards.appendChild(div);\n      const btn = document.getElementById(`${itemsIndex[i]}`);\n      btn.addEventListener('click', () => {\n        (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.loadModal)(itemsArray, item.idMeal);\n      });\n    }\n    i += 1;\n  }\n};\nload();\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/manage-likes.js":
/*!*****************************!*\
  !*** ./src/manage-likes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"url\": () => (/* binding */ url),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst idApp = 'sNKLeXAeMyPD4Nokxkg0';\n\nconst getLikes = async () => {\n  const likeUrl = `${url + idApp}/likes`;\n  const resp = await fetch(likeUrl);\n  return resp;\n};\nconst postLikes = async (id = '', nbrLikes = 0) => {\n  const likeUrl = `${url + idApp}/likes`;\n  const data = {\n    item_id: id,\n    likes: nbrLikes,\n  };\n  const resp = await fetch(likeUrl, {\n    method: 'POST',\n    headers: {\n      'content-type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  }).then((res) => res);\n  return resp;\n};\n\n\n//# sourceURL=webpack://webpack-demo/./src/manage-likes.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadModal),\n/* harmony export */   \"loadModal\": () => (/* binding */ loadModal)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/comments.js\");\n\n\nconst modal = document.querySelector('.modal');\nconst main = document.querySelector('#main');\n\nfunction loadModal(meals, num) {\n  const mealArr = meals.filter((o) => o.idMeal === num);\n  const mealObj = mealArr[0];\n\n  main.classList.add('isblur');\n  modal.classList.remove('hidden');\n  main.classList.add('noscroll');\n  modal.id = num;\n  const photoDiv = document.createElement('div');\n  photoDiv.classList.add('meal_photo');\n  modal.appendChild(photoDiv);\n  const image = document.createElement('img');\n  image.src = mealObj.strMealThumb;\n  // image.alt = 'Roast Chicken';\n  image.height = '300';\n  photoDiv.appendChild(image);\n  const closeBtn = document.createElement('i');\n  closeBtn.classList.add('fas');\n  closeBtn.classList.add('fa-times');\n  closeBtn.classList.add('close_btn');\n  photoDiv.appendChild(closeBtn);\n  const dishTitle = document.createElement('h3');\n  dishTitle.classList.add('dish_title');\n  dishTitle.innerHTML = mealObj.strMeal;\n  modal.appendChild(dishTitle);\n  const dishInfo = document.createElement('div');\n  dishInfo.classList.add('dish_info');\n  modal.appendChild(dishInfo);\n  const category = document.createElement('p');\n  const mainI = document.createElement('p');\n  const area = document.createElement('p');\n  const video = document.createElement('p');\n  category.innerHTML = `Category: ${mealObj.strCategory}`;\n  mainI.innerHTML = `Main ingredient: ${mealObj.strIngredient1}`;\n  area.innerHTML = `Area: ${mealObj.strArea}`;\n  video.innerHTML = `Youtube: <a href=\"${mealObj.strYoutube}\" target = \"blank\" id = \"youtube_link\">Tutorial</a>`;\n  dishInfo.appendChild(category);\n  dishInfo.appendChild(mainI);\n  dishInfo.appendChild(area);\n  dishInfo.appendChild(video);\n  const comments = document.createElement('div');\n  comments.classList.add('comments');\n  modal.appendChild(comments);\n  const commentTitle = document.createElement('h3');\n  commentTitle.id = 'comment_title';\n  comments.appendChild(commentTitle);\n  commentTitle.innerHTML = 'Comments <span id = \"com_count\">(0)</span>';\n  const commentDiv = document.createElement('ul');\n  commentDiv.id = 'comment_div';\n  comments.appendChild(commentDiv);\n  commentDiv.innerHTML += '<li class=\"comment\">Comment: Comment 1</li>';\n  commentDiv.innerHTML += '<li class=\"comment\">Comment: Comment 2 </li>';\n  const form = document.createElement('form');\n  form.id = 'comment_form';\n  modal.appendChild(form);\n  const formTitle = document.createElement('h3');\n  formTitle.innerHTML = 'Add a comment';\n  form.appendChild(formTitle);\n  const nameInp = document.createElement('input');\n  nameInp.type = 'text';\n  nameInp.id = 'yourname';\n  nameInp.placeholder = 'Your name';\n  nameInp.className = 'form_item';\n  nameInp.required = true;\n  form.appendChild(nameInp);\n  const commentText = document.createElement('textarea');\n  commentText.name = 'insights';\n  commentText.id = 'insight';\n  commentText.cols = '30';\n  commentText.rows = '10';\n  commentText.className = 'form_item';\n  commentText.placeholder = 'Your Comment';\n  commentText.required = true;\n  form.appendChild(commentText);\n  const submitCom = document.createElement('button');\n  submitCom.type = 'submit';\n  submitCom.className = 'form_item';\n  submitCom.id = 'submit_btn';\n  submitCom.setAttribute('data', num);\n  submitCom.innerHTML = 'Comment';\n  form.appendChild(submitCom);\n  (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const closeModal = () => {\n    while (modal.firstChild) {\n      modal.removeChild(modal.firstChild);\n    }\n    modal.classList.add('hidden');\n    main.classList.remove('isblur');\n    main.classList.remove('noscroll');\n  };\n  closeBtn.addEventListener('click', closeModal);\n}\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modal.js?");

/***/ }),

/***/ "./src/assets/Images/comment.png":
/*!***************************************!*\
  !*** ./src/assets/Images/comment.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f35706bd6f239dc12cf4.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/Images/comment.png?");

/***/ }),

/***/ "./src/assets/Images/like.png":
/*!************************************!*\
  !*** ./src/assets/Images/like.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"264ca1c6c5af034e3dc7.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/Images/like.png?");

/***/ }),

/***/ "./src/assets/Images/logo.jpg":
/*!************************************!*\
  !*** ./src/assets/Images/logo.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd47e30e804add639dcd.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/assets/Images/logo.jpg?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;