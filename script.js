function game(){
console.log("ifwqirfu");
var l=document.getElementById('left-paddle');
var r=document.getElementById('right-paddle');
var b=document.getElementById('ball');

var rscore = document.getElementById('scoreleft');
var lscore = document.getElementById('scoreright');
var point = document.getElementById('goal');

var w = window.innerWidth;
console.log(w);
var h = window.innerHeight;

window.addEventListener('keypress',function(){
console.log(event.key);
var left = l.getBoundingClientRect();

if(event.key == 's' && left.y + left.height < window.innerHeight){
  l.style.top = (left.y + 70);
}
if(event.key == 'w' && left.y > 0){

  console.log("foiwerjf");	
  l.style.top = (left.y - 70);

}
});

window.addEventListener('keydown', function(){
var right = r.getBoundingClientRect();
if(event.keyCode == '40' && right.y + right.height < window.innerHeight){
 r.style.top = (right.y + 70); 
}
if(event.keyCode == '38' && right.y >0){
 r.style.top = (right.y - 70);
}	

});

var speedx = 3;
var speedy = 1;
var balltime = 1;
b.style.left = w/2;
b.style.top = 0;

function ball(){
b.style.left = parseFloat(b.style.left ,10) + speedx;
b.style.top = parseFloat(b.style.top,10) + speedy;
}

function moveball(){
ball();

if( h < parseFloat(b.style.top,10) + 20){
speedy = -1;
}
if( parseFloat(b.style.top,10) < 0){
 speedy = 1;
}
if( parseFloat(b.style.left,10) >= w-50){
 if( parseFloat(b.style.top,10) + 20 >= parseFloat(r.style.top,10) && parseFloat(b.style.top,10) <= parseFloat(r.style.top,10) + 200){
   speedx = -3;
 }
 else if(parseFloat(b.style.left,10) >= w-20 ){
 goal('left');

 }	
}

if(parseFloat(b.style.left,10) <= 30){
	if( parseFloat(b.style.top,10) + 20 >= parseFloat(l.style.top,10) && parseFloat(b.style.top,10) <= parseFloat(l.style.top,10) + 200){
    speedx = 3;
	}
	 else if(parseFloat(b.style.left,10) <= 0){
     goal('right');
}
}

setTimeout(function(){
moveball();
},balltime);
}
moveball()

function goal(pos){
    point.style.color = "white";

    setTimeout(function() {
        point.style.color = "black"
    }, 1000);
 if(pos== "left"){
  rscore.innerHTML = Number(rscore.innerHTML) + 1;
 }
 if(pos== "right"){
  lscore.innerHTML = Number(lscore.innerHTML) + 1;
 }

//  speedx = 3;
//  speedy = 1;
//  balltime = 1;
// b.style.left = w/2;
// b.style.top = 0;


//  moveball();
    speedx = 3;
    speedy = 1;
    b.style.top = 0;
    b.style.left = w / 2;
}
}
game();


















