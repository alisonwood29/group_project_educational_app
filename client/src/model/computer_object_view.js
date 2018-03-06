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




module.exports = ComputerObjectView;
