$(function(){

	var $content = $('<div class="content"></div>');

	for(var i=0;i<3;i++){
		var $ul = $('<ul class="col'+i+'"></ul>');
		for(var j=0;j<3;j++){
			var $li = $('<li class="col'+i+'_'+j+' init"></ul>');
			var $div = $('<div class="btn"></div>');
			var $spanBig = $('<span class="big">+</span>'); 
			var $spanSmall = $('<span class="small">-</span>'); 
			$div.append($spanBig);
			$div.append($spanSmall);
			$li.append($div);
			$ul.append($li);
		}
		$content.append($ul);
	}

	$(".wrapper").append($content);


});

