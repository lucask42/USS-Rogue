function Particle(){
  this.x = 100;
  this.y = 99;
  // this.show = function(){
  //   point(this.x, this.y);
  // }
}
Particle.prototype.explode = function(){
  console.log("boom");
}

Particle.prototype.show = function(){
  point(this.x, this.y);
}

var p;
var v;

function setup(){
  createCanvas(600, 400);

  p = new Particle();
  v = new p5.Vector;
}

function draw(){
  background(0);
}
