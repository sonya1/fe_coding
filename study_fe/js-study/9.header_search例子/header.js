$(function(){
	//search type
	var $searchType = $('.search h3'),
		$searchTypeList = $('.search-type-list'),
		$searchIpt = $('#search-ipt'),
		$searchResult = $('.search-result');
	$searchType.on("click",function(){
		$(this).next().toggle();
	});

	$('li',$searchTypeList).on('click',function(){
		//$('.search h3').html( $(this).html());
		$searchType.html( $.trim($(this).text()) );
		$searchTypeList.hide();
	});

	$searchTypeList.on('mouseleave',function(){ //mouseleave消除了事件冒泡
		$(this).hide();
	});

	//测试数据
	var testArr = [
		{
			'title':"iphone手机壳",
			'desc':"iphone手机壳......."
		},
		{
			'title':"iphone6手机壳",
			'desc':"iphone6手机壳......."
		},
		{
			'title':"iphone6s手机壳",
			'desc':"iphone6s手机壳......."
		},
		{
			'title':"sansung手机壳",
			'desc':"sansung手机壳......."
		},
		{
			'title':"iphone5c手机壳",
			'desc':"iphone5c手机壳......."
		}
	];

	var index = 0;  //按上下键 变色

	$searchIpt.on('keyup',function(e){
		//console.log(this.value);
		//根据this.value去数据库模糊查询，返回json数据，进行显示
		
		//用测试数据进行演示
		
		$searchResult.empty();
		if(this.value && e.which!=13){  //回车键抬起 不触发
			var html = "";
			
			for(var i=0;i<testArr.length;i++){
				var obj = testArr[i];
				if(obj.title.indexOf(this.value)!=-1){
					html += "<li>"+obj.title+"</li>";
				}
			}
			if(html){			
				$searchResult.append(html);
				$searchResult.show();
				$searchResult.children().eq(index).addClass('selected');
			}else{
				$searchResult.hide();
			}		
		}else{
			$searchResult.hide();
		}
		

	}).on('keydown',function(e){
		if(e.which==38 || e.which==40){
			if(e.which==38){  //上键
				index--;
				if(index<0){
					index=$searchResult.children().length-1;
				}

			}else{  //下键
				index++;
				if(index==$searchResult.children().length){
					index=0;
				}
			}
			$searchResult.children().eq(index).addClass('selected').siblings().removeClass('selected');

		}else if(e.which==13){  //回车
			$searchIpt.val($searchResult.children().eq(index).html());
			$searchResult.hide();
		}
		
	});


	$searchResult.on('click','li',function(){
			$searchIpt.val(this.innerHTML);
			$searchResult.hide();
	});


});