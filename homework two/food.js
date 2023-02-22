class food {
    constructor() {
        this.trianglex = 300;
        this.trianglex2 = 200;
        this.trianglex3 = 100;
        this.circle1x = 175;
        this.circle2x = 213;
        this.circle3x = 203;

    }

    drawfood() {
        fill(200, 150, 90);
        triangle(this.trianglex, 80, this.trianglex2, 250, this.trianglex3, 80);
        fill(200, 10, 90);

        circle(this.circle3x, 200, 40);
        fill(200, 10, 90);
        circle(this.circle1x, 150, 40);
        fill(70, 150, 50);
        circle(this.circle2x, 105, 40);
        fill(50, 150, 200);

    }
    updatevariables(){
        var randomnumber = random (5,10)
        this.trianglex = this.trianglex + randomnumber
        this.trianglex2 = this.trianglex2 + randomnumber
        this.trianglex3 = this.trianglex3 + randomnumber
        this.circle1x = this.circle1x + randomnumber
        this.circle2x = this.circle2x + randomnumber
        this.circle3x = this.circle3x + randomnumber
    }

}