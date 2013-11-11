	function $(id) {	
		return document.getElementById(id);
	}
	
	function main() {
		$('sub').addEventListener('click', start_blue, false);
		$('add').addEventListener('click', start_red, false);
		$('dragon_blue').addEventListener('animationend', end_blue, false);
		$('dragon_red').addEventListener('animationend', end_red, false);
		$('little_blue').addEventListener('animationend', end_little_blue, false);
		$('little_red').addEventListener('animationend', end_little_red, false);
		
	}
	
	function start_blue() {
        $('little_blue').className = 'blue_little';
        $('sub').style.visibility='hidden';
	}
	
	function end_little_blue() {
		$('dragon_blue').className = 'blue_dragon';
		$('egg_blue').className = 'blue_egg';
		$('little_blue').className = 'end_blue_little';
		$('little_blue').style.visibility='hidden';
	}
	
	function end_blue() {
		$('dragon_blue').className = 'end_blue_dragon';
		$('egg_blue').className = 'end_blue_egg';
		$('sub').style.visibility='visible';
		$('little_blue').style.visibility='visible';
	}
	
	function start_red() {
		var red_stone=new egg('red');
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
		$('egg_red').className = 'red_egg';
		$('little_red').className = 'end_red_little';
		$('little_red').style.visibility='hidden';
	}
	
	function end_red() {
		$('dragon_red').className = 'end_red_dragon';
		$('egg_red').className = 'end_red_egg';
		$('add').style.visibility='visible';
		$('little_red').style.visibility='visible';
	}
	
	
	