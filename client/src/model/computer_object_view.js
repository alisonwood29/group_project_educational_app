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
  const detailDiv = document.getElementById('computer-detail-info');
  const imageDiv = document.getElementById('computer-detail-image');
  const ul = document.createElement('ul');

  detailDiv.appendChild(ul);

  this.createListElement('Date: ', computer.date, ul);
  this.createListElement('Name: ', computer.name, ul);

  let description = computer.description1;
  if (computer.description1 === undefined) description = computer.description2;

  this.createListElement('Description: ', description, ul);

  const image = document.createElement('img');
  image.height = "550";
  image.src = computer.image;
  imageDiv.appendChild(image);

}

ComputerObjectView.prototype.createListElement = function (label, text, surroundingDiv) {
  const span = document.createElement('span');
  const li = document.createElement('p');
  span.innerText= label;
  li.innerText = text;
  surroundingDiv.appendChild(span);
  surroundingDiv.appendChild(li);
}

ComputerObjectView.prototype.populateTimelineList = function (computers) {
  const list = document.getElementById('timeline-list');

  computers.forEach(function (computer) {
    const listItem = document.createElement('li');
    const listItemDiv = document.createElement('div');


    const date = document.createElement('time');
    date.innerText = computer.date;

    const name = document.createElement('p');
    name.innerText = computer.name;

    listItemDiv.appendChild(date);
    listItemDiv.appendChild(name);
    listItem.appendChild(listItemDiv);
    list.appendChild(listItem);



    listItemDiv.addEventListener('click', function () {
      this.clearSection();
      this.populateObjectDetails(computer)
    }.bind(this))

      listItemDiv.addEventListener("mouseover", function(){;
        listItemDiv.style.border = "4px solid #3366BB";
        listItemDiv.addEventListener("mouseout", function(){
          listItemDiv.style.border = "4px solid black";
        });

    });

  }.bind(this))
}

ComputerObjectView.prototype.clearSection = function () {
  const detailDiv = document.getElementById('computer-detail-info');
  const imageDiv = document.getElementById('computer-detail-image');

  detailDiv.innerHTML = '';
  imageDiv.innerHTML = '';
}

module.exports = ComputerObjectView;
