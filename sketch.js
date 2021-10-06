
var trex ,trex_running;



function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")  

groundImage = loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,180,30,20)
trex.addAnimation("running",trex_running)
trex.scale = 0.5

ground = createSprite(300,190,1200,20)
ground.addImage(groundImage)
ground2 = createSprite(300,200,1200,20)
ground2.visible =false
}

function draw(){
  background("white")
  drawSprites()
console.log(trex.y)
ground.velocityX = -2
if (ground.x <0) {
  ground.x = 300
}

  trex. collide(ground2)
if (keyDown("space") && trex.y>=165){


trex.velocityY = -15

}
 trex.velocityY = trex.velocityY + 0.8


}

