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
			/*只能绑定一个函数，执行一个操作，第二个就会被覆盖
			handler4CloseBtn:function(){
				alert("您即将关闭窗口！");
			},*/
			title:"提示",
			hasCloseBtn:true,
			skinClassName:"pink",
			isDraggable:true   //可拖拽

		});

		win.on('close',function(){
				alert("您即将关闭窗口111！");
		});
		win.on('close',function(){
				alert("您即将关闭窗口222！");
		});
	});
});