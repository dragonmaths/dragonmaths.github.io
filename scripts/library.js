introhtml = "<div class='title'>";
introhtml += "<br>Introduction";
introhtml +="</div>";
introhtml += "<div>";
introhtml +="<br>Should you have read my story 'The Deceit of Numbers; then you will know that numbers are huge swirling bodies of varying shades and tones of red lava and blue ice that are moved around by red fire dragons and blue ice dragons in a realm protected by Unan, Chief of all gods. You will have also found out that on occasions when the correct red and blue numbers are combined then they destroy each other totally in flame and steam until nothing remains. If you have not yet read this story then I suggest it is enlightening to do so.";
introhtml +="Understanding that numbers, as we use them, are mere representation of actual physical objects from the Domain of Numbers can help you understand the reasons for the rules that are used in Mathematics.";
introhtml +="</div>";
introhtml += "<div>";
introhtml += "<br><input id='next' type='button' class='next' value='Next'><label id='nextLabel' for='next'>What is One?</label>";
introhtml += "</div>";

library= [
	Intro={
		page:"Introduction.html",
		loaded:true,
		html:introhtml,
		next:null,
		prev:null,
		text:"Introduction",
		links:null,
		main:true
	},

	One={
		page:"One.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"What is One?",
		links:null,
		main:true
	},

	MinusOne={
		page:"MinusOne.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"What is Minus One?",
		links:null,
		main:true
	},

	Actions={
		page:"Actions.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Actions and Results",
		links:null,
		main:false
	}
];
//NEXT
Intro.next=One;
One.next=MinusOne;

//PREV
One.prev=Intro;
MinusOne.prev=One;

//LINKS
One.links=[Actions];
MinusOne.links=[Actions];




