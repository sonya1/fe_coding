<?php 
	header("Content-type: text/html; charset=utf-8");
	
	
	//echo "中国";
	
	//1:三码一致（文件编码、浏览器解码、数据库编码）
	//2:notice错误如何解决?  改php.ini配置文件 将error_reporting原来行改为 
			//error_reporting = E_ALL & ~E_NOTICE
			//
			//
			//
	
	//   为什么CI不会报notice错误  ????百度一下噢噢噢噢！！！！
	



	//3:Apache(80,443)  80->http  443->https(ssl)
	//数据传输要具备解压缩模块 gzip tar bz2
	//http传输的时候 
	// get post ajax curl
	//input filter (filter function /正则表达 /sandbox)/ output filter
	//$this->load->view('login.php',$data);
	//hash  单向不可逆  md5 rc6
	  
	//php变量名是区分大小写  函数名不区分大小写
	//phpinfo();
	PhpInfo();
	
	
	

?>

