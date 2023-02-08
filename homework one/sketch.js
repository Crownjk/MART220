var circleX = 100;
var xChange = 5;
var circleR = 100;
var squareY = 200;
var squareYChange = 3;

function preload()
{
    
}

function setkup()
{
    createCanvas(400,400);

}

function draw()
{ 
    background(250);
    fill(0,220,120);
    createSquare(100,200,50);
    createCircle(200,100,75);
    createSquare(350,200,70);
    createCircle(); // calling the function
    movement();
    moveSquare();
}
function moveSquare()
{
    if(squareY > height-50 || squareY < 0)
    {
        squareYChange *= -1;
    }
    squareY += squareYChange;
}


    function movement()
    {
        
    if(circleX > width-circleR/2 || circleX < circleR/2)
       
        xChange*=-1;
        squareXchange*=-1;
    }

    circleX += xChange;
    createCircle(); // calling the fuction
// created a function
function createCircle()
{
    circleR(circleX,100,circleR);
}
// create a function
function createSquare(x,y,w)
{
    square(x,y,w);
}