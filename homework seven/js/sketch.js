
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
            var r1;
            var r2;
            const particles = [];

            function preload()
            {
                //ninja = loadImage("./images/Idle/Idle__000.png");
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
                createCanvas(800,800);
                setInterval(displaycounter, 5000);
                setInterval(changei, 100);
                setInterval(changer, 100);
                image(img3, 200, 200);
                // create instance (object) of class
                circleObject = new MyCircle(); //automatically calls constructor
                pizza = new food(); 
                setInterval(movefood, 1000);
                for(var i = 0; i < IdleStrings.length; i++)
                {
                    ninjaObject = new animation(IdleStrings[i], 130);
                    ninjaObjects [i] = ninjaObject
                }
                for (var r = 0; r < RunStrings.length; r++)
                {
                    runObject = new animation(RunStrings[r], 130);
                    runObjects [r] = runObject
                }
               
            }
            function draw ()
            {
                background(150,50,100);
                //r1 = new Rectangle(100,100,20,40);
                //r2 = new Rectangle(100,210,30,20);
                image(img3, imgx, 160, 105,105);
                imgx++;
                textSize(50);
                textFont(fonts)
                text(counter,40,100);
                fill(200,150,90);
                circle(x,y,diameter);
                fill(200,10,90);
                textSize(60);
                text('health',95,495);
                textSize(90);
                text('By Cat',380,690);
                textSize(35);
                fill(90,150,100);
                text('In motion',10,35);
                //ninjaObjects [i].draw();
                //runObjects [r].draw();
                //r1.draw();
                //r2.draw();
                pizza.drawfood();
                circleObject.drawCircle();
                //circleX += xChange;
                if(keyIsPressed)
                {
                    if (key == 'a')
                    {
                        for (var q = 0; q < runObjects.length; q++)
                        {
                            runObjects[q].updateposition("left");
                            ninjaObjects[q].updateposition("left");
                        }
                        runObjects [r].draw();
                    }
                    if(key == 'w')
                    {
                        for (var t = 0; t < runObjects.length; t++)
                        {
                            runObjects[t].updateposition("up");
                            ninjaObjects[t].updateposition("up");
                        }
                        runObjects [r].draw();
                    }
                    if(key == 'd')
                    {
                        // a loop goes through all of the images and makes them move and repeat over and over again
                        for (var s = 0; s < runObjects.length; s++)
                        {
                            runObjects[s].updateposition("right");
                            ninjaObjects[s].updateposition("right");
                        }
                        runObjects [r].draw();
                    }
                
                    
                }
                else
                {
                    ninjaObjects [i].draw();
                }
                for (let i = 0; i < 5; i++)
                {
                    let p = new Particle();
                    particles.push(p);
                }
                for (let i = particles.length - 1; i >= 0; i--)
                {
                    particles[i].update();
                    particles[i].show();
                    if (particles[i].finished()) 
                    {
                        particles.splice(i, 1);
                    }
                }

            }