

//text info
var font;
var textColor = 255;
var fontSize = 50;
var maxTextWidth = 1450;
var textPosX = 50;
var textPosY = 800;
var t = '쏟아져 내린 별 빛 사이로 그 밤에 그 밤 따뜻한 별 빛이 내린다 까만 밤하늘에 별 빛이 내린다 샤라랄라랄랄라 '
var particleTexts = [];

//physics related stuff
var gravity = -0.1;
var mouseRadius = 80;

//animation
var delayBetweenLetters = 100;

//interaction
var mouseWheelSensitivity = 0.1;

//snow
var snowNum = 300

var snowSpeeds = []
var snowPositions = []
var snowShakeAngles = []

function preload() {
    //load the font
    font = loadFont('SCDream1.otf');
}



function setup() {
    createCanvas(windowWidth, windowHeight);
    //Set the font
    textFont(font);
    //create the particle text
  textPosY =  windowHeight - 100
    particleTexts.push(new ParticleText(t, textPosX, textPosY, fontSize));
  

	for (var i = 0; i < snowNum; i++) {
		snowPositions.push({ x: random(0, windowWidth), y: random(0, windowHeight)})
		snowSpeeds.push(random(0.3, 1.2))
		snowShakeAngles.push(random(0, 360))
	}
  	angleMode(DEGREES)
	
}


function draw() {
  
  
    background(51);
  
  
  	strokeWeight(2)
	stroke(255)
	for (var i = 0; i < snowNum; i++) {
		point(snowPositions[i].x + sin(snowShakeAngles[i]) * 80, snowPositions[i].y)
		snowPositions[i].y += snowSpeeds[i]
		snowShakeAngles[i] += 0.4
		
		// if (particlePositions[i].y < -10) particlePositions[i].y = windowHeight +  10
		if (snowPositions[i].y > windowHeight) snowPositions[i].y = -10
		if (snowShakeAngles[i] > 360)  snowShakeAngles[i] = 0
	}
  
    //go through each particle text and display it, update it and check wether it should be deleted
    for (var i = particleTexts.length - 1; i >= 0; i--) {
        particleTexts[i].show();
        particleTexts[i].update();

        if (particleTexts[i].isExpired()) {
            particleTexts.splice(i, 1);
        }
    }
    
    //draw the mouse collider
    fill(255);
    ellipse(mouseX, mouseY, mouseRadius*2);
}


function mouseClicked() {
    //go through each particle text and check wether it should be activated
    for (var i = particleTexts.length - 1; i >= 0; i--) {
        if (!particleTexts[i].hasStarted()) {
            particleTexts[i].animate();
            //create a new, empty particle text
            t = '';
            particleTexts.push(new ParticleText(t, textPosX, textPosY, fontSize));
        }
    }
}


function keyTyped() {
    //if the text isn't to large allready, add the typed key to it
    if (font.textBounds(t, textPosX, textPosY, fontSize).w < maxTextWidth) {
        t += key;
        
        for (var i = particleTexts.length - 1; i >= 0; i--) {
            if (!particleTexts[i].hasStarted()) {
                particleTexts[i].setString(t);
            }
        }
    }
}

function keyPressed() {
    //backspace functionality
    if (keyCode == BACKSPACE) {
        t = t.slice(0, t.length - 1);

        for (var i = particleTexts.length - 1; i >= 0; i--) {
            if (!particleTexts[i].hasStarted()) {
                particleTexts[i].setString(t);
            }
        }
    }
}