function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		for(key in json){
			var iCur = 0;
			if(key == "opacity"){
				iCur = getStyle(obj,key) * 100;
			}else{
				iCur = parseInt(getStyle(obj,key));
			}
			//console.log(iCur);

			var speed = (json[key] - iCur)/5;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(iCur != json[key]){
				flag = false;
			}
				
			if(key == "opacity"){
				obj.style[key] = Math.round((iCur + speed)) /100;
				obj.style.filter = "alpha(opacity="+ Math.round((iCur + speed)) +")";
			}else{
				obj.style[key] = iCur + speed + 'px';
			}


		}
		if(flag){
			clearInterval(obj.timer);
			fn && fn();
		}

	}, 3000);
	
}

