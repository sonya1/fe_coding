;(function($){
	$.fn.extend({
		lightbox:function(){
			this.on("click",function(){

				/*IE8 不好用

				$img = $('<img class="light-img"/>');
				$img.attr('src',$(this).data('src'));
				$img.on('load',function(){
					alert(this.width);
				});*/
				var oImg = new Image();
				oImg.className = "lightbox-img";
				oImg.onload = function(){   //加载图片 慢！！！
					this.style.left = ( $(window).width()-this.width) /2 + 'px';
					this.style.top = ( $(window).height()-this.height) /2 + 'px';
					document.body.append(oImg);
				};
				oImg.src = this.getAttribute('data-src');
			});
		}
	});
})(jQuery); 