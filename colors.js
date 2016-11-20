var colors = ['white', 'silver', 'grey', 'black', 'red', 'maroon', 'yellow', 'olive', 'lime', 'green', 'aqua', 'teal', 'blue', 'navy', 'fuchsia', 'purple' ];

for(var i=0, n=colors.length; i<n;i++){
	var swatch = document.createElement('div');
	swatch.className = 'swatch';
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setSwatch);
	document.getElementById('colors').appendChild(swatch);
}

function setColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('active')[0];
	if (active){
		active.className = 'swatch';
	}
}

function setSwatch(e){
	//identify swatch
	var swatch = e.target;
	//set colorDepth
	setColor(swatch.style.backgroundColor);
	//give active class
	swatch.className += ' active';
	
}

setSwatch({target: document.getElementsByClassName('swatch')[3]});