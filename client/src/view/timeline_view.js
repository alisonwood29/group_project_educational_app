const TimelineView = function () {
}



TimelineView.prototype.initialise = function () {
  const timeline = document.querySelector(".timeline ol");
  const arrows = document.querySelectorAll(".timeline .arrows .arrow");
  const scrollAlong = 280;

  // console.log(getComputedStyle(timeline).getPropertyValue('-webkit-transform'));

  animateTl(scrollAlong, arrows, timeline);
  // setKeyPress(arrowPrev, arrowNext);
}

const animateTl = function (scrolling, elements, timeline) {

  const arrowPrev = document.querySelector(".timeline .arrows .arrow__prev");
  const arrowNext = document.querySelector(".timeline .arrows .arrow__next");
  const firstComputer = document.querySelector(".timeline li:first-child");
  const lastComputer = document.querySelector(".timeline li:last-child");

  let counter = 0;

  elements.forEach(function (element) {

    element.addEventListener('click', function () {
      if(!arrowPrev.disabled) arrowPrev.disabled = true;
      if(!arrowNext.disabled) arrowNext.disabled = true;

      const sign = (this.classList.contains('arrow__prev')) ? '' : '-';
      if (counter === 0){
        timeline.style.transform = `translateX(-${scrolling}px)`;
      }
      else{
        const tlStyle = getComputedStyle(timeline);
        const tlTransform = tlStyle.getPropertyValue('-webkit-transform') || tlStyle.getPropertyValue('transform');
        let values = parseInt(tlTransform.split(',')[4]) + parseInt(`${sign}${scrolling}`);
        if(values >= 0) values = 0;
        timeline.style.transform = `translateX(${values}px)`
      }
      setTimeout(setTimeoutState(firstComputer, lastComputer, arrowNext, arrowPrev), 1100);
      counter++;
    });

  });
}

const isElementInViewport = function (element) {
  const rect = element.getBoundingClientRect();
  return(
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const setButtonState = function (element, flag = true) {
  const disabledClass = "disabled";
  if(flag){
    element.classList.add(disabledClass);
  } else {
    if(element.classList.contains(disabledClass)){
      element.classList.remove(disabledClass);
    }
    element.disabled = false;
  }
}

const setTimeoutState = function (firstItem, lastItem, arrowNext, arrowPrev) {
  isElementInViewport(firstItem) ? setButtonState(arrowPrev) : setButtonState(arrowPrev, false);
  isElementInViewport(lastItem) ? setButtonState(arrowNext) : setButtonState(arrowNext, false);
}

module.exports = TimelineView;
