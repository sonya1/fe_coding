;(function($){
	$.extend({
		preload:function(imgs,options){
			var settings = {
				each:null,
				all:null
			};

			var count = 0,len = imgs.length;

			var opts = $.extend(settings,options);  //后面覆盖前面
			imgs = (typeof imgs==="string")?[imgs]:imgs;

			$.each(imgs,function(i,src){
				if(typeof src != "string"){
					return ;
				}

				var imgObj = new Image();
				$(imgObj).on("load error",function(i,src){
					opts.each && opts.each(count);
					count++;
					if(count>len-1){
						opts.all && opts.all();
					}
					

				});
				imgObj.src = src;
			});
		}
	});
})(jQuery);


