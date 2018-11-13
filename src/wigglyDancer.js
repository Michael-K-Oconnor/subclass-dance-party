var WigglyDancer = function (top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<h1 class="wiggly">pp</h1>');
    console.log(this.setPosition)
    console.log(top, left)
    this.setPosition(top, left);
};


WigglyDancer.prototype = Object.create(Dancer.prototype);
WigglyDancer.prototype.constructor = WigglyDancer;

WigglyDancer.prototype.step = function () {
    this.oldStep = this.__proto__.__proto__.step;
    this.oldStep();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.toggle();
};