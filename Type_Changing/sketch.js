let video;
let poseNet;
let pose;

let leftWristX;
let leftWristY;
let rightWristX;
let rightWristY;
let leftHipX;
let leftHipY;
let noseX;
let noseY;
let handYDiff;
let handXDiff;
var yWaveSize = 100;
var yWaveLength = 0.5;
var yWaveSpeed = 0.05;
var tracking = 50;

let fontSize = 50;

var canvas;
var inpText = "별헤는밤";//Choose one of your text to Start with

var inpTextArray = ["별헤는밤", "별하나의 추억과", "별하나에 아름다운 말 한마디씩 불러봅니다", "별이 아스라이멀듯이", "오늘밤에도 별은 바람에 스친다"];//Put Your Text Here


// background modes
var backgroundMode = true;
var lastTime = -1500;


function preload() {
  fontMenu = loadFont('Computer.ttf');
  fontGenerator = loadFont('Computer.ttf');
}

function setup() {
  //posnet setup
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  

  poseNet = ml5.poseNet(video, modelLoaded);
  // listen for poses
  // whenever human pose is detected, 
  // call a function to get results
  poseNet.on('pose', gotHumans);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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


    let leftElbowX = pose.keypoints[7].position.x;
    let leftElbowY = pose.keypoints[7].position.y;

    let rightElbowX = pose.keypoints[8].position.x;
    let rightElbowY = pose.keypoints[8].position.y;
    
    leftHipY = pose.keypoints[11].position.y;
    rightHipY = pose.keypoints[12].position.y;
    
    // Center matrix
    let centerX = (leftWristX + rightWristX)/2;
    let centerY = (leftWristY + rightWristY)/2;
    
    handXDiff = int(leftWristX - rightWristX);
    handYDiff = int(leftWristY - rightWristY);
    if (handXDiff < 90) {
      changeInputText()
    } 
    if (noseX < 0 || noseX > width || noseY < 0 || noseY > height) {
      triggerBackgroundMode()
    }
    
      // reverse canvas context to mirror everything
    push();
    translate(video.width, 0); // mirror video image
    scale(-1, 1);
    if (backgroundMode) {
        image(video, 0, 0, width, height);
    } else {
      background(0);
    }    
    // flip back for words
    translate(video.width, 0);
    scale(-1, 1);
    
    drawWords();
}

// function that draw words based on center x, y hand positions
function drawWords() {
    let centerX = (leftWristX + rightWristX)/2;
    let centerY = (leftWristY + rightWristY)/2;
  
    let leftHeight = abs(leftWristY - leftHipY);
    let rightHeight = abs(rightWristY - rightHipY);
    
    let avgHeight = (leftHeight + rightHeight)/2
    let handXDiff = int(leftWristX - rightWristX);
    let lineCount = constrain(int(avgHeight/fontSize), 1, 6);
    yWaveSize = constrain(abs(handYDiff)/4, 20, 80);
  
    translate(centerX, centerY);
    // Reposition  matrix depending on width & height of the grid
    translate(-(inpText.length-1)*tracking/2,0);
    noStroke();
    textFont(fontGenerator);
    textSize(fontSize);
    
    for(var j = 0; j<lineCount; j++){
    for(var i = 0; i < inpText.length; i++){
      yWave = sin(frameCount*yWaveSpeed + i*yWaveLength) * yWaveSize;
      yWavePost = sin(frameCount*yWaveSpeed + (i+1)*yWaveLength) * yWaveSize;
      let angleAdjust = atan2(yWavePost-yWave,tracking);
    
      fill(255);
      push();
      tracking = (handXDiff/inpText.length)
      let offSet = 1.5;
      translate(i*tracking,j*fontSize*offSet);
      let fontHeight = 7/10 * fontSize;
      
        translate(0,yWave);
      //ellipse(0,0,5,5);
        rotate(angleAdjust);
      // Reposition matrix to place the rotation point of the type in the middle of the X-Height (err... cap height)    
        translate(0,fontHeight/2);
        text(inpText.charAt(i),0,0);
      pop();
    }
  }
    pop();
  
  } 
}

// function to change input text randomly
function changeInputText() {
  inpText = inpTextArray[int(random(0, 5))];
}

function triggerBackgroundMode() {
  if (lastTime < millis() - 2000) {
    backgroundMode = !backgroundMode;
    print(backgroundMode)
    lastTime = millis();
  }
}

