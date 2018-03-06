const CanvasView = function(){
 this.canvas = document.getElementById('timeline-canvas')
 this.context = this.canvas.getContext('2d')
}

// const context = this.canvas.getContext('2d')

CanvasView.prototype.drawCircle = function (x) {

  this.context.beginPath();
  this.context.arc(x,50,15,0,Math.PI*2,true);
  this.context.stroke();
};

module.exports = CanvasView;
