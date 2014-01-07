function randzeroflights() {
	var r=Math.random()*120000+20000;
	setTimeout(function() {zeroFlights();randzeroflights();},r);
}

function zeroFlights() {
	flames_on=false;	
	if(Math.random()>0.5) {	
		blue_stone_temp=new egg('blue',true);
		blue_stone_temp.set();
    	red_stone_temp=new egg('red',true);
    	red_stone_temp.set();
    	blue_stone_temp.found=blue_stone_temp.egg;
    	red_stone_temp.match(blue_stone_temp.egg); 
    	$('dragon_red3').className = 'red_dragon';    	
    	$('egg_blue2').className = 'blue_egg';
    	setTimeout(function () {$('dragon_red4').className = 'red_dragon';$('egg_red2').className = 'red_egg';setTimeout(function() {red_stone_temp.add();},1760);},1000);
    	setTimeout(function() {blue_stone_temp.add();},1760);
	}
	else {		
		red_stone_temp=new egg('red',true);
		red_stone_temp.set();
    	blue_stone_temp=new egg('blue',true);
    	blue_stone_temp.set();
    	red_stone_temp.found=red_stone_temp.egg;
    	blue_stone_temp.match(red_stone_temp.egg);
    	$('dragon_red3').className = 'red_dragon';
    	$('egg_red2').className = 'red_egg';
    	setTimeout(function () {$('dragon_red4').className = 'red_dragon';$('egg_blue2').className = 'blue_egg';setTimeout(function() {blue_stone_temp.add();},1760);},1000);
    	setTimeout(function() {red_stone_temp.add();},1760);
	}
}
