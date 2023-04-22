body {
  font-family:tahoma;
  background-color: #f3ece4;
}

.sidenav_largeScreen {
  /* transition-duration: 0.2s; */
  width: 20vw;
  height: 100vh;
  position: fixed;
  top: 55px;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  border-right: 5px solid #7DA468;
}

.sidenav_largeScreen a {
  color: white;
  left: 15px;
}

.sidenav_smallScreen {
  /* transition-duration: 0.2s; */
  width: 0vw;
  height: 100vh;
  position: fixed;
  top: 5vh;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  border-right: 5px solid #7DA468;
}

.sidenav_smallScreen a {
  color: white;
  left: 15px;
}

.sidenav-text{
  text-align: center;
  overflow: scroll; /* fix this */
}

.sidenav-text a {
  left: 15px;
  position: relative;
}

.buttons{
  margin-left:10%;
  width:80%;
}

.main {
  font-size: 28px;
  padding: 10px;
}

.topnav {
  position: fixed;
  background-color: #033616;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  border-bottom: 5px solid #7fa569;
}

.topnav_text {
  margin-left: 1vmin;
  color: #f2f2f2;
  text-align: center;
  padding-left: 14px;
  text-decoration: none;
  vertical-align: middle;
}

.topnav_text_links {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #033616;
  color: #f2f2f2;
  text-decoration: none;
}

.topnav_text_links:hover{
  background-color: white;
  color:#033616;
}

.currentTextLink {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #7DA468;
  color: #f2f2f2;
  text-decoration: none;
}

.currentTextLink:hover{
  background-color: white;
  color:#033616;
}

/*
.topnav_text_links {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #7DA468;
  color: #f2f2f2;
  border: solid 2px #648153;
  text-decoration: none;
}

.topnav_text_links:hover{
  background-color: white;
  color:#033616;
  border: solid 2px darkgray;
} */

.select{
  float: left;
  padding-left: 0px;
  height: 100%;
  font-size: 29px;
  background-color: #7DA468;
  padding-left: 10px;
  padding-right: 1%;
  color: white;
  font-family: Tahoma;
}

.menu_button_open{
  height:20px;
  float: left;
  align-items: center;
  background-color: #033616;
  cursor: pointer;
}

.menu_button_closed{
  height:20px;
  vertical-align: middle;
  float: left;
  background-color: #033616;
  cursor: pointer;
}

.book_div{
  border: 1px solid MediumSeaGreen;
  /* #a9ccad  */
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
}

.book_format{
  border: 1px solid black;
  height: 350px;
  margin: 10px;
  overflow: scroll;
  background-color: #eae1d7;
}

.box_pos{
}

.book_img{
	height:65%;
  width:37%;
  border: 7px solid black;
  float:left;
}

.book_text{
  text-align: center;
  width: 54%;
  height: 71%;
  padding-right: 1%;
  content: "";
  display: inline-block;
  float: right;
  overflow:scroll;
}

.book_block{
  background-color: #aaaaaa;
  padding: 5px;
  border-radius: 3px;
  line-height: 2;
  width: 99%;
  text-align: center;
}

.pressed {
  margin-bottom: 2px;
  margin-right: 2px;
  border-radius: 5px;
  border-color:#999999;
  color: #dedede;
  text-shadow: 0 1px 1px #000000;
  background: linear-gradient(to bottom, #97a5b0 0%,#adbbc7 77%,#bcc6cf 100%);
  box-shadow: inset 0px 5px 5px 1px rgba(0, 0, 0, .3);

}

.pressed:active {
  margin-bottom: 2px;
  margin-right: 2px;
  border-radius: 5px;
  color: #000000;
  text-shadow: 0 1px 1px #fafafa;
  background: linear-gradient(to bottom, #e4e7eb 0%,#afb5ba 44%, #91969c 100%);
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, .5);
  border-top-color: #bdc2c7;
  border-left-color: #bdc2c7;
  border-right-color: #5c646b;
  border-bottom-color: #5c646b;
}

.unpressed {
  margin-bottom: 2px;
  margin-right: 2px;
  border-radius: 5px;
  color: #000000;
  text-shadow: 0 1px 1px #fafafa;
  background: linear-gradient(to bottom, #e4e7eb 0%,#afb5ba 44%, #91969c 100%);
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, .5);
  border-top-color: #bdc2c7;
  border-left-color: #bdc2c7;
  border-right-color: #5c646b;
  border-bottom-color: #5c646b;
}

.unpressed:active {
  margin-bottom: 2px;
  margin-right: 2px;
  border-radius: 5px;
  border-color:#999999;
  color: #eeeeee;
  text-shadow: 0 1px 1px #000000;
  background: linear-gradient(to bottom, #97a5b0 0%,#adbbc7 77%,#bcc6cf 100%);
  box-shadow: inset 0px 5px 5px 1px rgba(0, 0, 0, .3);
}

.previous_page_btn {
  margin-right: 5px;
  font-family: tahoma;
  width: 140px;
  height: 38px;
  font-weight: bold;
  font-size: 20px;
  padding: 0.3%;
  background-color: #033616;
  color: #FFFFFF;
  border: 1px #000000 solid;
  border-right: 0.5px #000000 solid;
  border-left: 0.5px #000000 solid;
}
.previous_page_btn:hover{
  background-color: #7DA468;
  color: #033616
}

.next_page_btn {
  margin-left: 5px;
  padding: 0.3%;
  background-color: #033616;
  color: #FFFFFF;
  font-family: tahoma;
  width: 140px;
  height: 38px;
  font-weight: bold;
  font-size: 20px;
  border: 1px #000000 solid;
  border-right: 0.5px #000000 solid;
  border-left: 0.5px #000000 solid;
}
.next_page_btn:hover{
  background-color: #7DA468;
  color: #033616
}

.bookLink{
  position: relative;
  border:1px solid black;
  background-color: black;
}

.ebookLink{
  position: relative;
  border: 1px solid black;
  background-color: black;
}

.audiobookLink{
  position: relative;
  border: 1px solid black;
  background-color: black;
}

.linkToSLCPL{
  display:block;
  height:0px;
  width:0px;
}

.tagDictionary{
  height: 90vh;
  top: 5vh;
  position: fixed;
  background-color:#c6d6bd;
  border: 2px solid #7DA468;
  overflow:scroll;
}

.tagDictionaryClose{
  background-color: #7DA468;
  color: #033616;
  width:36px;
  height:36px;
  position:fixed;
  border: 2px solid #033616;
}

.tagDictionaryClose:hover{
  background-color: #033616;
  color: #7DA468;
}

.tagDictionaryOpen{
  font-family:serif;
  font-size:12px;
}
