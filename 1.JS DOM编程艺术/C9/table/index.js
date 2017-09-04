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

function addClass(elem,value){
	if(!elem.className){
		elem.className = value;
	}else{
		var tmp = elem.className;
		tmp += " ";
		tmp += value;
		elem.className = tmp;
	}
}

var atBody = document.getElementsByTagName("tbody");
var aTr = atBody[0].getElementsByTagName("tr");

function oddRow(){
	for(var i=0;i<aTr.length;i++){
		if(!(i%2)){  //odd
			addClass(aTr[i],"odd");
		}
	}
}

function highLight(){
	for(var i=0;i<aTr.length;i++){
		aTr[i].onmouseover = function(){
			this.style.fontWeight = "bold";
		}

		aTr[i].onmouseout = function(){
			this.style.fontWeight = "normal";
		}
	}
}

addLoadEvent(oddRow);
addLoadEvent(highLight);
