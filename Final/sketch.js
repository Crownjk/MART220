let shapeArray =[];
var boxTranslationX = 170;
var boxTranslationY = 260;
let bubbles;
let neon;
let orangetoblue;
var loadImage;
var Fonts;

function preload()
{
    Fonts = loadFont('./font/Pixelfy.ttf')
    bubbles= loadImage('./image/bubbles.jpg');
    neon= loadImage('./image/neon.webp');
    orangetoblue= loadImage('./image/orangetoblue.jpg');
}

function setup()
{
    createCanvas(850,850, WEBGL);
    shapeArray.push(new shapeClass("box", 130, 120, 110, boxTranslationX, boxTranslationY, 0.02, 0.03, 0, neon));
    shapeArray.push(new shapeClass("cylinder", 90,80,0,150,50,0.01,0.01,0,bubbles));

}

function draw()
{
    background(55,135,205);
    normalMaterial();
    for( var i = 0; i < shapeArray.length; i++)
    {
        shapeArray[i].draw(frameCount);
    }

    push();
    translate(-200,-300);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.03);
    rotateZ(frameCount * 0.02);
    texture(bubbles);
    cone(150,80);
    pop();

    push();
    translate(-150,250);
    rotateX(frameCount * 0.04);
    rotateY(frameCount * 0.02);
    rotateZ(frameCount * 0.03);
    texture(neon);
    ellipsoid(40,50,160);
    pop();

    push();
    translate(40, -140);
    rotateX(frameCount * 0.04);
    rotateY(frameCount * 0.05);
    rotateZ(frameCount * 0.03);
    texture(orangetoblue);
    torus(55,35);
    pop();

    push();
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.04);
    rotateZ(frameCount * 0.04);
    translate(-40,-40);
    beginShape();
    vertex(-35,35);
    vertex(0,60);
    vertex(35,35);
    vertex(60,0);
    vertex(30,-20);
    vertex(0,-70);
    vertex(-30,-20);
    vertex(-70,0);
    texture(bubbles);
    endShape(CLOSE);
    pop();

    textFont(Fonts)
    textSize(50);
    fill(100,150,50);
    text('Have a great summer! By Cat', -350,400);
}
function mousePressed()
{
    for(var i = 0; i < shapeArray.length; i++)
    {
        shapeArray[i].update(random(-250,100), random (-100,250));
    }
}