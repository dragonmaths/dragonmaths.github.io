function egg() {
	this.iterations=0;
	this.layer=Math.round(Math.random()*5);
	this.add=add;
	
	function add() {
		this.egg=document.createElement('div');
		if(redset) {
			this.egg.style.backgroundImage='url('+redEggImg.src+')';
		}
		else {
			this.egg.style.backgroundImage='url('+blueEggImg.src+')';
		}
		this.egg.style.backgroundSize='contain';
		this.egg.style.width='23px';
		this.egg.style.height='29px';
		this.egg.style.zIndex=this.layer;
		this.egg.addEventListener('animationend', function() {roll(this,this.shadow);}, false);
		this.egg.shadow=document.createElement('div');
		this.egg.shadow.style.backgroundImage='url('+shadowImg.src+')';
		this.egg.shadow.style.backgroundSize='contain';
		this.egg.shadow.style.opacity=0.5;
		this.egg.shadow.style.width='35px';
		this.egg.shadow.style.height='28px';
		this.egg.shadow.style.zIndex=this.layer;
		$('scene_frame').appendChild(this.egg.shadow);
		$('scene_frame').appendChild(this.egg);
		if(redset) {
			this.egg.className='red_drop'+this.layer;
		}
		else {
			this.egg.className='blue_drop'+this.layer;
		}
		this.egg.shadow.className='shadow_drop'+this.layer;
		this.egg.shdrots=[0,7,14,21,14,7];
		
		function roll(egg,shadow) {
			switch (egg.style.zIndex) {
				case "0":
					var s=Math.random()*400+400;
					var r=1;
					var y=270;
					var shtp=15;
				break;
				case "1":
					var s=Math.random()*620+320;
					var r=1.2;
					var y=280;
					var shtp=25;
				break;
				case "2":
					var s=Math.random()*720+220;
					var r=1.4;
					var y=290;
					var shtp=32;
				break;
				case "3":
					var s=Math.random()*780+182;
					var r=1.7;
					var y=300;
					var shtp=35;
				break;
				case "4":
					var s=Math.random()*780+182;
					var r=2.1;
					var y=315;
					var shtp=100;
				break;
				case "5":
					var s=Math.random()*780+182;
					var r=2.5;
					var y=335;
					var shtp=100;
				break;
			}
			var t=s/220;
			var a=-66/t;
			var dt=0;
			var dist=182;
			var ds=15;
			var rot=0;
			var dr=0;
			di=0.99;
			egg.style.width=(23*r)+"px";
			egg.style.height=(29*r)+"px";
			egg.style.backgroundSize='contain';
			egg.shadow.style.left=(parseInt(egg.style.left)+5*r)+"px";
			egg.shadow.style.top=(parseInt(egg.style.top)+shtp)+"px";
			egg.shadow.style.width=(35*r)+"px";
			egg.shadow.style.height=(28*r)+"px";
			egg.shadow.style.backgroundSize='contain';
			place_egg();
			
			function place_egg() {
				if(dist+ds<s) {
					dist+=ds;
					ds*=di;
					egg.style.left=dist+"px";
					egg.style.top=y+"px";
					egg.style.transform='rotate('+dr+'deg)';
					egg.shadow.style.left=(parseInt(egg.style.left)+5*r)+"px";
					egg.shadow.style.top=(parseInt(egg.style.top)+shtp)+"px";
					egg.shadow.style.transform='rotate(-'+egg.shdrots[((dr/30) % 6)]+'deg)';
					dr+=30;
					egg_timer=setTimeout(function(){place_egg();},50);
				}
				else {
					window.clearTimeout(egg_timer);
					shadow.style.transform='rotate(0deg)';
					var w = dr % 360;
					if(w>180) {
						w-=360;
					}
					if(Math.abs(w)<5) {
						egg.style.transform='rotate(0deg)';
					}
					else if(Math.abs(w)>90) {
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
						dw+=Math.abs(ddw);
						w+=ddw;
						var egg_wobble=setTimeout(function() {wobbleEgg();},50);
					}
					else {
						clearTimeout(egg_wobble);
						if(Math.abs(w)<5) {
							egg.style.transform='rotate(0deg)';
							egg.shadow.style.transform='rotate(0deg)';		
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
}

