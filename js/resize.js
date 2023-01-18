document.getElementById("menu_button").addEventListener("click", switch_menu_state);

function resize_sequence(){
  resize_topnav();
  resize_books();
  resize_sidenav();

  setTimeout(() => {  resize_books(); }, 200); // helps to stay current with resizing: resizes after .2 sec
  resize_sidenav();

	if((parseFloat((document.getElementsByClassName("book_format")[0].style.width))+marginWidth*2+borderWidth*2+1)*Math.floor(book_div.offsetWidth/document.getElementsByClassName("book_format")[0].offsetWidth) <= book_div.offsetWidth+0.002){
		// second check
	  setTimeout(() => {  resize_sequence(); }, 1); // redue sequence
	}

}

function switch_menu_state() {

	if(window.innerWidth <= 617){ // set sidenav screen size class
		document.getElementById("sidenav").className = "sidenav_smallScreen";
	}
	else{
		document.getElementById("sidenav").className = "sidenav_largeScreen";
	}

	if(sidenav_openStatus == 0){ // opening sidenav

		if(document.getElementById("sidenav").className == "sidenav_largeScreen"){
			sidenav_openStatus = 2; // reset to "untouched"

			if(window.innerWidth <= 700){
				document.getElementById("sidenav").style.width = "40vw";
			}
			else if (window.innerWidth <= 940){
				document.getElementById("sidenav").style.width = "30vw";
			}
			else{
				document.getElementById("sidenav").style.width = "20vw";
			}
		}
		else{ // open with small screen
			sidenav_openStatus = 1;
			document.getElementById("sidenav").style.width = "100vw";
		}

		document.getElementById("menu_button").className = "menu_button_open";
		sidenav_padding = 20*window.innerWidth/100 + 5; //20vw

	}
	else if(sidenav_openStatus == 1){ // close sidenav
		if(document.getElementById("sidenav").className == "sidenav_smallScreen"){
			sidenav_openStatus = 2;
		}
		else{
			sidenav_openStatus = 0;
		}

		document.getElementById("sidenav").style.width = "0vw";
		document.getElementById("menu_button").className = "menu_button_closed";
		sidenav_padding = 5;
	}
	else{ // not manually set yet
		if(document.getElementById("sidenav").className == "sidenav_smallScreen"){
			sidenav_openStatus = 1; // open with small screen

			document.getElementById("sidenav").style.width = "100vw";
			document.getElementById("menu_button").className = "menu_button_open";
			sidenav_padding = window.innerWidth/5 + 5;
		}
		else{ // close with large screen
			sidenav_openStatus = 0;

			document.getElementById("sidenav").style.width = "0vw";
			document.getElementById("menu_button").className = "menu_button_closed";
			sidenav_padding = 5;
		}
	}


	document.getElementById("book_div_position").style.paddingLeft = parseInt(sidenav_padding) + "px";


	resize_sequence();
}

function resize_sidenav(){
	if(window.innerWidth <= 617){ // set sidenav screen size class
		document.getElementById("sidenav").className = "sidenav_smallScreen";
	}
	else{
		document.getElementById("sidenav").className = "sidenav_largeScreen";
	}


	// set sidenav width
	if(document.getElementById("sidenav").className == "sidenav_smallScreen"){ // small screen
		if(sidenav_openStatus == 1){ // if sidenav was manually opened
			document.getElementById("sidenav").style.width = "100vw";
		}
		else{ // sidenav was manually closed or not touched
			document.getElementById("sidenav").style.width = "0vw";
		}
	}
	else{ // large screen
		if(sidenav_openStatus == 0){ // if sidenav was manually closed
			document.getElementById("sidenav").style.width = "0vw";
		}
		else{ // sidenav was manually opened or not touched
			if(window.innerWidth <= 700){
				document.getElementById("sidenav").style.width = "40vw";
			}
			else if (window.innerWidth <= 1025){
				document.getElementById("sidenav").style.width = "30vw";
			}
			else{
				document.getElementById("sidenav").style.width = "20vw";
			}
		}
	}

  // set sidenav text height
  document.getElementsByClassName("sidenav-text")[0].style.height = document.getElementById("buttons").offsetHeight + document.getElementById("tag_dictionary_button").offsetHeight + 150 + "px";

}

function resize_topnav(){
	document.getElementById("menu_button").style.height = 30 +"px";
	document.getElementById("topnav").style.fontSize = 33 +"px";
}

function resize_books(){
	if(window.innerWidth <= 940){
		book_width_minimum = 350;
	}
	else{
		book_width_minimum = 400;
	}

	sidenav_padding = sidenav.offsetWidth;
	topnav_padding = topnav.offsetHeight;
	menu_padding = 10;
	book_padding = book_width_minimum - borderWidth*2 - marginWidth*2 - 1 + fit_window(); // book_width_minimum minus border widths minus margin minus one

	document.getElementById("book_div_position").style.paddingLeft = parseInt(sidenav_padding) + "px";
	document.getElementById("book_div_position").style.paddingTop = parseInt(topnav_padding) + "px";
	document.getElementById("menu_button").style.paddingTop = parseInt(menu_padding) + "px";

	document.getElementById("menu_button").style.paddingTop = parseInt(menu_padding) + "px";
	for(let i=0; i<document.getElementsByClassName("book_format").length; i++){
		document.getElementsByClassName("book_format")[i].style.width = book_padding + "px";
		document.getElementsByClassName("book_format")[i].style.height = book_padding*book_height_ratio + "px";
	}
}

function fit_window(){
  var extra_width = document.getElementById("book_div").offsetWidth % book_width_minimum;
  var additional_book_width = extra_width/Math.floor(document.getElementById("book_div").offsetWidth/book_width_minimum); // extra width divided amongst the number of books
  var additional_sidebar_width;

  return additional_book_width;
  while (additional_book_width > 50) {
    additional_sidebar_width = additional_book_width - 50;
    additional_sidebar_width *= Math.floor(document.getElementById("book_div")/book_width_minimum);
  }
}

var sidenav_openStatus; // 0 = closed, 1 = open, 2 = untouched;
var book_width_minimum = 350;
var borderWidth = 1;
var marginWidth = 10;
var book_height_ratio = 0.9;

resize_sidenav();

var sidenav = document.getElementById("sidenav");
var sidenav_padding = sidenav.offsetWidth;

var topnav = document.getElementById("topnav");
var topnav_padding = topnav.offsetHeight;
var menu_padding = ((topnav.offsetHeight - 4*window.innerHeight/100)/2)-2.5;

document.getElementById("book_div_position").style.paddingLeft = parseInt(sidenav_padding) + "px";

document.getElementById("book_div_position").style.paddingTop = parseInt(topnav_padding) + "px";

document.getElementById("menu_button").style.paddingTop = parseInt(menu_padding) + "px";

resize_sequence();

addEventListener('resize', (event) => {
  resize_sequence();
});
