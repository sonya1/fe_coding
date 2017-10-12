//图片预加载
;(function($){
		function Preload(imgs,options){
			this.imgs = (typeof imgs==="string")?[imgs]:imgs;
			this.opts = $.extend(Preload.DEFAULTS,options);  //后面覆盖前面

			if(this.opts.order === "un_order"){
				console.log("un_order");
				this._unOrdered();
			}else if("order" === this.opts.order){
				console.log("order");
				this._ordered();
			}
		}

		Preload.DEFAULTS = {
			order:"un_order",
			each:null,
			all:null
		};

		Preload.prototype._unOrdered = function(){
				var imgs = this.imgs,
					opts = this.opts,
					count = 0,
					len = imgs.length;

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
		};

		Preload.prototype._ordered = function(){
				var imgs = this.imgs,
					opts = this.opts,
					count = 0,
					len = imgs.length;

				function load(){
					var imgObj = new Image();
					$(imgObj).on("load error",function(){
						opts.each && opts.each();

						if(count>=len){
							//所有图片加载完成
							opts.all && opts.all();
						}else{
							load();
						}
							count++;
					});
					imgObj.src = imgs[count];
				}

				load();
		};

		$.extend({
			preload:function(imgs,options){
				new Preload(imgs,options);
			}
		});

})(jQuery)