var http = require("http");
// var Promise = require("Promise");
var Promise = require("bluebird");
var cheerio = require("cheerio");
var baseUrl = "http://www.imooc.com/learn/";
var url = "http://www.imooc.com/learn/348";
var videoIds = [348,259,197,134,75];

function filterChapters(html){
	var $ = cheerio.load(html);
	var chapters = $('.chapter');  //所有章节 数组
	var title = $("#main h2.l").text();  //大标题
	//var number = parseInt($($(".info_num i")[0]).text().trim());
	var number = parseInt($("span.js-learn-num").text());
console.log("number-->"+number);
/*var chapterTitle1 = chapters[0].find(".strong").text();
var chapterTitle111 = chapters[0].find(".strong");
console.log("chapterTitle1-->"+chapterTitle1);
console.log("chapterTitle111-->"+chapterTitle111);*/

	/*courseData = {
		title:title,
		num:number,
		videos:[{
			chapterTitle:'',
			videos:[
				title:"",
				id:""
			]
		}]
	};	*/
	

	var courseData = {
		title:title,
		number:number,
		videos:[

		]
	};

	chapters.each(function(item){
		var chapter = $(this);
		var chapterTitle = chapter.find(".strong").text();
		var videos = chapter.find('.video').children("li");
		var chapterData = {
			chapterTitle:chapterTitle,
			videos:[]
		};

		videos.each(function(item){
			var video = $(this).find('.J-media-item');
			var videoTitle = video.text();
			var id = video.attr('href').split('video/')[1];
			chapterData.videos.push({
				title:videoTitle,
				id:id
			});
		});

		courseData.videos.push(chapterData);

	});
	return courseData;
}

function printCourseData(coursesData){
	coursesData.forEach(function(courseData){
		console.log(courseData.number + "人学过 " + courseData.title + "\n");
	});

	coursesData.forEach(function(courseData){
		console.log("### " + courseData.title + "\n");

		courseData.videos.forEach(function(item){
			var chapterTitle = item.chapterTitle;

			console.log(chapterTitle + "\n");

			var videos = item.videos;
			videos.forEach(function(video){
				console.log("  【" + video.id+"】 " + video.title + "\n");
			});
		});

	});
}

/*-----------------------------------------*/
function getPageAsync(url){  //返回一个Promise对象
	return new Promise(function(resolve,reject){
		console.log("正在爬取 " + url);
		


		http.get(url,function(res){
			var html = "";

			res.on("data",function(data){
				html += data;
			});

			res.on("end",function(){
				resolve(html);
				//console.log(html);
				//var courseData = filterChapters(html);
				//console.log(courseData);
				//printCourseData(courseData);
			});
		}).on("error",function(e){
			reject(e);
			console.log("获取课程数据出错！");
		});
	});
}

var fetchCourseArray = [];  //Promise对象数组

videoIds.forEach(function(id){
	fetchCourseArray.push(getPageAsync(baseUrl + id));
});


//爬取完成后，所有爬取结果放在fetchCourseArray数组中，then进行处理
//pages为每一个课程的页面，所有视频信息。eg.进击NODE（一）
Promise.all(fetchCourseArray)
	.then(function(pages){
		var coursesData = [];
		pages.forEach(function(html){
			var courses = filterChapters(html);

			coursesData.push(courses);
		});

		coursesData.sort(function(a,b){
			return a.number< b.number;
		});

		//printCourseData(coursesData);
	});



