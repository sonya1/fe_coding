;(function($){
	$.fn.extend({
		color:function(value){
			if(value){
				return this.css('color',value);   //$(this)也可以
			}
			return this.css("color");
		}
	});
})(jQuery);