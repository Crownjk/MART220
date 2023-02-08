
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
           
            function preload()
            {
                img = loadImage('./images/Sebastian from Little Mermaid.jpg')
                img2 = loadImage('./images/IMG_2534.jpg')
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


            function setup (){
                createCanvas(500,500);
                setInterval(displaycounter, 5000);
                image( img, 100, 200);
                image( img2, 300, 200);
                image(img3, 200, 200);

            }
            function draw ()
            {
                background(150,50,100);
                image(img3, 150, 370, 90, 150);
                image(img2, 300, 100, 190,190);
                image(img, imgx, 160, 105,105);
                imgx++;
                textSize(50);
                textFont(fonts)
                text(counter,40,100);
                fill(200,150,90);
                triangle(300,80,200,250,100,80);
                fill(200,10,90);
                circle(x,y,diameter);
                fill(200,10,90);
                circle(203,200,40);
                fill(200,10,90);
                circle(175,150,40);
                fill(70,150,50);
                circle(circleX,330,100);
                fill(200,10,90);
                circle(213,105,40);
                fill(50,150,200);
                textSize(30);
                text('By Cat',380,490);
                textSize(35);
                fill(90,150,100);
                text('In motion',10,35);
                if(circleX > 400 || circleX < 0)
                {
                    xChange*=-1;
                }
                

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