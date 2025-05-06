let colorlist = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000']

let mover
let G
let jumpVector 
let leftVector
let rightVector
let upVector
let downVector

function setup() {
  createCanvas(400, 400);
  mover = Mover.createStandardMoverAt(10,height/2)
  G = createVector(0,2)
  jumpVector = createVector(0,-70)
  leftVector = createVector(-5,0)
  rightVector = createVector(2,0)
  upVector = createVector(0,3)
  downVector = createVector(0,4)
  ellipseMode(RADIUS)
}

function draw() {
  background(220);
  mover.applyForce(G)
  mover.update()
}

function keyPressed() {
  // jump
  if( key === " " ) {
    // apply a force
    // negative y value
    mover.applyForce(jumpVector)
  }
  
  if( keyCode === LEFT_ARROW ) {
    mover.applyForce(leftVector)
  }

  if( keyCode === RIGHT_ARROW ) {
    mover.applyForce(rightVector)
  }
  
    if( keyCode === UP_ARROW ) {
    mover.applyForce(upVector)
  }
  
    if( keyCode === DOWN_ARROW ) {
    mover.applyForce(downVector)
  }
  
}
