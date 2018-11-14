var WigglyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="wiggly">p</span>');
  //this.$node = $('<img class="wiggly" src="src/Zubair.gif" </img>');
  this.setPosition(top, left);
};


WigglyDancer.prototype = Object.create(Dancer.prototype);
WigglyDancer.prototype.constructor = WigglyDancer;

WigglyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.oldStep = this.__proto__.__proto__.step;
  // this.oldStep();
};