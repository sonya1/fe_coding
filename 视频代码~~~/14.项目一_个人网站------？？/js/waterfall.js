require(['jquery'],function($){
	//alert('this is waterfall.js');
	//$(function(){
		$.getJSON("blogs.json",function(data){
			console.log(data);
			for(var i=0;i<data.length;i++){
				var $blog = data[i];
				var $minUl = getMinUl();
				alert(111);
				$minUl.append('<li><h2>'+blog.title+'</h2><img src="'+blog.img_src+'" alt=""><p>'+blog.content+'</p></li>');
			}
		});



		function getMinUl(){
			var $minUl = $("#blog .col").eq(0);
			for(var i=0;i<3;i++){
				if($minUl.height() > $("#blog .col").eq(i).height() ) {
					$minUl = $("#blog .col").eq(i);
				}
			}
			return $minUl;
		}



	//});
});