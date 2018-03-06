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

ComputerObjectView.prototype.populateText = function (computer) {
    const section = document.getElementById('computer-info');
    const detailDiv = document.getElementById('computer-detail-info');
    const ul = document.createElement('ul');
    detailDiv.appendChild(ul);
    this.createSpan('Date: ',computer.date, ul);
    this.createSpan('Name: ',computer.name, ul);
    let description = computer.description1;
    if (computer.description1 === undefined) {
        description = computer.description2;
    }
    this.createSpan('Description: ', description, ul);
    this.createSpan('Type: ', computer.type, ul);


}

ComputerObjectView.prototype.createSpan = function (label, text, surroundingDiv) {
    const span = document.createElement('li');
    span.innerText = label + text;
    surroundingDiv.appendChild(span);

}


// this.date = ComputerDates[object.id];
// this.name = object.attributes.title[0].value;
// this.description1 = object.attributes.options.option1;
// this.description2 = object.attributes.description[0].value;
// this.type = object.attributes.name[0].value;

module.exports = ComputerObjectView;
