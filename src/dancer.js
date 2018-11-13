// Creates and returns a new dancer object that can step
var Dancer = function (top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<h1 class="dancer">:)</h1>');
  this.timeBetweenSteps = timeBetweenSteps;
  let that = this
  // now that we have defined the dancer object, we can start setting up 
  // important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  console.log(this.Dancer)
  this.step();
  this.setPosition(top, left);

};

Dancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  let bindedFunc = this.step.bind(this);
  setTimeout(bindedFunc, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};