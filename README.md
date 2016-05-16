# matrix-canvas

- Tested in Chrome

## Usage

    var canvas = document.getElementById('matrixCanvas');
    var matrix = new Matrix(canvas, {
      fontColor: 'white'
    })
    matrix.start();

Use `excludeRegex` option to replace matches with spaces.
See [index.html](index.html) for example.


### Default options

    {
      fontSize: 10,
      fps: 4,
      fontColor: 'darkgreen',
      width: canvas.width,
      height: canvas.height,
      excludeRegex: null
    }

# Contributors

Neo
