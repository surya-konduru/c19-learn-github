var ball, paddle, ballImg, paddleImg;

function preload() {
  /* preload your images here of the ball and the paddle */
  ballImg = loadImage("ball.png");
  paddleImg = loadImage("paddle.png");

}


function setup() {
  createCanvas(400, 400);
  preload();
  
  /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200, 200, 50, 50);
  paddle = createSprite(380, 200, 50, 100);
  
  /* assign the images to the sprites */
  ball.addImage("ball", ballImg);
  paddle.addImage("paddle", paddleImg);
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

}

function draw() {
  background(205, 153, 0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
  ball.bounceOff(edges);
  

  /* Allow the ball to bounceoff from the paddle */
  // ball.bounceOff(paddle);
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  
  
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounceOff(edges); 
  
  if (ball.isTouching(paddle)) {
      randomVelocity();
  }
  
  
  if(keyDown(UP_ARROW) ) {
    console.log("UP");
     /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW)) {
    /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y + 20;
  }
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityX = -1 * random(4, 20);
  ball.velocityY = random(-5, 5);
}
