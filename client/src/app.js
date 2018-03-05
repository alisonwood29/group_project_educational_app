const Request = require('./model/request.js');
const ComputerObject = require('./model/computer_object.js');

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
  // return urlArray;
  console.log(urlArray);


//   urlArray.forEach(function (url) {
// const requestUrl = new Request (baseURL + computer);

//     url.get(callback)
//   })
//
// callback
// new ComputerObject
// post
}


document.addEventListener('DOMContentLoaded', app);
