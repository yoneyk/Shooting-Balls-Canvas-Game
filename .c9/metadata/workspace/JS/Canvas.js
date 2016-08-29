{"filter":false,"title":"Canvas.js","tooltip":"/JS/Canvas.js","undoManager":{"mark":65,"position":65,"stack":[[{"start":{"row":99,"column":73},"end":{"row":99,"column":74},"action":"remove","lines":["2"],"id":8,"ignore":true},{"start":{"row":99,"column":73},"end":{"row":99,"column":74},"action":"insert","lines":["6"]},{"start":{"row":99,"column":80},"end":{"row":99,"column":81},"action":"remove","lines":["5"]},{"start":{"row":99,"column":80},"end":{"row":99,"column":81},"action":"insert","lines":["2"]}],[{"start":{"row":98,"column":81},"end":{"row":98,"column":83},"action":"remove","lines":["10"],"id":9,"ignore":true},{"start":{"row":98,"column":81},"end":{"row":98,"column":82},"action":"insert","lines":["7"]}],[{"start":{"row":91,"column":76},"end":{"row":91,"column":77},"action":"remove","lines":["5"],"id":10,"ignore":true},{"start":{"row":91,"column":76},"end":{"row":91,"column":77},"action":"insert","lines":["1"]}],[{"start":{"row":100,"column":86},"end":{"row":100,"column":87},"action":"remove","lines":["2"],"id":11,"ignore":true},{"start":{"row":100,"column":86},"end":{"row":100,"column":87},"action":"insert","lines":["3"]}],[{"start":{"row":100,"column":79},"end":{"row":100,"column":80},"action":"remove","lines":["1"],"id":12,"ignore":true},{"start":{"row":100,"column":79},"end":{"row":100,"column":80},"action":"insert","lines":["7"]}],[{"start":{"row":98,"column":81},"end":{"row":98,"column":82},"action":"remove","lines":["7"],"id":13,"ignore":true},{"start":{"row":98,"column":81},"end":{"row":98,"column":82},"action":"insert","lines":["1"]}],[{"start":{"row":256,"column":0},"end":{"row":257,"column":95},"action":"remove","lines":["   // mouseX = e.offsetX ? (e.offsetX) : e.pageX - document.getElementById(\"canvas\").offsetLeft;","   // mouseY = e.offsetY ? (e.offsetY) : e.pageY - document.getElementById(\"canvas\").offsetTop;"],"id":14}],[{"start":{"row":255,"column":4},"end":{"row":256,"column":0},"action":"remove","lines":["",""],"id":15}],[{"start":{"row":309,"column":1},"end":{"row":310,"column":0},"action":"insert","lines":["",""],"id":16}],[{"start":{"row":310,"column":0},"end":{"row":311,"column":0},"action":"insert","lines":["",""],"id":17}],[{"start":{"row":311,"column":0},"end":{"row":321,"column":1},"action":"insert","lines":["function restart(){","            // reinitialize the timer for the next part","            c = 1, butColor = \"Red\";","  ","            min=1, sec=30;","            score = 0;","            clearCanvas();","            init();","            draw();","            ","}"],"id":18}],[{"start":{"row":311,"column":0},"end":{"row":311,"column":1},"action":"insert","lines":["/"],"id":23}],[{"start":{"row":311,"column":1},"end":{"row":311,"column":2},"action":"insert","lines":["*"],"id":24}],[{"start":{"row":321,"column":1},"end":{"row":321,"column":2},"action":"insert","lines":["*"],"id":25}],[{"start":{"row":321,"column":2},"end":{"row":321,"column":3},"action":"insert","lines":["/"],"id":26}],[{"start":{"row":311,"column":1},"end":{"row":311,"column":2},"action":"remove","lines":["*"],"id":27}],[{"start":{"row":311,"column":0},"end":{"row":311,"column":1},"action":"remove","lines":["/"],"id":28}],[{"start":{"row":321,"column":2},"end":{"row":321,"column":3},"action":"remove","lines":["/"],"id":29}],[{"start":{"row":321,"column":1},"end":{"row":321,"column":2},"action":"remove","lines":["*"],"id":30}],[{"start":{"row":311,"column":0},"end":{"row":311,"column":1},"action":"insert","lines":["/"],"id":31}],[{"start":{"row":311,"column":1},"end":{"row":311,"column":2},"action":"insert","lines":["*"],"id":32}],[{"start":{"row":321,"column":1},"end":{"row":321,"column":2},"action":"insert","lines":["*"],"id":33}],[{"start":{"row":321,"column":2},"end":{"row":321,"column":3},"action":"insert","lines":["/"],"id":34}],[{"start":{"row":321,"column":3},"end":{"row":322,"column":0},"action":"insert","lines":["",""],"id":35}],[{"start":{"row":322,"column":0},"end":{"row":323,"column":0},"action":"insert","lines":["",""],"id":36}],[{"start":{"row":310,"column":0},"end":{"row":311,"column":0},"action":"insert","lines":["",""],"id":37}],[{"start":{"row":311,"column":0},"end":{"row":312,"column":0},"action":"insert","lines":["",""],"id":38}],[{"start":{"row":312,"column":0},"end":{"row":313,"column":0},"action":"insert","lines":["",""],"id":39}],[{"start":{"row":313,"column":0},"end":{"row":642,"column":2},"action":"insert","lines":["$(document).ready(OnReady);","","var c = 1, butColor, numberColor;","  ","var min=1, sec=30;","","var NbHeart = 0, score = 0;","","var interval1, interval2;","","function OnReady(){","  //-----------------------------------","  // Close les popups","  //-----------------------------------","  $('body').on('click', '.buttonD', function() { //on click on the body","      $('#fade , .popup_block').fadeOut(function() {","        $('#fade, a.close').remove();  ","    }); //...it disappear together ","    return false;","  });","  ","    $('.resume').click(function () {","       init();","    });","","  popup(\"popup\", \"50%\");","}","","","/*"," * popup(rel, size)"," * rel : id of the popup"," * size : size of the popup"," * Description : Make appear a popup in foreground"," */","function popup(rel, size)","{","    var popID = rel; //Find popup corresponding","    var popWidth = size; //Find the width","","    //Make appear the pop-up","    $('#' + popID).fadeIn(800).css({ 'width': popWidth});","    ","    //Retreiving of margin, that will allow to center the window","    var popMargTop = ($('#' + popID).height()) / 2;","    var popMargLeft = ($('#' + popID).width()+20) / 2;","    ","    //Apply Margin to Popup","    $('#' + popID).css({ ","      'margin-top' : -popMargTop,","      'margin-left' : -popMargLeft","    });","    ","    //Make appear the background - .css({'filter' : 'alpha(opacity=80)'}) to correct bog on the old version of IE","    $('body').append('<div id=\"fade\"></div>');","    $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();","    ","    return false;","}// popup()","","","/*"," * sound(value)"," * value : id of the button off/on"," * Description : Make mute the sound"," */","function sound(value){","  ","  if(value==1){","    document.getElementById('ON').style.display = 'none';","    document.getElementById('OFF').style.display = '';","    document.getElementById('mySound').remove();","  }else{","    document.getElementById('ON').style.display = '';","    document.getElementById('OFF').style.display = 'none';","    document.getElementById('body').innerHTML += '<embed id=\"mySound\" src=\"ZIK/sound.mp3\" volume=0 height=0 width=0 loop=\"true\" enablejavascript=\"true\"> ';","  }"," ","}// sound()","","","/*"," * start(value)"," * value : id of the button play/pause"," * Description : plays and pauses the game when clicked"," */","","function Pause(value){"," ","  if(value==1){","    document.getElementById('resume').style.display = 'none';","    document.getElementById('play').style.display = '';","    document.getElementById('restart').style.display = '';","    ","","    // Stop balls","    stop();","    // open popup to restart","    popup(\"popup\",\"50%\");","    //clear interval to stop the timer","    clearInterval(interval1);","    //clear interval to stop the change of color","    clearInterval(interval2);  ","","  }","  else","  {","    document.getElementById('resume').style.display = '';","    document.getElementById('play').style.display = 'none';","    play();","    interval1 = setInterval(timer, 1000);","    interval2 = setInterval(changeColor,2000);","  }"," ","}// Pause(value)","","","//the different colors that are displayed","function changeColor(){","    if (c==1){","        butColor=\"red\";","        numberColor = 1;","        $( \"#colorp\" ).replaceWith( \"<p class='textHeader' id='colorp'>Red</p>\" );","        c++;","    }","    else if (c==2){","        butColor=\"Gold\";","        numberColor = 2;","        $( \"#colorp\" ).replaceWith( \"<p  class='textHeader' id='colorp'>Yellow</p>\" );","        c++;","    }","    else if (c==3){","        butColor=\"Chartreuse\";","        numberColor = 3;","        $( \"#colorp\" ).replaceWith( \"<p class='textHeader' id='colorp'>Green</p>\" );","        c++;","    }","    else if (c==4){","        butColor=\"DeepPink\";","        numberColor = 4;","        $( \"#colorp\" ).replaceWith( \"<p class='textHeader' id='colorp'>Pink</p>\" );","        c++;","    }","    else if (c==5){","        butColor=\"CornflowerBlue\";","        numberColor = 5;","        $( \"#colorp\" ).replaceWith( \"<p class='textHeader' id='colorp'>Blue</p>\" );","        c++;","    }","    else{","        butColor=\"DarkOrange\";","        numberColor = 6;","        $( \"#colorp\" ).replaceWith( \"<p class='textHeader' id='colorp'>Orange</p>\" );","        c=1;","    }","","    $(\"#color\").css(\"background-color\", butColor); ","}","","function timer(){","        sec--;","        if(sec < 10){","            $(\".time\").replaceWith(\"<p class='textHeader time'>\"+min +\":0\"+sec+\"</p>\")","            ","        }","        else{ ","            $(\".time\").replaceWith(\"<p class='textHeader time'>\"+min +\":\"+sec+\"</p>\")","        }","","        if(sec<=0 && min==0){","            finishGame();","        }","        if(sec == 0){","            min--;","            sec = 59;","        }","        ","        if(sec<=10 && min==0){","","            $(\".time\").css(\"color\", \"red\");","            $(\".time\").css(\"font-weight\", \"bold\");","        }","        ","}","","","function life(value, number){","    if(value == \"remove\"){","        $( \"#heart\"+number+\"\" ).remove(); ","        NbHeart--;","    }","    else{","        document.getElementById(\"life\").innerHTML+=\"<img id='heart\"+number+\"' class='heart' src='IMG/life.png'>\";","        NbHeart++;","        /*for (var i = 1; i <= 3; i++){","                life(\"add\", i);","        }*/","    }","}","",""," function init() {","","/**********Initialize Color******************/     ","    ","    interval2 = setInterval(changeColor,5000);","","/**********Initialize Timer******************/ ","   ","    interval1 = setInterval(timer, 1000);","","/**********Initialize Life******************/ ","    if(NbHeart < 3){","        NbHeart = 0;","            for (var i = 1; i <= 3; i++){","                life(\"add\", i);","            }","    }","","","/**********Initialize Score******************/ ","    $(\".score\").replaceWith(\"<p class='textHeader score'>\"+score+\"</p>\");","    ","  }","  ","function restart(){","            // reinitialize the timer for the next part","            c = 1, butColor = \"Red\";","  ","            min=1, sec=30;","            score = 0;","            stop();","            clearCanvas();","            init();","            draw();","            ","}","","function finishGame(){","            ","            $(\"#finalScore\").replaceWith(\"<h1 id='finalScore'>Score : \"+score+\"<img id='starFinal' src='IMG/star.png'></h1>\");","","            // open popup to restart","            popup(\"popupFinish\",\"50%\");","            //clear interval to stop the timer","            clearInterval(interval1);","            //clear interval to stop the change of color","            clearInterval(interval2);","            // stop balls","            stop();","}","","function checkColor(color){","    ","    if(color == numberColor){","        score += 10;","        $(\".score\").replaceWith(\"<p class='textHeader score'>\"+score+\"</p>\");","    }","    else","    {","        score -= 5;","        $(\".score\").replaceWith(\"<p class='textHeader score'>\"+score+\"</p>\");","    }","            ","}","","/*function clearCanvas() {","\tctx.clearRect(0, 0, canvas.width,canvas.height);","}","","function draw() {     ","    clearCanvas();","    background.render(1);","    //animate();","    for( var i = 0; i < Ball.length ; i++){","        drawBall(Ball[i]);","        // Now, lets make the ball move by adding the velocity vectors to its position","        moveBall(Ball[i]);","        sideBouncing(Ball[i]);","    }","","    for (var i = 0; i < Ball.length; i++) {","        if (mouseX > Ball[i].x - Ball[i].radius && ","            mouseX < Ball[i].x + Ball[i].radius && ","            mouseY < Ball[i].y + Ball[i].radius && ","            mouseY > Ball[i].y - Ball[i].radius) {","                Ball[i].radius = 0;","                touchedBall++;","                // Lets check if the touched ball is the same than the color","                checkColor(Ball[i].id);","                if(touchedBall == 11){","                    finishGame();","                }","            }","","    }","    ","    for(var i = 0; i < Bomb.length;i++){","        drawBomb(Bomb[i]);","        moveBall(Bomb[i]);","        sideBouncing(Bomb[i]);","    }","","//checks if the bomb is touched","//for the time being i created 3 bombs","    for(var i = 0; i < Bomb.length; i++){","        if (mouseX > Bomb[i].x - Bomb[i].radius && ","            mouseX < Bomb[i].x + Bomb[i].radius && ","            mouseY < Bomb[i].y + Bomb[i].radius && ","            mouseY > Bomb[i].y - Bomb[i].radius) {","                    ","                    Bomb[i].radius = 0;","                    touchedBomb++;","                    //if all the bombs are touched, the game will finish","                    if(touchedBomb == 3){","                        //alert(touchedBomb);","                        life(\"remove\",touchedBomb);","                        finishGame();","                        ","                    } ","                    //otherwise it decrements the life by 1","                    else{","                        life(\"remove\",touchedBomb);","                    }              ","        }","    }","    ","    raf = window.requestAnimationFrame(draw);","}","*/"],"id":40}],[{"start":{"row":642,"column":2},"end":{"row":643,"column":0},"action":"insert","lines":["",""],"id":41}],[{"start":{"row":643,"column":0},"end":{"row":644,"column":0},"action":"insert","lines":["",""],"id":42}],[{"start":{"row":507,"column":8},"end":{"row":509,"column":11},"action":"remove","lines":["/*for (var i = 1; i <= 3; i++){","                life(\"add\", i);","        }*/"],"id":43}],[{"start":{"row":507,"column":4},"end":{"row":507,"column":8},"action":"remove","lines":["    "],"id":44}],[{"start":{"row":507,"column":0},"end":{"row":507,"column":4},"action":"remove","lines":["    "],"id":45}],[{"start":{"row":506,"column":18},"end":{"row":507,"column":0},"action":"remove","lines":["",""],"id":46}],[{"start":{"row":539,"column":26},"end":{"row":540,"column":0},"action":"insert","lines":["",""],"id":47},{"start":{"row":540,"column":0},"end":{"row":540,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":540,"column":12},"end":{"row":540,"column":13},"action":"insert","lines":["i"],"id":48}],[{"start":{"row":540,"column":13},"end":{"row":540,"column":14},"action":"insert","lines":[" "],"id":49}],[{"start":{"row":540,"column":14},"end":{"row":540,"column":15},"action":"insert","lines":["="],"id":50}],[{"start":{"row":540,"column":15},"end":{"row":540,"column":16},"action":"insert","lines":[" "],"id":51}],[{"start":{"row":540,"column":16},"end":{"row":540,"column":17},"action":"insert","lines":["0"],"id":52}],[{"start":{"row":540,"column":17},"end":{"row":540,"column":18},"action":"insert","lines":[";"],"id":53}],[{"start":{"row":540,"column":18},"end":{"row":541,"column":0},"action":"insert","lines":["",""],"id":54},{"start":{"row":541,"column":0},"end":{"row":541,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":522,"column":4},"end":{"row":522,"column":5},"action":"insert","lines":["/"],"id":55}],[{"start":{"row":522,"column":5},"end":{"row":522,"column":6},"action":"insert","lines":["*"],"id":56}],[{"start":{"row":527,"column":5},"end":{"row":527,"column":6},"action":"insert","lines":["*"],"id":57}],[{"start":{"row":527,"column":6},"end":{"row":527,"column":7},"action":"insert","lines":["/"],"id":58}],[{"start":{"row":527,"column":7},"end":{"row":528,"column":0},"action":"insert","lines":["",""],"id":59},{"start":{"row":528,"column":0},"end":{"row":528,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":528,"column":4},"end":{"row":528,"column":5},"action":"insert","lines":["N"],"id":60}],[{"start":{"row":528,"column":5},"end":{"row":528,"column":6},"action":"insert","lines":["b"],"id":61}],[{"start":{"row":528,"column":4},"end":{"row":528,"column":6},"action":"remove","lines":["Nb"],"id":62},{"start":{"row":528,"column":4},"end":{"row":528,"column":11},"action":"insert","lines":["NbHeart"]}],[{"start":{"row":528,"column":11},"end":{"row":528,"column":12},"action":"insert","lines":[" "],"id":63}],[{"start":{"row":528,"column":12},"end":{"row":528,"column":13},"action":"insert","lines":["="],"id":64}],[{"start":{"row":528,"column":13},"end":{"row":528,"column":14},"action":"insert","lines":[" "],"id":65}],[{"start":{"row":528,"column":14},"end":{"row":528,"column":15},"action":"insert","lines":["3"],"id":66}],[{"start":{"row":528,"column":15},"end":{"row":528,"column":16},"action":"insert","lines":[";"],"id":67}],[{"start":{"row":579,"column":0},"end":{"row":657,"column":0},"action":"remove","lines":["/*function clearCanvas() {","\tctx.clearRect(0, 0, canvas.width,canvas.height);","}","","function draw() {     ","    clearCanvas();","    background.render(1);","    //animate();","    for( var i = 0; i < Ball.length ; i++){","        drawBall(Ball[i]);","        // Now, lets make the ball move by adding the velocity vectors to its position","        moveBall(Ball[i]);","        sideBouncing(Ball[i]);","    }","","    for (var i = 0; i < Ball.length; i++) {","        if (mouseX > Ball[i].x - Ball[i].radius && ","            mouseX < Ball[i].x + Ball[i].radius && ","            mouseY < Ball[i].y + Ball[i].radius && ","            mouseY > Ball[i].y - Ball[i].radius) {","                Ball[i].radius = 0;","                touchedBall++;","                // Lets check if the touched ball is the same than the color","                checkColor(Ball[i].id);","                if(touchedBall == 11){","                    finishGame();","                }","            }","","    }","    ","    for(var i = 0; i < Bomb.length;i++){","        drawBomb(Bomb[i]);","        moveBall(Bomb[i]);","        sideBouncing(Bomb[i]);","    }","","//checks if the bomb is touched","//for the time being i created 3 bombs","    for(var i = 0; i < Bomb.length; i++){","        if (mouseX > Bomb[i].x - Bomb[i].radius && ","            mouseX < Bomb[i].x + Bomb[i].radius && ","            mouseY < Bomb[i].y + Bomb[i].radius && ","            mouseY > Bomb[i].y - Bomb[i].radius) {","                    ","                    Bomb[i].radius = 0;","                    touchedBomb++;","                    //if all the bombs are touched, the game will finish","                    if(touchedBomb == 3){","                        //alert(touchedBomb);","                        life(\"remove\",touchedBomb);","                        finishGame();","                        ","                    } ","                    //otherwise it decrements the life by 1","                    else{","                        life(\"remove\",touchedBomb);","                    }              ","        }","    }","    ","    raf = window.requestAnimationFrame(draw);","}","*/","","","/*function restart(){","            // reinitialize the timer for the next part","            c = 1, butColor = \"Red\";","  ","            min=1, sec=30;","            score = 0;","            clearCanvas();","            init();","            draw();","            ","}*/","",""],"id":68}],[{"start":{"row":578,"column":0},"end":{"row":579,"column":0},"action":"remove","lines":["",""],"id":69}],[{"start":{"row":577,"column":1},"end":{"row":578,"column":0},"action":"remove","lines":["",""],"id":70}],[{"start":{"row":547,"column":19},"end":{"row":548,"column":0},"action":"insert","lines":["",""],"id":71},{"start":{"row":548,"column":0},"end":{"row":548,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":548,"column":12},"end":{"row":548,"column":13},"action":"insert","lines":["p"],"id":72}],[{"start":{"row":548,"column":13},"end":{"row":548,"column":14},"action":"insert","lines":["l"],"id":73}],[{"start":{"row":548,"column":14},"end":{"row":548,"column":15},"action":"insert","lines":["a"],"id":74}],[{"start":{"row":548,"column":15},"end":{"row":548,"column":16},"action":"insert","lines":["y"],"id":75}],[{"start":{"row":548,"column":16},"end":{"row":548,"column":18},"action":"insert","lines":["()"],"id":76}],[{"start":{"row":548,"column":18},"end":{"row":548,"column":19},"action":"insert","lines":[";"],"id":77}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":114,"column":36},"end":{"row":114,"column":36},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1433926184000,"hash":"f79c37e35b9cbe3cc05a0fad65b13d25fb3b4f42"}