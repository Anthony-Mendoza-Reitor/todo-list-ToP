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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\nbody {\n    background-color: antiquewhite;\n    margin: 0px;\n    padding: 0px;\n  }\n.container{\n    display: flex;\n    height: 900px;\n}\n.leftSide{\n    background-color: antiquewhite;\n    width: 14%;\n    border-right-style: groove;\n}\n.title, .titleP{\n    font-size: 32px;\n    width: 30px;\n    margin-top: 12px;\n    margin-left: 8px;\n}\n.leftTitle{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 95%;\n}\n#addButton{\n    border-radius: 150px;\n    font-size: 20px;\n    padding: 4px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    height: fit-content;\n    font-weight: bold;\n    background-color: green;\n    color: white;\n    text-shadow: 1px 1px rgb(0, 0, 0);\n}\n.addButton{\n    display: flex;\n    align-content: center;\n    margin-top: 4px;\n}\n#defaultProject, p[class*=\"ProjectNAMES\"]{\n    width: fit-content;\n    font-size: 22px;\n    background-color:  rgb(121, 165, 121);\n    color: white;\n    text-shadow: 1px 1px rgb(0, 0, 0);\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 5px;\n    margin-left: 12px;\n    padding: 4px;\n}\ndiv[class*=\"ProjectsDIV\"]{\n    display: flex;\n}\n.rightcontent{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n.leftcontent > div > button{\n    height: 22px;\n    border-width: 0.5px;\n    border-radius: 20px;\n}\n.rightcontent > div > div > button{\n    height: 22px;\n    border-width: 0.5px;\n    border-radius: 20px;\n}\ndiv[class*=\"taskDIV\"] {\n    display: flex;\n    padding: 8px;\n    margin-top: 4px;\n    margin-left: 4px;\n    width: 90%;\n    height: fit-content;\n    justify-content: space-around;\n    text-align: left;\n    align-items: center;\n    background-color: white;\n    border-style: solid;\n    border-width: 0.5px;\n    border-radius: 4px;\n}\n.taskDIV > *{\n    margin: 8px;\n    height: fit-content;\n}\n.taskDel{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.nameDele{\n    width: fit-content;\n    display: flex;\n    height: fit-content;\n    justify-content: center;\n    align-items: start;\n}\n.rightSide{\n    background-color: rgb(214, 187, 152);\n    width: 86%;\n}\n.rightTitle{\n    padding: auto;\n    display: flex;\n    justify-content: space-between;\n    margin-left: 50px;\n    width: 90%;\n}\n#addTaskButton{\n    border-radius: 5px;\n    font-size: 20px;\n    font-weight: bold;\n    align-content: center;\n    background-color: green;\n    color: white;\n    text-shadow: 1px 1px rgb(0, 0, 0);\n}\n.addTaskButton{\n    display: flex;\n    align-content: center;\n    margin-top: 4px;\n}\n/* This is for add project Form */\n\n.modular1{\n    position: fixed;\n    top: 40%;\n    left: 40%;\n    background-color: white;\n    height: 140px;\n    width: 350px;\n    border-style: solid;\n    border-color: grey;\n    border-radius: 8px;\n    visibility: hidden;\n}\n.modularr{\n    height: 80px;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 12px;\n}\n.formhead{\n    width: 300px;\n    font-size: 24px;\n    font-style: italic;\n    text-align: left;\n    margin-bottom: 12px;\n}\n#FormprojectName{\n    border-radius: 4px;\n    font-size: 20px;\n    padding: 0px;\n    margin: 0px;\n    margin-bottom: 12px;\n}\n.PNbuttonsBucket{\n    width: 300px;\n    display: flex;\n    justify-content: end;\n}\n#cancelButton1, #cancelButton2, #cancelButton3, #cancelButton4{\n    border-radius: 20px;\n    background-color: rgb(136, 98, 98);\n    color: white;\n    text-shadow: 1px 1px rgb(0, 0, 0);\n}\n#createButton1, #createButton2,  #createButton3,  #createButton4{\n    border-radius: 20px;\n    background-color: green;\n    color: white;\n    text-shadow: 1px 1px rgb(0, 0, 0);\n    margin-left: 5px;\n}\n#deleteButton4, #deleteButton3{\n    border-radius: 20px;\n    background-color: rgb(255, 0, 0);\n    color: white;\n    text-shadow: 1px 1px rgb(0, 0, 0);\n}\n\n/* This is for add Task Form */\n\n.modular2{\n    position: fixed;\n    top: 40%;\n    left: 40%;\n    background-color: white;\n    height: 300px;\n    width: 350px;\n    border-style: solid;\n    border-color: grey;\n    border-radius: 8px;\n    visibility: hidden;\n}\n.modularr2{\n    height: 160px;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 12px;\n}\n.FormModular2{\n    display: flex;\n    flex-direction: column;\n}\n.formhead2{\n    width: 300px;\n    font-size: 24px;\n    font-style: italic;\n    text-align: left;\n    margin-bottom: 12px;\n}\n#FormtaskName{\n    border-radius: 4px;\n    font-size: 20px;\n    padding: 0px;\n    margin: 0px;\n    margin-bottom: 12px;\n}\n#FormtaskDescription{\n    height: 40px;\n    width: 280px;\n    margin-bottom: 12px;\n}\n#FormtaskDueDate{\n    margin-right: 12px;\n    margin-bottom: 4px;\n}\n.TNlabel, .TDlabel, .TPlabel, .DDlabel{\n    width: 300px;\n    display: flex;\n    justify-content: left;\n    text-align: left;\n}\n\n/* This is for delete a project Form */\n\n.modular3{\n    position: fixed;\n    top: 40%;\n    left: 40%;\n    background-color: white;\n    height: 140px;\n    width: 350px;\n    border-style: solid;\n    border-color: grey;\n    border-radius: 8px;\n    visibility: hidden;\n}\n.modularr3{\n    height: 80px;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 12px;\n}\n.projectDeleteHeader{\n    width: 300px;\n    font-size: 24px;\n    font-style: italic;\n    text-align: left;\n    margin-bottom: 4px;\n}\n.projectDeleteParagraph{\n    color: rgb(255, 0, 0);\n    text-shadow: 0.5px 1px rgb(0, 0, 0);\n}\n.DeletebuttonsBucket{\n    width: 300px;\n    display: flex;\n    justify-content: end;\n}\n\n/* This is for delete a Task Form */\n\n.modular4{\n    position: fixed;\n    top: 40%;\n    left: 40%;\n    background-color: white;\n    height: 140px;\n    width: 350px;\n    border-style: solid;\n    border-color: grey;\n    border-radius: 8px;\n    visibility: hidden;\n}\n.modularr4{\n    height: 80px;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 12px;\n}\n.projectDeleteHeader2{\n    width: 300px;\n    font-size: 24px;\n    font-style: italic;\n    text-align: left;\n    margin-bottom: 4px;\n}\n.projectDeleteParagraph2{\n    color: rgb(255, 0, 0);\n    text-shadow: 0.5px 1px rgb(0, 0, 0);\n}\n.DeletebuttonsBucket2{\n    width: 300px;\n    display: flex;\n    justify-content: end;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list-top/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list-top/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list-top/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list-top/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list-top/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list-top/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list-top/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list-top/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list-top/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list-top/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/createnewproject.js":
/*!*********************************!*\
  !*** ./src/createnewproject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewProject: () => (/* binding */ createNewProject)\n/* harmony export */ });\n/* harmony import */ var _home_anthoxx2001_repos_todo_list_ToP_src_projectconst_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/projectconst.js */ \"./src/projectconst.js\");\n/* harmony import */ var _home_anthoxx2001_repos_todo_list_ToP_src_taskDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/taskDOM.js */ \"./src/taskDOM.js\");\n//This JS will contain the process to add a project to DOM\n//Imports create new project/task JS\n\n//Imports the DOM manipulation for tasks\n\n\n\nfunction createNewProject(counter){\n    //Gets the name of the project from a constructor function\n    let project = (0,_home_anthoxx2001_repos_todo_list_ToP_src_projectconst_js__WEBPACK_IMPORTED_MODULE_0__.projectconst)();\n    const Parent = document.getElementsByClassName(\"leftcontent\")[0];\n    const projectPara = document.createElement('p');\n    projectPara.innerHTML = project.name;\n    projectPara.className = `ProjectNAMES${counter}`;\n    // Creates a delete button\n    const projectDel = document.createElement('button');\n    projectDel.innerHTML = 'X';\n    projectDel.style.color = 'red';\n    projectDel.id = `projectDEL${counter}`;\n    projectDel.className = 'projectDEL';\n    //Creates a div for the project & button\n    const proDiv = document.createElement('div');\n    proDiv.className = `ProjectsDIV${counter}`;\n    proDiv.appendChild(projectPara);\n    proDiv.appendChild(projectDel);\n    Parent.appendChild(proDiv);\n    //Adds event listeners to all buttons\n    const selectdeletes = document.querySelectorAll('[class^=\"projectDEL\"');\n    selectdeletes.forEach((button) => {\n        button.addEventListener(\"click\", () =>{\n            document.getElementsByClassName(\"modular3\")[0].style.visibility = \"visible\";\n            document.getElementsByClassName(\"container\")[0].style.filter = \"blur(5px)\";\n            let project2Del = button.parentElement;\n            document.getElementById('deleteButton3').addEventListener(\"click\", function() {\n                project2Del.innerHTML='';\n                document.getElementsByClassName(\"modular3\")[0].style.visibility = \"hidden\";\n                document.getElementsByClassName(\"container\")[0].style.filter = \"none\";\n            }); \n        });\n    });\n    //Adds event listener to all projects\n    const selectprojects = document.querySelectorAll('[class^=\"ProjectNAMES\"');\n    selectprojects.forEach((p) => {\n        p.addEventListener(\"click\", () =>{\n            //Add a DOM call to change the task section\n            console.log(p.textContent);\n            document.getElementsByClassName(\"title\")[0].innerHTML = p.textContent;\n        });\n    });\n}\n\n//# sourceURL=webpack://todo-list-top/./src/createnewproject.js?");

/***/ }),

/***/ "./src/createnewtask.js":
/*!******************************!*\
  !*** ./src/createnewtask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewTask: () => (/* binding */ createNewTask)\n/* harmony export */ });\n/* harmony import */ var _home_anthoxx2001_repos_todo_list_ToP_src_taskconst_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/taskconst.js */ \"./src/taskconst.js\");\n//This JS will contain the process to add a task to DOM\n//Imports create new project/task JS\n\n\nfunction createNewTask(count){\n    let task = (0,_home_anthoxx2001_repos_todo_list_ToP_src_taskconst_js__WEBPACK_IMPORTED_MODULE_0__.taskconst)();\n    const Parent = document.getElementsByClassName(\"rightcontent\")[0];\n    //Gets the name of the task from a constructor function\n    const taskPara = document.createElement('p');\n    taskPara.innerHTML = task.name;\n    taskPara.className = 'taskNAMES';\n    // Creates a delete button\n    const taskDel = document.createElement('button');\n    taskDel.innerHTML = 'X';\n    taskDel.style.color = 'red';\n    taskDel.id = `taskDEL${count}`;\n    taskDel.className = 'taskDEL';\n    //Creates a div for task name and delete button\n    const nameDele = document.createElement(\"div\");\n    nameDele.className = \"nameDele\";\n    //Creates a description from const\n    const taskdes = document.createElement('p');\n    taskdes.innerHTML = task.description;\n    taskdes.className = 'taskDESC';\n    //Creates a Due date from const\n    const taskdue = document.createElement('p');\n    taskdue.innerHTML = task.duedate;\n    taskdue.className = 'taskDUE';\n    //Creates a Priority form const\n    const taskpri = document.createElement('p');\n    taskpri.innerHTML = task.priority;\n    taskpri.className = 'taskPRI';\n    //Creates a div for all the tasks items\n    const taskDiv = document.createElement('div');\n    taskDiv.className = `taskDIV${count}`;\n    nameDele.appendChild(taskDel);\n    nameDele.appendChild(taskPara);\n    taskDiv.appendChild(nameDele);\n    taskDiv.appendChild(taskdes);\n    taskDiv.appendChild(taskdue);\n    taskDiv.appendChild(taskpri);\n    Parent.appendChild(taskDiv);\n    //Adds 1 to counter\n    count ++;\n    //Adds event lsitener to alls\n    const selecttdeletes = document.querySelectorAll('[class^=\"taskDEL\"');\n    selecttdeletes.forEach((button) => {\n        button.addEventListener(\"click\", () =>{\n            document.getElementsByClassName(\"modular4\")[0].style.visibility = \"visible\";\n            document.getElementsByClassName(\"container\")[0].style.filter = \"blur(5px)\";\n            let Del2 = button.parentElement;\n            let task2Del = Del2.parentElement;\n            document.getElementById('deleteButton4').addEventListener(\"click\", function() {\n                task2Del.remove();\n                document.getElementsByClassName(\"modular4\")[0].style.visibility = \"hidden\";\n                document.getElementsByClassName(\"container\")[0].style.filter = \"none\";\n            }); \n        });\n    });\n}\n\n//# sourceURL=webpack://todo-list-top/./src/createnewtask.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   events: () => (/* binding */ events)\n/* harmony export */ });\n/* harmony import */ var _home_anthoxx2001_repos_todo_list_ToP_src_createnewproject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/createnewproject.js */ \"./src/createnewproject.js\");\n/* harmony import */ var _home_anthoxx2001_repos_todo_list_ToP_src_createnewtask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/createnewtask.js */ \"./src/createnewtask.js\");\n//This JS will contain the event listener for all modulars\n//Imports create new project/task JS\n\n\nlet counter = 1;\nlet count = 1;\nfunction events(){\n    //Event Listener for add Project\n    document.getElementById('addButton').addEventListener(\"click\", function() {\n        document.getElementsByClassName(\"modular1\")[0].style.visibility = \"visible\";\n        document.getElementsByClassName(\"container\")[0].style.filter = \"blur(5px)\";\n    }); \n    //Event Listener to Create a new project\n    document.getElementById('createButton1').addEventListener(\"click\", function() {\n        (0,_home_anthoxx2001_repos_todo_list_ToP_src_createnewproject_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(counter);\n        document.getElementsByClassName(\"modular1\")[0].style.visibility = \"hidden\";\n        document.getElementById('FormprojectName').value = '';\n        document.getElementsByClassName(\"container\")[0].style.filter = \"none\";\n        counter ++;\n    });\n    //Event Listener to Delete a project\n    const selectdeletes = document.querySelectorAll('[class^=\"projectDEL\"');\n    selectdeletes.forEach((button) => {\n        button.addEventListener(\"click\", () =>{\n            document.getElementsByClassName(\"modular3\")[0].style.visibility = \"visible\";\n        });\n    });\n    //Event Listener for add Task\n    document.getElementById('addTaskButton').addEventListener(\"click\", function() {\n        document.getElementsByClassName(\"modular2\")[0].style.visibility = \"visible\";\n        document.getElementsByClassName(\"container\")[0].style.filter = \"blur(5px)\";\n    });\n    //Event Listener to Create a new task\n    document.getElementById('createButton2').addEventListener(\"click\", function() {\n        (0,_home_anthoxx2001_repos_todo_list_ToP_src_createnewtask_js__WEBPACK_IMPORTED_MODULE_1__.createNewTask)(count);\n        document.getElementsByClassName(\"modular2\")[0].style.visibility = \"hidden\";\n        document.getElementById('FormtaskName').value = '';\n        document.getElementById('FormtaskDescription').value = '';\n        document.getElementById('FormtaskDueDate').value = '';\n        document.getElementById('FormtaskPriority').value = '';\n        document.getElementsByClassName(\"container\")[0].style.filter = \"none\";\n        count ++;\n    }); \n    //Event Listener for cancel action 1\n    document.getElementById('cancelButton1').addEventListener(\"click\", function() {\n        document.getElementsByClassName(\"modular1\")[0].style.visibility = \"hidden\";\n        document.getElementById('FormprojectName').value = '';\n        document.getElementsByClassName(\"container\")[0].style.filter = \"none\";\n    }); \n    //Event Listener for cancel action 2\n    document.getElementById('cancelButton2').addEventListener(\"click\", function() {\n        document.getElementsByClassName(\"modular2\")[0].style.visibility = \"hidden\";\n        document.getElementById('FormtaskName').value = '';\n        document.getElementById('FormtaskDescription').value = '';\n        document.getElementById('FormtaskDueDate').value = '';\n        document.getElementById('FormtaskPriority').value = '';\n        document.getElementsByClassName(\"container\")[0].style.filter = \"none\";\n    }); \n    //Event Listener for cancel action 3 \n    document.getElementById('cancelButton3').addEventListener(\"click\", function() {\n        document.getElementsByClassName(\"modular3\")[0].style.visibility = \"hidden\";\n        document.getElementsByClassName(\"container\")[0].style.filter = \"none\";\n    }); \n    //Event Listener for cancel action 4\n    document.getElementById('cancelButton4').addEventListener(\"click\", function() {\n        document.getElementsByClassName(\"modular4\")[0].style.visibility = \"hidden\";\n        document.getElementsByClassName(\"container\")[0].style.filter = \"none\";\n    }); \n    //Event Listener to change to default project\n    document.getElementById('defaultProject').addEventListener(\"click\", function() {\n        document.getElementsByClassName(\"title\")[0].innerHTML = document.getElementById('defaultProject').textContent;\n    }); \n}\n\n//# sourceURL=webpack://todo-list-top/./src/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_anthoxx2001_repos_todo_list_ToP_src_modular1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/modular1.js */ \"./src/modular1.js\");\n/* harmony import */ var _home_anthoxx2001_repos_todo_list_ToP_src_modular2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/modular2.js */ \"./src/modular2.js\");\n/* harmony import */ var _home_anthoxx2001_repos_todo_list_ToP_src_modular3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/modular3.js */ \"./src/modular3.js\");\n/* harmony import */ var _home_anthoxx2001_repos_todo_list_ToP_src_modular4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/modular4.js */ \"./src/modular4.js\");\n/* harmony import */ var _home_anthoxx2001_repos_todo_list_ToP_src_events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/events.js */ \"./src/events.js\");\n// index.js entry points for all styles sheets and JS \n\n//imports the styles sheets\n\n\n//Imports Modular1.js Modular2.js Modular3.js Modular4.js\n\n\n\n\n\n//Calls forms to create them but hidden with CSS\n(0,_home_anthoxx2001_repos_todo_list_ToP_src_modular1_js__WEBPACK_IMPORTED_MODULE_1__.modular)();\n(0,_home_anthoxx2001_repos_todo_list_ToP_src_modular2_js__WEBPACK_IMPORTED_MODULE_2__.modular2)();\n(0,_home_anthoxx2001_repos_todo_list_ToP_src_modular3_js__WEBPACK_IMPORTED_MODULE_3__.modular3)();\n(0,_home_anthoxx2001_repos_todo_list_ToP_src_modular4_js__WEBPACK_IMPORTED_MODULE_4__.modular4)();\n\n//Imports events.js\n\n(0,_home_anthoxx2001_repos_todo_list_ToP_src_events_js__WEBPACK_IMPORTED_MODULE_5__.events)();\n\n//# sourceURL=webpack://todo-list-top/./src/index.js?");

/***/ }),

/***/ "./src/modular1.js":
/*!*************************!*\
  !*** ./src/modular1.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modular: () => (/* binding */ modular)\n/* harmony export */ });\n//This JS will contain the create new project form\nfunction modular(){\n    //This stores the Parent for the created elements\n    const Parent = document.getElementsByClassName(\"modular1\")[0];\n    Parent.innerHTML = '';\n    //Creates a div to the forms elemenst\n    const modularr = document.createElement(\"div\");\n    modularr.className = \"modularr\";\n    //This creates a header\n    const formhead = document.createElement(\"h\");\n    formhead.innerHTML = \"New Project\";\n    formhead.className = \"formhead\";\n    //This is to create a form\n    const form1 = document.createElement(\"form\");\n    form1.setAttribute(\"method\",\"text\");\n    //Project Name label\n    const PNlabel = document.createElement(\"Label\");\n    PNlabel.innerHTML = \"Project Name\";\n    PNlabel.className = \"PNlabel\";\n    //This is to create an input for Project Name\n    const PN = document.createElement(\"input\");\n    PN.setAttribute(\"type\", \"text\");\n    PN.setAttribute(\"name\", \"ProjectName\");\n    PN.setAttribute(\"maxlength\", \"8\");\n    PN.setAttribute(\"placeholder\", \"Project name...\");\n    PN.id = \"FormprojectName\";\n    //Appends the input to the form\n    form1.appendChild(PNlabel);\n    form1.appendChild(PN);\n    //Creates a button\n    var bt1 = document.createElement(\"button\");\n    var tt1 = document.createTextNode(\"Cancel\");\n    bt1.appendChild(tt1);\n    bt1.id = \"cancelButton1\";\n    var bt2 = document.createElement(\"button\");\n    var tt2 = document.createTextNode(\"Create\");\n    bt2.appendChild(tt2);\n    bt2.id = \"createButton1\";\n    //Creates a div to store the buttons\n    const butBucket = document.createElement(\"div\");\n    butBucket.className = \"PNbuttonsBucket\";\n    //Adds the buttons to the bucket\n    butBucket.appendChild(bt1);\n    butBucket.appendChild(bt2);\n    //Appends the header to the modularr\n    modularr.appendChild(formhead);\n    //Appends the form to the modularr\n    modularr.appendChild(form1);\n    //Adds the bucket to modularr\n    modularr.appendChild(butBucket);\n    //Adds Modularr to the forms bucket\n    Parent.appendChild(modularr);\n}\n\n//# sourceURL=webpack://todo-list-top/./src/modular1.js?");

/***/ }),

/***/ "./src/modular2.js":
/*!*************************!*\
  !*** ./src/modular2.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modular2: () => (/* binding */ modular2)\n/* harmony export */ });\n//This JS will contain the create new task form\nfunction modular2(){\n    //This stores the Parent for the created elements\n    const Parent = document.getElementsByClassName(\"modular2\")[0];\n    Parent.innerHTML = '';\n    //Creates a div to the forms elemenst\n    const modularr = document.createElement(\"div\");\n    modularr.className = \"modularr2\";\n    //This creates a header\n    const formhead = document.createElement(\"h\");\n    formhead.innerHTML = \"New Task\";\n    formhead.className = \"formhead2\";\n    //This is to create a form\n    const form1 = document.createElement(\"form\");\n    form1.setAttribute(\"method\",\"text\");\n    //Task Name label\n    const TNlabel = document.createElement(\"Label\");\n    TNlabel.innerHTML = \"Task Name\";\n    TNlabel.className = \"TNlabel\";\n    //This is to create an input for Task Name\n    const TN = document.createElement(\"input\");\n    TN.setAttribute(\"type\", \"text\");\n    TN.setAttribute(\"name\", \"ProjectName\");\n    TN.setAttribute(\"placeholder\", \"Task name...\");\n    TN.setAttribute(\"maxlength\", \"15\");\n    TN.id = \"FormtaskName\";\n    //Task Description label\n    const TDlabel = document.createElement(\"Label\");\n    TDlabel.innerHTML = \"Task Description\";\n    TDlabel.className = \"TDlabel\";\n    //This is to create an input for Task Description\n    const TD = document.createElement(\"input\");\n    TD.setAttribute(\"type\", \"text\");\n    TD.setAttribute(\"name\", \"ProjectName\");\n    TD.setAttribute(\"placeholder\", \"Task Description...\");\n    TD.setAttribute(\"maxlength\", \"30\");\n    TD.id = \"FormtaskDescription\";\n    //Due date label\n    const DDlabel = document.createElement(\"Label\");\n    DDlabel.innerHTML = \"Due Date\";\n    DDlabel.className = \"DDlabel\";\n    //This is to create an input for Task Due Date\n    const TDD = document.createElement(\"input\");\n    TDD.setAttribute(\"type\", \"date\");\n    TDD.setAttribute(\"name\", \"ProjectName\");\n    TDD.setAttribute(\"placeholder\", \"Task Title...\");\n    TDD.id = \"FormtaskDueDate\";\n    //task Priority label\n    const TPlabel = document.createElement(\"Label\");\n    TPlabel.innerHTML = \"Priority\";\n    TPlabel.className = \"TPlabel\";\n    //This is to create an input for Task Priority\n    const TP = document.createElement(\"SELECT\");\n    const opL = document.createElement(\"option\");\n    const opM = document.createElement(\"option\");\n    const opH = document.createElement(\"option\");\n    const optL = document.createTextNode(\"Low\");\n    const optM = document.createTextNode(\"Medium\");\n    const optH = document.createTextNode(\"High\");\n    TP.setAttribute(\"id\", \"FormtaskPriority\");\n    opL.setAttribute(\"value\", \"Low\");\n    opL.appendChild(optL);\n    opM.setAttribute(\"value\", \"Medium\");\n    opM.appendChild(optM);\n    opH.setAttribute(\"value\", \"High\");\n    opH.appendChild(optH);\n    TP.appendChild(opL);\n    TP.appendChild(opM);\n    TP.appendChild(opH);\n    //Appends the inputs to the form\n    form1.appendChild(TNlabel);\n    form1.appendChild(TN);\n    form1.appendChild(TDlabel);\n    form1.appendChild(TD);\n    form1.appendChild(DDlabel);\n    form1.appendChild(TDD);\n    form1.appendChild(TPlabel);\n    form1.appendChild(TP);\n    //Creates a button\n    var bt1 = document.createElement(\"button\");\n    var tt1 = document.createTextNode(\"Cancel\");\n    bt1.appendChild(tt1);\n    bt1.id = \"cancelButton2\";\n    var bt2 = document.createElement(\"button\");\n    var tt2 = document.createTextNode(\"Create\");\n    bt2.appendChild(tt2);\n    bt2.id = \"createButton2\";\n    //Creates a div to store the buttons\n    const butBucket = document.createElement(\"div\");\n    butBucket.className = \"PNbuttonsBucket\";\n    //Adds the buttons to the bucket\n    butBucket.appendChild(bt1);\n    butBucket.appendChild(bt2);\n    //Appends the header to the modularr\n    modularr.appendChild(formhead);\n    //Appends the form to the modularr\n    modularr.appendChild(form1);\n    //Adds the bucket to modularr\n    modularr.appendChild(butBucket);\n    //Adds Modularr to the forms bucket\n    Parent.appendChild(modularr);\n}\n\n//# sourceURL=webpack://todo-list-top/./src/modular2.js?");

/***/ }),

/***/ "./src/modular3.js":
/*!*************************!*\
  !*** ./src/modular3.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modular3: () => (/* binding */ modular3)\n/* harmony export */ });\n//This JS will contain the create new project form\nfunction modular3(){\n    //This stores the Parent for the created elements\n    const Parent = document.getElementsByClassName(\"modular3\")[0];\n    Parent.innerHTML = '';\n    //Creates a div to the forms elemenst\n    const modularr = document.createElement(\"div\");\n    modularr.className = \"modularr3\";\n    //This creates a header\n    const formhead = document.createElement(\"h\");\n    formhead.innerHTML = \"Delete Project\";\n    formhead.className = \"projectDeleteHeader\";\n    //This creates a header\n    const formpara = document.createElement(\"p\");\n    formpara.innerHTML = \"Are you sure you want to delete this project? All associated tasks will be deleted.\";\n    formpara.className = \"projectDeleteParagraph\";\n    //Creates a button\n    var bt1 = document.createElement(\"button\");\n    var tt1 = document.createTextNode(\"Cancel\");\n    bt1.appendChild(tt1);\n    bt1.id = \"cancelButton3\";\n    var bt2 = document.createElement(\"button\");\n    var tt2 = document.createTextNode(\"Delete\");\n    bt2.appendChild(tt2);\n    bt2.id = \"deleteButton3\";\n    //Creates a div to store the buttons\n    const butBucket = document.createElement(\"div\");\n    butBucket.className = \"DeletebuttonsBucket\";\n    //Adds the buttons to the bucket\n    butBucket.appendChild(bt1);\n    butBucket.appendChild(bt2);\n    //Appends the header to the modularr\n    modularr.appendChild(formhead);\n    modularr.appendChild(formpara);\n    //Adds the bucket to modularr\n    modularr.appendChild(butBucket);\n    //Adds Modularr to the delete project bucket\n    Parent.appendChild(modularr);\n}\n\n//# sourceURL=webpack://todo-list-top/./src/modular3.js?");

/***/ }),

/***/ "./src/modular4.js":
/*!*************************!*\
  !*** ./src/modular4.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modular4: () => (/* binding */ modular4)\n/* harmony export */ });\n//This JS will contain the create new project form\nfunction modular4(){\n    //This stores the Parent for the created elements\n    const Parent = document.getElementsByClassName(\"modular4\")[0];\n    Parent.innerHTML = '';\n    //Creates a div to the forms elemenst\n    const modularr = document.createElement(\"div\");\n    modularr.className = \"modularr4\";\n    //This creates a header\n    const formhead = document.createElement(\"h\");\n    formhead.innerHTML = \"Delete Task\";\n    formhead.className = \"projectDeleteHeader2\";\n    //This creates a header\n    const formpara = document.createElement(\"p\");\n    formpara.innerHTML = \"Are you sure you want to delete this task?\";\n    formpara.className = \"projectDeleteParagraph2\";\n    //Creates a button\n    var bt1 = document.createElement(\"button\");\n    var tt1 = document.createTextNode(\"Cancel\");\n    bt1.appendChild(tt1);\n    bt1.id = \"cancelButton4\";\n    var bt2 = document.createElement(\"button\");\n    var tt2 = document.createTextNode(\"Delete\");\n    bt2.appendChild(tt2);\n    bt2.id = \"deleteButton4\";\n    //Creates a div to store the buttons\n    const butBucket = document.createElement(\"div\");\n    butBucket.className = \"DeletebuttonsBucket2\";\n    //Adds the buttons to the bucket\n    butBucket.appendChild(bt1);\n    butBucket.appendChild(bt2);\n    //Appends the header to the modularr\n    modularr.appendChild(formhead);\n    modularr.appendChild(formpara);\n    //Adds the bucket to modularr\n    modularr.appendChild(butBucket);\n    //Adds Modularr to the delete project bucket\n    Parent.appendChild(modularr);\n}\n\n//# sourceURL=webpack://todo-list-top/./src/modular4.js?");

/***/ }),

/***/ "./src/projectconst.js":
/*!*****************************!*\
  !*** ./src/projectconst.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectconst: () => (/* binding */ projectconst)\n/* harmony export */ });\n//This JS will contain the process to create a new project\n\nfunction projectconst(){\n    function Project (name, task){\n        this.name = name; \n        this.task = task;\n    }\n    let namef = document.getElementById('FormprojectName');\n    let project = new Project (namef.value);\n    return (project);\n}\n    \n\n//# sourceURL=webpack://todo-list-top/./src/projectconst.js?");

/***/ }),

/***/ "./src/taskDOM.js":
/*!************************!*\
  !*** ./src/taskDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskDOM: () => (/* binding */ taskDOM)\n/* harmony export */ });\n//This JS will contain the process to change the task DOM for the correct project\n\nfunction taskDOM(project){\n    const header = document.getElementsByClassName(\"title\")[0];\n    const taskcont = document.getElementsByClassName(\"rightcontent\")[0];\n    \n}\n\n//# sourceURL=webpack://todo-list-top/./src/taskDOM.js?");

/***/ }),

/***/ "./src/taskconst.js":
/*!**************************!*\
  !*** ./src/taskconst.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskconst: () => (/* binding */ taskconst)\n/* harmony export */ });\n//This JS will contain the process to create a new task\n\nfunction taskconst(){\n    function Task (name, description, duedate, priority){\n        this.name = name; \n        this.description = description; \n        this.duedate = duedate; \n        this.priority = priority; \n    }\n    let namef = document.getElementById('FormtaskName');\n    let descriptionf = document.getElementById('FormtaskDescription');\n    let duedatef = document.getElementById('FormtaskDueDate');\n    let priorityf = document.getElementById('FormtaskPriority');\n    let task = new Task (namef.value, descriptionf.value, duedatef.value, priorityf.value);\n\n    return (task);\n}\n\n//# sourceURL=webpack://todo-list-top/./src/taskconst.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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