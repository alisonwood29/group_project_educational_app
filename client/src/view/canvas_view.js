// const CanvasView = function(){
//  this.canvas = document.getElementById('timeline-canvas')
//  this.context = this.canvas.getContext('2d')
// }
//
// // const context = this.canvas.getContext('2d')
//
// CanvasView.prototype.drawCircle = function (x) {
//
//   this.context.beginPath();
//   this.context.arc(x,50,15,0,Math.PI*2,true);
//   this.context.stroke();
// };
//
//
// CanvasView.prototype.timeLine = function(){
//   this.context.beginPath();
//   this.context.moveTo(50,50);
//   this.context.lineTo(950,50);
//   this.context.stroke();
// }
//
// CanvasView.prototype.getMousePos = function (evt) {
//   const rect = this.canvas.getBoundingClientRect();
//       return {
//         x: evt.clientX - rect.left,
//         y: evt.clientY - rect.top
//       };
//     }
//
// module.exports = CanvasView;
