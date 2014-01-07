function $(id) {	
	return document.getElementById(id);
}

function main() {	
	$("Loadscreen").parentNode.removeChild($("Loadscreen"));
	$('sub').addEventListener('click', start_blue, false);
	$('add').addEventListener('click', launch_red, false);
	$('dragon_blue').addEventListener('animationend', end_blue, false);
	$('dragon_red').addEventListener('animationend', end_red, false);
	$('dragon_red2').addEventListener('animationend', end_red2, false);
	$('dragon_red3').addEventListener('animationend', end_red3, false);
	$('dragon_red4').addEventListener('animationend', end_red4, false);
	$('blue_back').addEventListener('animationend',end_blue_back, false);
	$('rregg').addEventListener('animationend',end_rregg, false);
	$('rbegg').addEventListener('animationend',end_rbegg, false);
	$('bregg').addEventListener('animationend',end_bregg, false);
	$('bbegg').addEventListener('animationend',end_bbegg, false);
	$('little_blue').addEventListener('animationend', end_little_blue, false);
	$('little_home_blue').addEventListener('animationend', end_little_home_blue, false);
	$('little_red').addEventListener('animationend', end_little_red, false);
	$('little_home_red').addEventListener('animationend', end_little_home_red, false);
	$('dragon_blue').addEventListener('webkitAnimationEnd', end_blue, false);
	$('dragon_red').addEventListener('webkitAnimationEnd', end_red, false);
	$('dragon_red2').addEventListener('webkitAnimationEnd', end_red2, false);
	$('dragon_red3').addEventListener('webkitAnimationEnd', end_red3, false);
	$('dragon_red4').addEventListener('webkitAnimationEnd', end_red4, false);
	$('rregg').addEventListener('webkitAnimationEnd',end_rregg, false);
	$('rbegg').addEventListener('webkitAnimationEnd',end_rbegg, false);
	$('bregg').addEventListener('webkitAnimationEnd',end_bregg, false);
	$('bbegg').addEventListener('webkitAnimationEnd',end_bbegg, false);
	$('little_blue').addEventListener('webkitAnimationEnd', end_little_blue, false);
	$('little_home_blue').addEventListener('webkitAnimationEnd', end_little_home_blue, false);
	$('little_red').addEventListener('webkitAnimationEnd', end_little_red, false);
	$('little_home_red').addEventListener('webkitAnimationEnd', end_little_home_red, false);
	$('redaddchoice').addEventListener('click', setred, false);
	$('blueaddchoice').addEventListener('click', setblue, false);
	$('handaddchoice').className='handstart';
	$('flames').addEventListener('animationend', function() {doDestroy(this.egg)}, false);
	$('flames').addEventListener('webkitAnimationEnd', function() {doDestroy(this.egg)}, false);
	randredflights();
	randblueflights();
	randredwithoutflights();
	randbluewithflights();
	redwithegg();
	redwithoutegg();
	bluewithegg();
	bluenoegg(); 
	randzeroflights();
	zeroFlights();
}

function start_blue() {
	$('addover').style.visibility='visible';
	flames_on=false;
	$('little_blue').className = 'blue_little';
    $('sub').style.visibility='hidden';    
	if(redset) {
		redegg=true;
		if(red_count==0) {
			var blue_stone=new egg('blue');
			blue_count++;
			blue_stone.set();
    		$('dragon_red').addEventListener('animationiteration', blue_egg_check, false);
    		$('dragon_red').addEventListener('webkitAnimationIteration', blue_egg_check, false);
    		var red_stone=new egg('red');
    		red_count++;
    		red_stone.set();   		
    		blue_stone.egg.found=findEgg($('scene').firstChild,'b',Math.random()*blue_count);
    		red_stone.match(blue_stone.egg.found);    		
    		$('dragon_red2').addEventListener('animationiteration', red_egg_check, false);
    		$('dragon_red2').addEventListener('webkitAnimationIteration', red_egg_check, false);
      		$('dragon_red').className = 'red_dragon';
    		$('egg_blue').className = 'blue_egg';
    		setTimeout(function () {$('dragon_red2').className = 'red_dragon';$('egg_red').className = 'red_egg';},1000);
		}
	}
	else {
		redegg=false;
		if(blue_count==0) {
			var red_stone=new egg('red');
			red_count++;
			red_stone.set();
    		$('dragon_red').addEventListener('animationiteration', red_egg_check, false);
    		$('dragon_red').addEventListener('webkitAnimationIteration', red_egg_check, false);
    		var blue_stone=new egg('blue');
    		blue_stone.set();
    		blue_count++;
    		red_stone.egg.found=findEgg($('scene').firstChild,'r',Math.random()*red_count);
    		blue_stone.match(red_stone.egg.found);
    		$('dragon_red2').addEventListener('animationiteration', blue_egg_check, false);
    		$('dragon_red2').addEventListener('webkitAnimationIteration', blue_egg_check, false);
      		$('dragon_red').className = 'red_dragon';
    		$('egg_red').className = 'red_egg';
    		setTimeout(function () {$('dragon_red2').className = 'red_dragon';$('egg_blue').className = 'blue_egg';},1000);
		}
	}
     
     
     function red_egg_check() {
		if((++red_stone.iterations)==7) {
			red_stone.add();
		}
	}
		
	function blue_egg_check() {
		if((++blue_stone.iterations)==7) {
			blue_stone.add();
		}
	}	
}

function end_blue_back() {	
	$("blue_back").className="end_bb";	
	if(redegg){									
    	var egg=findEgg($('scene').firstChild,'r',Math.random()*red_count);
    }
    else {
    	var egg=findEgg($('scene').firstChild,'b',Math.random()*blue_count);
    }
   
    takeOff(egg);
}

function end_bregg() {
	$('bregg').className='end_begg';
//	var egg_found=findEgg($('scene').firstChild,'r',Math.random()*red_count);
//	takeOff(egg_found);
}

function end_bbegg() {
	$('bbegg').className='end_begg';
//	var egg_found=findEgg($('scene').firstChild,'b',Math.random()*blue_count);
//	takeOff(egg_found);
}


function end_little_blue() {
	$('little_blue').className = 'end_blue_little';
	$('little_blue').style.visibility='hidden';
	$('blue_back').className='blue_dragon_back';
}

function end_blue() {
	$('dragon_blue').className = 'end_blue_dragon';
	$('little_home_blue').style.visibility='visible';
	$('little_home_blue').className = 'blue_little_home';
	$('little_blue').className = 'end_blue_little';
	
}

function end_little_home_blue() {
	$('little_home_blue').className = 'end_blue_little_home';
	$('little_home_blue').style.visibility='hidden';
	$('little_blue').style.visibility='visible';
	$('sub').style.visibility='visible';
	$('addover').style.visibility='hidden';
}

function launch_red() {
	if(redset) {
		$('rregg').className='regg';
		redegg=true;
	}
	else {
		$('rbegg').className='regg';
		redegg=false;
	}
	$('little_red').className = 'red_little';
	$('subover').style.visibility='visible';
	$('add').style.visibility='hidden';
}

function end_rregg() {
	$('rregg').className='end_regg';
	start_red('red');
	$('dragon_red').className = 'red_dragon';
	$('egg_red').className = 'red_egg';
}

function end_rbegg() {
	$('rbegg').className='end_regg';
	start_red('blue');
	$('dragon_red').className = 'red_dragon';
	$('egg_blue').className = 'blue_egg';
}

function start_red(col) {	
	flames_on=true;
	var stone=new egg(col);
	stone.set();
	if(col=='red') {
		red_count++;
		if(blue_count>0) {
			var oldegg=findEgg($('scene').firstChild,'b',Math.random()*blue_count);
			stone.match(oldegg);
			stone.egg.found=oldegg;
		}
	}
	else {
		blue_count++;
		if(red_count>0) {
			var oldegg=findEgg($('scene').firstChild,'r',Math.random()*red_count);
			stone.match(oldegg);
			stone.egg.found=oldegg;
		}
	}
	

    $('dragon_red').addEventListener('webkitAnimationIteration', red_egg_check, false);
    $('dragon_red').addEventListener('animationiteration', red_egg_check, false);
     
     function red_egg_check() {
		if((++stone.iterations)==7) {			
			stone.add();
		}
	}
}
	
function end_little_red() {		
	$('little_red').className = 'end_red_little';
	$('little_red').style.visibility='hidden';
}

function end_red() {
	$('dragon_red').className = 'end_red_dragon';
	$('egg_red').className = 'end_red_egg';
	$('egg_blue').className = 'end_blue_egg';
	$('little_home_red').style.visibility='visible';
	$('little_home_red').className = 'red_little_home';
	$('little_red').className = 'end_red_little';
}

function end_little_home_red() {
	$('little_home_red').className = 'end_red_little_home';
	$('little_home_red').style.visibility='hidden';
	$('little_red').style.visibility='visible';
	$('add').style.visibility='visible';
	$('subover').style.visibility='hidden';
}

function end_red2() {
	$('little_blue').className = 'end_blue_little';
	$('little_blue').style.visibility='hidden';
	$('dragon_red2').className = 'end_red_dragon';
	$('egg_red').className = 'end_red_egg';
	$('egg_blue').className = 'end_blue_egg';
}

function end_red3() {
	$('dragon_red3').className = 'end_red_dragon';
	$('egg_red2').className = 'end_red_egg';
	$('egg_blue2').className = 'end_blue_egg';
}

function end_red4() {	
	$('dragon_red4').className = 'end_red_dragon';
	$('egg_red2').className = 'end_red_egg';
	$('egg_blue2').className = 'end_blue_egg';
	var egg=red_stone_temp.egg;
	$('flames').egg=egg;
	egg.found=blue_stone_temp.egg;
	red_stone_temp.flame_burn();
	blue_stone_temp.steam_on();
	egg.shadow.className='shadow_go';
	egg.found.shadow.className='shadow_go';
	egg.found.className='egg_go';
	egg.className='egg_go';
}


function takeOff(egg) {	
    var layer=egg.style.zIndex/10;
    $('dragon_blue').className = 'blue_dragon_'+layer;  
    switch (egg.style.zIndex+"") {
		case "0":
			var t=130;
			var l=150;
			var r=1;
		break;
		case "10":
			var t=130;
			var l=140;
			var r=1.2;
		break;
		case "20":
			var t=140;
			var l=140;
			var r=1.4;
		break;
		case "30":
			var t=140;
			var l=140;
			var r=1.7;
		break;
		case "40":
			var t=165;
			var l=140;
			var r=2.1;
		break;
		case "50":
			var t=185;
			var l=140;
			var r=2.5;
		break;
	}
	$('dragon_blue').style.left=(960+100*r)+"px";
    $('dragon_blue').style.top=(parseInt(egg.style.top)-t)+"px";
	var egg_left=parseInt(egg.style.left)-l;	    
	blueFetch();
		
	function blueFetch() {			
		$('dragon_blue').style.left=(parseInt($('dragon_blue').style.left)-15*r)+"px";			
		if(parseInt($('dragon_blue').style.left)<egg_left) {
			$('dragon_blue').style.top=(parseInt($('dragon_blue').style.top)-5*r)+"px";
			egg.style.left=(parseInt($('dragon_blue').style.left)+l)+"px";
			egg.style.top=(parseInt($('dragon_blue').style.top)+t)+"px";
			egg.shadow.style.top=(parseInt(egg.shadow.style.top)+5)+"px";
			egg.shadow.style.backgroundSize='contain';
			egg.shadow.style.width=(parseInt(egg.shadow.style.width)*r)+"px";
			egg.shadow.style.height=(parseInt(egg.shadow.style.height)*r)+"px";			
		}
		if(parseInt($('dragon_blue').style.left)>-443) {
			var blue_fetch=setTimeout(blueFetch,100);
		}
		else {			
			clearTimeout(blue_fetch);
			egg.shadow.parentNode.removeChild(egg.shadow);
			egg.parentNode.removeChild(egg);
			if(redegg) {
				red_count--;
			}
			else {
				blue_count--;
			}
		}
	}
}

function setred() {
	if(redset){return};
	redset=true;
	$('handaddchoice').className='handtored';
}

function setblue() {
	if(!redset){return};
	redset=false;
	$('handaddchoice').className='handtoblue';
}

function doDestroy(egg) {
	$('flames').className='flames_off';
	$('steam').className='steam_off';
	egg.shadow.parentNode.removeChild(egg.shadow);
	egg.found.shadow.parentNode.removeChild(egg.found.shadow);
	egg.found.parentNode.removeChild(egg.found);
	egg.parentNode.removeChild(egg);
}
