var http = require("http");
var cheerio = require("cheerio");
var url = "http://www.imooc.com/learn/348";

function filterChapters(html){
	var $ = cheerio.load(html);
	var chapters = $('.chapter');  //所有章节 数组

	/*[{
		chapterTitle:"",
		videos:[
			title:"",
			id:""
		]
		},	
	]*/

	var courseData = [];

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

		courseData.push(chapterData);

	});
	return courseData;
}

function printCourseData(courseData){
	courseData.forEach(function(item){
		console.log(item.chapterTitle + "\n");
		var videos = item.videos;
		videos.forEach(function(video){
			console.log("  【" + video.id+"】 " + video.title + "\n");
		});
	});
}

http.get(url,function(res){
	var html = "";

	res.on("data",function(data){
		html += data;
	});

	res.on("end",function(){
		//console.log(html);
		var courseData = filterChapters(html);
		//console.log(courseData);
		printCourseData(courseData);
	});
}).on("error",function(){
	console.log("获取课程数据出错！");
});