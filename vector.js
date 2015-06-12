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

      return this;
    },

    subtract: function (v2) {
      this.x -= v2.x;
      this.y -= v2.y;

      return this;
    },

    magnitude: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    normalize: function () {
      var magnitude = this.magnitude();

      if (magnitude) {
        return new Vector(this.x / magnitude, this.y / magnitude);
      }
    },

    dotProduct: function (v2) {
      return new Vector(this.x * v2.x + this.y * v2.y);
    }
  };

  return Vector;
});