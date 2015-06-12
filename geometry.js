define([
  'vector'
], function (
  Vector
) {
  'use strict';

  var Point = function (x, y) {
    this.x = x;
    this.y = y;
  };

  var LineSegment = function (a, b) {
    this.a = a;
    this.b = b;
  };

  LineSegment.prototype.slope = function () {
    return (this.a.y - this.b.y) / (this.a.x - this.b.x);
  };

  LineSegment.prototype.getNormalX = function () {
    
  };

  return {
    Point: Point,
    LineSegment: LineSegment
  };
});