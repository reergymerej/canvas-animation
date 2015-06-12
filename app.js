(function () {
  'use strict';

  require([
    'canvas',
    'shapes',
    'color',
    'vector'
  ], function (
    canvas,
    shapes,
    Color,
    Vector
  ) {

    var rectangle = new shapes.Rectangle({
      width: 20,
      height: 20,
      color: new Color(12, 255, 30),
      position: new Vector(0, 0),
      velocity: new Vector(3, 3)
    });

    var circle = new shapes.Circle({
      radius: 10,
      color: new Color(0, 0, 0, 0.5),
      position: new Vector(0, 0),
      velocity: new Vector(2, 3)
    });

    // circle.onFrame = function (canvas) {
    //   this.color.r = (this.color.r + 1) % 255;
    //   return this.constructor.prototype.onFrame.apply(this, arguments);
    // };

    canvas.add(rectangle);
    canvas.add(circle);


    var animate = function () {
      canvas.render();
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  });
}());