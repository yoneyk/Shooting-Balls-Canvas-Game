{"changed":true,"filter":false,"title":"Canvas14.js","tooltip":"/Canvas14.js","value":"// Now some basic canvas stuff. Here we'll make a variable for the canvas and then initialize its 2d context for drawing\nvar canvas = document.getElementById(\"canvas\"),\n\t\tctx = canvas.getContext(\"2d\");\n\n// Now setting the width and height of the canvas\nvar W = 1000,\n    H = 450;\n    var fg;\n    \n    \n\n// Applying these to the canvas element\ncanvas.height = H; canvas.width = W;\n\n// First of all we'll create a ball object which will contain all the methods and variables specific to the ball.\n// Lets define some variables first\n\nvar ball = {},\n\t\tgravity = 0.2,\n\t\tbounceFactor = 0.7;\n\n// The ball object\n// It will contain the following details\n// 1) Its x and y position\n// 2) Radius and color\n// 3) Velocity vectors\n// 4) the method to draw or paint it on the canvas\n\nball = {\n\tx: W/2,\n\ty: 60,\n\t\n\tradius: 100,\n\tcolor: \"red\",\n\t\n\t// Velocity components\n\tvx: 0,\n\tvy: 1,\n\t\n\tdraw: function() {\n\t\t// Here, we'll first begin drawing the path and then use the arc() function to draw the circle. The arc function accepts 6 parameters, x position, y position, radius, start angle, end angle and a boolean for anti-clockwise direction.\n\t\tctx.beginPath();\n\t\tctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);\n\t\tctx.fillStyle = this.color;\n\t\tctx.fill();\n\t\tctx.closePath();\n\t\t\n\t}\n};\n\n// When we do animations in canvas, we have to repaint the whole canvas in each frame. Either clear the whole area or paint it with some color. This helps in keeping the area clean without any repetition mess.\n// So, lets create a function that will do it for us.\nfunction clearCanvas() {\n\tctx.clearRect(0, 0, W, H);\n}\n\n// A function that will update the position of the ball is also needed. Lets create one\nfunction update() {\n\tclearCanvas();\n\tball.draw();\n\t\n\t// Now, lets make the ball move by adding the velocity vectors to its position\n\tball.y += ball.vy;\n\t// Ohh! The ball is moving!\n\t// Lets add some acceleration\n\tball.vy += gravity;\n\t//Perfect! Now, lets make it rebound when it touches the floor\n\tif(ball.y + ball.radius > H) {\n\t\t// First, reposition the ball on top of the floor and then bounce it!\n\t\tball.y = H - ball.radius;\n\t\tball.vy *= -bounceFactor;\n\t\t// The bounceFactor variable that we created decides the elasticity or how elastic the collision will be. If it's 1, then the collision will be perfectly elastic. If 0, then it will be inelastic.\n\t}\n}\n\n// Now, the animation time!\n// in setInterval, 1000/x depicts x fps! So, in this casse, we are aiming for 60fps for smoother animations.\nsetInterval(update, 1000/60);","undoManager":{"mark":2,"position":89,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":107,"column":2},"action":"remove","lines":["/**"," * Created by LOe on 30/03/15."," */","","","var canvas = document.getElementById('canvas');","var ctx = canvas.getContext('2d');","","// raf = Request Animation Frame","//","var raf;","","// Initialise the program to the \"not running\" state.","//","var running = true;","","var ball = {","    x: 100,","    y: 100,","    vx: 5,","    vy: 1,","    radius: 25,","    color: 'blue',","    draw: function() {","        ctx.beginPath();","        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);","        ctx.closePath();","        ctx.shadowOffsetX = 5;","        ctx.shadowOffsetY = 5;","        ctx.shadowBlur = 10;","        ctx.shadowColor = \"black\";","        ctx.fillStyle = this.color;","        ctx.fill();","        ","    }","};","","function clear() {","    ctx.fillStyle = 'white';","    ctx.fillRect(0,0,canvas.width,canvas.height);","}","","function draw() {","    clear();","    ball.draw();","    ball.x += ball.vx;","    ball.y += ball.vy;","","   if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {","        ball.vy = -ball.vy;","    }","","    if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {","        ball.vx = -ball.vx;","    }","","    raf = window.requestAnimationFrame(draw);","}","","// Adding listeners that will enable the ball to be controlled by the mouse.","//===========================================================================","//","// If the mouse moves over the Canvas, the ball follows the mouse.","//","canvas.addEventListener('mousemove', function(e){","    /*if (!running) {","        clear();","        ball.x = e.clientX;","        ball.y = e.clientY;","        ball.draw();","    }*/","});","","// When the mouse is clicked, the animation is starting.","//","canvas.addEventListener(\"click\",function(e){","    /*if (!running) {","        raf = window.requestAnimationFrame(draw);","        running = true;","    }*/","    if(running){","        window.cancelAnimationFrame(raf);","        running = false;","    }","    else{","        raf = window.requestAnimationFrame(draw);","        running = true;","    }","","});","","ball.click(function () {","        alert('BOOM');","     });","","// Stop the animation when the mouse leaves the Canvas.","//","canvas.addEventListener(\"mouseout\",function(e){","    /*window.cancelAnimationFrame(raf);","    running = false;*/","});","","ball.draw();","","","//","// How could you change this script to add more balls to the canvas?","//"]},{"start":{"row":0,"column":0},"end":{"row":73,"column":29},"action":"insert","lines":["// Now some basic canvas stuff. Here we'll make a variable for the canvas and then initialize its 2d context for drawing","var canvas = document.getElementById(\"canvas\"),","\t\tctx = canvas.getContext(\"2d\");","","// Now setting the width and height of the canvas","var W = 150,","\t\tH = 450;","","// Applying these to the canvas element","canvas.height = H; canvas.width = W;","","// First of all we'll create a ball object which will contain all the methods and variables specific to the ball.","// Lets define some variables first","","var ball = {},","\t\tgravity = 0.2,","\t\tbounceFactor = 0.7;","","// The ball object","// It will contain the following details","// 1) Its x and y position","// 2) Radius and color","// 3) Velocity vectors","// 4) the method to draw or paint it on the canvas","","ball = {","\tx: W/2,","\ty: 60,","\t","\tradius: 100,","\tcolor: \"red\",","\t","\t// Velocity components","\tvx: 0,","\tvy: 1,","\t","\tdraw: function() {","\t\t// Here, we'll first begin drawing the path and then use the arc() function to draw the circle. The arc function accepts 6 parameters, x position, y position, radius, start angle, end angle and a boolean for anti-clockwise direction.","\t\tctx.beginPath();","\t\tctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);","\t\tctx.fillStyle = this.color;","\t\tctx.fill();","\t\tctx.closePath();","\t}","};","","// When we do animations in canvas, we have to repaint the whole canvas in each frame. Either clear the whole area or paint it with some color. This helps in keeping the area clean without any repetition mess.","// So, lets create a function that will do it for us.","function clearCanvas() {","\tctx.clearRect(0, 0, W, H);","}","","// A function that will update the position of the ball is also needed. Lets create one","function update() {","\tclearCanvas();","\tball.draw();","\t","\t// Now, lets make the ball move by adding the velocity vectors to its position","\tball.y += ball.vy;","\t// Ohh! The ball is moving!","\t// Lets add some acceleration","\tball.vy += gravity;","\t//Perfect! Now, lets make it rebound when it touches the floor","\tif(ball.y + ball.radius > H) {","\t\t// First, reposition the ball on top of the floor and then bounce it!","\t\tball.y = H - ball.radius;","\t\tball.vy *= -bounceFactor;","\t\t// The bounceFactor variable that we created decides the elasticity or how elastic the collision will be. If it's 1, then the collision will be perfectly elastic. If 0, then it will be inelastic.","\t}","}","","// Now, the animation time!","// in setInterval, 1000/x depicts x fps! So, in this casse, we are aiming for 60fps for smoother animations.","setInterval(update, 1000/60);"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":8},"end":{"row":5,"column":11},"action":"remove","lines":["150"]},{"start":{"row":5,"column":8},"end":{"row":5,"column":11},"action":"insert","lines":["100"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":11},"end":{"row":5,"column":12},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":12},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":13},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":15},"end":{"row":57,"column":0},"action":"insert","lines":["",""]},{"start":{"row":57,"column":0},"end":{"row":57,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":1},"end":{"row":57,"column":2},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":2},"end":{"row":57,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":1},"end":{"row":57,"column":3},"action":"remove","lines":["fr"]},{"start":{"row":57,"column":1},"end":{"row":57,"column":7},"action":"insert","lines":["frames"]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":7},"end":{"row":57,"column":8},"action":"insert","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":8},"end":{"row":57,"column":9},"action":"insert","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":9},"end":{"row":57,"column":10},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":44,"column":18},"end":{"row":45,"column":0},"action":"insert","lines":["",""]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["\t\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":2},"end":{"row":45,"column":3},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":3},"end":{"row":45,"column":4},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":4},"end":{"row":45,"column":5},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":5},"end":{"row":45,"column":6},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":5},"end":{"row":45,"column":6},"action":"remove","lines":["d"]},{"start":{"row":45,"column":5},"end":{"row":45,"column":11},"action":"insert","lines":["draw()"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":10},"end":{"row":45,"column":11},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":11},"end":{"row":45,"column":12},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":12},"end":{"row":45,"column":13},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":13},"end":{"row":45,"column":14},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":14},"end":{"row":45,"column":15},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":15},"end":{"row":45,"column":16},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":16},"end":{"row":45,"column":17},"action":"insert","lines":["H"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":17},"end":{"row":45,"column":18},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":2},"end":{"row":45,"column":19},"action":"remove","lines":["fg.draw(ctx,0,H,)"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":9},"end":{"row":58,"column":10},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":8},"end":{"row":58,"column":9},"action":"remove","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":7},"end":{"row":58,"column":8},"action":"remove","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":6},"end":{"row":58,"column":7},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":5},"end":{"row":58,"column":6},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":4},"end":{"row":58,"column":5},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":3},"end":{"row":58,"column":4},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":2},"end":{"row":58,"column":3},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":1},"end":{"row":58,"column":2},"action":"remove","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":0},"end":{"row":58,"column":1},"action":"remove","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":15},"end":{"row":58,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":4},"end":{"row":7,"column":13},"action":"remove","lines":["frames=0;"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":21},"end":{"row":7,"column":23},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"remove","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"remove","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"remove","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"remove","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"remove","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":11},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":8,"column":4},"end":{"row":8,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":93,"mode":"ace/mode/javascript"}},"timestamp":1429100702707}