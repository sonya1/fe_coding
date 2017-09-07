/**
 * 根据id查找元素
 * @param  selector id选择器
 * @return object 查找的元素
 */
function id(selector){
	return document.getElementById(selector);
}

/**
 * 根据标签名称查找元素
 * @param  selector 标签选择器
 * @return array 查找的元素数组
 */
function tag(selector){
	return document.getElementsByTagName(selector);
}


/**
 * 根据类名称class查找元素
 * @param  selector 类选择器
 * @param  context 搜索的上下文，不传默认document
 * @return array 查找的元素数组
 */
function getByClass(className,context){
	context = context || document;
	if(context.getElementsByClassName){
		return context.getElementsByClassName(className);
	}

	var all = context.getElementsByTagName("*");
	var result = [];
	var re = new RegExp('\\b'+className+'\\b');  //var re=/className/; 不是变量className了，而是字符串‘className’,\b为匹配边界，需转义
	for(var i=0;i<all.length;i++){
		if(re.test(all[i].className) ){  //以aa为边界
			result.push(all[i]);
		}
	}
	return result;
}

/**
 * 能用的选择器，可以支持id，tagName，className
 * @param  selector 类选择器
 * @param  context 搜索的上下文，不传默认document
 * @return array 查找的元素数组
 */
function $(selector,context){
	var firstLetter = selector.charAt(0);
	switch(firstLetter){
		case "#":
			return [ id(selector.substring(1)) ]; //都返回数组
			break;
		case ".":
			return getByClass(selector.substring(1),context);
			break;
		default:
			return tag(selector);
	}
}


/**
 * 设置或获取元素的DOM属性 （在DOM结构中能看见的：attribute）
 * @param  elem 元素
 * @param  attr dom属性名称
 * @param  value 传了就是设置属性值，不传就是获取属性值
 * @return 获取属性值时，返回属性值
 */
function attr(elem,attr,value){
	if(value){
		elem.setAttribute(attr, value);
	}else{
		return elem.getAttribute(attr);
	}
}


/**
 * 设置或获取元素的对象属性 （在DOM结构中看不见的：prop）【例外，IE中DOM也能看见】
 * @param  elem 元素
 * @param  prop 对象属性名称
 * @param  value 传了就是设置对象属性值，不传就是获取对象属性值
 * @return 获取属性值时，返回属性值
 */
function prop(elem,prop,value){
	if(value){
		elem[prop] = value;
	}else{
		return elem[prop];
	}
}


/**
 * 设置或获取元素的value属性 (input)
 * @param  elem 元素
 * @param  value 传了就是设置元素input值，不传就是获取
 * @return 获取value值时，返回value值
 */
function val(elem,value){
	if(value){
		elem.value = value;
	}else{
		return elem.value;
	}
}


/**
 * 获取元素的css样式 
 * @param  elem 元素
 * @param  prop 获取prop的值
 * @return 样式值
 * 为css函数所调用，是一个内部函数
 */
function _getStyle(elem,prop){
	//background-color => backgroundColor
	//word 是 -c  =>C
	console.log("getStyle-->"+prop);
	prop = prop.replace(/\-[A-z]/g,function(word){
		return word.substring(1).toUpperCase();
	});
	if(elem.currentStyle){  //IE支持
		return elem.currentStyle[prop];
	}else if(window.getComputedStyle){  //其他浏览器
		return getComputedStyle(elem,false)[prop];
	}else{
		return elem.style[prop];  //返回内联样式
	}
}

/**
 * 设置元素的css样式 
 * @param  elem 元素
 * @param  attr 要设置的属性
 * @param  value 要设置的属性值
 * @return
 * 为css函数所调用，是一个内部函数
 */
function _setStyle(elem,attr,value){
	switch(attr){
		case "width":
		case "height":
		case "padding":
		case "paddingLeft":
		case "paddingRight":
		case "paddingTop":
		case "paddingBottom":
			value = /\%/.test(value)?value:Math.max(Math.parseInt(value),0) + 'px';
			break;
		case "left":
		case "top":
		case "bottom":
		case "right":
		case "margin":
		case "marginLeft":
		case "marginRight":
		case "marginTop":
		case "marginBottom":
			value = /\%/.test(value)?value:Math.parseInt(value) + 'px';
			break;
	}
	elem.style[attr] = value;
}

/**
 * 设置或获取元素的css属性 
 * @param  elem 元素
 * @param  prop 传值就是设置元素prop的样式，传对象也可以
 * @param  value 传值就是设置元素prop的样式，不传就是获取样式
 * @return  返回样式
 * 设置值时，可以传z-index，也可以zIndex，像素可以加‘px’，也可以不加
 */
function css(elem,prop,value){  //prop可以是对象
	if(value){
		elem.style[prop] = value;
	}else{
		if(typeof prop == 'object'){
			for(p in prop){
				var p2 = p.replace(/\-[A-z]/g,function(word){
					return word.substring(1).toUpperCase();
				});
				//elem.style[p] = prop[p];
				_setStyle(elem,p2,prop[p]);  //可以传px 或不传都行
			}
		}
		console.log("css-->"+prop);
		return _getStyle(elem,prop);
	}
}

/**
 * 添加新样式 
 * @param  elem 元素
 * @param  className 要添加的类名
 */
function addClass(elem,className){
	var re = new RegExp('\\b'+className+'\\b');
	//原来没有就添加
	if(!re.test(elem.className)){
		elem.className = elem.className + " " + className;
	}
}


/**
 * 移除样式 
 * @param  elem 元素
 * @param  className 要移除的类名
 */
function removeClass(elem,className){
	var re = new RegExp('\\b'+className+'\\b');
	elem.className = trim( elem.className.replace(re,"") );
}


/**
 * 将字符串首尾空格去掉 
 * @param  str 待操作字符串
 */
function trim(str){
	return str.replace(/^\s*|\s*$/g,"");
}


/**
 * 设置或获取元素宽度
 * @param  elem 元素
 * @param  value 宽度大小 ‘px’可加可不加
 */
function width(elem,value){
	if(value){
		elem.style.width = parseInt(value) + 'px';
	}else{
		return parseInt( css(elem,'width') );
	}
}


/**
 * 设置或获取元素高度
 * @param  elem 元素
 * @param  value 高度大小 ‘px’可加可不加
 */
function height(elem,value){
	if(value){
		elem.style.height = parseInt(value) + 'px';
	}else{
		return parseInt( css(elem,'height') );
	}
}



/**
 * 获取window 可视区宽度
 */
function windowWidth(){
	var de = document.documentElement;  //html元素
	return self.innerWidth  ||  //self是window的别名
		(de && de.clientWidth) ||
		document.body.clientWidth;
}

/**
 * 获取window 可视区高度
 */
function windowHeight(){
	var de = document.documentElement;  //html元素
	return self.innerHeight  ||  //self是window的别名
		(de && de.clientHeight) ||
		document.body.clientHeight;
}

/**
 * 获取页面page宽度
 */
function pageWidth(){
	return document.body.scrollWidth;
}

/**
 * 获取页面page宽度
 */
function pageHeight(){
	return document.body.scrollHeight;
}


/**
 * 获取元素到页面左边的距离
 */
function pageX(elem){
	var p = 0;
	while(elem.offsetParent){
		p += elem.offsetLeft;
		elem = elem.offsetParent;
	}
	return p;
}

/**
 * 获取元素到页面上边的距离
 */
function pageY(elem){
	var p = 0;
	while(elem.offsetParent){
		p += elem.offsetTop;
		elem = elem.offsetParent;
	}
	return p;
}

/**
 * 获取元素left值
 */
function posX(elem){
	return parseInt(css(elem,"left"));
}

/**
 * 获取元素top值
 */
function posY(elem){
	return parseInt(css(elem,"top"));
}

/**
 * 获取元素距离最近已定位父元素 的水平距离
 */
function parentX(elem){
	return elem.parentNode == elem.offsetParent?
		elem.offsetLeft:
		pageX( elem ) - pageX( elem.parentNode );
}

/**
 * 获取元素距离最近已定位父元素 的竖直距离
 */
function parentY(elem){
	return elem.parentNode == elem.offsetParent?
		elem.offsetTop:
		pageY( elem ) - pageY( elem.parentNode );
}

/**
 * 获取鼠标距离页面的 水平距离，不是距离浏览器的水平距离，有滚动条的时候
 */
function getX(e){
	e = e || window.event;
	//not IE || IE ||0
	return e.pageX || e.clientX + document.body.scrollLeft || 0;
}


/**
 * 获取鼠标距离页面的 竖直距离，不是距离浏览器的水平距离，有滚动条的时候
 */
function getY(e){
	e = e || window.event;
	//not IE || IE ||0
	return e.pageY || e.clientY + document.body.scrollTop || 0;
}


/**
 * 获取水平滚动条 滚出去的距离
 */
function scrollX(){
	var de = document.documentElement;
	return self.pageXOffset ||
		(de && de.scrollLeft) ||
		document.body.scrollLeft;
}


/**
* 获取竖直滚动条 滚出去的距离
*/
function scrollY(){
	var de = document.documentElement;
	return self.pageYOffset ||
		(de && de.scrollTop) ||
		document.body.scrollTop;
}

/**
* 获取鼠标与元素的水平距离
*/
function getElementX(e){
	return (e && e.layerX) || window.event.offsetX;
}


/**
* 获取鼠标与元素的竖直距离
*/
function getElementY(e){
	return (e && e.layerY) || window.event.offsetY;
}


