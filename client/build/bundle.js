/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Request = __webpack_require__(/*! ./model/request.js */ "./src/model/request.js");
const ComputerObject = __webpack_require__(/*! ./model/computer_object.js */ "./src/model/computer_object.js");

const app = function(){

  const urlArray = [];
  const baseURL = 'http://collection.sciencemuseum.org.uk/objects/'
  const fixedComputerObjects = ["co62748", "co64128", "co62427",
  "co8359400", "co503422", "co8401352", "co8035886",
  "co8430789", "co8184137", "co8361071"];
  fixedComputerObjects.forEach(function(computer){
    const requestUrl = baseURL + computer;
    urlArray.push(requestUrl);

  });

  urlArray.forEach(function (url) {
    const requestUrl = new Request (url);
    requestUrl.get(computerAPIRequestComplete);
  });

}



const computerObjectsNoDate = [];

const computerAPIRequestComplete = function (computer) {
  console.log(computer);
  const computerObject = new ComputerObject(computer.data);
  console.log(computerObject);
  computerObjectsNoDate.push(computerObject);
}

// console.log('computer objects', computerObjectsNoDate);


document.addEventListener('DOMContentLoaded', app);


/***/ }),

/***/ "./src/model/computer_object.js":
/*!**************************************!*\
  !*** ./src/model/computer_object.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const ComputerObject = function (object, date) {
  id = object.id;
  date = this.date;
  name = object.attributes.title[0].value;
  description1 = object.attributes.options.option1;
  description2 = object.attributes.description[0].value;
  image = object.attributes.multimedia[0].processed.large_thumbnail.location;
  type = object.attributes.name[0].value;
}

module.exports = ComputerObject;


/***/ }),

/***/ "./src/model/request.js":
/*!******************************!*\
  !*** ./src/model/request.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const Request = function (url) {
  this.url = url;
}

Request.prototype.get = function (callback) {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);
  request.setRequestHeader('accept', 'application/json');
  request.addEventListener('load', function () {
    if(this.status !== 200) return;

    const responseBody = JSON.parse(this.responseText);
    callback(responseBody);
  })
  request.send();
}

Request.prototype.post = function (callback, body) {
  const request = new XMLHttpRequest();
  request.open('POST', this.url);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', function () {
    if(this.status !== 201) return;

    const responseBody = JSON.parse(this.responseText);
    callback(responseBody);
  })
  request.send(JSON.stringify(body));

}

module.exports = Request;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map