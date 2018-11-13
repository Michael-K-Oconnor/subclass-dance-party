var BlinkyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="src/hunter.gif" </img>');
  this.setPosition(top, left);
};


BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function () {

  this.oldStep = this.__proto__.__proto__.step;
  this.oldStep();

  this.$node.toggle();
};