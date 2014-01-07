function egg(col,dummy) {
	this.iterations=0;
	this.layer=Math.round(Math.random()*5);							
	this.col=col;
	this.egg=document.createElement('div');
	this.egg.stone=this;
	this.egg.col=this.col;
	this.egg.style.zIndex=this.layer*10;
	if(this.col=='red') {
		this.egg.style.backgroundImage='url('+redEggImg.src+')';
		this.egg.id="eggred"+(egg_count++);
	}
	else {
		this.egg.style.backgroundImage='url('+blueEggImg.src+')';
		this.egg.id="eggblue"+(egg_count++);
	}
	if(dummy) {
		this.egg.id +="dummy";
	}	
	$('scene').appendChild(this.egg);
	//methods
	this.set=set;
	this.match=match;	
	this.add=add;
	this.flame_burn=flame_burn;
	this.steam_on=steam_on;
	this.displace=displace;
	this.place_egg=place_egg;
	
	function set() {	
		switch (this.egg.style.zIndex+"") {
			case "0":
				this.s=Math.random()*400+400;
				this.r=1;
				this.y=270;
				this.shtp=15;
			break;
			case "10":
				this.s=Math.random()*620+320;
				this.r=1.2;
				this.y=280; 
				this.shtp=25;
			break;
			case "20":
				this.s=Math.random()*582+320;
				this.r=1.4;
				this.y=290;
				this.shtp=32;
			break;
			case "30":
				this.s=Math.random()*582+320;
				this.r=1.7;
				this.y=300;
				this.shtp=35;
			break;
			case "40":
				this.s=Math.random()*582+320;
				this.r=2.1;
				this.y=315;
				this.shtp=100;
			break;
			case "50":
				this.s=Math.random()*620+320;
				this.r=2.5;
				this.y=335;
				this.shtp=100;
			break;
		}
		this.t=this.s/220;
		this.a=-66/this.t;
		this.dt=0;
		this.dist=182;
		this.ds=15;
		this.rot=0;
		this.dr=0;
		this.di=0.99;		
	}
	
	function match(egg) {
		this.r=egg.stone.r;
		this.shtp=egg.stone.shtp;
		this.s=egg.stone.s-0.6*(23*egg.stone.r);		
		this.y=egg.stone.y;
		this.t=this.s/220;
		this.a=-66/this.t;
		this.layer=egg.stone.layer;
		this.egg.style.zIndex=this.layer*10;
	}
	
	function flame_burn() {
		var d=this.displace();
		$('flames').egg=this.egg;
		$('flames').style.left=parseInt(this.egg.style.left)+d.dl+"px";
		$('flames').style.top=parseInt(this.egg.style.top)+d.dt+"px";
		$('flames').style.opacity=0;
		$('flames').style.transform= 'scale('+d.scl+')';
		$('flames').style.webkitTransform= 'scale('+d.scl+')';
		$('flames').style.zIndex=parseInt(this.egg.style.zIndex)+5;
		$('flames').className='flames_on';
	}
	
	function steam_on() {
		var d=this.displace();
		$('steam').style.left=20*d.scl+parseInt(this.egg.style.left)+d.dl+"px";
		$('steam').style.top=parseInt(this.egg.style.top)+d.dt+"px";
		$('steam').style.opacity=0;
		$('steam').style.transform= 'scale('+d.scl+')';
		$('steam').style.webkitTransform= 'scale('+d.scl+')';
		$('steam').style.zIndex=parseInt(this.egg.style.zIndex)+5;
		$('steam').className='steam_on';
	}
	
	function displace() {
		switch (this.egg.style.zIndex+"") {
			case "0":
				var scl=0.45;
				var dl=-37;
				var dt=-60;
			break
			case "10":
				var scl=0.54;
				var dl=-38;
				var dt=-60;
			break
			case "20":
				var scl=0.63;
				var dl=-38;
				var dt=-60;
			break
			case "30":
				var scl=0.765;
				var dl=-36;
				var dt=-55;
			break
			case "40":
				var scl=0.945;
				var dl=-35;
				var dt=-55;
			break
			case "50":
				var scl=1.125;
				var dl=-25;
				var dt=-50;
			break
		}
		return {scl:scl,dl:dl,dt:dt};
	}
	
	function add() {						
		this.egg.style.backgroundSize='contain';
		this.egg.style.width=(23*this.r)+"px";
		this.egg.style.height=(29*this.r)+"px";
		this.egg.addEventListener('animationend', function() {this.stone.place_egg();}, false);
		this.egg.addEventListener('webkitAnimationEnd', function() {this.stone.place_egg();}, false);
		this.egg.shadow=document.createElement('div');
		this.egg.shadow.style.backgroundImage='url('+shadowImg.src+')';
		this.egg.shadow.style.backgroundSize='contain';
		this.egg.shadow.style.opacity=0.5;
		this.egg.shadow.style.left=(parseInt(this.egg.style.left)+5*this.r)+"px";
		this.egg.shadow.style.top=(parseInt(this.egg.style.top)+this.shtp)+"px";
		this.egg.shadow.style.width=(35*this.r)+"px";
		this.egg.shadow.style.height=(28*this.r)+"px";
		this.egg.shadow.style.zIndex=this.layer*10-1;
		$('scene').appendChild(this.egg.shadow);
				
		if(this.col=='red') {			
			this.egg.className='red_drop'+this.layer;
		}
		else {
			this.egg.className='blue_drop'+this.layer;
		}
		this.egg.shadow.className='shadow_drop'+this.layer;
		this.egg.shdrots=[0,7,14,21,14,7];
	}			
}

function place_egg() {	
	var egg=this.egg;
	var stone=this;	
	if(this.dist+this.ds<this.s) {
		this.dist+=this.ds;
		this.ds*=this.di;
		egg.style.left=this.dist+"px";
		egg.style.top=this.y+"px";
		egg.style.transform='rotate('+this.dr+'deg)';
		egg.style.webkitTransform='rotate('+this.dr+'deg)';
		egg.shadow.style.left=(parseInt(egg.style.left)+5*this.r)+"px";
		egg.shadow.style.top=(parseInt(egg.style.top)+this.shtp)+"px";				
		egg.shadow.style.transform='rotate(-'+egg.shdrots[((this.dr/30) % 6)]+'deg)';
		egg.shadow.style.webkitTransform='rotate(-'+egg.shdrots[((this.dr/30) % 6)]+'deg)';
		this.dr+=30;
		var egg_timer=setTimeout(function(){stone.place_egg();},50);
	}
	else {
		window.clearTimeout(egg_timer);
		egg.shadow.style.transform='rotate(0deg)';
		egg.shadow.style.webkitTransform='rotate(0deg)';
		var w = this.dr % 360;
		if (w<5) {
			w=10;
		}
		if(w>355) {
			w=350;
		}
		if(w>180) {
			w-=360;
		}
		if(Math.abs(w)>90) {
			finishRotate();
		}
		else {
			var wsize=2*Math.abs(w);
			var ddw=-w/Math.abs(w);
			ddw*=wsize/10;
			var dw=0;			
			wobbleEgg(stone);
		}
		
	}
	
	function wobbleEgg(stone) {
		if(dw+Math.abs(ddw)<wsize){
			egg.style.transform='rotate('+w+'deg)';
			egg.shadow.style.transform='rotate('+(w/5)+'deg)';
			egg.style.webkitTransform='rotate('+w+'deg)';
			egg.shadow.style.webkitTransform='rotate('+(w/5)+'deg)';
			dw+=Math.abs(ddw);
			w+=ddw;
			var egg_wobble=setTimeout(function() {wobbleEgg(stone);},50);
		}
		else {
			clearTimeout(egg_wobble);			
			if(Math.abs(w)<5) {
				egg.style.transform='rotate(0deg)';
				egg.shadow.style.transform='rotate(0deg)';
				egg.style.webkitTransform='rotate(0deg)';
				egg.shadow.style.webkitTransform='rotate(0deg)';			
				if(red_count>0 && blue_count>0) {											
					if(flames_on) {					
						if(egg.col=='red') {
							egg.stone.flame_burn();
							egg.found.stone.steam_on()
						}
						else {
							egg.found.stone.flame_burn();
							egg.stone.steam_on();
						}
						red_count--;
						blue_count--;
						$('flames').egg=egg;
						egg.shadow.className='shadow_go';
						egg.found.shadow.className='shadow_go';
						egg.found.className='egg_go';
						egg.className='egg_go';
					}
				}		
			}
			else {
				wsize=2*Math.abs(w);
				ddw=-w/Math.abs(w);
				ddw*=wsize/10;
				w-=ddw;
				dw=0;
				wobbleEgg(stone);
			}
		}				
	}
		
	function finishRotate() {
		if(this.dr<270) {
			this.dr+=10;
			egg.style.transform='rotate('+this.dr+'deg)';
			egg.shadow.style.transform='rotate(-'+egg.shdrots[((this.dr/30) % 6)]+'deg)';
			egg.style.webkitTransform='rotate('+this.dr+'deg)';
			egg.shadow.style.webkitTransform='rotate(-'+egg.shdrots[((this.dr/30) % 6)]+'deg)';
			var egg_finish=setTimeout(function() {finishRotate();},50);
		}
		else {
			clearTimeout(egg_finish);
			w=-90;
			wsize=2*Math.abs(w);
			ddw=-w/Math.abs(w);
			ddw*=wsize/10;
			dw=0;
			wobbleEgg(stone);
		}
	}
}


function findEgg(elm,c,n) {
	if(elm.id.substr(0,4) =="egg"+c) {
		var i=1;
	}
	else {	
		var i=0;
	}
	while (i<n) {
		elm=elm.nextSibling;		
		while (elm && elm.nodeName !="DIV") {
			elm = elm.nextSibling;
		}
		if(elm.id.substr(0,4) =="egg"+c) {
			i++;
		}
	} 
   	return elm;
}

