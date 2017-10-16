(function(){
	var datepicker = {};

	datepicker.getMonthData = function(year,month){
		var ret = [];
		if(!year || !month){
			var now = new Date();
			year = now.getFullYear();
			month = now.getUTCMonth() + 1;
		}

		var firstDay = new Date(year,month-1,1);  //本月第一天
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
				month:thisMonth,
				date:date,
				showDate:showDate
			});
		}
		return ret;

	};



	window.datepicker = datepicker;
})();