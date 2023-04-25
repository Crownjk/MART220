class MyCircle{

    //constructor called one time
    constructor(x,y, diameter, redColor, greenColor, blueColor)
    {

    
        //properties
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.redColor = redColor;
        this.greenColor = greenColor;
        this.blueColor = blueColor;
    }
    
    //functions
    drawCircle()
    {
        fill(this.redColor,this.greenColor, this.blueColor);
        circle(this.x,this.y,this.diameter);
    }
}