/*$(function(){
	$(".accordion-head").on('click',function(){
		$(this).siblings('p').slideToggle();
	});
});*/

;(function($){
	$.fn.extend({
		accordion: function(options){
			var settings = {
				animate:'slide'
			};
			settings = $.extend(settings,options);

			

			/*
			写死的
			 var $container = $('<ul class="accordion">'+
		'<li>'+
			'<h4 class="accordion-head">11</h4>'+
			'<p>说地方和女生短发</p>'+
		'</li>'+
		'<li>'+
			'<h4 class="accordion-head">22</h4>'+
			'<p>多说两句冯绍峰那威风</p>'+
		'</li>'+
		'<li>'+
			'<h4 class="accordion-head">33</h4>'+
			'<p>航天员呵呵</p>'+
		'</li>'+
	'</ul>');*/

		/*
		有一个li DOM插入一个，性能不好
	 		var $oUl = $('<ul class="accordion"></ul>');
			for(var i=0;i<settings.data.length;i++){
				var tmp = settings.data[i];
				var $oLi = $('<li><h4 class="accordion-head">'+tmp.headTitle+'</h4><p>'+tmp.content+'</p></li>');
				$oLi.appendTo($oUl);
			}
			$oUl.appendTo(this);
			$(".accordion-head").on('click',function(){
				$(this).siblings('p').slideToggle();
			});*/

			var html= '<ul class="accordion">';
			for(var i=0;i<settings.data.length;i++){
				var tmp = settings.data[i];
				html +=  '<li><h4 class="accordion-head">'+tmp.headTitle+'</h4><p>'+tmp.content+'</p></li>';
			}
			html += '</ul>';

			this.append($(html));
			$(".accordion-head").on('click',function(){
				if(settings.animate == 'slade'){
					$(this).siblings('p').slideToggle();
				}else if(settings.animate == 'fade'){
					$(this).siblings('p').fadeToggle();
				}
			});


			
		}
	});
})(jQuery);