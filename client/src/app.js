const Request = require('./model/request.js');
const ComputerObject = require('./model/computer_object.js');
const ComputerObjectView = require('./model/computer_object_view.js');
const TimelineView = require('./view/timeline_view.js');

const databaseRequest = new Request('http://localhost:3000/computers');
const computerObjectView = new ComputerObjectView();
const timelineView = new TimelineView();



const app = function(){

  setIntroText("Welcome", "Scroll through the timeline to see how technology has changed through the ages.", 'https://smgco-images.s3.amazonaws.com/media/I/A/A/large_thumbnail_1999_0915.jpg', 'Apple 1 Computer');

  const urlArray = [];
  const baseURL = 'http://collection.sciencemuseum.org.uk/objects/';
  const fixedComputerObjects = ["co62748", "co64128", "co62427","co8359400", "co503422", "co8401352", "co8035886", "co8430789", "co8184137", "co8361071"];
  const additionalObjects = ["co8362946","co8361832", "co8361046","co63204","co8194710","co8094235","co8401258","co8361038","co8015289","co8061113","co62556","co8408693","co62349","co60113","co60390","co60127","co62748", "co64128", "co62427","co8359400", "co503422", "co8401352", "co8035886", "co8430789", "co8184137", "co8361071"];

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

const setIntroText =  function (title, text, image, alt) {
  const detailDiv = document.getElementById('computer-detail-info');
  const imageDiv = document.getElementById('computer-detail-image');
  const img = document.createElement('img');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  p.id = "welcome-text";
  img.id = "welcome-img";


  h2.innerText = title;
  p.innerText = text;
  img.src = image;
  img.alt = alt;

  detailDiv.appendChild(h2);
  detailDiv.appendChild(p);

  imageDiv.appendChild(img);
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
  console.log(computerObjectView.computerObjects);
  computerObjectView.populateTimelineList(computerObjectView.computerObjects);
  timelineView.initialise();
}





document.addEventListener('DOMContentLoaded', app);
