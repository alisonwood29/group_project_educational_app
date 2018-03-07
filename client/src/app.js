const Request = require('./model/request.js');
const ComputerObject = require('./model/computer_object.js');
const ComputerObjectView = require('./model/computer_object_view.js');
const TimelineView = require('./view/timeline_view.js');

const databaseRequest = new Request('http://localhost:3000/computers');
const computerObjectView = new ComputerObjectView();
const timelineView = new TimelineView();



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

  databaseRequest.get(getFromDBRequestComplete);



  // const xcord = [50, 150, 250, 350, 450, 550, 650, 750, 850, 950];
  // canvas.timeLine();
  // xcord.forEach(function(value){
  // canvas.drawCircle(value);
  // })
  //
  // canvas.canvas.addEventListener('click', function (evt) {
  //   const mousePos = canvas.getMousePos(evt);
  //   const message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
  //   console.log(message);
  // })





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
  computerObjectView.populateObjectDetails(computerObjectView.computerObjects[9]);
  computerObjectView.populateTimelineList(computerObjectView.computerObjects);
  timelineView.initialise();

}





document.addEventListener('DOMContentLoaded', app);
