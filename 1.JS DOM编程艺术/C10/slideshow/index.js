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
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  alert(xpos+","+ypos);
  if (xpos == final_x && ypos == final_y) {
    return true;
  }
  if (xpos < final_x) {
    xpos++;
  }
  if (xpos > final_x) {
    xpos--;
  }
  if (ypos < final_y) {
    ypos++;
  }
  if (ypos > final_y) {
    ypos--;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
  movement = setTimeout(repeat,interval);
}

function slidePic(){
	var aLi = document.getElementsByTagName("li");
	var oImg = document.getElementById("img");
	oImg.style.position ="absolute";
	oImg.style.left = 0;
	oImg.style.top = 0;
	/*for(var i=0;i<aLi.length;i++){
		//0 -100 0
		//1 -200 0
		//2 -300 0
		
		aLi[i].onmouseover = function(){
			var that = i;
			alert((that+1)*(-100));
			oImg.style.left =(that+1)*(-100)+"px"; 
		}(i);
		

	}*/
	aLi[0].onmouseover = function() {
	    moveElement("img",-100,0,10);
  	}
  	aLi[1].onmouseover = function() {
    	moveElement("img",-200,0,10);
  	}
  	aLi[2].onmouseover = function() {
    	moveElement("img",-300,0,10);
  	}
}

//addLoadEvent(slidePic);

window.onload = slidePic;