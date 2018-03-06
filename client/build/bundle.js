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
const ComputerObjectView = __webpack_require__(/*! ./model/computer_object_view.js */ "./src/model/computer_object_view.js");
const CanvasView = __webpack_require__(/*! ./view/canvas_view.js */ "./src/view/canvas_view.js");

const databaseRequest = new Request('http://localhost:3000/computers');
const computerObjectView = new ComputerObjectView();



const app = function(){


  const urlArray = [];
  const canvas = new CanvasView();
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

  databaseRequest.get(getFromDBRequestComplete);


  const xcord = [50, 150, 250, 350, 450, 550, 650, 750, 850, 950];
  canvas.timeLine();
  xcord.forEach(function(value){
  canvas.drawCircle(value);
  })


}



const computerAPIRequestComplete = function (computer) {
  const computerObject = new ComputerObject(computer.data);
  databaseRequest.post(computerObject)
}

const getFromDBRequestComplete = function (computers) {
  databaseRequest.delete();
  computers.forEach(function (computer) {
    computerObjectView.addComputer(computer);
  });
  computerObjectView.sortByDate();
  console.log(computerObjectView);
  computerObjectView.populateObjectDetails(computerObjectView.computerObjects[0]);
}





document.addEventListener('DOMContentLoaded', app);


/***/ }),

/***/ "./src/model/computer_dates.js":
/*!*************************************!*\
  !*** ./src/model/computer_dates.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const ComputerDates = {
"co62748": 1847 ,
"co64128": 1939,
"co62427": 1940,
"co8359400": 1963,
"co503422": 1976,
"co8401352": 1985,
"co8035886": 1989,
"co8430789": 1997,
"co8184137": 1998 ,
"co8361071": 2008
};

module.exports = ComputerDates;


/***/ }),

/***/ "./src/model/computer_object.js":
/*!**************************************!*\
  !*** ./src/model/computer_object.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ComputerDates = __webpack_require__(/*! ./computer_dates.js */ "./src/model/computer_dates.js");

const ComputerObject = function (object) {
  this.id = object.id;
  this.date = ComputerDates[object.id];
  this.name = object.attributes.title[0].value;
  this.description1 = object.attributes.options.option1;
  this.description2 = object.attributes.description[0].value;
  this.image = object.attributes.multimedia[0].processed.large_thumbnail.location;
  this.type = object.attributes.name[0].value;
}

module.exports = ComputerObject;


/***/ }),

/***/ "./src/model/computer_object_view.js":
/*!*******************************************!*\
  !*** ./src/model/computer_object_view.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const ComputerObjectView = function () {
    this.computerObjects = [];
}

ComputerObjectView.prototype.addComputer = function (computer) {
    this.computerObjects.push(computer);
}

ComputerObjectView.prototype.sortByDate = function () {
    this.computerObjects.sort(function (earliest, latest) {
        return earliest.date - latest.date;
    });
}

ComputerObjectView.prototype.clear = function () {
    this.computerObjects = [];
}

ComputerObjectView.prototype.populateObjectDetails = function (computer) {
    const section = document.getElementById('computer-info');
    const detailDiv = document.getElementById('computer-detail-info');
    const imageDiv = document.getElementById('computer-detail-image');
    const ul = document.createElement('ul');
    detailDiv.appendChild(ul);
    this.createListElement('Date: ', computer.date, ul);
    this.createListElement('Name: ', computer.name, ul);
    let description = computer.description1;
    if (computer.description1 === undefined) {
        description = computer.description2;
    }
    this.createListElement('Description: ', description, ul);
    this.createListElement('Type: ', computer.type, ul);
    const image = document.createElement('img');
    image.src = computer.image;
    imageDiv.appendChild(image);

}

ComputerObjectView.prototype.createListElement = function (label, text, surroundingDiv) {
    const span = document.createElement('li');
    span.innerText = label + text;
    surroundingDiv.appendChild(span);

}


module.exports = ComputerObjectView;


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

Request.prototype.post = function (body) {
  const request = new XMLHttpRequest();
  request.open('POST', this.url);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', function () {
    if(this.status !== 201) return;

    const responseBody = JSON.parse(this.responseText);

  })
  request.send(JSON.stringify(body));

}

Request.prototype.delete = function () {
  const request = new XMLHttpRequest();
  request.open('DELETE', this.url);
  request.addEventListener('load', function () {
    if(this.status !== 204) return;
  })
  request.send();
}

module.exports = Request;


/***/ }),

/***/ "./src/view/canvas_view.js":
/*!*********************************!*\
  !*** ./src/view/canvas_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const CanvasView = function(){
 this.canvas = document.getElementById('timeline-canvas')
 this.context = this.canvas.getContext('2d')
}

// const context = this.canvas.getContext('2d')

CanvasView.prototype.drawCircle = function (x) {
  
  this.context.beginPath();
  this.context.arc(x,50,15,0,Math.PI*2,true);
  this.context.stroke();
};


CanvasView.prototype.timeLine = function(){
  this.context.beginPath();
  this.context.moveTo(50,50);
  this.context.lineTo(950,50);
  this.context.stroke();
}

module.exports = CanvasView;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map