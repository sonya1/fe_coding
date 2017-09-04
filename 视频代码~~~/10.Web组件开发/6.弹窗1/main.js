require(['jquery','window'],function($,window){
	$("#alert").on('click',function(){


		var win = new window({  //宽高左右传不传都行
			/*width:300,
			height:300,
			left:50,
			top:50*/
		});  //定制宽高，位置
		var con = $("#value1").val();
		/*win.alert(con,function(){
			alert("确定关闭么？");
		});*/
		win.alert({  //规范参数
			//content:con,
			content:"login.html",
			/*handler:function(){
				alert("确定关闭么？");
			},*/
			callback:function(){
				$('.login_btn').on('click',function(){
					win.close();
				});
				
			},
			title:"提示",
			hasCloseBtn:true,
			skinClassName:"pink"
		});
	});
});