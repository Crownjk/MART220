class animation
{
    constructor(ninja)
    {
        var ninjaimage = loadImage(ninja);
        this.ninja = ninjaimage;
    }

    draw()
    {
        image(this.ninja,200, 350, 110,110); 

    }
}