var xImg
var zeroImg
var blackImage
var box11,box12,box13, box21, box22,box23,box31,box32,box33
//var boxes=[box11,box12,box13,box21,box22,box23,box31,box32,box33]
var turn ;
var box1, box2, box3, box4, box5, box6, box7, box8, box9
var restart, restartImg 

function preload(){
    //ONLY FOR PRELOADING IMAGES AND SOUNDS
  xImg=loadAnimation("x.png");
  zeroImg= loadAnimation("o.png")
  blackImage= loadAnimation("square.png")
    
}
function setup (){
    createCanvas(600,700);
    
    box11=createSprite(100,100,190,190);
    box11.addAnimation("black",blackImage);
    box11.addAnimation("zero",zeroImg);
    box11.addAnimation("x",xImg);
    box11.scale=0.17
    // box12=createSprite(300,100,190,190);
    // box12.addImage(blackImage)    
    // box12.scale=0.17
    // box13=createSprite(500,100,190,190);
    // box13.addImage(blackImage)
    // box13.scale=0.17

    // box21=createSprite(100,300,190,190);
    // box21.addImage(blackImage)
    // box21.scale=0.17
    // box22=createSprite(300,300,190,190);
    // box22.addImage(blackImage)
    // box22.scale=0.17
    // box23=createSprite(500,300,190,190);
    // box23.addImage(blackImage)
    // box23.scale=0.17

    // box31=createSprite(100,500,190,190);
    // box31.addImage(blackImage)
    // box31.scale=0.17
    // box32=createSprite(300,500,190,190);
    // box32.addImage(blackImage)
    // box32.scale=0.17
    // box33=createSprite(500,500,190,190);
    // box33.addImage(blackImage)
    // box33.scale=0.17
   
   

    


    box1= 0
    box2= 0
    box3= 0
    box4= 0
    box5= 0
    box6= 0
    box7= 0
    box8= 0
    box9= 0

    turn="P1";
   

}
function draw(){
    background("aqua");
  
    // if(mousePressedOver(box11)){
    //   console.log("please work")
    // }
    
    // //first horizonal line
    // if(box11==1 && box12==1 && box13==1){
    //   textSize(80);
    //   text("O won!", 100, 200);
    // }
    // if(box11==2 && box12==2 && box13==2){
    //   textSize(80);
    //   text("X won!", 100, 200);
    // }

    // //second horizonal line
    // if(box21==1 && box22==1 && box23==1){
    //   textSize(80);
    //   text("O won!", 100, 200);
    // }
    // if(box21==2 && box22==2 && box23==2){
    //   textSize(80);
    //   text("X won!", 100, 200);
    // }
    
    // //third horizonal line
    // if(box31==1 && box32==1 && box33==1){
    //   textSize(80);
    //   text("O won!", 100, 200);
    // }
    // if(box31==2 && box32==2 && box33==2){
    //   textSize(80);
    //   text("X won!", 100, 200);
    // }

    // //first verticle line
    // if(box11==1 && box21==1 && box31==1){
    //   textSize(80);
    //   text("O won!", 100, 200);
    // }
    // if(box11==2 && box21==2 && box31==2){
    //   textSize(80);
    //   text("X won!", 100, 200);
    // }

    // //second verticle line
    // if(box12==1 && box22==1 && box32==1){
    //   textSize(80);
    //   text("O won!", 100, 200);
    // }
    // if(box12==2 && box21==2 && box32==2){
    //   textSize(80);
    //   text("X won!", 100, 200);
    // }
    
    // //third verticle line
    // if(box13==1 && box23==1 && box33==1){
    //   textSize(80);
    //   text("O won!", 100, 200);
    // }
    // if(box13==2 && box23==2 && box33==2){
    //   textSize(80);
    //   text("X won!", 100, 200);
    // }

    // //first diagonal line
    // if(box11==1 && box22==1 && box33==1){
    //   textSize(80);
    //   text("O won!", 100, 200);
    // }
    // if(box11==2 && box22==2 && box33==2){
    //   textSize(80);
    //   text("X won!", 100, 200);
    // }

    // //second diagonal line
    // if(box13==1 && box22==1 && box31==1){
    //   textSize(80);
    //   text("O won!", 100, 200);
    // }
    // if(box13==2 && box22==2 && box31==2){
    //   textSize(80);
    //   text("X won!", 100, 200);
    // }

    
    
    
    //11
    if (mousePressedOver(box11) && box1==0){
      if (turn == "P1"){
        player1Play(box11);
        box11=1;
      } 
      else if (turn == "P2" ){
        player2Play(box11);
        box11=2;
      } 
      console.log("whatever")
    }

    // //12
    // if (mousePressedOver(box12) && box12==0){
    //   if (turn == "P1"){
    //     player1Play(box12);
    //     box12=1;
    //   } 
    //   else if (turn == "P2" ){
    //     player2Play(box12);
    //     box12=2;
    //   } 
    // }

    //  //13
    // if (mousePressedOver(box13) && box13==0){
    //   if (turn == "P1"){
    //     player1Play(box13);
    //     box13=1;
    //   } 
    //   else if (turn == "P2" ){
    //     player2Play(box13);
    //     box13=2;
    //   } 
    // }
    
    // //21
    // if (mousePressedOver(box21) && box21==0){
    //   if (turn == "P1"){
    //     player1Play(box21);
    //     box21=1;
    //   } 
    //   else if (turn == "P2" ){
    //     player2Play(box21);
    //     box21=2;
    //   } 
    // }
    
    // //22
    // if (mousePressedOver(box22) && box22==0){
    //   if (turn == "P1"){
    //     player1Play(box22);
    //     box22=1;
    //   } 
    //   else if (turn == "P2" ){
    //     player2Play(box22);
    //     box22=2;
    //   } 
    // }
    // //23
    // if (mousePressedOver(box23) && box23==0){
    //   if (turn == "P1"){
    //     player1Play(box23);
    //     box23=1;
    //   } 
    //   else if (turn == "P2" ){
    //     player2Play(box23);
    //     box23=2;
    //   } 
    // }
    // //31
    // if (mousePressedOver(box31) && box31==0){
    //   if (turn == "P1"){
    //     player1Play(box31);
    //     box31=1;
    //   } 
    //   else if (turn == "P2" ){
    //     player2Play(box31);
    //     box31=2;
    //   } 
    // }
    // //32
    // if (mousePressedOver(box32) && box32==0){
    //   if (turn == "P1"){
    //     player1Play(box32);
    //     box32=1;
    //   } 
    //   else if (turn == "P2" ){
    //     player2Play(box32);
    //     box32=2;
    //   } 
    // }
    // //33
    if (mousePressedOver(box33) ){
      // if (turn == "P1"){
      //   player1Play(box33);
      //   box33=1;
      // } 
      // else if (turn == "P2" ){
      //   player2Play(box33);
      //   box33=2;
      // } 
      console.log("lala")
    }
    drawSprites();
    // if(turn =="P1"){
    //   textSize(28)
    //   fill ("orange")
    //   text ("Turn : O" , 250,650);
    // }
    // if(turn =="P2"){
    //   textSize(28)
    //   fill ("orange")
    //   text ("Turn : X" , 250,650);
    // }
}


function player1Play(boxP1){
  box11.changeAnimation("zero");
  boxP1.scale=0.1;
  turn="P2";
  console.log("in")
}
function player2Play(boxP2){
  box11.changeAnimation("x");
  boxP2.scale= 0.07
  turn="P1";
  console.log("in2")
}
