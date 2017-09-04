requirejs.config({
  shim:{
    'jquery.lightbox':['jquery']   //想使用插件的话，会先引入jquery,必须要配置！
  }
});

require(['jquery','jquery.lightbox'],function($){
	//导航栏
	var $nav = $("#nav");
	$navIcon = $(".nav-icon",$nav);
	$navMenuBox = $(".nav-menu-box",$nav);
	$navClose = $(".nav-close-icon",$nav);
	$navIcon.on("click",function(){
		$navMenuBox.animate({top:0});
	});
	$navClose.on("click",function(){
		$navMenuBox.animate({top:-192});
	});

	//瀑布流
	$(function(){
      function loadData(){
        $('#loading').show();
        $.getJSON('js/blogs.json',function(data){
          console.log(data);
          setTimeout(function(){
            for(var i=0;i<data.length;i++){
              var blog = data[i];
              var $minUl = getMinUl();
              $minUl.append('<li><h2>'+blog.title+'</h2><img src="'+blog.img_src+'" alt=""/><p>'+blog.content+'</p></li>');
            }
            $('#loading').hide();
          },3000);
          
        });
      }

      loadData();

      $(window).on('scroll',function(){
        var $minUl = getMinUl();
        var scrollTop = $(window).scrollTop();
        if(scrollTop + $(window).height() >= $minUl.height()){  //滚动条+浏览器的高度
          loadData();
        }
      });

      function getMinUl(){  //取最短的ul的列
        var $minUl = $('.col').eq(0);
        for(var i=1;i<3;i++){
          if($minUl.height() > $('.col').eq(i).height()){
            $minUl = $('.col').eq(i);
          }
        }
        return $minUl;
      }
    });
  
    //弹出层
    $("#portfolio li").hover(function(){
      $(this).children("img").stop().animate({
        width:145,
        height:145,
        marginLeft:-10,
        marginTop:-10
      });
      $(this).children(".mask").stop().show().animate({
        opacity:0.84
      });
    },function(){
      $(this).children("img").stop().animate({
        width:125,
        height:125,
        marginLeft:0,
        marginTop:0
      });
      $(this).children(".mask").stop().animate({
        opacity:0
      },function(){  //透明度执行完 之后再隐藏
        $(this).hide();
      });
    }).lightbox();
	
});