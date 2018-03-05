const ComputerObject = function (object, date) {
  this.id = object.id;
  this.date = date;
  this.name = object.attributes.title[0].value;
  this.description1 = object.attributes.options.option1;
  this.description2 = object.attributes.description[0].value;
  this.image = object.attributes.multimedia[0].processed.large_thumbnail.location;
  this.type = object.attributes.name[0].value;
}

module.exports = ComputerObject;
