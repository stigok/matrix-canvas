# matrix-canvas

- Tested in Chrome

## Demo

[<kbd>Enter the matrix</kbd>](https://stigok.github.io/matrix-canvas)

## Usage

    var canvas = document.getElementById('matrixCanvas');
    var matrix = new Matrix(canvas, {
      fps: 15,
      fontColor: 'darkgreen',
      excludeRegex: /[013589]/g
    });
    matrix.start();

Use `excludeRegex` option to replace matches with spaces.
See [index.html](index.html) for example.


### Default options

    {
      fontSize: 10,
      fps: 15,
      fontColor: 'darkgreen',
      excludeRegex: null
    }

# Contributors

- Neo
- [jaredwilly](http://stackoverflow.com/a/8486324/90674)
