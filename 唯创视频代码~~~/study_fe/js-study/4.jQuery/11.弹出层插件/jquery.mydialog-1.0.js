;(function($){

	$.fn.extend({
		mydialog:function(options){
			var settings = $.extend({
				isDragable:false,
				hasMask:true
			},options);

			/*？关闭时 打开的所有窗口全都关闭了*/
			var html = '<div class="sy-dialog-wrapper">'+
					   '<div class="sy-dialog-mask"></div>'+
					   '<div class="sy-dialog-dialog">'+
					   '<div class="sy-dialog-title">'+
					   settings.title+
					   '<b class="sy-dialog-close">[X]</b>'+
					   '</div>'+
					   '<div class="sy-dialog-content">'+settings.content+
					   '</div>'+
					   '</div>'+
					   '</div>';
		
			this.append(html);

			$(".sy-dialog-close").on("click",function(){
				$(".sy-dialog-wrapper").remove();
			});
		}
	});
		
})(jQuery);