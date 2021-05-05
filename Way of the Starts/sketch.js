let video;
let poseNet;
let pose;
let noseX;
let noseY;
let leftWristX;
let leftWristY;
let rightWristX;
let rightWristY;
let leftShoulderX;
let leftShoulderY;
let rightShoulderX;
let rightShoulderY;
let leftHipX;
let leftHipY;
let handYDiff;
let handXDiff;
var yWaveSize = 100;
var yWaveLength = 0.5;
var yWaveSpeed = 0.05;
var tracking = 50;


var inpTexts = [];

// background modes
var backgroundMode = true;
var lastTime = -1500;

// DRAW WORD VARS....
var x = 0, y = 0;
var stepSize = 5.0;
var letters = "난 몰랐소밤하늘의 별이 좋다고 해서그저 하늘을 어둡게 칠한것 뿐인데 그대 별 까지 없앨 줄 난 몰랐소 기다리고 기다렸지만그대에게 가는 별의 길은 나타나지 않았소 아쉬운 마음에 밤하늘의 어둠을 지우개로 지워보리오";

// list of letters
var letterList = ["난 몰랐소밤하늘의 별이 좋다고 해서그저 하늘을 어둡게 칠한것 뿐인데 그대 별 까지 없앨 줄 난 몰랐소 기다리고 기다렸지만그대에게 가는 별의 길은 나타나지 않았소 아쉬운 마음에 밤하늘의 어둠을 지우개로 지워보리오"]
var fontSizeMin = 1;
var angleDistortion = 0.0;
var counter = 0;
var words = [];
var eraserRadius = 100;
// word class for each letter
class Word {
    constructor(letter, x, y, leftWristX, leftWristY, counter, d) {
        this.letter = letter
        this.x = x
        this.y = y
        this.leftWristX = leftWristX;
        this.leftWristY = leftWristY;
        this.counter = counter;
        this.d = d
        this.textWidth = 0
        
    }
display() {
        textAlign(CENTER);
        textFont('Georgia');
        textSize(1+this.d/2); 
        text(this.letter, this.x, this.y); 
        this.textWidth = textWidth(this.letter)
    }
}

function preload() {
  font = loadFont('assets/RixYeoljeongdo_Pro Regular.otf');
}

function setup() {
  //posnet setup
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  // listen for poses
  // whenever human pose is detected, 
  // call a function to get results
  poseNet.on('pose', gotHumans);
  frameRate(20);
  
  smooth();
  textAlign(LEFT);
  fill(255);
  background(0);
  x = width/2;
  y = height/2;

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
  // reverse canvas context to mirror everything
  push();
  translate(video.width, 0);//mirror video image
  scale(-1, 1);
  if (backgroundMode) {
      image(video, 0, 0, width, height);
  } else {
    background(0);
  }
  translate(video.width, 0);//flip back for letters
  scale(-1, 1);
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
    leftShoulderX = pose.keypoints[5].position.x;
    leftShoulderY = pose.keypoints[5].position.y;
    rightShoulderX = pose.keypoints[6].position.x;
    rightShoulderY = pose.keypoints[6].position.y;
    
    // Center matrix
    let centerX = (leftWristX + rightWristX)/2;
    let centerY = (leftWristY + rightWristY)/2;
    
    handXDiff = int(leftWristX - rightWristX);
    handYDiff = int(leftWristY - rightWristY);
    if (noseX < 0 || noseX > width || noseY < 0 || noseY > height) {
      triggerBackgroundMode()
    } 
    drawWord();
  }
}

function mirrorWristsXValues() {
    if (leftWristX < width/2) {
      let diffX = (width/2) - leftWristX
      leftWristX = diffX + (width/2)
   } else {
      let diffX = leftWristX - (width/2)
      leftWristX = (width/2) - diffX
   }
  
    if (rightWristX < width/2) {
       let diffX = (width/2) - rightWristX
      rightWristX = diffX + (width/2)
   } else {
      let diffX = rightWristX - (width/2)
      rightWristX = (width/2) - diffX
   }
}
// function that draw words based on hand location
function drawWord() {
   mirrorWristsXValues()
   var d = dist(x, y, leftWristX, leftWristY);
   stepSize = textWidth(letters.charAt(counter));
   if (d > stepSize) {
       if (words.length >= 200) {
         words.splice(0, 1)
       }
      let letter = new Word(letters.charAt(counter), x, y, leftWristX, leftWristY, counter, d);
    words.push(letter);
    counter++;
    if (this.counter > letters.length-1) this.counter = 0;
    }

     // erase words (letters) based on right hand loc
    for(var i = 0; i < words.length; i++) {
      // if the word is in erase bound.
      if (rightWristX >= words[i].x - (eraserRadius) && rightWristX <= words[i].x + (eraserRadius) && rightWristY >= words[i].y - (eraserRadius) && rightWristY <= words[i].y + (eraserRadius)) {
        words.splice(i, 1);
        i -= 1;
      }
    }
    
    // sfjlasjf
    for(var i = 0; i < words.length; i++) {
      words[i].display();
    }  
      var angle = atan2(leftWristY-y, leftWristX-x); 
      rotate(angle + random(0.0));
      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 

}
// function to change input text randomly
function changeInputText() {
  letters = letterList[int(random(0, 2))];
}

function triggerBackgroundMode() {
  if (lastTime < millis() - 2000) {
    backgroundMode = !backgroundMode;
    print(backgroundMode)
    lastTime = millis();
  }
}



