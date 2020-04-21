var line1,line2,line3,line4;

var y,b,p,r;

var drawing = [];
var currentPath = [];
var isDrawing = false;

function preload(){
  rImg = loadImage("red.png");
  yImg = loadImage("yellow.png");
  bImg = loadImage("blue.png");
  pImg = loadImage("pink.png");
}
function setup() {
 createCanvas(800,600);
 /*
 canvas.mousePressed(startPath);
 canvas.parent('canvascontainer');
 canvas.mouseReleased(endPath);
 

 var saveButton = select('#saveButton');
 saveButton.mousePressed('saveDrawing');
 */

 line1 = createSprite(330,5,920,20);
 line1.shapeColor = '#CC8899';
 line2 = createSprite(340,595,920,20);
 line2.shapeColor = '#FAD02C';
 line3 = createSprite(5,285,20,600);
 line3.shapeColor = '#CC8899';
 line4 = createSprite(790,290,20,620);
 line4.shapeColor = '#FAD02C';
r = createSprite(40,40,10,10);
r.addImage(rImg);
r.scale = 0.1;
r.setCollider("circle",0,0,40);

b = createSprite(70,40,10,10);
b.addImage(bImg);
b.scale = 0.1;
b.setCollider("circle",0,0,40);

p = createSprite(100,43,10,10);
p.addImage(pImg);
p.scale = 0.12;
p.setCollider("circle",0,0,40);

y = createSprite(130,42,10,10);
y.addImage(yImg);
y.scale = 0.1;
y.setCollider("circle",0,0,40);

}
function startPath(){
  isDrawing = true;
  currentPath = [];
  drawing.push(currentPath);
}

function endPath(){
  isDrawing = false;
  drawing.push(currentPath);
 }

function draw(){
 background(0);

 if(mouseIsPressed){
  var point = {
    x : mouseX,
    y : mouseY
  }
  currentPath.push(point);
 }
 beginShape();

 stroke(255);
 strokeWeight(6);
 noFill();
 for(var i = 0; i<drawing.length;i++){
  var path = drawing[i];
for(var j = 0; j<drawing.length;j++){
  vertex(path[j].x,path[j].y)
}
endShape();
}
 
 if(mousePressedOver(y)){
   mousePressedYellow();
 }
 if(mousePressedOver(b)){
  mousePressedBlue();
}
if(mousePressedOver(r)){
  mousePressedRed();
}
if(mousePressedOver(p)){
  mousePressedPink();
}
 
 drawSprites();
}

function mousePressedBlue(){
     if(isDrawing){
      var point = {
        x : mouseX,
        y : mouseY
      }
      drawing.push(point);
     }
     beginShape();
    
     stroke("#7EC8E3");
     strokeWeight(6);
     noFill();
     for(var i = 0; i<drawing.length;i++){
       vertex(drawing[i].x,drawing[i].y)
     }
     endShape();
}

function mousePressedYellow(){
  if(mouseIsPressed){
    var point = {
      x : mouseX,
      y : mouseY
    }
    drawing.push(point);
   }
   beginShape();
  
   stroke('#FAD02C');
   strokeWeight(6);
   noFill();
   for(var i = 0; i<drawing.length;i++){
     vertex(drawing[i].x,drawing[i].y)
   }
   endShape();
}

function mousePressedRed(){
  if(mouseIsPressed){
    var point = {
      x : mouseX,
      y : mouseY
    }
    drawing.push(point);
   }
   beginShape();
  
   stroke("#F51720");
   strokeWeight(6);
   noFill();
   for(var i = 0; i<drawing.length;i++){
     var path = drawing[i];
   for(var j = 0; j<drawing.length;j++){
     vertex(path[j].x,path[j].y)
   }
   endShape();
  }
}
function mousePressedPink(){
  if(mouseIsPressed){
    var point = {
      x : mouseX,
      y : mouseY
    }
    drawing.push(point);
   }
   beginShape();
  
   stroke("#D8A7B1");
   strokeWeight(6);
   noFill();
  
}

function saveDrawing(){
  var ref = database.ref('drawings');
  var data = {
    name : "xyz",
    drawing : drawing
  }
  var result = ref.push(data,dataSent);
  function dataSent (status){
    console.log(status);
  }
}