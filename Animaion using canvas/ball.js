let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

// ball constructor
let Ball = function () {
  this.x = 100;
  this.y = 100;
  this.xSpeed = -(Math.random() * 10);
  this.ySpeed = Math.random() * 10;
};

// draw the ball
let circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
     ctx.fill();
  } else {
     ctx.stroke();
  }
};

Ball.prototype.draw = function () {
  circle(this.x, this.y, 3, true);
};

// moving the ball
Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

// ball bounce
Ball.prototype.checkCollision = function () {
  if (this.x < 0 || this.x > 200) {
    this.xSpeed = -this.xSpeed;
  }

  if (this.y < 0 || this.y > 200) {
    this.ySpeed = - this.ySpeed;
  }
};

// ball animation
let ball = new Ball();

setInterval(function () {
  ctx.clearRect(0, 0, 200, 200);

  ball.draw();
  ball.move();
  ball.checkCollision();

  ctx.strokeRect(0, 0,200, 200);
}, 10);