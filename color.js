define([

], function (

) {
  'use strict';

  var Color = function (r, g, b, a) {

    if (arguments.length === 1) {
      this.text = arguments[0];
    } else if (arguments.length === 3 || arguments.length === 4) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a === undefined ? 1 : a;
    }
  };

  Color.prototype.toString = function () {
    var string;
    if (this.text) {
      string = this.text;
    } else {
      string = 'rgba(' + [this.r, this.g, this.b, this.a].join(',')  + ')';
    }
    return string;
  };

  return Color;
});