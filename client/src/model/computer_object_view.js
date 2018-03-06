const ComputerObjectView = function () {
  this.computerObjects = [];
}

ComputerObjectView.prototype.addComputer = function (computer) {
  this.computerObjects.push(computer);
}

ComputerObjectView.prototype.sortByDate = function () {
  this.computerObjects.sort(earliest, latest){
    return earliest.date - latest.date;
  }
}


module.exports = ComputerObjectView;
