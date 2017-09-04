window.onload = function changeImg(){
	var aList = document.getElementsByTagName("a");
	var oImg = document.getElementById("holderImg");
	var oP = document.getElementById("description");
	for(var i=0;i<aList.length;i++){
		aList[i].onclick = function(){
			oImg.src = this.href;
			oP.innerHTML = this.title;
			return false;
		}
	}
}

