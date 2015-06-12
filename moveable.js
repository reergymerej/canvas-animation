define([

], function (

) {
  'use strict';

  var onFrame = function (canvas) {
    this.x += this.vX;
    this.y += this.vY;

    checkForCollisions.apply(this, [canvas]);
  };

  var checkForCollisions = function (canvas) {
    if (this.x < 0 || this.x > canvas.width) {
      this.vX = this.vX * -1;
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.vY = this.vY * -1;
    }
  };

  return {
    onFrame: onFrame
  };
});