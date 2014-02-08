function bookWidth() {
	if(window.innerWidth>799) {
		document.getElementById("menuholder").innerHTML=menuFull;				
	}
	else {
		compactMenu();		
	}
	setPage();
}

var menuPage=pageMenu();
var menuExtra=extraMenu();
var menuFull=fullMenu();


function pageMenu() {
	var menuhtml="<div class='menuTitle'>Pages</div>";
	for(i=0; i<library.length; i++) {
		if(library[i].main) {
			menuhtml+="<div id='page"+i+"' class='page' onclick='openPage(this.id)'>"+library[i].text+"</div>";
		}
	}
	return menuhtml;
}

function extraMenu() {
	var menuhtml="<div class='menuTitle'>Extras</div>";
	for(i=0; i<library.length; i++) {
		if(!library[i].main) {
			menuhtml+="<div id='page"+i+"' class='page' onclick='openPage(this.id)'>"+library[i].text+"</div>";
		}
	}
	return menuhtml;
}

function fullMenu() {
	var menuhtml="<div class='menu'>";
	menuhtml+=menuPage+menuExtra;
	menuhtml+="</div>";	
	return menuhtml;
}

function compactMenu() {
	var menuhtml="<div class='menu'>";
	menuhtml+="<div class='shortTitle' onclick='openPageMenu()'>Pages</div>";
	var lowermenu="<div class='shortTitle' onclick='openExtraMenu()' >Extras</div>";
	var blankmenu="<div class='blankTitle'>&nbsp;</div>";
	menuhtml+=lowermenu+blankmenu;
	menuhtml+="</div>";
	document.getElementById("menuholder").innerHTML=menuhtml;	
}

function openPageMenu() {
	document.getElementById("menuholder").innerHTML="<div class='menu'>"+menuPage+"</div>";
}

function openExtraMenu() {
	document.getElementById("menuholder").innerHTML="<div class='menu'>"+menuExtra+"</div>";
}

function openPage(id) {
	if(window.innerWidth<800) {
		compactMenu();
	}			
	var n=parseInt(id.substr(4));
	var page=library[n];	
	if(page.loaded) {
		if(!page.main) {
			var re = /prevLabel\" for=\"prev\">.*<\/label>/;
			var ns ='prevLabel" for="prev">'+currentPage.text+'</label>';				
			page.html=page.html.replace(re,ns);			
			page.prev=currentPage;
		}	
		currentPage=page;
		setPage();
	}
	else {
		loadPage(page,currentPage,true);
	}
}