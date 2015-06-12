var Point = function (x, y) {
  this.x = x;
  this.y = y;
};

var LineSegment = function (a, b) {
  this.a = a;
  this.b = b;
};

LineSegment.prototype = {
  slope: function () {
    return (this.a.y - this.b.y) / (this.a.x - this.b.x);
  },

  dX: function () {
    return this.b.x - this.a.x;
  },

  dY: function () {
    return this.b.y - this.a.y;
  },

  normalX: function () {
    return new Vector(-this.dY(), this.dX()).normalize();
  },

  normalY: function () {
    return new Vector(this.dY(), -this.dX()).normalize();
  }
};

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

  multiplyScalar: function (scalar) {
    this.x *= scalar;
    this.y *= scalar;
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
    return this.x * v2.x + this.y * v2.y;
  }
};

// ===============================================================================
var wall = new LineSegment(new Point(10, 10), new Point(20, 0));
var velocity = new Vector(10, 0);
var position = new Vector(0, 0);


