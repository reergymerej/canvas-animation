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

  LineSegment.prototype.dX = function () {
    return this.b.x - this.a.x;
  };

  LineSegment.prototype.dY = function () {
    return this.b.y - this.a.y;
  };

  LineSegment.prototype.getNormalX = function () {
    return new Vector(-this.dY(), this.dX()).normalize();
  };

  LineSegment.prototype.getNormalY = function () {
    return new Vector(this.dY(), -this.dX()).normalize();
  };

  return {
    Point: Point,
    LineSegment: LineSegment
  };
});