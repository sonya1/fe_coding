//第一种 普通：函数会越来越大：if会越来越多
var calculateBonus = function(level,salary){
	if(level === "S"){
		return salary * 4;
	}
	if(level === "A"){
		return salary * 3;
	}
	if(level === "B"){
		return salary * 2;
	}
};
calculateBonus("A",2000);


//第二种 
var performanceS = function(salary){
	return salary * 4;
};
var performanceA = function(salary){
	return salary * 3;
};
var performanceB = function(salary){
	return salary * 2;
};
var calculateBonus = function(level,salary){
	if(level === "S"){
		return performanceS(salary);
	}
	if(level === "A"){
		return performanceA(salary);
	}
	if(level === "B"){
		return performanceB(salary);
	}
};
calculateBonus("A",2000);

//第三种
var strategies = {
	S:function(salary){
		return salary *4;
	},
	A:function(salary){
		return salary *3;
	},
	B:function(salary){
		return salary *2;
	}
};
var calculateBonus = function(level,salary){
	return strategies[level](salary);
};
calculateBonus("A",2000);
