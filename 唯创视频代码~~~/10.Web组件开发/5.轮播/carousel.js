;(function($){
	$.fn.extend({
		carousel:function(options){
			var $carousel = $('<div class="carousel"></div>');
			var $carouselLoading = $('<div class="carousel-loading">loading...</div>');
			$carousel.append($carouselLoading);

			this.append($carousel);

			

			setTimeout(function(){
				var $carouselImgs = $('<ul class="carousel-imgs"></ul>');
				var count = 0;  //计数加载成功的图片
				for(var i=0;i<options.imgData.length;i++){
					var img = options.imgData[i];
					var $li = $('<li></li>');
					var oImg = new Image();
					oImg.src = img.src;
					oImg.onload = function(){
						$li.append(oImg);    //????有问题啊
						$carouselImgs.append($li);
						count++;
						if(count == options.imgData.length){
							$carouselImgs.appendTo($carousel);
							$carouselLoading.hide();
						}
					};
				
				}
			}, 1000);
			
			

		}
	});
})(jQuery);

//用loading是为了加载图片 慢显示空框，所以给用户一个loading的提示