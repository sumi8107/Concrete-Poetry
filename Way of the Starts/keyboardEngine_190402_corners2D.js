function keyboardEngine_corners2D() {
//  if (letter_select >= inpText.length) {
//      letter_space( strecherX,  strecherY, strecherShear);
//  } else {

  c1 = inpText.charAt(letter_select);  
  
  setUpVectors();
  
    if (c1 == 'A' || c1 == 'a') {
      letter_A();
    } else if (c1 == 'B' || c1 == 'b') {
      letter_B();
    } else if (c1 == 'C' || c1 == 'c') {
      letter_C();
    } else if (c1 == 'D' || c1 == 'd') {
      letter_D();
    } else if (c1 == 'E' || c1 == 'e') {
      letter_E();
    } else if (c1 == 'F' || c1 == 'f') {
      letter_F();
    } else if (c1 == 'G' || c1 == 'g') {
      letter_G();
    } else if (c1 == 'H' || c1 == 'h') {
      letter_H();
    } else if (c1 == 'I' || c1 == 'i') {
      letter_I();
    } else if (c1 == 'J' || c1 == 'j') {
      letter_J();
    } else if (c1 == 'K' || c1 == 'k') {
      letter_K();
    } else if (c1 == 'L' || c1 == 'l') {
      letter_L();
    } else if (c1 == 'M' || c1 == 'm') {
      letter_M();
    } else if (c1 == 'N' || c1 == 'n') {
      letter_N();
    } else if (c1 == 'O' || c1 == 'o') {
      letter_O();
    } else if (c1 == 'P' || c1 == 'p') {
      letter_P();
    } else if (c1 == 'Q' || c1 == 'q') {
      letter_Q();
    }  else if (c1 == 'R' || c1 == 'r') {
      letter_R();
    } else if (c1 == 'S' || c1 == 's') {
      letter_S();
    } else if (c1 == 'T' || c1 == 't') {
      letter_T();
    } else if (c1 == 'U' || c1 == 'u') {
      letter_U();
    } else if (c1 == 'V' || c1 == 'v') {
      letter_V();
    } else if (c1 == 'W' || c1 == 'w') {
      letter_W();
    } else if (c1 == 'X' || c1 == 'x') {
      letter_X();
    } else if (c1 == 'Y' || c1 == 'y') {
      letter_Y();
    } else if (c1 == 'Z' || c1 == 'z') {
      letter_Z();
    } else if (c1 == '_') {
      letter_underscore();
    } else if (c1 == '-') {
      letter_dash();
    } else if (c1 == '?') {
      letter_question();
    } else if (c1 == '.') {
      letter_period();
    } else if (c1 == '!') {
      letter_exclaim();
    } else if (c1 == ' ') {
      letter_space( );
    } else if (c1 == ':') {
      letter_colon( );
    } else if (c1 == ';') {
      letter_semicolon();
    } else if (c1 == ',') {
      letter_comma();
    } else if (c1 == '/') {
      letter_slash();
    } else if (c1 == '&') {
      letter_amp();
    } else if (c1 == '1') {
      one();
    } else if (c1 == '2') {
      two();
    } else if (c1 == '3') {
      three();
    } else if (c1 == '4') {
      four();
    } else if (c1 == '5') {
      five();
    } else if (c1 == '6') {
      six();
    } else if (c1 == '7') {
      seven();
    }  else if (c1 == '0') {
      zero();
    } else if (c1 == '#') {
      hash();
    } else if (c1 == '$') {
      cash();
    }  else if (c1 == '=') {
      equal();
    } else if (c1 == '+') {
      plus();
    } else if (c1 == '*') {
      asterisk();
    }
/*
    else if (c1 == '\"') {
      double_quote();
    } else if (c1 == '\'') {
      single_quote();
    } else if (c1 == '%') {
      percentage();
    } else if (c1 == '8') {
      eight();
    } else if (c1 == '9') {
      nine();
    }else if (c1 == '@') {
      at();
    }
*/
}

/////////////////////////////////////////////////// LETTERS


function setUpVectors(){
  Lhalf = p5.Vector.lerp(TL,BL,0.5);
  Rhalf = p5.Vector.lerp(TR,BR,0.5);
  Thalf = p5.Vector.lerp(TL,TR,0.5);  
  Bhalf = p5.Vector.lerp(BL,BR,0.5); 
  Lthird = p5.Vector.lerp(TL,BL,1/3);
  Rthird = p5.Vector.lerp(TR,BR,1/3); 
  Tthird = p5.Vector.lerp(TL,TR,1/3);  
  Bthird = p5.Vector.lerp(BL,BR,1/3);  
  L2third = p5.Vector.lerp(TL,BL,2/3);
  R2third = p5.Vector.lerp(TR,BR,2/3); 
  T2third = p5.Vector.lerp(TL,TR,2/3);  
  B2third = p5.Vector.lerp(BL,BR,2/3);
  Lquad = p5.Vector.lerp(TL,BL,1/4);
  Rquad = p5.Vector.lerp(TR,BR,1/4); 
  Tquad = p5.Vector.lerp(TL,TR,1/4);  
  Bquad = p5.Vector.lerp(BL,BR,1/4);
  L3quad = p5.Vector.lerp(TL,BL,3/4);
  R3quad = p5.Vector.lerp(TR,BR,3/4); 
  T3quad = p5.Vector.lerp(TL,TR,3/4);  
  B3quad = p5.Vector.lerp(BL,BR,3/4);
  L0506 = p5.Vector.lerp(TL,BL,5/6);
  R0506 = p5.Vector.lerp(TR,BR,5/6);
  T0506 = p5.Vector.lerp(TL,TR,5/6);
  B0506 = p5.Vector.lerp(BL,BR,5/6);
  L0106 = p5.Vector.lerp(TL,BL,1/6);
  R0106 = p5.Vector.lerp(TR,BR,1/6);
  T0106 = p5.Vector.lerp(TL,TR,1/6);
  B0106 = p5.Vector.lerp(BL,BR,1/6);

  L0108 = p5.Vector.lerp(TL,BL,1/8);
  R0108 = p5.Vector.lerp(TR,BR,1/8);
  T0108 = p5.Vector.lerp(TL,TR,1/8);
  B0108 = p5.Vector.lerp(BL,BR,1/8);
  L0708 = p5.Vector.lerp(TL,BL,7/8);
  R0708 = p5.Vector.lerp(TR,BR,7/8);
  T0708 = p5.Vector.lerp(TL,TR,7/8);
  B0708 = p5.Vector.lerp(BL,BR,7/8);

  L1528 = p5.Vector.lerp(TL,BL,15/28);

  
}

function letter_A () {
  beginShape();
	vertex(BL.x,BL.y);
  
  	vertex(Thalf.x-SA/2,Thalf.y);
  	vertex(Thalf.x+SA/2,Thalf.y);

  	vertex(BR.x,BR.y);
  endShape();

  Rleg = p5.Vector.lerp(Thalf,BL,2/3);
  Lleg = p5.Vector.lerp(Thalf,BR,2/3);
  
  line(Rleg.x,Rleg.y,  Lleg.x,Lleg.y);
  
}

function letter_B () {
  var T2628 = p5.Vector.lerp(TL,TR,26/28);
  var B2628 = p5.Vector.lerp(BL,BR,26/28);
  var x2628y0228 = p5.Vector.lerp(T2628,B2628,2/28);  
  var x2628y0628 = p5.Vector.lerp(T2628,B2628,6/28);  
  var x2628y0728 = p5.Vector.lerp(T2628,B2628,7/28);  
  var x2628y1128 = p5.Vector.lerp(T2628,B2628,11/28);
  var T2228 = p5.Vector.lerp(TL,TR,22/28);
  var B2228 = p5.Vector.lerp(BL,BR,22/28);
  var x2228y1328 = p5.Vector.lerp(T2228,B2228,13/28);
  var x0102y1328 = p5.Vector.lerp(Thalf,Bhalf,13/28);
  var L1328 = p5.Vector.lerp(TL,BL,13/28);
  var x0304y1328 = p5.Vector.lerp(T3quad,B3quad,13/28);
  var R1528 = p5.Vector.lerp(TR,BR,15/28);
  var R2028 = p5.Vector.lerp(TR,BR,20/28);
  
	beginShape();
  	vertex(TL.x,TL.y);
  	vertex(Thalf.x,Thalf.y);
  	bezierVertex(T3quad.x,T3quad.y,  x2628y0228.x,x2628y0228.y,  x2628y0628.x,x2628y0628.y);
  	vertex(x2628y0728.x,x2628y0728.y);
  	bezierVertex(x2628y1128.x,x2628y1128.y,  x2228y1328.x,x2228y1328.y,   x0102y1328.x,x0102y1328.y);
    vertex(L1328.x,L1328.y);
  endShape();
  beginShape();
    vertex(L1328.x,L1328.y);
    vertex(x0102y1328.x,x0102y1328.y);
    bezierVertex(x0304y1328.x,x0304y1328.y,  R1528.x,R1528.y,	R2028.x,R2028.y);
  	vertex(R3quad.x,R3quad.y);
  	bezierVertex(R0708.x,R0708.y,	B0506.x,B0506.y,  Bhalf.x,Bhalf.y);
  	vertex(BL.x,BL.y);
  	vertex(TL.x,TL.y);
  endShape();
}

function letter_C () { 
  beginShape();
    vertex(R3quad.x,R3quad.y);
	bezierVertex(R0708.x,R0708.y,  B0506.x,B0506.y,  Bhalf.x,Bhalf.y);
  	bezierVertex(B0106.x,B0106.y,  L0506.x,L0506.y,  L2third.x,L2third.y);
    vertex(Lthird.x,Lthird.y);
  	bezierVertex(L0106.x,L0106.y,  T0106.x,T0106.y,  Thalf.x,Thalf.y);
    bezierVertex(T0506.x,T0506.y,  R0108.x,R0108.y,  Rquad.x,Rquad.y);
  endShape();
}

function letter_D () {
  beginShape();
    vertex(TL.x,TL.y);
    vertex(Thalf.x,Thalf.y);
    bezierVertex(T0506.x,T0506.y,  R0106.x,R0106.y,  Rthird.x,Rthird.y);
    vertex(R2third.x,R2third.y);
	bezierVertex(R0506.x,R0506.y,  B0506.x,B0506.y,  Bhalf.x,Bhalf.y);
    vertex(BL.x,BL.y);
    vertex(TL.x,TL.y);
  endShape();
}

function letter_E () {
  var x0708y1528 = p5.Vector.lerp(T0708,B0708,15/28);
  
  line(TR.x,TR.y,	TL.x,TL.y);
  line(TL.x,TL.y,	BL.x,BL.y);
  line(BL.x,BL.y,  BR.x,BR.y);
  line(L1528.x,L1528.y,	x0708y1528.x,x0708y1528.y);
}

function letter_F () {
  var x0708y1528 = p5.Vector.lerp(T0708,B0708,15/28);
  
  line(TR.x,TR.y,	TL.x,TL.y);
  line(TL.x,TL.y,	BL.x,BL.y);
  line(L1528.x,L1528.y,	x0708y1528.x,x0708y1528.y);
}

function letter_G () {
  var R1528 = p5.Vector.lerp(TR,BR,15/28);
  var T0508 = p5.Vector.lerp(TL,TR,5/8);
  var B0508 = p5.Vector.lerp(BL,BR,5/8);
  var x0508y1528 = p5.Vector.lerp(T0508,B0508,15/28);
  
  beginShape();
    vertex(R3quad.x,R3quad.y);
	bezierVertex(R0708.x,R0708.y,  B0506.x,B0506.y,  Bhalf.x,Bhalf.y);
  	bezierVertex(B0106.x,B0106.y,  L0506.x,L0506.y,  L2third.x,L2third.y);
    vertex(Lthird.x,Lthird.y);
  	bezierVertex(L0106.x,L0106.y,  T0106.x,T0106.y,  Thalf.x,Thalf.y);
    bezierVertex(T0506.x,T0506.y,  R0108.x,R0108.y,  Rquad.x,Rquad.y);
  endShape();
  
  line(BR.x,BR.y,  R1528.x,R1528.y);
  line(x0508y1528.x,x0508y1528.y,  R1528.x,R1528.y);
}

function letter_H () {
  line(TL.x,TL.y,	BL.x,BL.y);
  line(TR.x,TR.y,  BR.x,BR.y);
  line(Lhalf.x,Lhalf.y,  Rhalf.x,Rhalf.y);
}

function letter_I () {
  line(TL.x,TL.y,	TR.x,TR.y);
  line(BR.x,BR.y,  BL.x,BL.y);
  line(Thalf.x,Thalf.y,  Bhalf.x,Bhalf.y); 
}

function letter_J () {
  beginShape();
  	vertex(Thalf.x,Thalf.y);
  	vertex(TR.x,TR.y);
    vertex(R2third.x,R2third.y);
	bezierVertex(R0506.x,R0506.y,  B0506.x,B0506.y,  Bhalf.x,Bhalf.y);
  	bezierVertex(B0106.x,B0106.y,  L0506.x,L0506.y,  L2third.x,L2third.y);
  endShape();
}

function letter_K () {  
  var T2728 = p5.Vector.lerp(TL,TR,27/28);
  
  line(TL.x,TL.y, BL.x,BL.y);
  beginShape();
    vertex(L2third.x,L2third.y);
    vertex(T2728.x,T2728.y);
  endShape();
  
  var kIntersect = p5.Vector.lerp(L2third,T2728,13/28);

  beginShape();
	vertex(kIntersect.x,kIntersect.y);
    vertex(BR.x,BR.y);
  endShape();
}

function letter_L () {
  line(TL.x,TL.y,  BL.x,BL.y);
  line(BL.x,BL.y,  BR.x,BR.y);
}

function letter_M () {
  var xHalfy2228 = p5.Vector.lerp(Thalf,Bhalf,22/28);
  
  beginShape();
  	vertex(BL.x,BL.y);
    vertex(TL.x,TL.y);
  
  	vertex(xHalfy2228.x,xHalfy2228.y);
    
  	vertex(TR.x,TR.y);
  	vertex(BR.x,BR.y);
  endShape();
}

function letter_N () {
  beginShape();
  	vertex(BL.x,BL.y);
	vertex(TL.x,TL.y);
  	vertex(BR.x,BR.y);
  	vertex(TR.x,TR.y);
  endShape();
}

function letter_O () {
  beginShape();
    vertex(Rthird.x,Rthird.y);
    vertex(R2third.x,R2third.y);
	bezierVertex(R0506.x,R0506.y,  B0506.x,B0506.y,  Bhalf.x,Bhalf.y);
  	bezierVertex(B0106.x,B0106.y,  L0506.x,L0506.y,  L2third.x,L2third.y);
    vertex(Lthird.x,Lthird.y);
  	bezierVertex(L0106.x,L0106.y,  T0106.x,T0106.y,  Thalf.x,Thalf.y);
    bezierVertex(T0506.x,T0506.y,  R0106.x,R0106.y,  Rthird.x,Rthird.y);
  endShape();
}

function letter_P () {
  var R0828 = p5.Vector.lerp(TR,BR,8/28);
  var R0928 = p5.Vector.lerp(TR,BR,9/28);
  var x0506y1528 = p5.Vector.lerp(T0506,B0506,15/28);
  var xHalfy1528 = p5.Vector.lerp(Thalf,Bhalf,15/28);
  
  beginShape();
  	vertex(BL.x,BL.y);
  	vertex(TL.x,TL.y);
    vertex(Thalf.x,Thalf.y);
  	bezierVertex(T0506.x,T0506.y,  R0108.x,R0108.y,  Rquad.x,Rquad.y);
    vertex(R0828.x,R0828.y);
    bezierVertex(R0928.x,R0928.y,  x0506y1528.x,x0506y1528.y,  xHalfy1528.x,xHalfy1528.y);
  	vertex(L1528.x,L1528.y);
  endShape();
}

function letter_Q () {
  var xHalfy1528 = p5.Vector.lerp(Thalf,Bhalf,15/28);
  
  beginShape();
    vertex(Rthird.x,Rthird.y);
    vertex(R2third.x,R2third.y);
	bezierVertex(R0506.x,R0506.y,  B0506.x,B0506.y,  Bhalf.x,Bhalf.y);
  	bezierVertex(B0106.x,B0106.y,  L0506.x,L0506.y,  L2third.x,L2third.y);
    vertex(Lthird.x,Lthird.y);
  	bezierVertex(L0106.x,L0106.y,  T0106.x,T0106.y,  Thalf.x,Thalf.y);
    bezierVertex(T0506.x,T0506.y,  R0106.x,R0106.y,  Rthird.x,Rthird.y);
  endShape();

  beginShape();
  	vertex(xHalfy1528.x,xHalfy1528.y);
  	vertex(BR.x,BR.y);
  endShape();
}

function letter_R () {
  var R0828 = p5.Vector.lerp(TR,BR,8/28);
  var R0928 = p5.Vector.lerp(TR,BR,9/28);
  var x0506y1528 = p5.Vector.lerp(T0506,B0506,15/28);
  var xHalfy1528 = p5.Vector.lerp(Thalf,Bhalf,15/28);
  
  beginShape();
  	vertex(BL.x,BL.y);
  	vertex(TL.x,TL.y);
    vertex(Thalf.x,Thalf.y);
  	bezierVertex(T0506.x,T0506.y,  R0108.x,R0108.y,  Rquad.x,Rquad.y);
    vertex(R0828.x,R0828.y);
    bezierVertex(R0928.x,R0928.y,  x0506y1528.x,x0506y1528.y,  xHalfy1528.x,xHalfy1528.y);
  	vertex(L1528.x,L1528.y);
  endShape();
    
  beginShape();
  	vertex(xHalfy1528.x,xHalfy1528.y);
  	vertex(BR.x,BR.y);
  endShape();
}

function letter_S () {
  var T2728 = p5.Vector.lerp(TL,TR,27/28);
  var B2728 = p5.Vector.lerp(BL,BR,27/28);
  var x2728yQuad = p5.Vector.lerp(T2728,B2728,1/4);
  var x2728y1356 = p5.Vector.lerp(T2728,B2728,13/56);
  var x2728y0428 = p5.Vector.lerp(T2728,B2728,4/28);
  var T0128 = p5.Vector.lerp(TL,TR,1/28);
  var B0128 = p5.Vector.lerp(BL,BR,1/28);
  var x0128y0228 = p5.Vector.lerp(T0128,B0128,2/28);
  var x0128y1156 = p5.Vector.lerp(T0128,B0128,11/56);
  var x0128y0628 = p5.Vector.lerp(T0128,B0128,6/28);
  var x0128y1756 = p5.Vector.lerp(T0128,B0128,17/56);
  var x0108y2156 = p5.Vector.lerp(T0108,B0108,21/56);
  var xThirdy1228 = p5.Vector.lerp(Tthird,Bthird,12/28);
  var T2028 = p5.Vector.lerp(TL,TR,20/28);
  var B2028 = p5.Vector.lerp(BL,BR,20/28);
  var x2028y2956 = p5.Vector.lerp(T2028,B2028,29/56);
  var T2628 = p5.Vector.lerp(TL,TR,26/28);
  var B2628 = p5.Vector.lerp(BL,BR,26/28);
  var x2628y1628 = p5.Vector.lerp(T2628,B2628,16/28);
  var R1828 = p5.Vector.lerp(TR,BR,18/28);
  var R4156 = p5.Vector.lerp(TR,BR,41/56);
  var R2628 = p5.Vector.lerp(TR,BR,26/28);
  var B2228 = p5.Vector.lerp(BL,BR,22/28);
  var L5356 = p5.Vector.lerp(TL,BL,53/56);
  var L4156 = p5.Vector.lerp(TL,BL,41/56);
  
  beginShape();
    vertex(x2728yQuad.x,x2728yQuad.y);
  	vertex(x2728y1356.x,x2728y1356.y);
  	bezierVertex(x2728y0428.x,x2728y0428.y,  T0708.x,T0708.y,  Thalf.x,Thalf.y);
    bezierVertex(Tquad.x,Tquad.y,  x0128y0228.x,x0128y0228.y,  x0128y1156.x,x0128y1156.y);
    vertex(x0128y0628.x,x0128y0628.y);
  	bezierVertex(x0128y1756.x,x0128y1756.y,  x0108y2156.x,x0108y2156.y,  xThirdy1228.x,xThirdy1228.y);
  	vertex(x2028y2956.x,x2028y2956.y);
  	bezierVertex(x2628y1628.x,x2628y1628.y,  R1828.x,R1828.y,	R4156.x,R4156.y);
    vertex(R3quad.x,R3quad.y);
  	bezierVertex(R2628.x,R2628.y,  B2228.x,B2228.y,  Bhalf.x,Bhalf.y);
  	bezierVertex(Bquad.x,Bquad.y,  L5356.x,L5356.y,  L3quad.x,L3quad.y);
  	vertex(L4156.x,L4156.y);
  endShape();
}

function letter_T () {
  line(TL.x,TL.y,	TR.x,TR.y);
  line(Thalf.x,Thalf.y,	Bhalf.x,Bhalf.y);
}

function letter_U () {
  beginShape();
	vertex(TR.x,TR.y);
  	vertex(R2third.x,R2third.y);
	bezierVertex(R0506.x,R0506.y,  B0506.x,B0506.y,  Bhalf.x,Bhalf.y);
  	bezierVertex(B0106.x,B0106.y,  L0506.x,L0506.y,  L2third.x,L2third.y);
    vertex(TL.x,TL.y);
  endShape();
}

function letter_V () {
	beginShape();
    vertex(TL.x,TL.y);
    vertex(Bhalf.x,Bhalf.y);
    vertex(TR.x,TR.y);
  endShape();
}

function letter_W () {
  var x0102y0828 = p5.Vector.lerp(Thalf,Bhalf,8/28);
  
	beginShape();
      vertex(TL.x,TL.y);

      vertex(Bquad.x,Bquad.y);
      vertex(x0102y0828.x,x0102y0828.y);

      vertex(B3quad.x,B3quad.y);

  	vertex(TR.x,TR.y);
  endShape();
}

function letter_X () {
  var xCenter = p5.Vector.lerp(Thalf,Bhalf,1/2);
  
  beginShape();
  	vertex(TL.x,TL.y);
    vertex(xCenter.x,xCenter.y);

    vertex(BR.x,BR.y);
  endShape();
  beginShape();
    vertex(TR.x,TR.y);
    vertex(xCenter.x,xCenter.y);
    vertex(BL.x,BL.y);
  endShape();
}

function letter_Y () {
  var x0102y2third = p5.Vector.lerp(Thalf,Bhalf,2/3);
  
  beginShape();
  	vertex(TL.x,TL.y);
    vertex(x0102y2third.x,x0102y2third.y);
    vertex(TR.x,TR.y);
  endShape();
  
  line(x0102y2third.x,x0102y2third.y,  Bhalf.x,Bhalf.y);
}

function letter_Z () {
  line(TL.x,TL.y,  TR.x,TR.y);
  line(BL.x,BL.y,  BR.x,BR.y);
  
  beginShape();
  	vertex(TR.x,TR.y);
    vertex(BL.x,BL.y);
  endShape();
}

function one () {
  var x0108y0628 = p5.Vector.lerp(T0108,B0108,6/28);
  
  beginShape();
  	vertex(x0108y0628.x,x0108y0628.y);
  	vertex(Thalf.x,Thalf.y);
  	vertex(Bhalf.x,Bhalf.y);
  endShape();
  
  line(BL.x,BL.y, BR.x,BR.y);
}

function two () {
  var R0508 = p5.Vector.lerp(TR,BR,5/8)
  
  beginShape();
    vertex(Lquad.x,Lquad.y);
	bezierVertex(L0108.x,L0108.y,	T0106.x,T0106.y,  Thalf.x,Thalf.y);
  	bezierVertex(T0506.x,T0506.y,  R0108.x,R0108.y,  Rquad.x,Rquad.y);
    bezierVertex(R0508.x,R0508.y,  L2third.x,L2third.y,  BL.x,BL.y);
  	vertex(BR.x,BR.y);
  endShape();

}

function three () {
  var R1028 = p5.Vector.lerp(TR,BR,10/28);
  var L1028 = p5.Vector.lerp(TL,BL,10/28);
  var x1228y1028 = p5.Vector.lerp(L1028,R1028,12/28);
  var x2428y1028 = p5.Vector.lerp(L1028,R1028,24/28);
  var R1528 = p5.Vector.lerp(TR,BR,15/28);
  var R1928 = p5.Vector.lerp(TR,BR,19/28);
  var R2428 = p5.Vector.lerp(TR,BR,24/28);
  var B2428 = p5.Vector.lerp(BL,BR,24/28);
  var B0428 = p5.Vector.lerp(BL,BR,4/28); 
  var L2428 = p5.Vector.lerp(TL,BL,24/28); 
  
  beginShape();
  	vertex(TL.x,TL.y);
	vertex(TR.x,TR.y);
    vertex(x1228y1028.x,x1228y1028.y);
    bezierVertex(x2428y1028.x,x2428y1028.y,  R1528.x,R1528.y,  R1928.x,R1928.y);
  	vertex(R3quad.x,R3quad.y);
    bezierVertex(R2428.x,R2428.y,  B2428.x,B2428.y,  Bhalf.x,Bhalf.y);
    bezierVertex(B0428.x,B0428.y,  L2428.x,L2428.y,	L3quad.x,L3quad.y);
  endShape();
}

function four () {
  var T2128 = p5.Vector.lerp(TL,TR,21/28);
  var B2128 = p5.Vector.lerp(BL,BR,21/28);
  
  beginShape();
    vertex(Tthird.x,Tthird.y);
  	vertex(L2third.x,L2third.y);
    vertex(R2third.x,R2third.y);
  endShape();
    line(T2128.x,T2128.y,  B2128.x,B2128.y);
}

function five () {
  var T0228 = p5.Vector.lerp(TL,TR,2/28);
  var B0228 = p5.Vector.lerp(BL,BR,2/28);
  var x0228y1128 = p5.Vector.lerp(T0228,B0228,11/28);
  var xhalfy1128 = p5.Vector.lerp(Thalf,Bhalf,11/28);
  var T2428 = p5.Vector.lerp(TL,TR,24/28);
  var B2428 = p5.Vector.lerp(BL,BR,24/28);
  var x2428y1128 = p5.Vector.lerp(T2428,B2428,11/28);
  var R1528 = p5.Vector.lerp(TR,BR,15/28);
  var R1928 = p5.Vector.lerp(TR,BR,19/28);
  var R2428 = p5.Vector.lerp(TR,BR,24/28);
  var B0428 = p5.Vector.lerp(BL,BR,4/28);  
  var L2428 = p5.Vector.lerp(TL,BL,24/28);
  
  beginShape();
  	vertex(T0708.x,T0708.y);
  	vertex(T0228.x,T0228.y);
  	vertex(x0228y1128.x,x0228y1128.y);
    vertex(xhalfy1128.x,xhalfy1128.y);
    bezierVertex(x2428y1128.x,x2428y1128.y,  R1528.x,R1528.y,  R1928.x,R1928.y);
  	vertex(R3quad.x,R3quad.y);
    bezierVertex(R2428.x,R2428.y,  B2428.x,B2428.y,  Bhalf.x,Bhalf.y);
    bezierVertex(B0428.x,B0428.y,  L2428.x,L2428.y,	L3quad.x,L3quad.y);
  endShape();
}

function six () {
  var xhalfy1228 = p5.Vector.lerp(Thalf,Bhalf,12/28);
  var T2428 = p5.Vector.lerp(TL,TR,24/28);
  var B2428 = p5.Vector.lerp(BL,BR,24/28);
  var x2428y1228 = p5.Vector.lerp(T2428,B2428,12/28);
  var R1628 = p5.Vector.lerp(TR,BR,16/28);
  var R2028 = p5.Vector.lerp(TR,BR,20/28);
  var R2428 = p5.Vector.lerp(TR,BR,24/28);
  var B0428 = p5.Vector.lerp(BL,BR,4/28);
  var L2428 = p5.Vector.lerp(TL,BL,24/28);
  var T2028 = p5.Vector.lerp(TL,TR,20/28);
  var L1628 = p5.Vector.lerp(TL,BL,16/28);
  var L1228 = p5.Vector.lerp(TL,BL,12/28);
  var L2028 = p5.Vector.lerp(TL,BL,20/28);
  var R1228 = p5.Vector.lerp(TR,BR,12/28);
  var x0428y1228 = p5.Vector.lerp(L1228,R1228,4/28);
  
  beginShape();
    vertex(Thalf.x,Thalf.y);
    quadraticVertex(Lquad.x,Lquad.y,  L3quad.x,L3quad.y);
  endShape();
	beginShape();
    vertex(xhalfy1228.x,xhalfy1228.y);
    bezierVertex(x2428y1228.x,x2428y1228.y,  R1628.x,R1628.y,  R2028.x,R2028.y);
  	vertex(R3quad.x,R3quad.y);
    bezierVertex(R2428.x,R2428.y,  B2428.x,B2428.y,  Bhalf.x,Bhalf.y);
    bezierVertex(B0428.x,B0428.y,  L2428.x,L2428.y,  L3quad.x,L3quad.y);
    vertex(L2028.x,L2028.y);
    bezierVertex(L1628.x,L1628.y,  x0428y1228.x,x0428y1228.y,  xhalfy1228.x,xhalfy1228.y);
  endShape();
}

function seven () {
  beginShape();
  	vertex(TL.x,TL.y);
    vertex(TR.x,TR.y);
  	vertex(Bhalf.x,Bhalf.y);
  endShape();
}

function zero () {
  beginShape();
    vertex(Rthird.x,Rthird.y);
    vertex(R2third.x,R2third.y);
	bezierVertex(R0506.x,R0506.y,  B0506.x,B0506.y,  Bhalf.x,Bhalf.y);
  	bezierVertex(B0106.x,B0106.y,  L0506.x,L0506.y,  L2third.x,L2third.y);
    vertex(Lthird.x,Lthird.y);
  	bezierVertex(L0106.x,L0106.y,  T0106.x,T0106.y,  Thalf.x,Thalf.y);
    bezierVertex(T0506.x,T0506.y,  R0106.x,R0106.y,  Rthird.x,Rthird.y);
  endShape();
  
  line(TR.x,TR.y,  BL.x,BL.y);
}

function letter_underscore () {
  line(BR.x,BR.y, BL.x,BL.y);
}

function letter_dash () {
  line(Lhalf.x,Lhalf.y, Rhalf.x,Rhalf.y);
}

function letter_question () {
  var xhalfy1228 = p5.Vector.lerp(Thalf,Bhalf,12/28);
  var xhalfy3quad = p5.Vector.lerp(Thalf,Bhalf,3/4);
  var xhalfy0708 = p5.Vector.lerp(Thalf,Bhalf,7/8);
  
  beginShape();
    vertex(Lquad.x,Lquad.y);
	bezierVertex(L0108.x,L0108.y,	T0106.x,T0106.y,  Thalf.x,Thalf.y);
  	bezierVertex(T0506.x,T0506.y,  R0108.x,R0108.y,  Rquad.x,Rquad.y);
	bezierVertex(Rhalf.x,Rhalf.y,	xhalfy1228.x,xhalfy1228.y,  xhalfy3quad.x,xhalfy3quad.y);
  endShape();

  line(xhalfy0708.x,xhalfy0708.y, Bhalf.x,Bhalf.y);
}

function letter_period () {
  var xHalfy0708 = p5.Vector.lerp(Thalf,Bhalf,7/8);
  
  line(xHalfy0708.x,xHalfy0708.y, Bhalf.x,Bhalf.y);
}

function letter_colon () {
  var xhalfy0308 = p5.Vector.lerp(Thalf,Bhalf,3/8);
  var xhalfy0708 = p5.Vector.lerp(Thalf,Bhalf,7/8);
  
  line(xhalfy0308.x,xhalfy0308.y,  center.x,center.y);
  line(xhalfy0708.x,xhalfy0708.y,  Bhalf.x,Bhalf.y);
}

function letter_semicolon () {
  var xhalfy0308 = p5.Vector.lerp(Thalf,Bhalf,3/8);
  var xhalfy0708 = p5.Vector.lerp(Thalf,Bhalf,7/8);
  
  line(xhalfy0308.x,xhalfy0308.y, center.x,center.y);
  line(xhalfy0708.x,xhalfy0708.y, Bquad.x,Bquad.y);
}

function letter_comma () {
  var xhalfy0708 = p5.Vector.lerp(Thalf,Bhalf,7/8);
  
  line(xhalfy0708.x,xhalfy0708.y, Bquad.x,Bquad.y);
}

function letter_exclaim () {
  var xHalfy0304 = p5.Vector.lerp(Thalf,Bhalf, 3/4);
  var xHalfy0708 = p5.Vector.lerp(Thalf,Bhalf, 7/8);
  
  line(Thalf.x,Thalf.y,  xHalfy0304.x,xHalfy0304.y);

  line(xHalfy0708.x,xHalfy0708.y,  Bhalf.x,Bhalf.y);
}

function letter_slash () {
  line(BL.x,BL.y, TR.x,TR.y);
}

function hash () {
  var x0228ythird = p5.Vector.lerp(Lthird,Rthird,02/28);
  var x2628y2third = p5.Vector.lerp(L2third,R2third,26/28);
  
  beginShape();
  	vertex(B0108.x,B0108.y);
  	vertex(Thalf.x,Thalf.y);
  endShape();
  beginShape();
  	vertex(Bhalf.x,Bhalf.y);
  	vertex(T0708.x,T0708.y);
  endShape();
  
  line(x0228ythird.x,x0228ythird.y,	Rthird.x,Rthird.y);
  line(L2third.x,L2third.y,	x2628y2third.x,x2628y2third.y);
}

function cash() {
  var T2728 = p5.Vector.lerp(TL,TR,27/28);
  var B2728 = p5.Vector.lerp(BL,BR,27/28);
  var x2728yQuad = p5.Vector.lerp(T2728,B2728,1/4);
  var x2728y1356 = p5.Vector.lerp(T2728,B2728,13/56);
  var x2728y0428 = p5.Vector.lerp(T2728,B2728,4/28);
  var T0128 = p5.Vector.lerp(TL,TR,1/28);
  var B0128 = p5.Vector.lerp(BL,BR,1/28);
  var x0128y0228 = p5.Vector.lerp(T0128,B0128,2/28);
  var x0128y1156 = p5.Vector.lerp(T0128,B0128,11/56);
  var x0128y0628 = p5.Vector.lerp(T0128,B0128,6/28);
  var x0128y1756 = p5.Vector.lerp(T0128,B0128,17/56);
  var x0108y2156 = p5.Vector.lerp(T0108,B0108,21/56);
  var xThirdy1228 = p5.Vector.lerp(Tthird,Bthird,12/28);
  var T2028 = p5.Vector.lerp(TL,TR,20/28);
  var B2028 = p5.Vector.lerp(BL,BR,20/28);
  var x2028y2956 = p5.Vector.lerp(T2028,B2028,29/56);
  var T2628 = p5.Vector.lerp(TL,TR,26/28);
  var B2628 = p5.Vector.lerp(BL,BR,26/28);
  var x2628y1628 = p5.Vector.lerp(T2628,B2628,16/28);
  var R1828 = p5.Vector.lerp(TR,BR,18/28);
  var R4156 = p5.Vector.lerp(TR,BR,41/56);
  var R2628 = p5.Vector.lerp(TR,BR,26/28);
  var B2228 = p5.Vector.lerp(BL,BR,22/28);
  var L5356 = p5.Vector.lerp(TL,BL,53/56);
  var L4156 = p5.Vector.lerp(TL,BL,41/56);
  
  beginShape();
    vertex(x2728yQuad.x,x2728yQuad.y);
  	vertex(x2728y1356.x,x2728y1356.y);
  	bezierVertex(x2728y0428.x,x2728y0428.y,  T0708.x,T0708.y,  Thalf.x,Thalf.y);
    bezierVertex(Tquad.x,Tquad.y,  x0128y0228.x,x0128y0228.y,  x0128y1156.x,x0128y1156.y);
    vertex(x0128y0628.x,x0128y0628.y);
  	bezierVertex(x0128y1756.x,x0128y1756.y,  x0108y2156.x,x0108y2156.y,  xThirdy1228.x,xThirdy1228.y);
  	vertex(x2028y2956.x,x2028y2956.y);
  	bezierVertex(x2628y1628.x,x2628y1628.y,  R1828.x,R1828.y,	R4156.x,R4156.y);
    vertex(R3quad.x,R3quad.y);
  	bezierVertex(R2628.x,R2628.y,  B2228.x,B2228.y,  Bhalf.x,Bhalf.y);
  	bezierVertex(Bquad.x,Bquad.y,  L5356.x,L5356.y,  L3quad.x,L3quad.y);
  	vertex(L4156.x,L4156.y);
  endShape();
  
  line(Thalf.x,Thalf.y,  Bhalf.x,Bhalf.y);
}

function letter_amp () {
  var x0108y1128 = p5.Vector.lerp(T0108,B0108,11/28);
  var x0108y0628 = p5.Vector.lerp(T0108,B0108,6/28);
  var x0108y0108 = p5.Vector.lerp(L0108,R0108,1/8);
  var T1228 = p5.Vector.lerp(TL,TR,12/28);
  var T0508 = p5.Vector.lerp(TL,TR,5/8);
  var x2thirdy0108 = p5.Vector.lerp(T2third,B2third,1/8);
  var x2thirdy0528 = p5.Vector.lerp(T2third,B2third,5/28);
  var x2thirdy1128 = p5.Vector.lerp(T2third,B2third,11/28);
  var B0308 = p5.Vector.lerp(BL,BR,3/8);
  var B0508 = p5.Vector.lerp(BL,BR,5/8);
  var x3quadyhalf = p5.Vector.lerp(T3quad,B3quad,1/2);
  
    beginShape();
      vertex(BR.x,BR.y);
      quadraticVertex(x0108y1128.x,x0108y1128.y,  x0108y0628.x,x0108y0628.y);
      bezierVertex(x0108y0108.x,x0108y0108.y,  Tquad.x,Tquad.y,  T1228.x,T1228.y);
      bezierVertex(T0508.x,T0508.y,  x2thirdy0108.x,x2thirdy0108.y,  x2thirdy0528.x,x2thirdy0528.y);
      bezierVertex(x2thirdy1128.x,x2thirdy1128.y,	 Lhalf.x,Lhalf.y,		L3quad.x,L3quad.y);
      bezierVertex(BL.x,BL.y,  Bquad.x,Bquad.y,  B0308.x,B0308.y);
      bezierVertex(B0508.x,B0508.y,  BR.x,BR.y,	Rhalf.x,Rhalf.y);
  	  vertex(x3quadyhalf.x,x3quadyhalf.y);
    endShape();
}

function equal() {
  line(Lthird.x,Lthird.y,	Rthird.x,Rthird.y);
  line(L2third.x,L2third.y,	R2third.x,R2third.y);
}

function plus() {
  var xhalfyquad = p5.Vector.lerp(Thalf,Bhalf,1/4);
  var xhalfy3quad = p5.Vector.lerp(Thalf,Bhalf,3/4);
  
  line(Lhalf.x,Lhalf.y,	Rhalf.x,Rhalf.y);
  line(xhalfyquad.x,xhalfyquad.y,	xhalfy3quad.x,xhalfy3quad.y);
}

function asterisk() {
  var prong1 = p5.Vector.lerp(center, Thalf, 1/2);
  var prong2 = p5.Vector.lerp(center, Lthird, 1/2);  
  var prong3 = p5.Vector.lerp(center, Rthird, 1/2);
  var prong4 = p5.Vector.lerp(center, BL,1/2);
  var prong5 = p5.Vector.lerp(center, BR,1/2);
  
  line(center.x,center.y,  prong1.x,prong1.y);
  line(center.x,center.y,  prong2.x,prong2.y);
  line(center.x,center.y,  prong3.x,prong3.y);
  line(center.x,center.y,  prong4.x,prong4.y);
  line(center.x,center.y,  prong5.x,prong5.y);
}

function letter_space () {
}

/*
function eight () {
  beginShape();
    vertex(typeX/2,0);
  	bezierVertex(23*typeX/28,0,  27*typeX/28,3*typeY/28, 27*typeX/28,6*typeY/28);
  	vertex(27*typeX/28,typeY/4);
  	bezierVertex(27*typeX/28,10*typeY/28,  23*typeX/28,13*typeY/28,  typeX/2,13*typeY/28);
  	bezierVertex(5*typeX/28,13*typeY/28,  typeX/28,10*typeY/28,  typeX/28,typeY/4);
  	vertex(typeX/28,6*typeY/28);
  	bezierVertex(typeX/28,3*typeY/28,  5*typeX/28,0,  typeX/2,0);
  endShape();
	beginShape();
    vertex(typeX/2,13/28*typeY);
    bezierVertex(24/28*typeX,13/28*typeY,  typeX,16/28*typeY,  typeX,20/28*typeY);
  	vertex(typeX,3/4*typeY);
    bezierVertex(typeX,24/28*typeY,  24/28*typeX,typeY,  typeX/2,typeY);
    bezierVertex(4/28*typeX,typeY,  0,24/28*typeY,	0,3/4*typeY);
    vertex(0,20/28*typeY);
    bezierVertex(0,16/28*typeY,  4/28*typeX,13/28*typeY,  typeX/2,13/28*typeY);
  endShape();
    
}

function nine () {
  push();
  translate(typeX,typeY);
  rotate(PI);
  
  beginShape();
    vertex(1/2*typeX,0);
    quadraticVertex(0,1/4*typeY,  0,3/4*typeY);
  endShape();
	beginShape();
    vertex(typeX/2,12/28*typeY);
    bezierVertex(24/28*typeX,12/28*typeY,  typeX,16/28*typeY,  typeX,20/28*typeY);
  	vertex(typeX,3/4*typeY);
    bezierVertex(typeX,24/28*typeY,  24/28*typeX,typeY,  typeX/2,typeY);
    bezierVertex(4/28*typeX,typeY,  0,24/28*typeY,	0,3/4*typeY);
    vertex(0,20/28*typeY);
    bezierVertex(0,16/28*typeY,  4/28*typeX,12/28*typeY,  typeX/2,12/28*typeY);
  endShape();
  
  pop();
}



function percentage() {
  beginShape();
  	vertex(0,typeY);
  	vertex(0,typeY-SA);
  	vertex(typeX,SA);
  	vertex(typeX,0);
  endShape();
  
  beginShape();
		vertex(typeX/4,0);
  	bezierVertex(typeX*3/8,0,	typeX/2,typeY/12, 	typeX/2,typeY/6);
  	bezierVertex(typeX/2,3/12*typeY,	typeX*3/8,typeY/3,  typeX/4,typeY/3);
  	bezierVertex(typeX/8,typeY/3,  0,3/12*typeY,	0,typeY/6);
  	bezierVertex(0,typeY/12,  typeX/8,0,	typeX/4,0);
  endShape();
  
  push();
	translate(typeX,typeY);
	rotate(PI);
    beginShape();
      vertex(typeX/4,0);
      bezierVertex(typeX*3/8,0,	typeX/2,typeY/12, 	typeX/2,typeY/6);
      bezierVertex(typeX/2,3/12*typeY,	typeX*3/8,typeY/3,  typeX/4,typeY/3);
      bezierVertex(typeX/8,typeY/3,  0,3/12*typeY,	0,typeY/6);
      bezierVertex(0,typeY/12,  typeX/8,0,	typeX/4,0);
    endShape();
	pop();
}

V.2 (grit)
function at() {
  beginShape();
		vertex(17/28*typeX,typeY);
  	vertex(typeX/2,typeY);
  	bezierVertex(typeX/6,typeY,  0,5*typeY/6,  0,2*typeY/3);
    vertex(0,12/28*typeY);
  	bezierVertex(0,typeY/4,  typeX/6,2/28*typeY,  typeX/2,2/28*typeY);
    bezierVertex(5*typeX/6,2/28*typeY,  typeX,typeY/4,  typeX,12/28*typeY);
    vertex(typeX,23/28*typeY);
  endShape();
  beginShape();
		vertex(typeX,17/28*typeY);
  	bezierVertex(typeX,21/28*typeY,  3/4*typeX,24/28*typeY,	16/28*typeX,24/28*typeY);
  	bezierVertex(11/28*typeX,24/28*typeY,  8/28*typeX,3/4*typeY,  8/28*typeX,17/28*typeY);
  	bezierVertex(8/28*typeX,13/28*typeY,  11/28*typeX,10/28*typeY,  16/28*typeX,10/28*typeY);
  	bezierVertex(3/4*typeX,10/28*typeY,  typeX,13/28*typeY,  typeX,17/28*typeY);
  endShape();
}

v.1 (orig)
function at() {
  beginShape();
		vertex(typeX/2,typeY-SA);
  	bezierVertex(typeX/6,typeY-SA,  SA,5*typeY/6,  SA,2*typeY/3);
    vertex(SA,typeY/3);
  	bezierVertex(SA,typeY/6,  typeX/6,SA,  typeX/2,SA);
    bezierVertex(5*typeX/6,SA,  typeX-SA,typeY/6,  typeX-SA,typeY/3);
 	  vertex(typeX-SA, typeY/3);
    vertex(typeX-SA,3/4*typeY);
  	bezierVertex(typeX-SA,24/28*typeY,	3/4*typeX, 24/28*typeY,  3/4*typeX,3/4*typeY);
    vertex(3/4*typeX,11/28*typeY);
  	bezierVertex(3/4*typeX,8/28*typeY,	20/28*typeX,6/28*typeY,  typeX/2,6/28*typeY);
  	bezierVertex(12/28*typeX,6/28*typeY,  11/28*typeX,6/28*typeY,  1/3*typeX,1/4*typeY);
  endShape();
  beginShape();
	  vertex(typeX/2,11/28*typeY);
    bezierVertex(18/28*typeX, 11/28*typeY,  3/4*typeX,13/28*typeY,  3/4*typeX,16/28*typeY);
    bezierVertex(3/4*typeX,19/28*typeY,  18/28*typeX,21/28*typeY,  typeX/2,21/28*typeY);
    bezierVertex(10/28*typeX,21/28*typeY,  typeX/4,19/28*typeY,  typeX/4,16/28*typeY);
  	bezierVertex(typeX/4,13/28*typeY,  10/28*typeX,11/28*typeY,  typeX/2,11/28*typeY);
  endShape();
}

function double_quote () {
  if(doubleQuoteSwitch == 1){
  	beginShape();
      vertex(typeX/3-SA/2,typeY/4);
      vertex(typeX/3-SA/2,5*typeY/28);
      vertex(typeX/3-SA/2,5*typeY/28+SA/2);
      vertex(typeX/2-SA/2,SA);
    endShape();
    beginShape();
      vertex(typeX/2+SA/2,typeY/4);
      vertex(typeX/2+SA/2,5*typeY/28);
      vertex(typeX/2+SA/2,5*typeY/28+SA/2);
      vertex(typeX*2/3+SA/2,SA);
    endShape();
  } else if(doubleQuoteSwitch == -1){
    beginShape();
      vertex(typeX/3-SA/2,typeY/4);
  	  vertex(typeX/2-SA/2,typeY*2/28-SA/2);
      vertex(typeX/2-SA/2,typeY*2/28);
    	vertex(typeX/2-SA/2,0);
    endShape();
    beginShape();
      vertex(typeX/2+SA/2,typeY/4);
  	  vertex(typeX*2/3+SA/2,typeY*2/28-SA/2);
      vertex(typeX*2/3+SA/2,typeY*2/28);
    	vertex(typeX*2/3+SA/2,0);
    endShape();
  }
  doubleQuoteSwitch *= -1;
}

function single_quote () {
  if(singleQuoteSwitch == 1){
  	beginShape();
      vertex(typeX*3/8-SA/2,typeY/4);
      vertex(typeX*3/8-SA/2,5*typeY/28);
      vertex(typeX*3/8-SA/2,5*typeY/28+SA/2);
      vertex(typeX*5/8-SA/2,SA);
    endShape();
  } else if(singleQuoteSwitch == -1){
    beginShape();
      vertex(typeX*3/8-SA/2,typeY/4);
  	  vertex(typeX*5/8-SA/2,typeY*2/28-SA/2);
      vertex(typeX*5/8-SA/2,typeY*2/28);
    	vertex(typeX*5/8-SA/2,0);
    endShape();
  }
  singleQuoteSwitch *= -1;
}

*/

