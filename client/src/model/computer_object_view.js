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
    // const section = document.getElementById('computer-detail-section');
    const detailDiv = document.getElementById('computer-detail-info');
    const imageDiv = document.getElementById('computer-detail-image');
    const ul = document.createElement('ul');
    detailDiv.appendChild(ul);
    // console.log('object details', this);
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
    const li = document.createElement('li');
    li.innerText = label + text;
    surroundingDiv.appendChild(li);

}

ComputerObjectView.prototype.populateTimelineList = function (computers) {
  const list = document.getElementById('timeline-list');
  computers.forEach(function (computer) {
    const listItemDiv = document.createElement('div');
    const date = document.createElement('time');
    date.innerText = computer.date;
    const name = document.createElement('p');
    name.innerText = computer.name;
    listItemDiv.appendChild(date);
    listItemDiv.appendChild(name);
    list.appendChild(listItemDiv);
  }.bind(this))
}


module.exports = ComputerObjectView;
