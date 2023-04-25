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
            push()
            translate(this.ninja.width, 0);
            scale (-1,1);
            image(this.ninja,-this.x, this.y, 110,110); 
            pop()
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
     
            this.x -=5
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
    iscolliding(r1)
    {
        return collideRectRect(this.x,this.y,this.ninja.width, this.ninja.height, r1.x, r1.y, r1.w, r1.h);
    }
}