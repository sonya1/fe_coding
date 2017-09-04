require(['jquery','lightbox'],function($,open){
	$('.list li').on('click',function(){
		open(this);
	});
});