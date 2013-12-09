function egg(col) {
	this.iterations=0;
	this.layer=Math.round(Math.random()*5);			
	this.col=col;	
	this.add=add;
	
	function add() {	
		this.egg=document.createElement('div');
		this.egg.col=this.col;
		this.egg.style.zIndex=this.layer*10;		
		switch (this.egg.style.zIndex+"") {
			case "0":
				var s=Math.random()*400+400;
				var r=1;
				var y=270;
				var shtp=15;
			break;
			case "10":
				var s=Math.random()*620+320;
				var r=1.2;
				var y=280; 
				var shtp=25;
			break;
			case "20":
				var s=Math.random()*720+220;
				var r=1.4;
				var y=290;
				var shtp=32;
			break;
			case "30":
				var s=Math.random()*780+182;
				var r=1.7;
				var y=300;
				var shtp=35;
			break;
			case "40":
				var s=Math.random()*780+182;
				var r=2.1;
				var y=315;
				var shtp=100;
			break;
			case "50":
				var s=Math.random()*720+220;
				var r=2.5;
				var y=335;
				var shtp=100;
			break;
		}			
		if(this.col=='red') {
			this.egg.style.backgroundImage='url('+redEggImg.src+')';
			this.egg.id="eggred"+(egg_count++);
			red_count++;
			if(blue_count>0) {
				this.egg.found=findEgg($('scene').firstChild,'b',Math.random()*blue_count);
				this.layer=parseInt(this.egg.found.style.zIndex)/10;
				this.egg.style.zIndex=this.layer*10;
				s=parseInt(this.egg.found.style.left)-0.6*parseInt(this.egg.found.style.width);
				y=parseInt(this.egg.found.style.top);
			}
		}
		else {
			this.egg.style.backgroundImage='url('+blueEggImg.src+')';
			this.egg.id="eggblue"+(egg_count++);
			blue_count++;
			if(red_count>0) {
				this.egg.found=findEgg($('scene').firstChild,'r',Math.random()*red_count);
				this.layer=parseInt(this.egg.found.style.zIndex)/10;
				this.egg.style.zIndex=this.layer*10;
				s=parseInt(this.egg.found.style.left)-0.6*parseInt(this.egg.found.style.width);
				y=parseInt(this.egg.found.style.top);
			}
		}
		switch (this.egg.style.zIndex+"") {
			case "0":
				r=1;
				shtp=15;
			break;
			case "10":
				r=1.2;
				shtp=25;
			break;
			case "20":
				r=1.4;
				shtp=32;
			break;
			case "30":
				r=1.7;
				shtp=35;
			break;
			case "40":
				r=2.1;
				shtp=100;
			break;
			case "50":
				r=2.5;
				shtp=100;
			break;
		}
		var t=s/220;
		var a=-66/t;
		var dt=0;
		var dist=182;
		var ds=15;
		var rot=0;
		var dr=0;
		var di=0.99;
			
		this.egg.style.backgroundSize='contain';
		this.egg.style.width=(23*r)+"px";
		this.egg.style.height=(29*r)+"px";
		this.egg.addEventListener('animationend', function() {place_egg(this);}, false);
		this.egg.addEventListener('webkitAnimationEnd', function() {place_egg(this);}, false);
		this.egg.shadow=document.createElement('div');
		this.egg.shadow.style.backgroundImage='url('+shadowImg.src+')';
		this.egg.shadow.style.backgroundSize='contain';
		this.egg.shadow.style.opacity=0.5;
		this.egg.shadow.style.left=(parseInt(this.egg.style.left)+5*r)+"px";
		this.egg.shadow.style.top=(parseInt(this.egg.style.top)+shtp)+"px";
		this.egg.shadow.style.width=(35*r)+"px";
		this.egg.shadow.style.height=(28*r)+"px";
		this.egg.shadow.style.zIndex=this.layer;
		$('scene').appendChild(this.egg.shadow);
		$('scene').appendChild(this.egg);		
		if(this.col=='red') {
			this.egg.className='red_drop'+this.layer;
		}
		else {
			this.egg.className='blue_drop'+this.layer;
		}
		this.egg.shadow.className='shadow_drop'+this.layer;
		this.egg.shdrots=[0,7,14,21,14,7];
			
		function place_egg(egg) {		
			if(dist+ds<s) {
				dist+=ds;
				ds*=di;
				egg.style.left=dist+"px";
				egg.style.top=y+"px";
				egg.style.transform='rotate('+dr+'deg)';
				egg.style.webkitTransform='rotate('+dr+'deg)';
				egg.shadow.style.left=(parseInt(egg.style.left)+5*r)+"px";
				egg.shadow.style.top=(parseInt(egg.style.top)+shtp)+"px";				
				egg.shadow.style.transform='rotate(-'+egg.shdrots[((dr/30) % 6)]+'deg)';
				egg.shadow.style.webkitTransform='rotate(-'+egg.shdrots[((dr/30) % 6)]+'deg)';
				dr+=30;
				var egg_timer=setTimeout(function(){place_egg(egg);},50);
			}
			else {
				window.clearTimeout(egg_timer);
				egg.shadow.style.transform='rotate(0deg)';
				egg.shadow.style.webkitTransform='rotate(0deg)';
				var w = dr % 360;
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
					wobbleEgg();
				}
				
			}
			
			function wobbleEgg() {
				if(dw+Math.abs(ddw)<wsize){
					egg.style.transform='rotate('+w+'deg)';
					egg.shadow.style.transform='rotate('+(w/5)+'deg)';
					egg.style.webkitTransform='rotate('+w+'deg)';
					egg.shadow.style.webkitTransform='rotate('+(w/5)+'deg)';
					dw+=Math.abs(ddw);
					w+=ddw;
					var egg_wobble=setTimeout(function() {wobbleEgg();},50);
				}
				else {
					clearTimeout(egg_wobble);
					if(Math.abs(w)<5) {
						egg.style.transform='rotate(0deg)';
						egg.shadow.style.transform='rotate(0deg)';
						egg.style.webkitTransform='rotate(0deg)';
						egg.shadow.style.webkitTransform='rotate(0deg)';
						if(red_count>0 && blue_count>0) {							
							if(egg.col=='red') {
								switch (egg.style.zIndex+"") {
									case "0":
										var scl=0.45;
										var fdl=-37;
										var fdt=-60;
										var sdl=-9;
										var sdt=-60
									break;
									case "10":
										var scl=0.54;
										var fdl=-38;
										var fdt=-60;
										var sdl=-5;
										var sdt=-60
									break;
									case "20":
										var scl=0.63;
										var fdl=-38;
										var fdt=-60;
										var sdl=0;
										var sdt=-60
									break;
									case "30":
										var scl=0.765;
										var fdl=-36;
										var fdt=-55;
										var sdl=9;
										var sdt=-55
									break;
									case "40":
										var scl=0.945;
										var fdl=-35;
										var fdt=-52;
										var sdl=15;
										var sdt=-55
									break;
									case "50":
										var scl=1.125;
										var fdl=-25;
										var fdt=-50;
										var sdl=20;
										var sdt=-50
									break;
								}
							}
							else {
								switch (egg.style.zIndex+"") {
									case "0":
										var scl=0.45;
										var fdl=-15;
										var fdt=-60;
										var sdl=-30;
										var sdt=-60;
									break;
									case "10":
										var scl=0.54;
										var fdl=-12;
										var fdt=-60;
										var sdl=-28;
										var sdt=-60;
									break;
									case "20":
										var scl=0.63;
										var fdl=-9;
										var fdt=-58;
										var sdl=-26;
										var sdt=-58;
									break;
									case "30":									
										var scl=0.765;
										var fdl=-4;
										var fdt=-55;
										var sdl=-23;
										var sdt=-52;
									break;
									case "40":									
										var scl=0.945;
										var fdl=7;
										var fdt=-55;
										var sdl=-18;
										var sdt=-52;
									break;
									case "50":									
										var scl=1.125;
										var fdl=10;
										var fdt=-50;
										var sdl=-10;
										var sdt=-50
									break;
								}
							}
							if(flames_on) {
								red_count--;
								blue_count--;
								$('flames').egg=egg;
								$('flames').style.left=parseInt(egg.style.left)+fdl+"px";
								$('flames').style.top=parseInt(egg.style.top)+fdt+"px";
								$('flames').style.opacity=0;
								$('flames').style.transform= 'scale('+scl+')';
								$('flames').style.webkitTransform= 'scale('+scl+')';
								$('flames').style.zIndex=parseInt(egg.style.zIndex)+5;
								$('steam').style.left=parseInt(egg.style.left)+sdl+"px";
								$('steam').style.top=parseInt(egg.style.top)+sdt+"px";
								$('steam').style.opacity=0;
								$('steam').style.transform= 'scale('+scl+')';
								$('steam').style.webkitTransform= 'scale('+scl+')';
								$('steam').style.zIndex=parseInt(egg.style.zIndex)+5;
								$('flames').className='flames_on';
								$('steam').className='steam_on';
								egg.className='egg_go';
								egg.found.className='egg_go';
								egg.shadow.className='shadow_go';
								egg.found.shadow.className='shadow_go';
							}
						}		
					}
					else {
						wsize=2*Math.abs(w);
						ddw=-w/Math.abs(w);
						ddw*=wsize/10;
						w-=ddw;
						dw=0;
						wobbleEgg();
					}
				}				
			}
			
			function finishRotate() {
				if(dr<270) {
					dr+=10;
					egg.style.transform='rotate('+dr+'deg)';
					egg.shadow.style.transform='rotate(-'+egg.shdrots[((dr/30) % 6)]+'deg)';
					egg.style.webkitTransform='rotate('+dr+'deg)';
					egg.shadow.style.webkitTransform='rotate(-'+egg.shdrots[((dr/30) % 6)]+'deg)';
					var egg_finish=setTimeout(function() {finishRotate();},50);
				}
				else {
					clearTimeout(egg_finish);
					w=-90;
					wsize=2*Math.abs(w);
					ddw=-w/Math.abs(w);
					ddw*=wsize/10;
					dw=0;
					wobbleEgg(w);
				}
			}
		}
	}
}

function findEgg(elm,c,n) {
	var i=0;
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

