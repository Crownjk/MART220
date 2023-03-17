
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
            var IdleStrings = [];
            var runObjects;
            var runObjects = [];
            var r = 0
            var RunStrings = [];

            function preload()
            {
                ninja = loadImage("./images/Idle/Idle__000.png");
                //img = loadImage('./images/Sebastian from Little Mermaid.jpg')
                //img2 = loadImage('./images/IMG_2534.jpg')
                img3 = loadImage('./images/IMG_3639.jpg')
                fonts = loadFont('./fonts/Pixelfy.ttf')
                IdleStrings = loadStrings("./images/Idle/Idle.txt");
                RunStrings = loadStrings("./images/Run.txt");
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
            function changer ()
            {
                r++;
                console.log(r)
                if(r >= runObjects.length)
                {
                    r = 0;
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
                setInterval(changer, 20);
                //image( img, 100, 200);
                //image( img2, 300, 200);
                image(img3, 200, 200);
                // create instance (object) of class
                circleObject = new MyCircle(); //automatically calls constructor
                pizza = new food(); 
                setInterval(movefood, 1000);
                //image(ninja,200,350, 110, 110);
                for(var i = 0; i < IdleStrings.length; i++)
                {
                    ninjaObject = new animation(IdleStrings[i]);
                    ninjaObjects [i] = ninjaObject
                }
                for (var r = 0; r < RunStrings.length; r++)
                {
                    runObject = new animation(RunStrings[r]);
                    runObjects [r] = runObject
                }
               
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
                circle(x,y,diameter);
                fill(200,10,90);
                textSize(30);
                text('By Cat',380,490);
                textSize(35);
                fill(90,150,100);
                text('In motion',10,35);
                //ninjaObjects [i].draw();
                //runObjects [r].draw();
                pizza.drawfood();
                circleObject.drawCircle();
                //circleX += xChange;
                if(keyIsPressed)
                {
                    if(key == 'd')
                    {
                        console.log (r)
                        runObjects [r].draw();
                    }
                    else
                    {
                        ninjaObjects [i].draw();
                    }
                    
                }
                else
                {
                    ninjaObjects [i].draw();
                }


            }