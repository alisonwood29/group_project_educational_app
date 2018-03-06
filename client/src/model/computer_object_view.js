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
