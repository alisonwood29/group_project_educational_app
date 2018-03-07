const TimelineView = function () {
}



TimelineView.prototype.initialise = function () {
  const timeline = document.querySelector(".timeline ol");
  const arrows = document.querySelectorAll(".timeline .arrows .arrow");
  const arrowPrev = document.querySelector(".timeline .arrows .arrow__prev");
  const arrowNext = document.querySelector(".timeline .arrows .arrow__next");
  const firstComputer = document.querySelector(".timeline li:first-child");
  const lastComputer = document.querySelector(".timeline li:last-child");
  const scrollAlong = 280;
  const disabledClass = "disabled";


  animateTl(scrollAlong, arrows, timeline);
  // setKeyPress(arrowPrev, arrowNext);
}

const animateTl = function (scrolling, element, timeline) {
  console.log('hello');
}

module.exports = TimelineView;
