
function makeBubble(){
    var clutter = "";
    for(var i=1;i<=70;i++){
       var rn = Math.floor(Math.random()*10)
       clutter += `<div class="circle">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();