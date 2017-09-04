function changeImg(){
	//var aList = document.getElementsByTagName("a");
	var oUl = document.getElementById("gallery");
	var aImg = oUl.getElementsByTagName("img");
	var oImg = document.getElementById("holderImg");
	var oP = document.getElementById("description");
	/*for(var i=0;i<aList.length;i++){
		aList[i].onclick = function(){
			oImg.src = this.href;
			oP.innerHTML = this.title;
			return false;
		}
	}*/
	for(var i=0;i<aImg.length;i++){
		aImg[i].onclick = function(){
			//alert(i);  4
			oImg.src = this.title;
			oP.innerHTML = this.alt;
			return false;
		}
		aImg[i].onkeypress = aImg[i].onclick;
	}

}

function prepare(){
	var oUl = document.getElementById("gallery");

	var oImg = document.createElement("img");
	oImg.setAttribute("src", "../images/placeholder.gif");
	oImg.setAttribute("id", "holderImg");
	var oP = document.createElement("p");
	oP.setAttribute("id","description");
	var pText = document.createTextNode("Choose a picture.");
	oP.appendChild(pText);
	
	document.body.insertBefore(oP, oUl);
	document.body.insertBefore(oImg, oP);
}

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

addLoadEvent(prepare);
addLoadEvent(changeImg);