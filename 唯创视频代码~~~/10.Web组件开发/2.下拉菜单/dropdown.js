/*$(function(){   //页面加载完成之后在执行
	$(".dropdown").on('click',function(){
		$(this).children('ul').toggle();
	});
});*/

 // 插件 更灵活
;(function($){
	$.fn.extend({
		dropdown:function(options){
			var settings = {
				animate:false
			};
			//将两个对象合并，属性不同 后面的加到前面的，属性相同，后面的把前面的覆盖
			settings = $.extend(settings,options);
			this.on('click',function(){
				if(settings.animate){
					$(this).children('ul').slideToggle();
				}else{
					$(this).children('ul').toggle();
				}
				
			});
		}
	});
})(jQuery);
