var BouncyDancer = function (top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<span class="bouncy"><strong>P</strong></span>');
    //this.$node = $('<img class="bouncy" src="src/Nick.gif" </img>');
    this.setPosition(top, left);
};


BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function () {
    Dancer.prototype.step.call(this);
    // this.oldStep = this.__proto__.__proto__.step;
    // this.oldStep();
};