define([
  'vector'
], function (
  Vector
) {
  'use strict';

  var onFrame = function (canvas) {
    this.position.add(this.velocity);

    // console.log(this.velocity.normalize());

    checkForCollisions.apply(this, [canvas]);
  };

  var checkForCollisions = function (canvas) {
    // if (this.x < 0 || this.x > canvas.width) {
    //   this.vX = this.vX * -1;
    // }

    // if (this.y < 0 || this.y > canvas.height) {
    //   this.vY = this.vY * -1;
    // }
  };

  var init = function (config) {
    this.position = config.position;
    this.velocity = config.velocity;
  };

  return {
    init: init,
    onFrame: onFrame
  };
});