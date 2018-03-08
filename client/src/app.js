const Request = require('./model/request.js');
const ComputerObject = require('./model/computer_object.js');
const ComputerObjectView = require('./model/computer_object_view.js');
const TimelineView = require('./view/timeline_view.js');

const databaseRequest = new Request('http://localhost:3000/computers');
const computerObjectView = new ComputerObjectView();
const timelineView = new TimelineView();



const app = function(){

  const urlArray = [];
  const baseURL = 'http://collection.sciencemuseum.org.uk/objects/';
  const fixedComputerObjects = ["co62748", "co64128", "co62427","co8359400", "co503422", "co8401352", "co8035886", "co8430789", "co8184137", "co8361071"];
  const additionalObjects = ["co8361046","co63204","co8194710","co8094235","co8401258","co8361038","co63199","co8015289","co8061113","co62556","co8408693","co62349","co60113","co60390","co60127","co62748", "co64128", "co62427","co8359400", "co503422", "co8401352", "co8035886", "co8430789", "co8184137", "co8361071"];

  additionalObjects.forEach(function(computer){
    const requestUrl = baseURL + computer;
    urlArray.push(requestUrl);
  });

  urlArray.forEach(function (url) {
    const requestUrl = new Request (url);
    requestUrl.get(computerAPIRequestComplete);
  });

  databaseRequest.get(getFromDBRequestComplete);


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
  computerObjectView.populateTimelineList(computerObjectView.computerObjects);
  timelineView.initialise();
}





document.addEventListener('DOMContentLoaded', app);
