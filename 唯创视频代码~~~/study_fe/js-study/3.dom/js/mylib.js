function css(elem,attr,value){
	if(!elem || typeof(elem) != "object") return;
	if(arguments.length == 2){
		if(typeof attr == "string"){
			return _getStyle(elem,attr); //elem.style[attr];
		}else if(typeof attr == "object"){
			for(prop in attr){
				setCss(prop,attr[prop]);
			}
		}
	}else if(arguments.length == 3){
		setCss(attr,value);
	}

}

function setCss(attr,value){
	switch(attr){
		case "width":
		case "height":
		case "padding":
		case "paddingLeft":
		case "paddingRight":
		case "paddingTop":
		case "paddingBottom":
			value = /\%/.test(value)?value:Math.max(parseInt(value),0) + "px";
	}

}


/*
 * @elem 要做动画的元素
 *  attr 某个css变化的css属性
 *  callback 回调函数
*/
	function animate(elem,attr,callback){
		clearInterval(elem.timer);
		elem.timer = setInterval(function(){
			var bStop = true; //true:需要停止定时器，false：不需要停止
			for(prop in attr){
				var currentStyle;
				if(prop == "opacity"){
					currentStyle = parseInt(css(elem,prop)*100); //将获取的当前值转为百分制	
				}else{
					currentStyle = parseInt(css(elem,prop));
				}

				var speed = (attr[prop] - currentStyle ) / 8;
				speed = speed > 0 ? Math.floor(speed) : Math.ceil(speed);

				if(currentStyle != attr[prop]){
					bStop = false;
				}

				currentStyle += speed;
				if(prop == "opacity"){
					elem.style.opacity = currentStyle / 100 ; 
					elem.style.filter = "alpha(opacity:"+currentStyle+")";	
				}else{
					elem.style[prop] = currentStyle + "px";
				}
			}

			if(bStop){
				clearInterval(elem.timer);
				if(callback) callback();
			}

		},30);
}


function getStyle(elem,attr){  //获得elem的attr属性值
	if(elem.currentStyle){  //ie
		return elem.currentStyle[attr];
	}else{
		return elem.getComputedStyle(elem,false)[attr];
	}
}