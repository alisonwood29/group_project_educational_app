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
  const computerObject = new ComputerObject(computer.data);
  computerObjectsNoDate.push(computerObject);
}
console.log(computerObjectsNoDate);




document.addEventListener('DOMContentLoaded', app);
