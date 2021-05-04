function Letter(char, x, y, fontSize) {
    this.char = char;
    this.pos = createVector(x, y);
    this.size = fontSize;

    this.jitterValue = 0.5;
    this.vel = createVector(0, 0);
    this.maxYVel = 5;
    
    this.stopped = false;
}

Letter.prototype.show = function () {
    //display
    textAlign(LEFT, CENTER);
    fill(textColor);
    noStroke();
    text(this.char, this.pos.x, this.pos.y);
}

Letter.prototype.update = function () {
    //add gravity
    this.addForce(createVector(0, gravity));

    //add jitter
    var jitterForce = createVector(random(-this.jitterValue, this.jitterValue), 0);
    this.addForce(jitterForce);
    
    //avoid mouse
    this.avoidMouse();
    
    //update position
    if(this.pos.y > -this.size) {
         this.pos.add(this.vel);   
    } else {
        this.stopped = true;
    }
}

Letter.prototype.addForce = function(force) {
    this.vel.add(force);
    
    //if y speed is higher than max cap it
    if(Math.abs(this.vel.y) > this.maxYVel) {
        this.vel.y = (this.vel.y < 0) ? -this.maxYVel : this.maxYVel;
    }
}

Letter.prototype.avoidMouse = function() {
    //get the distance of the letter to the mouse
    var distToMouse = sqrt(pow((this.pos.x - mouseX), 2) + pow((this.pos.y - mouseY), 2));
    
    //if the colliders are inside each other, push the letter out
    if(distToMouse < this.size/2 + mouseRadius) {
        var mousePos = createVector(mouseX, mouseY);
        
        this.pos = mousePos.copy().add(this.pos.copy().sub(mousePos).normalize().mult((this.size/2 + mouseRadius)));
    }
}

//getter
Letter.prototype.hasStopped = function() {
    return this.stopped;
}
