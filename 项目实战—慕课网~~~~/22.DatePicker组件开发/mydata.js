(function(){
	var datepicker = {};

	datepicker.getMonthData = function(year,month){
		var ret = [],finl = [];
		if(!year || !month){
			var now = new Date();
			year = now.getFullYear();
			month = now.getMonth() + 1;
		}

		var firstDay = new Date(year,month-1,1);  //本月第一天

		year = firstDay.getFullYear();  //防止用户输入的不合法，所以重新赋值
		month = firstDay.getMonth() + 1;

		var firstDayWeekDay = firstDay.getDay();  //本月第一天的星期
		if(firstDayWeekDay === 0){
			firstDayWeekDay = 7;
		}
	console.log("本月第一天："+firstDay+",星期"+firstDayWeekDay);
		//if(firstDayWeekDay==0) firstDayWeekDay = 7;

		var lastDayOfLastMonth = new Date(year,month-1,0);  //上月最后一天：本月第0天
		var lastDateOfLastMonth = lastDayOfLastMonth.getDay();  //上月最后一天的星期
		var lastDayOfLastMonth = lastDayOfLastMonth.getDate();  //上月最后一天
	console.log("上月最后一天："+lastDayOfLastMonth+",星期"+lastDateOfLastMonth);

		var preMonthDayCount = firstDayWeekDay;  //显示的 上个月的天数
		var lastDay = new Date(year, month, 0);  //本月的最后一天
		var lastDate = lastDay.getDate();  //本月 最后一天的星期
	console.log("显示的上个月天数："+preMonthDayCount);
	
		for(var i=0;i<7*6;i++){
			var date = (i+1)-preMonthDayCount;  //当月的日期
			var showDate = date;  //应该显示的日期
			var thisMonth = month;
			//上一月
			if(date<=0){
				thisMonth = month-1;
				showDate = lastDayOfLastMonth + date;  //30+-6
			}else if(date > lastDate){
				//下一月
				thisMonth = month + 1;
				showDate = showDate - lastDate;
			}else if(date === 0){
				showDate = date + 1;
			}

			if(thisMonth === 0){
				thisMonth = 12;
			}
			if(thisMonth === 13){
				thisMonth = 1;
			}

			ret.push({
				i:i+1,
				month:thisMonth,
				date:date,
				showDate:showDate,
			});
		}
		varfinl = [];
		for(var i=0;i<6;i++){
			var  week = [],obj = {};
			for(var j=0;j<7;j++){
				week.push(ret[7*i+j]["showDate"]);
			}
			console.log(week);
			obj["week"] = week;
			finl.push(obj);
		}

		return {
			year:year,
			month:month,
			date:finl
		};

	};



	window.datepicker = datepicker;
})();