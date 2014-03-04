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

NumbersLibrary=[
	One={
		page:"One.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"What is One?",
		links:null
	},

	MinusOne={
		page:"MinusOne.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"What is Minus One?",
		links:null
	},
	
	Zero={
		page:"Zero.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Zero",
		links:null
	},
	
	Basics={
		page:"Basics.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"First Rule",
		links:null
	},	
	
	Tens={
		page:"Tens.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Beyond Nine",
		links:null
	}
];

AddLibrary=[
	AddLarge={
		page:"AddLarge.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Adding Large Numbers",
		links:null
	},
	
	AddColumns={
		page:"AddColumns.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Adding in Columns",
		links:null
	}
];

TakeLibrary=[
	TakeAway={
		page:"TakeAway.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Overview",
		links:null
	},
	
	TakeMethods={
		page:"TakeMethods.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Methods",
		links:null
	},
	
	TakeAwayStart={
		page:"TakeAwayStart.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Start",
		links:null
	},
	
	TakeAwayMethod1={
		page:"TakeAwayMethod1.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Dragons Method 1",
		links:null
	},
	
	Method1Cols={
		page:"Method1Cols.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Method 1 in Columns",
		links:null
	},
	
	TakeAwayMethod2={
		page:"TakeAwayMethod2.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Dragons Method 2",
		links:null
	},
	
	Method2Cols={
		page:"Method2Cols.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Method 2 in Columns",
		links:null
	},
	
	TakeAwayMethod3={
		page:"TakeAwayMethod3.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Method 3",
		links:null
	}
];

library= [
	Intro={
		page:"Intro.html",
		loaded:true,
		html:introhtml,
		next:null,
		prev:null,
		text:"Introduction",
		links:null,
		main:true,
		sub:null,
	},
	
	Numbers={
		sub:NumbersLibrary,
		text:'Numbers',
		main:true,
		open:false
	},

	
	Adding={
		sub:AddLibrary,
		text:'Adding',
		main:true,
		open:false
	},
		
	Taking={
		sub:TakeLibrary,
		text:'Taking Away',
		main:true,
		open:false
	},
	
//Extra Pages
	Actions={
		page:"Actions.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Actions and Results",
		links:null,
		main:false
	},
	
	Counts={
		page:"Counts.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Numbers and Counting",
		links:null,
		main:false
	},
	
	Counting={
		page:"Counting.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"What Counts?",
		links:null,
		main:false
	},
	
	ToTwenty={
		page:"Add1stTen.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Add To Twenty",
		links:null,
		main:false
	},	
	
	Thousand={
		page:"Thousand.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Beyond 1000",
		links:null,
		main:false
	},
	
	BeyondTake={
		page:"BeyondTake.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Taking Away Beyond One",
		links:null,
		main:false
	},
	
	Method1Problem={
		page:"Method1Problem.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Problems with Method 1",
		links:null,
		main:false
	},
	
	Method2Advantage={
		page:"Method2Advantage.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Advantage of Method 2",
		links:null,
		main:false
	},
	
	TakeAwayLarge={
		page:"TakeAwayLarge.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Take Larger from Smaller",
		links:null,
		main:false
	},
	
	PosNegInt={
		page:"PosNegInt.html",
		loaded:false,
		html:"",
		next:null,
		prev:null,
		text:"Minus and other words",
		links:null,
		main:false
	}	
];



//NEXT
Intro.next=One;
One.next=MinusOne;
MinusOne.next=Zero;
Zero.next=Basics;
Basics.next=Tens;
Tens.next=AddLarge;
AddLarge.next=AddColumns;
AddColumns.next=TakeAway;
TakeAway.next=TakeMethods;
TakeMethods.next=TakeAwayStart;
TakeAwayStart.next=TakeAwayMethod1;
TakeAwayMethod1.next=Method1Cols;
Method1Cols.next=TakeAwayMethod2;
TakeAwayMethod2.next=Method2Cols;
Method2Cols.next=TakeAwayMethod3;

//PREV
One.prev=Intro;
MinusOne.prev=One;
Zero.prev=MinusOne;
Basics.prev=Zero;
Tens.prev=Basics;
AddLarge.prev=Tens;
AddColumns.prev=AddLarge;
TakeAway.prev=AddColumns;
TakeMethods.prev=TakeAway;
TakeAwayStart.prev=TakeMethods;
TakeAwayMethod1.prev=TakeAwayStart;
Method1Cols.prev=TakeAwayMethod1;
TakeAwayMethod2.prev=Method1Cols;
Method2Cols.prev=TakeAwayMethod2;
TakeAwayMethod3.prev=Method2Cols;

//LINKS
One.links=[Actions];
MinusOne.links=[Actions];
Basics.links=[Counts];
Tens.links=[Thousand,Counting];
Counts.links=[Counting];
AddLarge.links=[Counting,ToTwenty];
TakeAway.links=[Actions,BeyondTake,PosNegInt];
TakeMethods.links=[ToTwenty];
ToTwenty.links=[Counting];
Method1Cols.links=[Method1Problem,TakeAwayLarge];
TakeAwayStart.links=[TakeAwayLarge];
TakeAwayMethod1.links=[TakeAwayLarge];
TakeAwayMethod2.links=[TakeAwayLarge];
Method2Cols.links=[Method2Advantage,TakeAwayLarge];
TakeAwayMethod3.links=[TakeAwayLarge];

