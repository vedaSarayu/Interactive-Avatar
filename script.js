let words = "\"One day? Or day one.\"";
let eyeW = 50;
let eyeH = 60;
let pupilW = 25;
let pupilH = 30;

function setup() {
  //for screen size
  createCanvas(400, 400);
  //for bg color
  background(193, 225, 193	);
}

//repeats
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);
  
  //body
  fill(244, 194,194);
  ellipse(200,500,200,600);

  
  //face
  fill(176,137,104);
  ellipse(width/2,height/2,175,200);


  
  //hair
  fill(30,30,30);
  rect(110, 240, 40, 200);
  rect(290, 240, 40, 200);
  arc(150, 100, 200, 100, 0, 150);
  arc(280, 100, 200, 100, 50, 180);
  
  //MOUSE IS PRESSED CONDITIONALS
  
  //EYES WINK + SMILE
  if(mouseIsPressed){
    //eyes
    fill(255,255,255);
    ellipse(170,170,eyeW,eyeH);
    fill(0);
    ellipse(230,170,eyeW,eyeH/8);
    
    //pupils
    fill(11,9,10);
    ellipse(170,170,pupilW,pupilH); 
    
    //mouth
    fill(255,180,162);
    arc(200,230,60,60,0,180);
  }
    
  //EYES OPEN + NORMAL MOUTH
  else{
    //eyes
    fill(255,255,255);
    ellipse(170,170,eyeW,eyeH);
    ellipse(230,170,eyeW,eyeH);
    
    //pupils
    fill(11,9,10);
    ellipse(170,170,pupilW,pupilH); 
    ellipse(230,170,pupilW,pupilH);
    
    //mouth
    fill(176,137,104);
    arc(200,230,60,60,0,180);
  }

  //TEXT
  fill(0,48,73);
  textSize(22);
  text(words,20,30);
  
  textSize(15);
  text("\n– unknown ",20,35);
  
  //directions for mouse press
  textSize(12);
  text("Click anywhere\nto see me wink\nand smile!",305,360);
}

//stroke()