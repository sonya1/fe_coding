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


function position(){
	var p1 = document.getElementById("message");
	var p2 = document.getElementById("message2");
	
	p1.style.position = "absolute";
	p1.style.left = "100px";
	p1.style.top = "20px";
	move("message",500,80,20);
	p2.style.position = "absolute";
	p2.style.left = "100px";
	p2.style.top = "80px";
	move("message2",500,20,20);

}

function move(id,pos_x,pos_y,time){
	if(!document.getElementById) return false;
	if(!document.getElementById(id)) return false;
	var elem = document.getElementById(id);
	var px = parseInt(elem.style.left);  //100px  -> 100
	var py = parseInt(elem.style.top);

	if(px<pos_x){
		px++;
	}
	if(px>pos_x){
		px--;
	}
	if(py<pos_y){
		py++;
	}
	if(py>pos_y){
		py--;
	}
	elem.style.left = px+"px";   //很重要 单位！！
	elem.style.top = py+"px";
	//move(id,pos_x,pos_y,time);
	//move('id',x,y,t);
	//var repeat = "move("+id+","+pos_x+","+pos_y+","+time+")";  id是字符串 加引号
	var repeat = "move('"+id+"',"+pos_x+","+pos_y+","+time+")";
    movement = setTimeout(repeat,time);

}

addLoadEvent(position);

