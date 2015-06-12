define([

], function (

) {
  'use strict';

  var Vector = function (x, y) {
    this.x = x;
    this.y = y;
  };

  Vector.prototype = {
    add: function (v2) {
      this.x += v2.x;
      this.y += v2.y;
    },

    subtract: function (v2) {
      this.x -= v2.x;
      this.y -= v2.y;
    },

    magnitude: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    normalize: function () {
      var magnitude = this.magnitude();

      if (magnitude) {
        return new Vector(this.x / magnitude, this.y / magnitude);
      }
    }
  };

  return Vector;
});