const ComputerObject = function (object, date) {
  id = object.id;
  date = this.date;
  name = object.attributes.title[0].value;
  description1 = object.attributes.options.option1;
  description2 = object.attributes.description[0].value;
  image = object.attributes.multimedia[0].processed.large_thumbnail.location;
  type = object.attributes.name[0].value;
}

module.exports = ComputerObject;
