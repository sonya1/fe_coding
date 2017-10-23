
(function($){
	var GETCLASS = "http://imoocnote.calfnote.com/inter/getClasses.php";
	var GETCLASSCHAPTER = "http://imoocnote.calfnote.com/inter/getClassChapter.php";
	var GETCLASSNOTE = "http://imoocnote.calfnote.com/inter/getClassNote.php";
	$.ajaxSetup({	
		error:function() {
			alert("调用接口失败");
			return false;
		}
	});
	
	function renderTemplate(templateSelector,data,htmlSelector){
		var t = $(templateSelector).html();
		var f = Handlebars.compile(t);  //f是一个函数，为编译过的模板
		var h = f(data);  
		$(htmlSelector).html(h);
	}

	function refreshClasses(curPage){
		$.getJSON(GETCLASS,{"curPage":curPage},function(data){
			renderTemplate("#class-template",data.data,".container");
			renderTemplate("#page-template",formatPage(data),".page");
			bindPageEvent();
			
		});
	}

	//事件委托
	function bindPageEvent(){
		$(".page").delegate('li.clickable', 'click', function() {
			$this = $(this);
			refreshClasses($this.data("id"));
		});
	}

	function showNote(show){
		if(show){
			$(".overlay").css("display","block");
			$(".note").css("display","block");
		}else{
			$(".overlay").css("display","none");
			$(".note").css("display","none");
		}
	}

	//note出现
	function bindClassEvent(){
		$("#classes").delegate('li', 'click', function() {
			showNote(true);
			var $this = $(this);
			var cid = $this.data("id");
			
			/*$.getJSON(GETCLASSCHAPTER, {"cid":cid}, function(data) {
				console.log("chapter_data--->"+data);
				renderTemplate("#chapter-template",data,".left");
			});

			$.getJSON(GETCLASSNOTE, {"cid":cid}, function(data) {
				console.log("note_data--->"+data);
				renderTemplate("#note-template",data,".right");
			});*/
			$.when($.getJSON(GETCLASSCHAPTER, {"cid":cid}),
				$.getJSON(GETCLASSNOTE, {"cid":cid}))
				.done(function(cData,nData){
					renderTemplate("#chapter-template",cData[0],".left");
					renderTemplate("#note-template",nData[0],".right");
					showNote(true);
				});
		});
	}

	bindClassEvent();

	$(".overlay").on("click",function(){
		showNote(false);
	});

	//bindPageEvent();
	
	$.getJSON(GETCLASS, {"curPage":1}, function(data) {
			//console.log("class_data--->"+data);
			console.log(data);
			renderTemplate("#class-template",data.data,".container");
			renderTemplate("#page-template",formatPage(data),".page");
			
			/*$('li.clickable').on("click",function(){
				$this = $(this);
				console.log($this.data("id"));
				refreshClasses($this.data("id"));
			});*/
			bindPageEvent();
	});

	

		
	Handlebars.registerHelper("equal",function(v1,v2,options){
		if(v1 == v2){
			//console.log(v1,v2);
			return options.fn(this);
		}else{
			return options.inverse(this);
		}
	});

	Handlebars.registerHelper("long",function(v,options){
		if(v.indexOf("小时")!=-1){
			return options.fn(this);
		}else{
			return options.inverse(this);
		}
	});

	Handlebars.registerHelper("formatDate",function(value){
		if(!value){
			return "";
		}
		var d = new Date(value);
		var year = d.getFullYear();
		var month = d.getMonth() + 1;
		var date = d.getDate();
		var hour = d.getHours();
		var minute = d.getMinutes();
		var second = d.getSeconds();
		var str = year+"-"+month+""+date+" "+hour+":"+minute+":"+second;
		return str; 
	});

	Handlebars.registerHelper("addone",function(v){
		return v+1;
	});

	function formatPage(pageData){
		var arr = [];
		var total = parseInt(pageData.totalCount);
		var cur = parseInt(pageData.curPage);
		//处理到首页的逻辑
		var toLeft = {};
		toLeft.index = 1;
		toLeft.text = "&laquo;";
		if(cur != 1){
			toLeft.clickable = true;
		}
		arr.push(toLeft);
		//处理到上一页的逻辑
		var pre = {};
		pre.index = cur-1;
		pre.text = "&lsaquo;";
		if(cur != 1){
			pre.clickable = true;
		}
		arr.push(pre);
		//处理到cur页前的逻辑
		if(cur <=5 ){
			for(var i=1;i<cur;i++){
				var pag = {};
				pag.text = i;
				pag.index = i;
				pag.clickable = true;
				arr.push(pag);
			}
		}else{
			//如果cur>5，那么cur前的页面显示...
			var pag = {};
			pag.text = 1;
			pag.index = 1;
			pag.clickable = true;
			arr.push(pag);
			var pag = {};
			pag.text = "...";
			arr.push(pag);
			for(var i=cur-2;i<cur;i++){
				var pag = {};
				pag.text = i;
				pag.index = i;
				pag.clickable = true;
				arr.push(pag);
			}
		}
		//处理到cur页的逻辑
		var pag = {};
		pag.text = cur;
		pag.index = cur;
		pag.cur = true;
		arr.push(pag);
		//处理到cur页后的逻辑
		if(cur >= total - 4 ){
			for(var i=cur+1;i<total;i++){
				var pag = {};
				pag.text = i;
				pag.index = i;
				pag.clickable = true;
				arr.push(pag);
			}
		}else{
			//如果cur<total-4,那么cur后的页面显示...
			for(var i=cur+1;i<=cur+2;i++){
				var pag = {};
				pag.text = i;
				pag.index = i;
				pag.clickable = true;
				arr.push(pag);
			}
			var pag = {};
			pag.text = "...";
			arr.push(pag);
			var pag = {};
			pag.text = total;
			pag.index = total;
			pag.clickable = true;
			arr.push(pag);
		}
		//处理到下一页的逻辑
		var next = {};
		next.index = cur+1;
		next.text = "&rsaquo;";
		if(cur != total){
			next.clickable = true;
		}
		arr.push(next);
		//处理到尾页的逻辑
		var toRight = {};
		toRight.index = total;
		toRight.text = "&raquo;";
		if(cur != total){
			toRight.clickable = true;
		}
		arr.push(toRight);

		//console.log("page_Data-->"+arr);
		return arr;
	}

})(jQuery);
