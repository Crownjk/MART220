let shapeArray =[];
//translation positions 
var boxTranslationX = 170;
var boxTranslationY = 260; 
let redbluegalaxy;
let explosion;
let tiles;
var loadImage;
var Fonts;

function preload()
{
    explosion= loadImage('./images/explosion.jpg');
    tiles= loadImage('./images/tiles.jpg');
    redbluegalaxy= loadImage('./images/redbluegalaxy.jpg');
    Fonts = loadFont('./font/Pixelfy.ttf')

}
function setup()
{
    createCanvas(800,800, WEBGL);
    shapeArray.push(new shapeClass("box", 130, 120, 110, boxTranslationX, boxTranslationY, 0.02, 0.03, 0,tiles));
    shapeArray.push(new shapeClass("cylinder", 90, 80, 0, 150, 50, 0.01, 0.01, 0,explosion));
}
function draw()
{
    background(50,130,200);
    normalMaterial();
    console.log(shapeArray.length);
    for( var i = 0; i < shapeArray.length; i++)
    {
        shapeArray[i].draw(frameCount);
    }
    
    push();
    translate(-300,-200);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.03);
    rotateZ(frameCount * 0.02);
    texture(redbluegalaxy);
    cone(100,70);
    pop();

    push();
    translate(-250, 150);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.03);
    texture(explosion);
    ellipsoid(30,50,150);
    pop();

    push();
    translate(20, -100);
    rotateX(frameCount * 0.03);
    rotateY(frameCount * 0.04);
    rotateZ(frameCount * 0.05);
    texture(tiles);
    torus(45, 25);
    pop();
        
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    translate(-50, -50);
    beginShape();
    vertex(-30,30);
    vertex(0,65);
    vertex(30,30);
    vertex(65,0);
    vertex(30,-20);
    vertex(0,-75);
    vertex(-30,-20);
    vertex(-75,0);
    texture(redbluegalaxy);
    endShape(CLOSE);
    pop();
    
    textFont(Fonts)
    textSize(40);
    fill(200,80,150);
    text('floating',-50,380);
    
}
function mousePressed()
{
    for(var i = 0; i < shapeArray.length; i++)
    {
        shapeArray[i].update(random (-300, 100), random (-100, 200));
    }
}