(function () {
  'use strict';

  require([
    'canvas',
    'shapes',
    'color'
  ], function (
    canvas,
    shapes,
    Color
  ) {

    // var rectangle = new shapes.Rectangle({
    //   x: 0,
    //   y: 0,
    //   width: 20,
    //   height: 20,
    //   color: new Color(12, 255, 30),
    //   vX: 10,
    //   vY: 3
    // });

    // var circle = new shapes.Circle({
    //   x: 0,
    //   y: 0,
    //   radius: 10,
    //   color: new Color(0, 0, 0, 0.5),
    //   vX: 7,
    //   vY: 4
    // });

    // circle.onFrame = function (canvas) {
    //   this.color.r = (this.color.r + 1) % 255;
    //   return this.constructor.prototype.onFrame.apply(this, arguments);
    // };

    // canvas.add(rectangle);
    // canvas.add(circle);


    var color = new Color(12, 155, 97, 0.2);
    for (var i = 0; i < 10; i++) {
      canvas.add(new shapes.Circle({
        x: 0,
        y: 0,
        radius: 10,
        color: color,
        vX: 3 + i * 0.1,
        vY: i + 0.6
      }));
    }

    var animate = function () {
      canvas.render();
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  });
}());