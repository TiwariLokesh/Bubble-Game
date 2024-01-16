var timer = 6;

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
