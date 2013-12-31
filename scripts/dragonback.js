function randredflights() {
	var r=Math.random()*4000+1000;
	setTimeout(function() {redwithegg();randredflights()},r);
}

function randblueflights() {
	var r=Math.random()*4200+750;
	setTimeout(function() {bluenoegg();randblueflights()},r);
}

function randredwithoutflights() {
	var r=Math.random()*4000+1000;
	setTimeout(function() {redwithoutegg();randredwithoutflights()},r);
}

function randbluewithflights() {
	var r=Math.random()*4200+750;
	setTimeout(function() {bluewithegg();randbluewithflights()},r);
}

function redwithegg() {	
	var rwe=document.createElement('div');
	rwe.addEventListener('animationend',end_flight, false);
	var rwes=rwe.style;
	if(Math.random()>0.5) {
		rwes.backgroundImage='url('+rre.src+')';
	}
	else {
		rwes.backgroundImage='url('+rbe.src+')';
	}
	rwes.left='1040px';
	rwes.width='126px';
	rwes.height='102px';
	$('scene').appendChild(rwe);
	var r=Math.random();
	if(r>0.5) {
		rwe.className='redup';
	}
	else {
		rwe.className='reddown';
	}
}

function redwithoutegg() {	
	var rwe=document.createElement('div');
	rwe.addEventListener('animationend',end_flight, false);
	var rwes=rwe.style;
	rwes.backgroundImage='url('+rdr.src+')';
	rwes.left='-360px';
	rwes.width='252px';
	rwes.height='205px';
	$('scene').appendChild(rwe);
	var r=Math.random();
	if(r>0.5) {
		rwe.className='rednoup';
	}
	else {
		rwe.className='rednodown';
	}
}

function bluenoegg() {	
	var rwe=document.createElement('div');
	rwe.addEventListener('animationend',end_flight, false);
	var rwes=rwe.style;
	rwes.backgroundImage='url('+bdr.src+')';
	rwes.left='-360px';
	rwes.width='252px';
	rwes.height='205px';
	$('scene').appendChild(rwe);
	var r=Math.random();
	if(r>0.5) {		
		rwe.className='blueup';
	}
	else {		
		rwe.className='bluedown';
	}
}

function bluewithegg() {	
	var rwe=document.createElement('div');
	rwe.addEventListener('animationend',end_flight, false);
	var rwes=rwe.style;
	if(Math.random()>0.5) {
		rwes.backgroundImage='url('+bre.src+')';
	}
	else {
		rwes.backgroundImage='url('+bbe.src+')';
	}
	rwes.left='1040px';
	rwes.width='126px';
	rwes.height='102px';
	$('scene').appendChild(rwe);
	var r=Math.random();
	if(r>0.5) {
		rwe.className='begg';
	}
	else {
		rwe.className='beggdown';
	}
}


function end_flight() {
	this.parentNode.removeChild(this);
}
