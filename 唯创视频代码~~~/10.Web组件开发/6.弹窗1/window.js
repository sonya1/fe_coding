define(['jquery','jquery-ui'],function($){

	function Window(options){
		this.cfg = {  //默认宽高
			width:350,
			height:150
		};
		this.handlers = {};  //事件
		$.extend(this.cfg,options);  //合并
	}

	Window.prototype = {
		alert:function(options){
			options = $.extend({
				content:"Welcome!",
				title:"系统提示", //默认title
				hasCloseBtn:false,
				hasMask:true,
				isDraggable:false
			},options);
			
			//console.log("===>"+this);  //win
			this.$div = $('<div class="alert_div"></div>').css({
				width:this.cfg.width,
				height:this.cfg.height,
				left:this.cfg.left || ($(window).width()-this.cfg.width)/2,  //默认水平竖直居中
				top:this.cfg.top || ($(window).height()-this.cfg.height)/2
			}),
				$header = $('<div class="alert_header">'+options.title+'</div>').appendTo(this.$div),
				$closeBtn = $('<span class="close_btn">[x]</span>');
				//$body = $('<div class="alert_body">'+options.content+'</div>').appendTo($div),
				$body = $('<div class="alert_body"></div>').appendTo(this.$div).load(options.content,function(){
					options.callback && options.callback();
				}); //chrome不支持本地协议

				//拖拽
				if(options.isDraggable){
					this.$div.draggable();
				}

				//右上角按钮关闭
				var that = this;
				if(options.hasCloseBtn){
					$closeBtn.appendTo($header);
					$closeBtn.on('click',function(){
						options.handler4CloseBtn && options.handler4CloseBtn();
						that.fire('close');
						that.close();
					});
				}


				//定制皮肤
				if(options.skinClassName){
					$header.addClass('alert_header_' + options.skinClassName);
					this.$div.addClass('alert_div_' + options.skinClassName);
				}

				//模态弹窗 有mask
				if(options.hasMask){
					var $mask = $('<div class="window_mask"></div>').appendTo(document.body);
				}


				//$footer = $('<div class="alert_footer"></div>').appendTo($div),
				//$ok = $('<button class="alert_ok">确定</button>').appendTo($footer);
			this.$div.appendTo(document.body);

			/*$(".alert_ok").on('click',function(){
				options.handler && options.handler();  //关闭之前处理其他事情
				$div.remove();
			});*/
		},
		on:function(type,handler){  //自定义事件，绑定事件
			if(!this.handlers[type]){
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler); 
		},
		fire:function(type){  //触发事件，执行
			var length = this.handlers[type].length;
			for(var i=0;i<length;i++){
				this.handlers[type][i]();
			}
			
		},
		close:function(){
			this.$div.remove();
		},
		confirm:function(){

		},
		prompt:function(){

		}
	};

	return Window;
});