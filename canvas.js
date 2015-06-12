define([], function () {
  'use strict';

  var canvasElement = document.createElement('canvas');
  var context = canvasElement.getContext('2d');
  var WIDTH = 500;
  var HEIGHT = 600;

  canvasElement.width = WIDTH;
  canvasElement.height = HEIGHT;

  document.body.appendChild(canvasElement);

  var color = function (fillStyle) {
    context.fillStyle = fillStyle;
  };

  var clear = function () {
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
  };

  var items = [];

  var render = function () {
    clear();

    items.forEach(function (item) {
      item.onFrame(this);
      item.render(this);
    }, this);
  };

  var add = function (item) {
    items.push(item);
  };

  var remove = function (item) {
    items.splice(items.indexOf(item), 1);
  };

  var canvas = {
    add: add,
    remove: remove,
    render: render,
    color: color,
    context: context,
    clear: clear,
    width: WIDTH,
    height: HEIGHT
  };

  return canvas;
});