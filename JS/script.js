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
        /*for (var i = 1; i <= 3; i++){
                life("add", i);
        }*/
    }
}


 function init() {

/**********Initialize Color******************/     
    
    interval2 = setInterval(changeColor,5000);

/**********Initialize Timer******************/ 
   
    interval1 = setInterval(timer, 1000);

/**********Initialize Life******************/ 
    if(NbHeart < 3){
        NbHeart = 0;
            for (var i = 1; i <= 3; i++){
                life("add", i);
            }
    }


/**********Initialize Score******************/ 
    $(".score").replaceWith("<p class='textHeader score'>"+score+"</p>");
    
  }
  
function restart(){
            // reinitialize the timer for the next part
            c = 1, butColor = "Red";
  
            min=1, sec=30;
            score = 0;
            stop();
            clearCanvas();
            init();
            draw();
            
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

/*function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width,canvas.height);
}

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
*/