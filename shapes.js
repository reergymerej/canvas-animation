define([
  'color',
  'moveable'
], function (
  Color,
  moveable
) {
  'use strict';

  var Rectangle = function (config) {
    moveable.init.apply(this, [config]);

    this.width = config.width;
    this.height = config.height;
    this.color = config.color;
  };

  Rectangle.prototype.onFrame = moveable.onFrame;

  Rectangle.prototype.render = function (canvas) {
    canvas.color(this.color);
    canvas.context.fillRect(this.position.x, this.position.y, this.width, this.height);
  };

  var Circle = function (config) {
    moveable.init.apply(this, [config]);

    this.radius = config.radius;
    this.color = config.color;
  };

  Circle.prototype.onFrame = moveable.onFrame;

  Circle.prototype.render = function (canvas) {
    canvas.color(this.color);
    canvas.context.beginPath();
    canvas.context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    canvas.context.fill();
  };

  return {
      Rectangle: Rectangle,
      Circle: Circle
  };
});