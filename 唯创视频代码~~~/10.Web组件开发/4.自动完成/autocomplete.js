;(function($){
	$.fn.extend({
		autocomplete:function(){
			var $ul = $('<ul class="autocomplete-list"></ul>');
			$ul.css({
				top:this.offset().top+this.height()+4,
				left:this.offset().left
			});

			//测试数据
			var testData = ['hehe','haha','javascript','hello','html','css','options'];

			var index = 0;

			this.on('keyup',function(e){  //输入完成 键盘抬起时
				if($.trim(this.value)!="" && e.which != 13){  //不是空格
					var html = "";
					$ul.empty();
					for(var i=0;i<testData.length;i++){
						//var pattern = /this.value/gi;
						var pattern = new RegExp(this.value,"gi");
						if(pattern.test(testData[i])){
							html += '<li>'+testData[i]+'</li>';
						}else{
							$ul.remove();
						}
					}
					if(html){
						$ul.append(html).appendTo(document.body);
						$ul.children().eq(index).addClass('selected').siblings().removeClass('selected');
					}
				}else{
					$ul.remove();
				}
			}).on('keydown',function(e){  
				if(e.which == 38){  //键盘上键
					index--;
					if(index == -1){
						index = $ul.children().length - 1;
					}
					$ul.children().eq(index).addClass('selected').siblings().removeClass('selected');
					
				}else if(e.which==40){//键盘下键
					index++;
					if(index > $ul.children().length - 1){
						index = 0;
					}
					$ul.children().eq(index).addClass('selected').siblings().removeClass('selected');
				}else if(e.which == 13){  //回车
					console.log(this.value);
					this.value = $ul.children().eq(index).html();
					$ul.remove();
				}
			});
			

		}
	});
})(jQuery);  //传值会使 $为局部变量，找的更快；与别的类库冲突