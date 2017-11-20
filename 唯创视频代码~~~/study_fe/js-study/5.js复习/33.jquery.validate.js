;(function($){
	$.fn.extend({
		validate:function(opts){
			this.on("submit",function(){
				var bSubmit = true;
				var rules = opts.rules;
				for(var i=0;i<rules.length;i++){
					var ruleItem = rules[i];
					var $element = $(ruleItem.selector);
					var rule = ruleItem.rule;
					var aRules = rule.split("|");
					var value = $element.val();

					for(var j=0;j<aRules.length;j++){
						if(aRules[j] === "required"){
							//必填项
							if(value.length == 0){
								bSubmit = false;
								alert(  ruleItem.error?ruleItem.error:"这是必填项");
								break;
							}
						}
						if(aRules[j].indexOf("-") != -1){
							//范围
							var range = aRules[j].split("-");
							if(value.length<range[0] || value.length > range[1]){
								bSubmit = false;
								alert(  "范围应在"+range[0]+"——"+range[1]+"之间哦！");
								break;
							}
						}
						if(aRules[j] === "email"){
							//邮箱
							if(value.indexOf("@") == -1){
								bSubmit = false;
								alert("不是邮箱格式哦！");
								break;
							}
						}
						if(!bSubmit){
							break;
						}
					}

					//var error = ruleItem.error;
				}
				return bSubmit;
			});
			return this;   //返回对象，可以链式操作
		}
	})
			

})(jQuery);