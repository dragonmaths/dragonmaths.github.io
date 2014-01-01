function randzeroflights() {
	var r=Math.random()*120000+20000;
	setTimeout(function() {zeroFlights();randzeroflights()},r);
}

function zeroFlights() {	
	flames_on=true;
	if(Math.random()>0.5) {		
		var blue_stone=new egg('blue');
		blue_stone.set();
    	$('dragon_red3').addEventListener('animationiteration', blue_egg_check, false);
    	$('dragon_red3').addEventListener('webkitAnimationIteration', blue_egg_check, false);
    	var red_stone=new egg('red');
    	//blue_stone.egg.found=blue_stone.egg;
    	red_stone.match(blue_stone.egg); 
    	$('dragon_red4').addEventListener('animationiteration', red_egg_check, false);
    	$('dragon_red4').addEventListener('webkitAnimationIteration', red_egg_check, false);
    	$('dragon_red3').className = 'red_dragon';
    	$('egg_blue2').className = 'blue_egg';
    	setTimeout(function () {$('dragon_red4').className = 'red_dragon';$('egg_red2').className = 'red_egg';},1000);
	}
	else {		
		var red_stone=new egg('red');
		red_stone.set();
    	$('dragon_red3').addEventListener('animationiteration', red_egg_check, false);
    	$('dragon_red3').addEventListener('webkitAnimationIteration', red_egg_check, false);
    	var blue_stone=new egg('blue');
    	//red_stone.egg.found=red_stone.egg;
    	blue_stone.match(red_stone.egg);
    	$('dragon_red4').addEventListener('animationiteration', blue_egg_check, false);
    	$('dragon_red4').addEventListener('webkitAnimationIteration', blue_egg_check, false);
    	$('dragon_red3').className = 'red_dragon';
    	$('egg_red2').className = 'red_egg';
    	setTimeout(function () {$('dragon_red4').className = 'red_dragon';$('egg_blue2').className = 'blue_egg';},1000);
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
