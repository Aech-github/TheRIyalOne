function setup() {
  createCanvas(800, 800, WEBGL);
  describe("a white rectangle rotating on Y axis");
}

function draw() {
  background(10);
  rotateZ(frameCount * 0.005);
  rotateY(frameCount * 0.008);
  rotateX(frameCount * 0.0);
  strokeWeight(8);
  stroke("pink");
  fill("Brown");
  rect(50, 40, 70, 80);
  
  
  strokeWeight(1);
  fill("magenta");
  stroke("yellow");
  rotateZ(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  rotateX(frameCount * 0.04);
  rect(100, 200, 40, 60);
  
  strokeWeight(1);
  fill("magenta");
  stroke("yellow");
  rotateZ(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rect(300, 500, 40, 60);
  
  strokeWeight(1);
  fill("magenta");
  stroke("yellow");
  rotateZ(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  rotateX(frameCount * 0.04);
  rect(80, 200, 40, 60);
  
   strokeWeight(3);
  fill("magenta");
  stroke("yellow");
  rotateZ(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  rotateX(frameCount * 0.04);
  rect(80, 20, 40, 60);
  
  // quad(-30, -30, 0, 30, -30, 0, 30, 30, 20, -30, 30, -20);
}
