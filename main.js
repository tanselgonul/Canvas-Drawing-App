var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;

var line = true;

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
context.lineWidth = radius*2;

var lineButton = document.getElementById('line');
lineButton.addEventListener('click', linef);

function linef(){
	line = false;
}

var basicButton = document.getElementById('basic');
basicButton.addEventListener('click', basicf);

function basicf(){
	context.beginPath();
	line = true;
}


var drawline = function(e){
	if(dragging){
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
}

var clicked = function(e){
	dragging = true;
	drawline(e);
}

var disclicked = function(){
	dragging = false;
	if(line){
	context.beginPath();
	}
}


canvas.addEventListener('mousedown', clicked);
canvas.addEventListener('mousemove', drawline);
canvas.addEventListener('mouseup', disclicked);




document.getElementById('clear').addEventListener('click', function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }, false);