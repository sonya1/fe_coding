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

function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
  }
}

function getNextElement(node) {
  if(node.nodeType == 1) {
	return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}

function highLight(){
	if (!document.getElementsByTagName) return false;
	var aH1 = document.getElementsByTagName("h1");
	for(var i=0;i<aH1.length;i++){
		var oP = aH1[i].nextSibling;
		var oP1 = getNextElement(oP);
		addClass(oP1,"bold");
	}
}
addLoadEvent(highLight);