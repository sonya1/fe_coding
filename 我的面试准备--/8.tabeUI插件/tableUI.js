/*
功能：美化表格，让表格的奇偶行颜色不同，然后鼠标移到某行上，某行可以高亮显示。
作者：sonya
date：2017-11-20
 */


/*
！！！！！！！！
问题1
$.fn = $.prototype;
$.extend(object);  //为类添加类方法。添加静态方法 调用时$.方法名()
$.extend(target,object1,[object n]);  //用一个或多个其他对象来扩展一个对象，返回被扩展的对象
$.fn.extend(object) = $.prototype.extend;  
//对jQuery.prototype进得扩展，就是为jQuery类添加“成员函数”。
//jQuery类的实例可以使用这个“成员函数”。
*/

/*
！！！！！！
 问题2
 https://www.cnblogs.com/SheilaSun/p/4779895.html
 传入的形参jQuery有什么用？
 1.用$来代替jQuery，传入参数，就可以不用沿着作用域链一层层
 向上查找直到顶层作用域去获取jQuery对象了，访问更快了。
 2.用形参传入，可以在代码压缩的时候，进行压缩。否则 jQuery是不会被压缩的

 */

;(function($){
	$.fn.extend({
		tableUI : function(options){
					//各种属性、参数
					var defaults = {
						evenRowClass:"evenRow",
						oddRowClass:"oddRow",
						activeRowClass:"activeRow"
					};
				
					var options = $.extend(defaults,options);
					this.each(function(){
						//插件实现代码
						var $thisTable = $(this);
						//添加奇偶行颜色
						$thisTable.find("tr:even").addClass(options.evenRowClass);
						$thisTable.find("tr:odd").addClass(options.oddRowClass);
						$thisTable.find("tr").bind("mouseover",function(){
							$(this).addClass(options.activeRowClass);
						});
						$thisTable.find("tr").bind("mouseout",function(){
							$(this).removeClass(options.activeRowClass);
						});
					});
				} 
	});
})(jQuery);

;(function($){
	$.extend({
		tableUI1 : function(options){
			alert(111);
			//各种属性、参数
			/*var defaults = {
				evenRowClass:"evenRow",
				oddRowClass:"oddRow",
				activeRowClass:"activeRow"
			};
		
			var options = $.extend(defaults,options);
			this.each(function(){
				//插件实现代码
				var $thisTable = $(this);
				//添加奇偶行颜色
				$thisTable.find("tr:even").addClass(options.evenRowClass);
				$thisTable.find("tr:odd").addClass(options.oddRowClass);
				$thisTable.find("tr").bind("mouseover",function(){
					$(this).addClass(options.activeRowClass);
				});
				$thisTable.find("tr").bind("mouseout",function(){
					$(this).removeClass(options.activeRowClass);
				});
			});*/
		} 
	});
	
})(jQuery);