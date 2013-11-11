function egg(colour) {
	this.iterations=0;
	this.layer=Math.round(Math.random()*5);
	this.add=add;
	
	function add() {
		this.egg=document.createElement('div');
		if(colour=='red') {
			this.egg.style.backgroundImage='url('+redEggImg.src+')';
		}
		else {
			this.egg.style.backgroundImage='url('+blueEggImg.src+')';
		}
		this.egg.style.backgroundSize='contain';
		this.egg.style.width='23px';
		this.egg.style.height='29px';
		this.egg.style.zIndex=this.layer;
		this.egg.addEventListener('animationend', function() {roll(this);}, false);
		$('scene_frame').appendChild(this.egg);
		this.egg.className='red_drop'+this.layer;
		
		function roll(egg) {
			switch (egg.style.zIndex) {
				case "0":
					var s=Math.random()*400+400;
					var r=1;
				break;
				case "1":
					var s=Math.random()*620+320;
					var r=1.2;
				break;
				case "2":
					var s=Math.random()*720+220;
					var r=1.4;
				break;
				case "3":
					var s=Math.random()*780+182;
					var r=1.7;
				break;
				case "4":
					var s=Math.random()*780+182;
					var r=2.1;
				break;
				case "5":
					var s=Math.random()*780+182;
					var r=2.5;
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
			place_egg();
			console.log('rolled',egg.style.width);
			
			function place_egg() {
				if(dist+ds<s) {
					dist+=ds;
					ds*=di;
					egg.style.left=(dist)+"px";
					
					egg.style.transform='rotate('+dr+'deg)';
					dr+=30;
					egg_timer=setTimeout(function(){place_egg();},50);
				}
				else {
					window.clearTimeout(egg_timer);
					var w = dr % 360;
					if(w>180) {
						w-=360;
					}
					console.log(1,dr,w);
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
						console.log(2,w,dw,ddw,wsize);
						wobbleEgg();
					}
					
				}
				
				function wobbleEgg() {
					console.log(3,w,dw,ddw,wsize);
					if(dw+Math.abs(ddw)<wsize){
						egg.style.transform='rotate('+w+'deg)';
						dw+=Math.abs(ddw);
						w+=ddw
						var egg_wobble=setTimeout(function() {wobbleEgg()},50)
					}
					else {
						clearTimeout(egg_wobble);
						if(Math.abs(w)<5) {
							egg.style.transform='rotate(0deg)';
						}
						else {
							wsize=2*Math.abs(w);
							ddw=-w/Math.abs(w);
							ddw*=wsize/10;
							w-=ddw;
							dw=0;
							console.log(4,w,dw,ddw,wsize);
							wobbleEgg();
						}
					}				
				}
				
				function finishRotate() {
					console.log(5,dr,w);
					if(dr<270) {
						dr+=10;
						egg.style.transform='rotate('+dr+'deg)';
						var egg_finish=setTimeout(function() {finishRotate();},50);
					}
					else {
						clearTimeout(egg_finish);
						w=-90;
						wsize=2*Math.abs(w);
						ddw=-w/Math.abs(w);
						ddw*=wsize/10;
						dw=0;
						console.log(6,w,dw,ddw,wsize);
						wobbleEgg(w);
					}
				}
			}
		}
	}
}

