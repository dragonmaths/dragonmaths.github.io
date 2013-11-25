function $(id) {	
	return document.getElementById(id);
}

function main() {
	$('sub').addEventListener('click', start_blue, false);
	$('add').addEventListener('click', launch_red, false);
	$('dragon_blue').addEventListener('animationend', end_blue, false);
	$('dragon_red').addEventListener('animationend', end_red, false);
	$('dragon_red2').addEventListener('animationend', end_red2, false);
	$('little_blue').addEventListener('animationend', end_little_blue, false);
	$('little_home_blue').addEventListener('animationend', end_little_home_blue, false);
	$('little_red').addEventListener('animationend', end_little_red, false);
	$('little_home_red').addEventListener('animationend', end_little_home_red, false);
	$('redaddchoice').addEventListener('click', setred, false);
	$('blueaddchoice').addEventListener('click', setblue, false);
	$('handaddchoice').className='handstart';
	$('flames').addEventListener('animationend', function() {doDestroy(this.egg)}, false);
}

function start_blue() {
	flames_on=false;
	$('little_blue').className = 'blue_little';
    $('sub').style.visibility='hidden';
	if(redset) {
		if(red_count==0) {
			var blue_stone=new egg('blue');
    		$('dragon_red').addEventListener('animationiteration', blue_egg_check, false);
    		var red_stone=new egg('red');
    		$('dragon_red2').addEventListener('animationiteration', red_egg_check, false);
      		$('dragon_red').className = 'red_dragon';
    		$('egg_blue').className = 'blue_egg';
    		setTimeout(function () {$('dragon_red2').className = 'red_dragon';$('egg_red').className = 'red_egg';},1000);
		}
		else {
     		var egg_found=findEgg($('scene').firstChild,'r',Math.random()*red_count);
			takeOff(egg_found);
		}
	}
	else {
		if(blue_count==0) {
			var red_stone=new egg('red');
    		$('dragon_red').addEventListener('animationiteration', red_egg_check, false);
    		var blue_stone=new egg('blue');
    		$('dragon_red2').addEventListener('animationiteration', blue_egg_check, false);
      		$('dragon_red').className = 'red_dragon';
    		$('egg_red').className = 'red_egg';
    		setTimeout(function () {$('dragon_red2').className = 'red_dragon';$('egg_blue').className = 'blue_egg';},1000);
		}
		else {
			var egg_found=findEgg($('scene').firstChild,'b',Math.random()*blue_count);
			takeOff(egg_found);
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

function end_little_blue() {
	$('little_blue').className = 'end_blue_little';
	$('little_blue').style.visibility='hidden';
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
}

function launch_red() {
	if(redset) {
		start_red('red');
	}
	else {
		start_red('blue');
	}
}

function start_red(col) {
	flames_on=true;
	var red_stone=new egg(col);
    $('little_red').className = 'red_little';
    $('add').style.visibility='hidden';
    $('dragon_red').addEventListener('animationiteration', red_egg_check, false);
     
     function red_egg_check() {
		if((++red_stone.iterations)==7) {
			red_stone.add();
		}
	}
}
	
function end_little_red() {
	$('dragon_red').className = 'red_dragon';
	if(redset) {
		$('egg_red').className = 'red_egg';
	}
	else
	{
		$('egg_blue').className = 'blue_egg';
	}
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
}

function end_red2() {
	$('little_blue').className = 'end_blue_little';
	$('little_blue').style.visibility='hidden';
	$('dragon_red2').className = 'end_red_dragon';
	$('egg_red').className = 'end_red_egg';
	$('egg_blue').className = 'end_blue_egg';
	if(redset){									
    	var egg=findEgg($('scene').firstChild,'r',Math.random()*red_count);
    }
    else {
    	var egg=findEgg($('scene').firstChild,'b',Math.random()*blue_count);
    }
    takeOff(egg);
}

function takeOff(egg) {
    var layer=egg.style.zIndex/10;
    $('dragon_blue').className = 'blue_dragon_'+layer;
    switch (egg.style.zIndex) {
		case "0":
			var t=130;
			var l=150;
		break;
		case "10":
			var t=130;
			var l=140;
		break;
		case "20":
			var t=140;
			var l=140;
		break;
		case "30":
			var t=140;
			var l=140;
		break;
		case "40":
			var t=165;
			var l=140;
		break;
		case "50":
			var t=185;
			var l=140;
		break;
	}
	$('dragon_blue').style.left="970px";
    $('dragon_blue').style.top=(parseInt(egg.style.top)-t)+"px";
	var egg_left=parseInt(egg.style.left)-l;    
	blueFetch();
		
	function blueFetch() {
		$('dragon_blue').style.left=(parseInt($('dragon_blue').style.left)-10)+"px";		
		if(parseInt($('dragon_blue').style.left)<egg_left) {
			$('dragon_blue').style.top=(parseInt($('dragon_blue').style.top)-5)+"px";
			egg.style.left=(parseInt($('dragon_blue').style.left)+l)+"px";
			egg.style.top=(parseInt($('dragon_blue').style.top)+t)+"px";
			egg.shadow.style.top=(parseInt(egg.shadow.style.top)+5)+"px";
			egg.shadow.style.backgroundSize='contain';
			egg.shadow.style.width=(parseInt(egg.shadow.style.width)*1.1)+"px";
			egg.shadow.style.height=(parseInt(egg.shadow.style.height)*1.1)+"px";			
		}
		if(parseInt($('dragon_blue').style.left)>-443) {
			var blue_fetch=setTimeout(blueFetch,100);
		}
		else {
			clearTimeout(blue_fetch);
			egg.shadow.parentNode.removeChild(egg.shadow);
			egg.parentNode.removeChild(egg);
			if(redset) {
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
