window.onload = function changeImg(){
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
			oImg.src = this.title;
			oP.innerHTML = this.alt;
			return false;
		}
	}
}

