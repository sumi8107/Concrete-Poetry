function ParticleText(string, x, y, textSize) {
    this.str = string;
    this.pos = createVector(x, y);
    this.size = textSize;

    this.letters = [];
    this.started = false;
    this.expired = false;
}

ParticleText.prototype.show = function () {
    //Set text alignment
    textAlign(LEFT, CENTER);
    
    //Set apperance
    fill(textColor);
    noStroke();
    textSize(this.size);
    
    //draw text
    text(this.str, this.pos.x, this.pos.y);
    
    //draw letters if there are any
    for(var i = 0; i < this.letters.length; i++) {
        this.letters[i].show();
    }
}

ParticleText.prototype.update = function() {
    
    //update letters and delete the ones that are not needed anymore
    for(var i = this.letters.length-1; i >= 0; i--) {
        this.letters[i].update();
        
        if(this.letters[i].hasStopped()) {
            this.letters.splice(i, 1);
        }
    }
    
    //check wether this text is expired (when it was animated and all letters got deleted)
    if(this.letters.length == 0 && this.started) {
        this.expired = true;
    }
}

ParticleText.prototype.animate = function () {
    //schedule started
    setTimeout(function(particleText) {
        particleText.started = true;
    }, delayBetweenLetters, this);
    
    //make an array from the string
    var textArr = Array.from(this.str);

    var offset = 0; //offset from origin of the text
    for (var i = 0; i < textArr.length; i++) { //go through each letter
        
        //find the bounds of the letter
        var bounds = font.textBounds(textArr[i], offset + this.pos.x, this.pos.y, this.size);

        //Schedule the creation of a letter particle
        setTimeout(function(char, x, y, size, lettersArray, string, particleText, textOffset){
            lettersArray.push(new Letter(char, x, y, size)); //create the letter
            
            //change original string
            var string = particleText.getString().slice(1);
            particleText.setString(string);
            particleText.offsetX(textOffset);
        }, delayBetweenLetters*i, textArr[i], bounds.x, this.pos.y, this.size, this.letters, this.str, this, bounds.w + this.size / 26);
        
        //calculate next offset
        offset += bounds.w + this.size / 26;
    }
}

//Setter
ParticleText.prototype.setString = function(newString) {
    this.str = newString;
}

ParticleText.prototype.offsetX = function(value) {
    this.pos.x += value;
}

//getter
ParticleText.prototype.getString = function() {
    return this.str;
}

ParticleText.prototype.isExpired = function() {
    return this.expired;
}

ParticleText.prototype.hasStarted = function() {
    return this.started;
}
