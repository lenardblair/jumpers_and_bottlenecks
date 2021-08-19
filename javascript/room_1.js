var b_circle;
var projects_btn;
var moleskin_btn;
var contact_btn;
var sprite;
var dir = 90;
var x ;
var y;
var centerx;
var centery;
var bk_color;

//____on ready____________________
function setup() {
  x = windowWidth -20;
  y = windowHeight -50;
  centerx = x/2
  centery = x/2
 
  createCanvas(x, y);
  bk_color = 0
  
  b_circle = createSprite(centerx /2, 240  , 200, 200);
  projects_btn = createSprite(centerx , 260  , 20, 20);
  moleskin_btn = createSprite(centerx  , 300  , 20, 20);
  contact_btn = createSprite(centerx  , 340  , 20, 20);
  b_circle.addAnimation('floating', 'assets/images/logo/logo_01.png', 'assets/images/logo/logo_05.png');

  //Navigation__
  projects_btn.addAnimation('floating', 'assets/images/btns/Projects_btn.png');
  moleskin_btn.addAnimation('floating', 'assets/images/btns/moleskin_btn.png');
  contact_btn.addAnimation('floating', 'assets/images/btns/contact_btn.png');
 
  projects_btn.onMousePressed = function() {
    window.location.href ="http://rustyraygun.github.io/projects";
  };
  projects_btn.onMouseOver = function() {
    projects_btn.scale = 0.8;
  };
  projects_btn.onMouseOut = function() {
    projects_btn.scale = 1;
  };

  moleskin_btn.onMousePressed = function() {
    window.location.href ="http://rustyraygun.github.io/moleskin";
  };
  moleskin_btn.onMouseOver = function() {
    moleskin_btn.scale = 0.8;
  };
  moleskin_btn.onMouseOut = function() {
    moleskin_btn.scale = 1;
  };

  contact_btn.onMousePressed = function() {
    window.location.href ="http://rustyraygun.github.io/contact";
  };
  contact_btn.onMouseOver = function() {
    contact_btn.scale = 0.8;
  };
  contact_btn.onMouseOut = function() {
    contact_btn.scale = 1;
  };
}


//_____start of__canvas loop
function draw() {
 
  fill(128 + sin(frameCount*0.1) * 128);
  b_circle.attractionPoint(0.2, centerx + sin(frameCount*0.1) * 128, centery/2);
  b_circle.maxSpeed = 0.08;
  
  background(bk_color);
  drawSprites();
  text("Rusty Raygun", centerx, 200);
  text("Design & Development", centerx, 220);

  
}

function mouseClicked() {
  x = windowWidth -50;
  y = windowHeight -50;
  resizeCanvas(x, y, true);

}

