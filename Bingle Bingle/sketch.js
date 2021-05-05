let img;
let pg;
let textTexture;
let boxSize = 300;
let font1;
let t;

let indexWord = 0;
let words = ["어떻게 하나 우리 만남은 빙글빙글 돌고"];

// posenet
let cam;
let poseNet;
let pose;

let leftWristX;
let leftWristY;
let rightWristX;
let rightWristY;
let noseX;
let noseY;
var noseFromCenterX;
var noseFromCenterY;

let stopped = false


// background modes
var backgroundMode = true;
var lastTime = -1500;
var lastTimeNose = -1500;



function preload(){
  font1 = loadFont('RixYeoljeongdo Regular.ttf')
}



function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  pg = createGraphics(200, 200);
  pg.image = (img);
	
  textTexture = createGraphics(boxSize,boxSize);
	
  //textTexture.background(255);
  textTexture.fill(255);
  textTexture.textFont(font1);
  // textTexture.textAlign(CENTER);
  textTexture.textSize(17);
  
  cam = createCapture(VIDEO);
  cam.size(width, height);
  //video.hide();
  poseNet = ml5.poseNet(cam, modelLoaded);
  poseNet.on('pose', gotHumans);
}


function gotHumans(humans) {
  // if there is pose data
  if (humans.length > 0) {
    // store data from first human detected
    pose = humans[0].pose;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}

// function that calculate all attributes
function calculateAttributes() {
   if (pose) {
    // loop through all keypoints
    for (let i = 0; i < pose.keypoints.length; i++) {
      // get x, y data for each keypoint
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
    }
    noseX = pose.keypoints[0].position.x;
    noseY = pose.keypoints[0].position.y;
    if (noseX < width/2) {
      let diffX = (width/2) - noseX
      noseX = diffX + (width/2)
   } else {
      let diffX = noseX - (width/2)
      noseX = (width/2) - diffX
   }
    
    leftWristX = pose.keypoints[9].position.x;
    leftWristY = pose.keypoints[9].position.y;

    rightWristX = pose.keypoints[10].position.x;
    rightWristY = pose.keypoints[10].position.y;
  
    // Center matrix
    let centerX = (leftWristX + rightWristX)/2;
    let centerY = (leftWristY + rightWristY)/2;
    
    handXDiff = int(leftWristX - rightWristX);
    handYDiff = int(leftWristY - rightWristY);
     
     boxSize = (abs(handXDiff)/2)
    
     if (handXDiff < 40) {
         triggerStop()
     }
     
    if (noseX < 0 || noseX > width || noseY < 0 || noseY > height) {
      triggerBackgroundMode()
    } 

    
    noseFromCenterX =  noseX - width/2;
    noseFromCenterY = noseY - height/2;
    translate(noseFromCenterX, noseFromCenterY);
   }
}


function draw() {
    noStroke()
    texture(cam);
    scale(-1, 1);
    
    if (backgroundMode) {
      plane(width, height);
    } else {
      background(0);
    } 
    scale(-1, 1);

    push()
    calculateAttributes()
    makeCube()
    pop()

}

function makeCube() {
	for(let i = 0; i <=10; i++){
	    textTexture.text(words[indexWord], 0,i*32);
	}

    rotateZ(radians(45));

    if (!stopped) {
	    rotateX(frameCount * 0.02);
    }
	texture(textTexture);
	box(boxSize);
}

function triggerBackgroundMode() {
  if (lastTime < millis() - 2000) {
    backgroundMode = !backgroundMode;
    print(backgroundMode)
    lastTime = millis();
  }
}

function triggerStop() {
  if (lastTimeNose < millis() - 500) {
    stopped = !stopped;
    lastTimeNose = millis();
  }
}
