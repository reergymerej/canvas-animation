define([
  'color',
  'moveable'
], function (
  Color,
  moveable
) {
  'use strict';

  var Rectangle = function (config) {
    this.x = config.x;
    this.y = config.y;
    this.width = config.width;
    this.height = config.height;
    this.color = config.color;
    this.vX = config.vX ? config.vX : 0;
    this.vY = config.vY ? config.vY : 0;
  };

  Rectangle.prototype.onFrame = moveable.onFrame;

  Rectangle.prototype.render = function (canvas) {
    canvas.color(this.color);
    canvas.context.fillRect(this.x, this.y, this.width, this.height);
  };

  var Circle = function (config) {
    this.x = config.x;
    this.y = config.y;
    this.radius = config.radius;
    this.color = config.color;
    this.vX = config.vX ? config.vX : 0;
    this.vY = config.vY ? config.vY : 0;
  };

  Circle.prototype.onFrame = moveable.onFrame;

  Circle.prototype.render = function (canvas) {
    canvas.color(this.color);
    canvas.context.beginPath();
    canvas.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    canvas.context.fill();
  };

  return {
      Rectangle: Rectangle,
      Circle: Circle
  };
});