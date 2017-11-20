define([],function(){
	function a(elem){
		$overlay = $('<div class="light-overlay"></div>');
		$wrap = $('<div class="light-wrap"><img src="'+$(elem).data('src')+'" alt=""></div>');
		//图片加载问题 
		//$wrap = $('<div class="light-wrap"></div>');
		//var oImg = new Image();
		//oImg.onload = function(){
		//	$wrap.css({
		//		marginLeft:-this.width/2,
		//		marginTop:-this.height/2
		//	});
		//  $(this).appendTo($wrap);
		//};
		//oImg.src = this.data('src');
		$overlay.appendTo(document.body);
		$wrap.appendTo(document.body);
		$left = $wrap.width();
		$top = $wrap.height();
		$('.light-wrap').css({
				marginLeft:-$left/2,
				marginTop:-$top/2
			}
		);
	}
	return a;


	/*return function(elem){
		$overlay = $('<div class="light-overlay"></div>');
		$wrap = $('<div class="light-wrap"><img src="'+$(elem).data('src')+'" alt=""></div>');
		//图片加载问题 
		//$wrap = $('<div class="light-wrap"></div>');
		//var oImg = new Image();
		//oImg.onload = function(){
		//	$wrap.css({
		//		marginLeft:-this.width/2,
		//		marginTop:-this.height/2
		//	});
		//  $(this).appendTo($wrap);
		//};
		//oImg.src = this.data('src');
		$overlay.appendTo(document.body);
		$wrap.appendTo(document.body);
		$left = $wrap.width();
		$top = $wrap.height();
		$('.light-wrap').css({
				marginLeft:-$left/2,
				marginTop:-$top/2
			}
		);
	}*/
	
});