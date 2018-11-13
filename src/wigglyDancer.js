var WigglyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="wiggly" src="src/Zubair.gif" </img>');
  this.setPosition(top, left);
};


WigglyDancer.prototype = Object.create(Dancer.prototype);
WigglyDancer.prototype.constructor = WigglyDancer;

WigglyDancer.prototype.step = function () {
  this.oldStep = this.__proto__.__proto__.step;
  this.oldStep();
};