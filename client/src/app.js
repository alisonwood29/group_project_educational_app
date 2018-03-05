const Request = require('./model/request.js');
const ComputerObject = require('./model/computer_object.js');

const databaseRequest = new Request('http://localhost:3000/computers')

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

  // databaseRequest.post(addRequestComplete)

}



const computerObjectsNoDate = [];

const computerAPIRequestComplete = function (computer) {
  // console.log('data',computer.data);
  const computerObject = new ComputerObject(computer.data);
  // console.log('name',computerObject);
  computerObjectsNoDate.push(computerObject);
}

console.log('objects',computerObjectsNoDate);

// const dates = [1,2,3,4,5,6,7,8,9,10];
// dates.forEach(function (date) {
//   computerObjectsNoDate.forEach(function (computer) {
//     const object = new ComputerObject(computer, date)
//   })
// })
// console.log('date objects', computerObjectsNoDate);
// console.log('date', computerObjectsNoDate[0].name);

// const addRequestComplete = function (computer) {
//   computerObjectsNoDate.forEach(function (computer) {
//
//   })
// }



document.addEventListener('DOMContentLoaded', app);
