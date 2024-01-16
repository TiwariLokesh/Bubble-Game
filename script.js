var timer = 60;
var hit = 0;
var score = 0;



//Bubble formation
function makeBubble(){
    var clutter = "";
    for(var i=1;i<=70;i++){
       var rn = Math.floor(Math.random()*10)
       clutter += `<div class="circle">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();


//Timer 
function setTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearTimeout(timerint);
            document.querySelector("#pbtm").innerHTML = `<div>GAME OVER</div>`
        }
    },1000)
}
setTimer();




//New hit
function newHit(){
 var hit = Math.floor(Math.random()*10)
 document.querySelector("#hit").textContent = hit;
}
newHit();



//Increase Score
function increaseScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}
increaseScore();

