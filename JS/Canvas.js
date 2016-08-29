// Now some basic canvas stuff. Here we'll make a variable for the canvas and then initialize its 2d context for drawing
var canvas = document.getElementById("canvas"),
    ctx=canvas.getContext("2d");

// First of all we'll create an array of ball object which will contain all the methods and variables specific to the ball.
// Lets define some variables first

// raf = Request Animation Frame
var raf;

var touchedBall = 0;
var touchedBomb = 0;


// Current Position
var up = 0;
var xpos = 0;
var ypos = 0;
var down = 0;
var left = 0;
var right = 0;
var started = false;
var mouseX, mouseY;
// Initialise the program to the "not running" state.
var running = true;
//bg start initialize after button clicked
var bg_start= false;

//____________________Background___________________
//the functions that move the background

var fgpos=0;
//var frames=0;
var bg = new Image();
var bomb = new Image();
var background = new Background();

canvas.style.border="1px solid #000";
//canvas.width=window.innerWidth;
//canvas.height=window.innerHeight;
document.body.appendChild(canvas);
//a function that loads the image on load 
bg.onload= function(){

    ctx.drawImage( bg, fgpos, 0);

};
bg.src = "../IMG/bluesky.jpg";

function Background(){
    this.x=0;
    this.y=0;
    
    this.bg_init=function(xpos,ypos){
       ctx.drawImage(bg,xpos,ypos);
    };
   
    this.render=function(val){
        if(val == 1){
            ctx.drawImage(bg,this.x--,0);
            
            if(this.x <= -1100){
                this.x=0;
                //bg_start=true;
            }  
        }
        else{
            ctx.drawImage(bg,this.x,0);
        }
    };

}

function animate(){
    //ctx.save();
    clearCanvas();
    background.render(1);
    //ctx.restore();
}
setInterval(animate,100);


//______________________Object_____________________________//

// The ball object
// It will contain the following details
// 1) Its x and y position
// 2) Radius and color
// 3) Velocity vectors
var Ball = new Array();
Ball[0] /*red */ = {color: 'red',    x: 50,  y: 50, radius: 40, vx: 5, vy: 10, id: 1 };
Ball[1] /*yellow */ = {color: "Gold", x: 50, y: 100, radius: 40, vx: 6, vy: 1, id: 2 };
Ball[2] /*green */= {color: "Chartreuse",  x: 50, y: 200, radius: 40, vx: 6, vy: 4, id: 3  };
Ball[3] /*pink */= {color: "DeepPink",   x: 50, y: 300, radius: 40, vx: 2, vy: 5, id: 4  };
Ball[4] /*blue */= {color: "CornflowerBlue ", x: 50, y: 350, radius: 40, vx: 1, vy: 2, id: 5  };
Ball[5] /*orange*/= {color: "DarkOrange  ", x: 50, y: 550, radius: 40, vx: 3, vy: 6, id: 6  };
Ball[6] /*red */ = {color: 'red',    x: 100,  y: 100, radius: 40, vx: 10, vy: 10, id: 1 };
Ball[7] /*yellow */ = {color: "Gold", x: 150, y: 50, radius: 40, vx: 4, vy: 10, id: 2 };
Ball[8] /*green */= {color: "Chartreuse",  x: 80, y: 190, radius: 40, vx: 6, vy: 1, id: 3  };
Ball[9] /*pink */= {color: "DeepPink",   x: 300, y: 200, radius: 40, vx: 6, vy: 2, id: 4  };
Ball[10] /*blue */= {color: "CornflowerBlue ", x: 310, y: 350, radius: 40, vx: 7, vy: 3, id: 5  };
Ball[11] /*orange*/= {color: "DarkOrange  ", x: 420, y: 280, radius: 40, vx: 3, vy: 6, id: 6  };

//__________________________for the bomb______________
var Bomb = new Array();
Bomb[0] /*Black bomb*/= {color: "Black", x: 100,  y: 300, radius: 40, vx: 8, vy: 5 };
Bomb[1] /*Black bomb*/= {color: "Black", x: 330,  y: 350, radius: 40, vx: 1, vy: 5 };
Bomb[2] /*Black bomb*/= {color: "Black", x: 600,  y: 400, radius: 40, vx: 4, vy: 1 };
//______________________Listener_____________________________//

// When the mouse is clicked, the animation is starting.
canvas.addEventListener('click', mouseclick, false);
// When the mouse is moved, the animation is starting.
canvas.addEventListener('mousemove', mousemove, false);
// update on any window size change.
//window.addEventListener('resize', redraw);
//canvas.addEventListener('#resume.click', background.render, false);
//___________________________________________________________//

function drawBall(tab)
{
    var x = tab.x;
    var y = tab.y;
    var radius = tab.radius;
    var color = tab.color;
    // Velocity components
    var vx = tab.vx;
    var vy = tab.vy;

    ctx.beginPath();
    ctx.arc(tab.x, tab.y, tab.radius, 0, Math.PI*2, true);
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "black";
    ctx.fillStyle = tab.color;
    ctx.fill();
    ctx.closePath();
}

//draw the bomb same as ball drawing
function drawBomb(tab)
{
    var bombX = tab.x;
    var bombY = tab.y;
    var bombRad = tab.radius;
    var bombColor = tab.color;
    // Velocity components
    var bombVx = tab.vx;
    var bombVy = tab.vy;

    ctx.beginPath();
    ctx.arc(tab.x, tab.y, tab.radius, 0, Math.PI*2, true);
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "gold";
    ctx.fillStyle = tab.color;
    ctx.fill();
    ctx.closePath();
}

// When we do animations in canvas, we have to repaint the whole canvas in each frame. Either clear the whole area or paint it with some color. This helps in keeping the area clean without any repetition mess.
// So, lets create a function that will do it for us.
function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width,canvas.height);
}

function moveBall(tab){
    tab.x += tab.vx;
    tab.y += tab.vy;
}

function sideBouncing(tab) {
    if (tab.y + tab.vy + tab.radius > canvas.height || tab.y + tab.vy - tab.radius < 0) {
        tab.vy = -tab.vy;
    }/* top and bottom side */

   if (tab.x + tab.vx + tab.radius > canvas.width || tab.x + tab.vx - tab.radius < 0) {
        tab.vx = -tab.vx;
    }/* Right and Left side */
}

// A function that will update the position of the ball is also needed. Lets create one
function draw() {     
    clearCanvas();
    background.render(1);
    //animate();
    for( var i = 0; i < Ball.length ; i++){
        drawBall(Ball[i]);
        // Now, lets make the ball move by adding the velocity vectors to its position
        moveBall(Ball[i]);
        sideBouncing(Ball[i]);
    }

    for (var i = 0; i < Ball.length; i++) {
        if (mouseX > Ball[i].x - Ball[i].radius && 
            mouseX < Ball[i].x + Ball[i].radius && 
            mouseY < Ball[i].y + Ball[i].radius && 
            mouseY > Ball[i].y - Ball[i].radius) {
                Ball[i].radius = 0;
                touchedBall++;
                // Lets check if the touched ball is the same than the color
                checkColor(Ball[i].id);
                if(touchedBall == 11){
                    finishGame();
                }
            }

    }
    
    for(var i = 0; i < Bomb.length;i++){
        drawBomb(Bomb[i]);
        moveBall(Bomb[i]);
        sideBouncing(Bomb[i]);
    }

//checks if the bomb is touched
//for the time being i created 3 bombs
    for(var i = 0; i < Bomb.length; i++){
        if (mouseX > Bomb[i].x - Bomb[i].radius && 
            mouseX < Bomb[i].x + Bomb[i].radius && 
            mouseY < Bomb[i].y + Bomb[i].radius && 
            mouseY > Bomb[i].y - Bomb[i].radius) {
                    
                    Bomb[i].radius = 0;
                    touchedBomb++;
                    //if all the bombs are touched, the game will finish
                    if(touchedBomb == 3){
                        //alert(touchedBomb);
                        life("remove",touchedBomb);
                        finishGame();
                        
                    } 
                    //otherwise it decrements the life by 1
                    else{
                        life("remove",touchedBomb);
                    }              
        }
    }
    
    raf = window.requestAnimationFrame(draw);
}


// Now, the animation time!
// in setInterval, 1000/x depicts x fps! So, in this casse, we are aiming for 60fps for smoother animations.
// setInterval(draw, 100000000/60);
var mouseX;
var mouseY;
function mousemove (e){

    /* Position of a mouse*/  
    mouseX = e.pageX;
    mouseY = e.pageY;
    

}

 
function mouseclick(e) {
     
    /* Position of a mouse click */        
    mouseX = e.pageX;
    mouseY = e.pageY;

    // mouseX = e.offsetX ? (e.offsetX) : e.pageX - document.getElementById("canvas").offsetLeft;
    // mouseY = e.offsetY ? (e.offsetY) : e.pageY - document.getElementById("canvas").offsetTop;

    console.log(mouseX + " --- " + mouseY);
    console.log(document.getElementById("canvas").height);


    for (var i = 0; i < Ball.length; i++) {

            console.log("mouseX: " + mouseX + "   mouseY: " + mouseY);
            console.log(Ball[i].color);
            console.log("xBall: " + Ball[i].x  + "  yBall: " + Ball[i].y + "    RadiusBall: " + Ball[i].radius);

            console.log("xMin: " + (Ball[i].x - Ball[i].radius) + "  xMax: " + (Ball[i].x + Ball[i].radius));
            console.log("yMin: " + (Ball[i].y - Ball[i].radius) + "  yMax: " + (Ball[i].y + Ball[i].radius));

        /* if click is on the ball*/
        if (
            mouseX > Ball[i].x - (Ball[i].radius)  &&
            mouseX < Ball[i].x +  (Ball[i].radius) &&
            mouseY < Ball[i].y  + (Ball[i].radius)&&
            mouseY > Ball[i].y - (Ball[i].radius)) {

            /*make disappear ball */
            Ball[i].radius = 0;
        }

    }
 
}

/* Stop the movement of balls */
function stop(){
    window.cancelAnimationFrame(raf);
    running = false;
    bg_start= false;
} 

/* start the movement of balls */
function play(){
    raf = window.requestAnimationFrame(draw);
    running = true;
    bg_start= true;
}



$(document).ready(OnReady);

var c = 1, butColor, numberColor;
  
var min=1, sec=30;

var NbHeart = 0, score = 0;

var interval1, interval2;

function OnReady(){
  //-----------------------------------
  // Close les popups
  //-----------------------------------
  $('body').on('click', '.buttonD', function() { //on click on the body
      $('#fade , .popup_block').fadeOut(function() {
        $('#fade, a.close').remove();  
    }); //...it disappear together 
    return false;
  });
  
    $('.resume').click(function () {
       init();
    });

  popup("popup", "50%");
}


/*
 * popup(rel, size)
 * rel : id of the popup
 * size : size of the popup
 * Description : Make appear a popup in foreground
 */
function popup(rel, size)
{
    var popID = rel; //Find popup corresponding
    var popWidth = size; //Find the width

    //Make appear the pop-up
    $('#' + popID).fadeIn(800).css({ 'width': popWidth});
    
    //Retreiving of margin, that will allow to center the window
    var popMargTop = ($('#' + popID).height()) / 2;
    var popMargLeft = ($('#' + popID).width()+20) / 2;
    
    //Apply Margin to Popup
    $('#' + popID).css({ 
      'margin-top' : -popMargTop,
      'margin-left' : -popMargLeft
    });
    
    //Make appear the background - .css({'filter' : 'alpha(opacity=80)'}) to correct bog on the old version of IE
    $('body').append('<div id="fade"></div>');
    $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
    
    return false;
}// popup()


/*
 * sound(value)
 * value : id of the button off/on
 * Description : Make mute the sound
 */
function sound(value){
  
  if(value==1){
    document.getElementById('ON').style.display = 'none';
    document.getElementById('OFF').style.display = '';
    document.getElementById('mySound').remove();
  }else{
    document.getElementById('ON').style.display = '';
    document.getElementById('OFF').style.display = 'none';
    document.getElementById('body').innerHTML += '<embed id="mySound" src="ZIK/sound.mp3" volume=0 height=0 width=0 loop="true" enablejavascript="true"> ';
  }
 
}// sound()


/*
 * start(value)
 * value : id of the button play/pause
 * Description : plays and pauses the game when clicked
 */

function Pause(value){
 
  if(value==1){
    document.getElementById('resume').style.display = 'none';
    document.getElementById('play').style.display = '';
    document.getElementById('restart').style.display = '';
    

    // Stop balls
    stop();
    // open popup to restart
    popup("popup","50%");
    //clear interval to stop the timer
    clearInterval(interval1);
    //clear interval to stop the change of color
    clearInterval(interval2);  

  }
  else
  {
    document.getElementById('resume').style.display = '';
    document.getElementById('play').style.display = 'none';
    play();
    interval1 = setInterval(timer, 1000);
    interval2 = setInterval(changeColor,2000);
  }
 
}// Pause(value)


//the different colors that are displayed
function changeColor(){
    if (c==1){
        butColor="red";
        numberColor = 1;
        $( "#colorp" ).replaceWith( "<p class='textHeader' id='colorp'>Red</p>" );
        c++;
    }
    else if (c==2){
        butColor="Gold";
        numberColor = 2;
        $( "#colorp" ).replaceWith( "<p  class='textHeader' id='colorp'>Yellow</p>" );
        c++;
    }
    else if (c==3){
        butColor="Chartreuse";
        numberColor = 3;
        $( "#colorp" ).replaceWith( "<p class='textHeader' id='colorp'>Green</p>" );
        c++;
    }
    else if (c==4){
        butColor="DeepPink";
        numberColor = 4;
        $( "#colorp" ).replaceWith( "<p class='textHeader' id='colorp'>Pink</p>" );
        c++;
    }
    else if (c==5){
        butColor="CornflowerBlue";
        numberColor = 5;
        $( "#colorp" ).replaceWith( "<p class='textHeader' id='colorp'>Blue</p>" );
        c++;
    }
    else{
        butColor="DarkOrange";
        numberColor = 6;
        $( "#colorp" ).replaceWith( "<p class='textHeader' id='colorp'>Orange</p>" );
        c=1;
    }

    $("#color").css("background-color", butColor); 
}

function timer(){
        sec--;
        if(sec < 10){
            $(".time").replaceWith("<p class='textHeader time'>"+min +":0"+sec+"</p>")
            
        }
        else{ 
            $(".time").replaceWith("<p class='textHeader time'>"+min +":"+sec+"</p>")
        }

        if(sec<=0 && min==0){
            finishGame();
        }
        if(sec == 0){
            min--;
            sec = 59;
        }
        
        if(sec<=10 && min==0){

            $(".time").css("color", "red");
            $(".time").css("font-weight", "bold");
        }
        
}


function life(value, number){
    if(value == "remove"){
        $( "#heart"+number+"" ).remove(); 
        NbHeart--;
    }
    else{
        document.getElementById("life").innerHTML+="<img id='heart"+number+"' class='heart' src='IMG/life.png'>";
        NbHeart++;
    }
}


 function init() {

/**********Initialize Color******************/     
    
    interval2 = setInterval(changeColor,5000);

/**********Initialize Timer******************/ 
   
    interval1 = setInterval(timer, 1000);

/**********Initialize Life******************/ 
    /*if(NbHeart < 3){
        NbHeart = 0;
            for (var i = 1; i <= 3; i++){
                life("add", i);
            }
    }*/
    NbHeart = 3;


/**********Initialize Score******************/ 
    $(".score").replaceWith("<p class='textHeader score'>"+score+"</p>");
    
  }
  
function restart(){
            // reinitialize the timer for the next part
            c = 1, butColor = "Red";
  
            min=1, sec=30;
            i = 0;
            
            score = 0;
            stop();
            clearCanvas();
            init();
            draw();
            play();
            
}

function finishGame(){
            
            $("#finalScore").replaceWith("<h1 id='finalScore'>Score : "+score+"<img id='starFinal' src='IMG/star.png'></h1>");

            // open popup to restart
            popup("popupFinish","50%");
            //clear interval to stop the timer
            clearInterval(interval1);
            //clear interval to stop the change of color
            clearInterval(interval2);
            // stop balls
            stop();
}

function checkColor(color){
    
    if(color == numberColor){
        score += 10;
        $(".score").replaceWith("<p class='textHeader score'>"+score+"</p>");
    }
    else
    {
        score -= 5;
        $(".score").replaceWith("<p class='textHeader score'>"+score+"</p>");
    }
            
}