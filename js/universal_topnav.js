var screenWidth = window.innerWidth;
if(mobileDevice()){
  screenWidth = screen.width;
}
var window_url = "https://diversifying-reading.github.io/search/?search=undefined";
var repository = window_url.split("https://diversifying-reading.github.io/")[1].split("/")[0];
var scrollOnLoad = document.documentElement.scrollTop;

for(let i = 0; i < document.getElementsByClassName("topnav_text").length; i++){
  if(document.getElementsByClassName("topnav_text")[i].innerHTML.toUpperCase() == repository.toUpperCase()){
    document.getElementsByClassName("topnav_text")[i].style.backgroundColor = "lightgrey";
  }
}

function selectTopnavUpdate(){
  var link = document.getElementsByClassName("select")[0].value;
  if(link == "Catalog"){
    window.location.href = "https://diversifying-reading.github.io/search/";
  }
  else if(link == "Resources"){
    window.location.href = "https://diversifying-reading.github.io/resources/";
  }
  else if(link == "Suggest a Book"){
    window.location.href = "hhttps://diversifying-reading.github.io/suggest/";
  }
  else if(link == "Home"){
    window.location.href = "https://diversifying-reading.github.io/home/";
  }
}

function scroll_function(){
  resize_topnav();

  let scrollFromOnLoad;
  if(document.documentElement.scrollTop >= scrollOnLoad){
    scrollFromOnLoad = document.documentElement.scrollTop - scrollOnLoad;
  }
  else{
    scrollFromOnLoad = 0;
    scrollOnLoad = document.documentElement.scrollTop;
  }

  let topnav_paddingTop = 17.5-(scrollFromOnLoad-30)/30 // 315: 8

  if(topnav_paddingTop < 8){
    topnav_paddingTop = 8;
    scrollOnLoad = 0;
  }
  else if(topnav_paddingTop > 17.5){
    topnav_paddingTop = 17.5;
  }

  if(screenWidth > 696 && document.getElementById("diversifying-reading-topnav") != undefined){
    document.getElementById("diversifying-reading-topnav").style.display = "";

    if(topnav_paddingTop > 13){ // 12 - 17.5 5-10
      document.getElementById("diversifying-reading-topnav").style.display = "none";
    }
    else{
      document.getElementById("diversifying-reading-topnav").style.height = (13-12)*2 + 28 +"px";
    }
    document.getElementById("diversifying-reading-topnav").style.paddingBottom = (parseInt(document.getElementById("topnav").offsetHeight-(17.5-topnav_paddingTop)*5)/6 +  "px");
    document.getElementById("diversifying-reading-topnav").style.paddingRight = "15px";
  }
  if(screenWidth <= 1390){
    topnav_paddingTop = 8;
  }

  for(i=0; i<document.getElementsByClassName("topnav_text_links").length; i++){
    document.getElementsByClassName("topnav_text_links")[i].style.paddingTop = topnav_paddingTop + "px";
    document.getElementsByClassName("topnav_text_links")[i].style.paddingBottom = topnav_paddingTop + "px";
  }

  if(document.getElementsByClassName("currentTextLink").length > 0){
    document.getElementsByClassName("currentTextLink")[0].style.paddingTop = topnav_paddingTop + "px";
    document.getElementsByClassName("currentTextLink")[0].style.paddingBottom = topnav_paddingTop + "px";
  }

  if(document.getElementsByClassName("topnav_text_links").length > 0){
    document.getElementById("topnav").style.height = document.getElementsByClassName("topnav_text_links")[0].offsetHeight + "px";
  }
  else{
    document.getElementById("topnav").style.height = "50px";
  }

  document.getElementById("sidenav").style.top = document.getElementById("topnav").offsetHeight + "px";
  if(screenWidth > 696 && document.getElementById("diversifying-reading-topnav") != undefined){
    if(screenWidth <= 1390){
      document.getElementById("diversifying-reading-topnav").style.display = "";
      document.getElementById("diversifying-reading-topnav").style.height = "30px";
      document.getElementById("diversifying-reading-topnav").style.paddingBottom = "0.5px";
      document.getElementById("diversifying-reading-topnav").style.paddingRight = "15px";
    }
    if(screenWidth < 1032){
      document.getElementById("diversifying-reading-topnav").style.display = "none";
    }
  }
}

function resize_topnav(){
  let options = ["Catalog", "Home", "Resources", "Suggest a Book"];

  let optionsFormatted = "";

  for(var i=0; i<options.length; i++){
    optionsFormatted += "<option> ";
    optionsFormatted += options[i];
    optionsFormatted += "</option>"
  }

  if(screenWidth <= 696 && document.getElementsByClassName("topnav_text")[0].style.height == ""){
    document.getElementsByClassName("topnav_text")[0].innerHTML = '<select class="select" onchange="selectTopnavUpdate()">' + optionsFormatted + '</select>';
    document.getElementsByClassName("topnav_text")[0].style.height = "100%";
    document.getElementsByClassName("topnav_text")[0].style.width = document.getElementsByClassName("select")[0].offsetWidth+10 + "px";
    document.getElementsByClassName("topnav_text")[0].style.paddingTop = "0px";
    document.getElementsByClassName("topnav_text")[0].style.paddingLeft = "0px";
    document.getElementsByClassName("topnav_text")[0].style.fontSize = "";
    document.getElementById("menu_button").style.float = "right";
    document.getElementsByClassName('topnav_text')[0].style.marginLeft = "0px";

    scroll_function();
  }
  else if(screenWidth > 696 && document.getElementsByClassName("select").length > 0){
    document.getElementsByClassName("topnav_text")[0].style.height = "";
    document.getElementsByClassName("topnav_text")[0].style.paddingLeft = "14px";
    document.getElementsByClassName("topnav_text")[0].style.width = "";


    sidenav_openStatus = 2; //untouched

    document.getElementsByClassName("topnav_text")[0].innerHTML = '\n\t<a href="https://diversifying-reading.github.io/home/" id="home" class="topnav_text_links" style="float: left; padding-top: 8px; padding-bottom: 8px;">Home</a>\n  <a href="https://diversereading.com" style="text-decoration: none;"> <img src="images/topnav_text.png" id="diversifying-reading-topnav" style="height: 30px; padding-bottom: 0.5px; padding-right: 15px;">\n  <img src="images/favicon.png" id="topnav_logo" style="height: 36px; padding-top: 7.33333px;"></a>\n  <a href="https://suggest.diversereading.com" id="suggest" class="topnav_text_links" style="float: right; padding-top: 8px; padding-bottom: 8px;">Suggest a Book</a>\n  <a href="https://suggest.diversereading.com" id="resources" class="topnav_text_links" style="float: right; padding-top: 8px; padding-bottom: 8px;">Resources</a>\n  <a href="https://search.diversereading.com" id="search" class="currentTextLink" style="float: right; padding-top: 8px; padding-bottom: 8px;">Catalog</a>\n  ';
    document.getElementById("menu_button").style.float = "left";
    document.getElementsByClassName('topnav_text')[0].style.marginLeft = "1vmin";

    scroll_function();
  }
  if(screenWidth > 696 && document.getElementsByClassName("topnav_text").length > 0){
    document.getElementsByClassName("topnav_text")[0].style.fontSize = document.getElementById("topnav").offsetHeight/2 +"px";
    document.getElementsByClassName("topnav_text")[0].style.fontSize = parseFloat(document.getElementsByClassName("topnav_text")[0].style.fontSize) * document.getElementById("topnav").offsetHeight/document.getElementsByClassName("topnav_text")[0].offsetHeight;
  }

  if(document.getElementsByClassName("select").length > 0){
    document.getElementsByClassName("select")[0].style.width = screenWidth - document.getElementById("menu_button").offsetWidth + "px";
  }

	document.getElementById("menu_button").style.height = document.getElementById("topnav").offsetHeight-document.getElementById("topnav").offsetHeight/2 +"px";
  document.getElementById("menu_button").style.paddingLeft = document.getElementById("topnav").offsetHeight/3 +"px";
  document.getElementById("menu_button").style.paddingRight = document.getElementById("topnav").offsetHeight*2/7 +"px";
  document.getElementById("menu_button").style.paddingTop = (document.getElementById("topnav").offsetHeight-parseInt(document.getElementById("menu_button").style.height))/2-2.5 +"px";
  document.getElementById("menu_button").style.paddingBottom = (document.getElementById("topnav").offsetHeight-parseInt(document.getElementById("menu_button").style.height))/2-2.5 +"px";

  if(screenWidth > 696 && document.getElementById("topnav_logo") != undefined){
    if(document.getElementById("topnav_logo") != undefined){
      document.getElementById("topnav_logo").style.display = "";
      document.getElementById("topnav_logo").style.height = document.getElementById("topnav").offsetHeight*2/3 +"px";
      document.getElementById("topnav_logo").style.paddingTop = (document.getElementById("topnav").offsetHeight-10)/6 +"px";
    }
  }
  if(screenWidth < 765){
    if(document.getElementById("topnav_logo") != undefined){
      document.getElementById("topnav_logo").style.display = "none";
    }
    if(document.getElementById("diversifying-reading-text") != undefined){
      document.getElementById("diversifying-reading-text").style.display = "none";
    }
  }
  else if(document.getElementById("topnav_logo") != undefined){
    document.getElementById("topnav_logo").style.display = "";
  }
}

function mobileDevice() {
     if (navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
     } else {
        return false ;
     }
}

function currentRepository(url_test){
  if(url_test.split("/")[3] == "search"){
    return String("search");
  }
  else if(url_test.split("/")[4] == "resources.html"){
    return String("resources");
  }
  else if(url_test.split("/")[4] == "suggest"){
    return String("suggest");
  }
  else if(url_test.split("/")[3] == "home"){
    return String("home");
  }
}

let topnav_text_links_index;
if(currentRepository("https://diversifying-reading.github.io/search/?search=undefined&page=0") == "home"){
  topnav_text_links_index = 0;
}
else if(currentRepository("https://diversifying-reading.github.io/search/?search=undefined&page=0") == "suggest"){
  topnav_text_links_index = 1;
}
else if(currentRepository("https://diversifying-reading.github.io/search/?search=undefined&page=0") == "resources"){
  topnav_text_links_index = 2;
}
else if(currentRepository("https://diversifying-reading.github.io/search/?search=undefined&page=0") == "search"){
  topnav_text_links_index = 3;
}

document.getElementsByClassName("topnav_text_links")[topnav_text_links_index].className = "currentTextLink";
