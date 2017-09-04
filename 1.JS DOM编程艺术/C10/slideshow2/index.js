function addLoadEvent(func){
	var old = window.onload;
	if(typeof old != "function"){
		window.onload = func;
	}else{
		window.onload = function(){
			old();
			func();
		}
	}
}

function moveElement(elementID,final_x,final_y,interval) {
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.position) {
    elem.style.position = "absolute";
  }
  if (!elem.style.left) {
    elem.style.left = "0px";
  }
  if (!elem.style.top) {
    elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == final_x && ypos == final_y) {
    return true;
  }
  if (xpos < final_x) {
    var dist = Math.ceil((final_x - xpos)/10);
    xpos = xpos + dist;
  }
  if (xpos > final_x) {
    var dist = Math.ceil((xpos - final_x)/10);
    xpos = xpos - dist;
  }
  if (ypos < final_y) {
    var dist = Math.ceil((final_y - ypos)/10);
    ypos = ypos + dist;
  }
  if (ypos > final_y) {
    var dist = Math.ceil((ypos - final_y)/10);
    ypos = ypos - dist;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}
function slidePic(){
	//var aLi = document.getElementsByTagName("li");
  var aLs = document.getElementsByTagName("a");
	var oImg = document.getElementById("img");
	
	  aLs[0].onmouseover = function() {
	    moveElement("img",-100,0,10);
  	}
  	aLs[1].onmouseover = function() {
    	moveElement("img",-200,0,10);
  	}
  	aLs[2].onmouseover = function() {
    	moveElement("img",-300,0,10);
  	}
}

addLoadEvent(slidePic);

