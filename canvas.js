// window.onload = function (){

var canvas = document.querySelector(".paper");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//arc / Circle

var mouse = {
  x: undefined,
  y: undefined
}
var maxRadius = 40;
var minRadius = 10;
var colorArray = [
  'rgba(255,153,51,' + (Math.random() * 0.7 + 0.3)  + ' )',
  'rgba(204,51,51,' + (Math.random() * 0.7 + 0.3) + ' )',
  'rgba(102,51,102,' + (Math.random() * 0.7 + 0.3) + ' )',
  'rgba(255,204,204,' + (Math.random() * 0.7 + 0.3) + ' )',
]

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init()

});



function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.minRadius = radius;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();

  }
  this.update = function() {
    if (this.x + radius > innerWidth || this.x - radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + radius > innerHeight || this.y - radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;


    this.draw();

  }

}

var circleArray = [];

//circle.draw();

function init() {

  circleArray = [];
  for (var i = 0; i < 500; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 1;
    var dy = (Math.random() - 0.5) * 1;
    circleArray.push(new Circle(x, y, dx, dy, radius));

  }

}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}

animate()
init();
//};














/*
for (var i = 0; i < 1000; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;

  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = getRandomColor();
  c.stroke();

}*/


/*window.onload = function() {

  var canvas = document.getElementById('paper');
    c = canvas.getContext("2d");
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);

  int n=1500;
  float [] cx=new float[n];
  float [] cy=new float[n];
  float theta=0;
  void setup() {

  size(700, 700);
  background(0);
  for (int i=0;i<n;i++) {
    cx[i]=random(width+100);
    cy[i]=random(height);
    smooth();
  }
}

void draw() {
  theta+=0.1;
  strokeWeight(.01);
  for (int i=1;i<n;i++) {
    stroke(200);
    cy[i]+=(sin(TWO_PI*noise(0.01*cx[i], 0.01*cy[i])));
    cx[i]+=(cos(TWO_PI*noise(0.01*cx[i], 0.01*cy[i])));
    point(cx[i], cy[i]);
  }

  if (frameCount>250) {
    frameCount=0;
    for (int i=0;i<n;i++) {
      cx[i]=random(width+100);
      cy[i]=random(height+100);
    }
  }
}
};
*/
/*
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(150, 200, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(300, 115, 100, 100);
c.fillRect(100, 400, 100, 100);
console.log(canvas);

//Line

c.beginPath();
c.moveTo(400, 300);
c.lineTo(300, 50);
c.strokeStyle = "#fa34a3";
c.stroke();

*/
/*
var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var dx = (Math.random() - 0.5) * 8;
var radius = 30;
var dy = (Math.random() - 0.5) * 8;
*/


    //interactivity
    /*
      if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < maxRadius)
        this.radius += 1;
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }*/

    /*
    window.addEventListener('mousemove', function(event) {
      mouse.x = event.x;
      mouse.y = event.y;
      console.log(mouse);
    });
    */
