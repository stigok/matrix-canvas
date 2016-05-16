//
// Make matrix style shit you know you'll love
//

function Matrix(canvas, options) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.interval = null;
  this.options = _.extend({
    fontSize: 10,
    fps: 15,
    fontColor: 'darkgreen',
    excludeRegex: null
  }, options);

  // Set canvas width and height
  this.updateCanvasSize();
}

//
// Private methods
//

Matrix.prototype.start = function () {
  // Write initial state immediately
  this.onTick();
  this.interval = setInterval(this.onTick.bind(this), 1000 / this.options.fps);
};

Matrix.prototype.stop = function () {
  if (this.interval) {
    clearInterval(this.interval);
    this.interval = null;
  }
};

Matrix.prototype.onTick = function () {
  this.clear();
  this.drawLines();
};

Matrix.prototype.drawLines = function () {
  var str;
  for (var i = 0; i < this.maxLines; i++) {
    str = Matrix.getNumberString(this.maxColumns);
    if (this.options.excludeRegex) {
      str = str.replace(this.options.excludeRegex, ' ');
    }
    this.writeLine(str, i);
  }
};

Matrix.prototype.writeLine = function (text, lineNumber) {
  this.writeText(text, lineNumber * this.options.fontSize + this.options.fontSize);
};

Matrix.prototype.writeText = function (text, y) {
  this.ctx.strokeStyle = this.options.fontColor;
  this.ctx.font = this.options.fontSize + 'px mono';
  this.ctx.strokeText(text, 0, y);
};

Matrix.prototype.updateCanvasSize = function () {
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  this.maxLines = this.canvas.height / this.options.fontSize;
  this.maxColumns = this.canvas.width / this.options.fontSize * 2;
};

Matrix.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

//
// Public methods
//

Matrix.getNumberString = function (len) {
  var str = '';
  while (str.length < len) {
    str += Matrix.getRandom();
  }
  return str.substring(0, len);
};

Matrix.getRandom = function () {
  var rx = /\d{2,}/g;
  return rx.exec(Math.random());
};
