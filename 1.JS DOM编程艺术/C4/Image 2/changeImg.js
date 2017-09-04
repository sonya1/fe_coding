window.onload = function changeImg(){
	var aList = document.getElementsByTagName("a");
	var oImg = document.getElementById("holderImg");
	for(var i=0;i<aList.length;i++){
		aList[i].onclick = function(){
			oImg.src = this.href;
			return false;
		}
	}
}

