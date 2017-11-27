var klass = require("./class");
klass.add("scott",["sonya1","sonya2"]);


/*
或者把 添加班级暴露出去 作为一个模块
exports.add = function(klasses){
	klasses.forEach(item,index){
		var teacherName = item.teacherName;
		var students = item.students;

		klass.add(teacherName,students);
	}
};*/


