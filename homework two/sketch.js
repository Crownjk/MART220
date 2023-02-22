
            var x = 155;
            var y = 105;
            var diameter = 40;
            var circleX = 238;
            var xChange = 5;
            var counter = 0;
            var img;
            var img2;
            var img3;
            var fonts;
            var imgx = 100;
            var mycircle;
            var x,y,diameter;
            var pizza;
            var ninja;
            var ninjaObject;
            var ninjaObjects = [];
            var i = 0

            function preload()
            {
                ninja = loadImage("./images/idle__000.png");
                //img = loadImage('./images/Sebastian from Little Mermaid.jpg')
                //img2 = loadImage('./images/IMG_2534.jpg')
                img3 = loadImage('./images/IMG_3639.jpg')
                fonts = loadFont('./fonts/Pixelfy.ttf')
            }
            function displaycounter()
            {
                counter++;  
                if(counter >= 100)
                {
                    counter = 0;
                }
            }
            function changei()
            {
                i++;  
                if(i >= ninjaObjects.length)
                {
                    i = 0;
                }
            }
            function movefood()
            {
                pizza.updatevariables();
            }

            function setup (){
                createCanvas(500,500);
                setInterval(displaycounter, 5000);
                setInterval(changei, 100);
                //image( img, 100, 200);
                //image( img2, 300, 200);
                image(img3, 200, 200);
                // create instance (object) of class
                circleObject = new MyCircle(); //automatically calls constructor
                pizza = new food(); 
                setInterval(movefood, 1000);
                //image(ninja,200,350, 110, 110);
                ninjaObject = new animation("./images/idle__000.png");
                ninjaObjects [0] = ninjaObject
                ninjaObject = new animation("./images/idle__001.png");
                ninjaObjects [1] = ninjaObject
                ninjaObject = new animation("./images/idle__002.png");
                ninjaObjects [2] = ninjaObject
                ninjaObject = new animation("./images/idle__003.png");
                ninjaObjects [3] = ninjaObject
                ninjaObject = new animation("./images/idle__004.png");
                ninjaObjects [4] = ninjaObject
                ninjaObject = new animation("./images/idle__005.png");
                ninjaObjects [5] = ninjaObject
                ninjaObject = new animation("./images/idle__006.png");
                ninjaObjects [6] = ninjaObject
                ninjaObject = new animation("./images/idle__007.png");
                ninjaObjects [7] = ninjaObject
                ninjaObject = new animation("./images/idle__008.png");
                ninjaObjects [8] = ninjaObject
                ninjaObject = new animation("./images/idle__009.png");
                ninjaObjects [9] = ninjaObject

            }
            function draw ()
            {
                background(150,50,100);
                //image(img3, 150, 370, 90, 150);
                //image(img2, 300, 100, 190,190);
                image(img3, imgx, 160, 105,105);
                imgx++;
                textSize(50);
                textFont(fonts)
                text(counter,40,100);
                fill(200,150,90);
                //triangle(300,80,200,250,100,80);
                //fill(200,10,90);
                circle(x,y,diameter);
                fill(200,10,90);
                //circle(203,200,40);
                //fill(200,10,90);
                //circle(175,150,40);
                //fill(70,150,50);
                //circle(circleX,330,100);
                //fill(200,10,90);
                //circle(213,105,40);
                //fill(50,150,200);
                textSize(30);
                text('By Cat',380,490);
                textSize(35);
                fill(90,150,100);
                text('In motion',10,35);
                //if(circleX > 400 || circleX < 0)
                //{
                    //xChange*=-1;
                //}
                //if(keyIsPressed && (key == "a" || key == "w" || key == "s" || key == "d")){

                    //fill(0,100,200);

                //}
                //else {

                    //fill(75,30,200);

                //}
                ninjaObjects [i].draw();
                pizza.drawfood();
                circleObject.drawCircle();
                circleX += xChange;
                if(keyIsPressed)
                {
                    if(key == 'a')
                    {
                        x-=5;
                    }
                    else if(key == 'd')
                    {
                        x+=5
                    }
                    else if(key == 'w')
                    {
                        y-=5;
                    }
                    else if(key == 's')
                    {
                        y+=5;
                    }
                    
                    
                }


            }