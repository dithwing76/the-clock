var h
var m
var s
var sec,secimg
var min,minimg
var hr,hrimg
function preload(){
  secimg=loadImage("sec.png")
  minimg=loadImage("min.png")
  hrimg=loadImage("hr.png")
}


function setup() {
  createCanvas(800,400);
  sec=createSprite(400, 200, 7, 50);
  sec.addImage(secimg)
  min=createSprite(400, 200, 7, 50);
  min.addImage(minimg)
  hr=createSprite(400, 200, 7, 50);
  hr.addImage(hrimg)
  h = hour()
  m = minute()
  s = second()
  
}

function draw() {
  background(255,255,255);  
  h = hour()
  m = minute()
  s = second()
  
  //text (h,20,20)
  //text (m,20,40)
  //text (s,20,60)
  sec.rotation=s*6-90
  min.rotation=m*6-90
  hr.rotation=h*6-90
  textSize(20)
  fill("black")
  if(h>11){
    text("pm",400,100)
  }else{
    text("am",400,100)
  }
  drawSprites();
}