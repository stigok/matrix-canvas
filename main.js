

$(function () {
  var canvas = $('canvas').get(0);
  var matrix = new Matrix(canvas, {
    fps: 1
  });
  matrix.start();
});
