class animation
{
    constructor(ninja, x)
    {
        var ninjaimage = loadImage(ninja);
        this.ninja = ninjaimage;
        this.x = x
        this.y = y 
        this.direction 
    }

    draw()
    {
        if (this.direction == "left")
        {
            console.log (this.x)
            translate(this.ninja.width, 0);
            scale (-1,1);
            image(this.ninja,this.x, this.y, 110,110); 
             
        }
       else
       {
        image(this.ninja,this.x, this.y, 110,110);
       }

    }
    updateposition(direction)
    {
        this.direction = direction
        if (direction == "right")
        {
            this.x +=5
        }
        else if (direction == "left")
        {
     
            this.x +=5
        }
        else if (direction == "down")
        {
            this.y +=5
        }
        else if (direction == "up")
        {
            this.y -=5
        }

    }
}