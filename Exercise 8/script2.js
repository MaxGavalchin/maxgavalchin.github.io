function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw(){
    var x = 0; // make it to the right
    var y = height / 2; // dot height
    while (x <= windowWidth) { // adjust to screenwidth
        fill(255);
        circle(x, y, 100); 
        x = x + 50;
    }
    for (var x = 0; x <= windowWidth; x = x + 50){
        fill(255);
        circle(x, y , 10);
    }
}


let balls = [];
let numBalls = 100;
let waveHeight = 140;
let waveSpeed = 0.03;
let spacing = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numBalls; i++) {
    balls.push(new Ball(i));
  }
}

function draw() {
  background(20);
  
  for (let b of balls) {
    b.update();
    b.draw();
  }
}



class Ball {
  constructor(i) {
    this.index = i;
    this.baseX = i * spacing + 100;        
    this.baseY = height / 2;             
    this.r = 20;
  }

  update() {
    
    this.x = this.baseX;
    this.y = this.baseY + sin(frameCount * waveSpeed + this.index * 0.4) * waveHeight;
  }

  draw() {
    noStroke();
    fill(140, 160, 255);
    ellipse(this.x, this.y, this.r, this.r);
  }
}






