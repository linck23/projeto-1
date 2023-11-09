function setup() {
    createCanvas(400, 400);
    background("green");
  }
  
  function draw() {
    stroke("yellow");
    fill("purple");
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  