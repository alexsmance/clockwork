var date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let centerX = windowWidth / 2;
let centerY = windowHeight / 2;

console.log(hour);
console.log(minute);
console.log(second);

var hourTicker;
var minuteTicker;
var secondTicker;

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
}

function draw() {
  background(51);
  translate(centerX, centerY);
  rotate(-90);

  date = new Date();
  hour = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();
  
  hourTicker = map(hour % 12, 0, 24, 0, 360);
  minuteTicker = map(minute, 0, 59, 0, 360);
  secondTicker = map(second, 0, 59, 0, 360);

  // Draw Hour Arc
  strokeWeight(8);
  stroke(222, 49, 99);
  noFill();
  
  arc(0, 0, centerY, centerY, 0, hourTicker);

  // Draw Minute Arc
  strokeWeight(8);
  stroke(127, 255, 212);

  arc(0, 0, centerY - 25, centerY - 25, 0, minuteTicker);

  // Draw Second Arc
  strokeWeight(8);
  stroke(137, 207, 240);
  arc(0, 0, centerY - 50, centerY - 50, 0, secondTicker);
}

window.addEventListener('resize', () => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
  setup();
});