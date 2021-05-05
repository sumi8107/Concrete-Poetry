var radius;
var stack;
var fontHeight;
var appliedFontHeight;
var stackHeight, stackWidth;
var pieSlice;
var baseAngle;
var colorSwitcher = 0;
var speed;
var centerWave;
var centerOffset = 2;
var fontSize;
var totalNumber;

var noseFromCenterX;
var noseFromCenterY;

var bkgdColor, textColor, blend1;
var gradientColor;
var rippleWave;
// STRING
let letter_select, inp, inpText, runLength;
let myText = [];


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


// background modes
var backgroundMode = true;
var lastTime = -1500;


function preload() {
//  font = loadFont('WorkSans-Regular.ttf');
//  font = loadFont('IBMPlexMono-ExtraLight.otf');
//  font = loadFont('IBMPlexMono-Bold.otf');
//font = loadFont('SpaceMono-Bold.ttf');
    font = loadFont('Computer.ttf');

  //  font = loadFont('SourceCodePro-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCapture(VIDEO);
  cam.size(width, height);
  //video.hide();
  poseNet = ml5.poseNet(cam, modelLoaded);
  poseNet.on('pose', gotHumans);

  frameRate(10);

  textFont(font);


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


function draw() {
  background(0);
  texture(cam);
  scale(-1, 1);
  if (backgroundMode) {
    plane(width, height);
  } else {
    background(0);
  }
  push();
  calculateAttributes();
  display3DWords();
  pop();       

}

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
    leftWristX = pose.keypoints[9].position.x;
    leftWristY = pose.keypoints[9].position.y;

    rightWristX = pose.keypoints[10].position.x;
    rightWristY = pose.keypoints[10].position.y;
  
    // Center matrix
    let centerX = (leftWristX + rightWristX)/2;
    let centerY = (leftWristY + rightWristY)/2;
    
    handXDiff = int(leftWristX - rightWristX);
    handYDiff = int(leftWristY - rightWristY);
    rippleWave = handXDiff/4;
    centerWave = handYDiff/4;
     
     if (handXDiff/4 < 40) {
       rippleWave = 0;
     }
     if (handYDiff/4 < 40) {
       centerWave = 0;
     }
     
    if (noseX < 0 || noseX > width || noseY < 0 || noseY > height) {
      triggerBackgroundMode()
    } 

    
    noseFromCenterX =  noseX - width/2;
    noseFromCenterY = noseY - height/2;
    translate(noseFromCenterX, noseFromCenterY);
    //print("noseFromCenterX:", noseFromCenterX);
    //print("noseFromCenterY:", noseFromCenterY);
   }
}

function display3DWords() {
  bkgdColor = color(0);
  textColor = color(255);
  blend1 = color(255);
  stack = 20;
  radius = 100;
  speed = 0.03;


  rippleOffset = 100;
  inpText = "중력의 힘,중력의법칙"
  //force of gravity
  runLength = inpText.length;
  rectMode(CENTER);
  
  pieSlice = 2*PI/stack;
  fontHeight = 2*PI*radius/stack;
  fontSize = fontHeight*10/(7);
  stackHeight = fontSize * 70/100;
  textAlign(CENTER);
  textSize(fontSize * 0.5);
  appliedFontHeight = (fontSize*0.5) * 3/10;
  totalNumber = stack*runLength;
  
  rotateX(PI/2);
  fill(255);
    
  for(var j = 0; j<runLength; j++){
    for(var i = 0; i<stack; i++){
      let blX = sinEngine(j-0.5,centerOffset,speed,1)*centerWave + sin((i-0.5)*pieSlice)*(radius+sinEngine(j-0.5,rippleOffset,speed,1)*rippleWave);
      let blY = (j-0.5)*stackHeight;
      let blZ = cosEngine(j-0.5,centerOffset,speed,1)*centerWave + cos((i-0.5)*pieSlice)*(radius+cosEngine(j-0.5,rippleOffset,speed,1)*rippleWave);
      
      let tlX = sinEngine(j+.5,centerOffset,speed,1)*centerWave + sin((i-0.5)*pieSlice)*(radius+ sinEngine(j+0.5,rippleOffset,speed,1)*rippleWave);
      let tlY = (j+.5)*stackHeight;
      let tlZ = cosEngine(j+.5,centerOffset,speed,1)*centerWave + cos((i-0.5)*pieSlice)*(radius+ cosEngine(j+0.5,rippleOffset,speed,1)*rippleWave);
      
      let trX = sinEngine(j+.5,centerOffset,speed,1)*centerWave + sin((i+.5)*pieSlice)*(radius+ sinEngine(j+0.5,rippleOffset,speed,1)*rippleWave );
      let trY = (j+.5)*stackHeight;
      let trZ = cosEngine(j+.5,centerOffset,speed,1)*centerWave + cos((i+.5)*pieSlice)*(radius+ cosEngine(j+0.5,rippleOffset,speed,1)*rippleWave);   
      
      let brX = sinEngine(j-.5,centerOffset,speed,1)*centerWave + sin((i+.5)*pieSlice)*(radius+ sinEngine(j-0.5,rippleOffset,speed,1)*rippleWave);
      let brY = (j-.5)*stackHeight;
      let brZ = cosEngine(j-.5,centerOffset,speed,1)*centerWave + cos((i+.5)*pieSlice)*(radius+ cosEngine(j-0.5,rippleOffset,speed,1)*rippleWave);   
      
      let centerX = sinEngine(j,centerOffset,speed,1)*centerWave + sin(i*pieSlice)*((radius-4)+ sinEngine(j,rippleOffset,speed,1)*rippleWave);
      let centerY = j*stackHeight;
      let centerZ = cosEngine(j,centerOffset,speed,1)*centerWave + cos(i*pieSlice)*((radius-4)+ cosEngine(j,rippleOffset,speed,1)*rippleWave);
      
      let diffZ = tlZ - blZ;
      let angleX = atan2(diffZ,stackHeight);
      
      let diffX = tlX - blX;
      let angleZ = atan2(diffX,stackHeight);
      
      let diffX2 = brX - blX;
      let diffZ2 = brZ - blZ;
      let angleY = atan2(diffX2,diffZ2);
      fill('#ffffff'); 
      push();
      translate(centerX,centerY,centerZ);
      rotateZ(-angleZ);
      rotateX(angleX);
      rotateY(PI/2+angleY);
      translate(-appliedFontHeight/2,0);
      rotateX(PI);
      rotateY(PI);
      rotateZ(PI/2);
      text(inpText.charAt(runLength-(j+1)),0,0);
      pop();
     
    }    
  }
}

function triggerBackgroundMode() {
  if (lastTime < millis() - 2000) {
    backgroundMode = !backgroundMode;
    print(backgroundMode)
    lastTime = millis();
  }
}

function sinEngine(aCount,aLength, Speed, slopeN) {
  var sinus = sin((-frameCount*Speed + aCount*aLength));
  var sign = (sinus >= 0 ? 1: -1);
  var sinerSquare = sign * (1-pow(1-abs(sinus),slopeN));
  return sinerSquare;
}

function cosEngine(aCount,aLength, Speed, slopeN) {
  var sinus = cos((-frameCount*Speed + aCount*aLength));
  var sign = (sinus >= 0 ? 1: -1);
  var sinerSquare = sign * (1-pow(1-abs(sinus),slopeN));
  return sinerSquare;
}
