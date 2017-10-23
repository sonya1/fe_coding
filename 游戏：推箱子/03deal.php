<?php
	session_start();
	$ge = $_SESSION['ge'];
	$ren = $_SESSION["ren"];
	$fx = $_GET['fx'];
	
//	echo $ren[0]."---".$ren[1]."<br>";  //3.4
	if($ren[1]>0 && $fx == 37 && $ge[$ren[0]][$ren[1]-1] != 1){		//左，树不可以走

		if($ge[$ren[0]][$ren[1]-1] == 3 && ($ge[$ren[0]][$ren[1]-2] == 0 || $ge[$ren[0]][$ren[1]-2] ==2 )  ){ //箱子
			$ge[$ren[0]][$ren[1]-2] = 3;
			$ge[$ren[0]][$ren[1]-1] = 5;
			$ge[$ren[0]][$ren[1]] = 0;
			$ren = array($ren[0],$ren[1]-1);
		}else if($ge[$ren[0]][$ren[1]-1] == 3 && ($ge[$ren[0]][$ren[1]-2] == 1)){ //树
			
		}else{
			$ge[$ren[0]][$ren[1]] = 0;
			$ge[$ren[0]][$ren[1]-1] = 5;
			//$ge[$ren[0]][$ren[1]-1] = 4;
			$ren = array($ren[0],$ren[1]-1);
		}
	}
	
	if($ren[0]>0 && $fx == 38 && $ge[$ren[0]-1][$ren[1]] != 1){		//上	
		if($ge[$ren[0]-1][$ren[1]] == 3 && ($ge[$ren[0]-2][$ren[1]] == 0 || $ge[$ren[0]-2][$ren[1]] ==2 )  ){ //箱子
			$ge[$ren[0]-2][$ren[1]] = 3;
			$ge[$ren[0]-1][$ren[1]] = 7;
			$ge[$ren[0]][$ren[1]] = 0;
			$ren = array($ren[0]-1,$ren[1]);
		}else if($ge[$ren[0]-1][$ren[1]] == 3 && ($ge[$ren[0]-2][$ren[1]] == 1)){ //树
			
		}else{
			$ge[$ren[0]][$ren[1]] = 0;
			$ge[$ren[0]-1][$ren[1]] = 7;
			//$ge[$ren[0]-1][$ren[1]] = 4;
			$ren = array($ren[0]-1,$ren[1]);
		}
	}
	
	if($ren[1]<7 && $fx == 39 && $ge[$ren[0]][$ren[1]+1] != 1){		//右
		if($ge[$ren[0]][$ren[1]+1] == 3 && ($ge[$ren[0]][$ren[1]+2] == 0 || $ge[$ren[0]][$ren[1]+2] ==2 )  ){ //箱子
			$ge[$ren[0]][$ren[1]+2] = 3;
			$ge[$ren[0]][$ren[1]+1] = 6;
			$ge[$ren[0]][$ren[1]] = 0;
			$ren = array($ren[0],$ren[1]+1);
		}else if($ge[$ren[0]][$ren[1]+1] == 3 && ($ge[$ren[0]][$ren[1]+2] == 1)){ //树
			
		}else{
			$ge[$ren[0]][$ren[1]] = 0;
			$ge[$ren[0]][$ren[1]+1] = 6;
			//$ge[$ren[0]][$ren[1]+1] = 4;
			$ren = array($ren[0],$ren[1]+1);
		}
	
	}
	
	if($ren[0]<7 && $fx == 40 && $ge[$ren[0]+1][$ren[1]] != 1){	//下
		if($ge[$ren[0]+1][$ren[1]] == 3 && ($ge[$ren[0]+2][$ren[1]] == 0 || $ge[$ren[0]+2][$ren[1]] ==2 )  ){ //箱子
			$ge[$ren[0]+2][$ren[1]] = 3;
			$ge[$ren[0]+1][$ren[1]] = 4;
			$ge[$ren[0]][$ren[1]] = 0;
			$ren = array($ren[0]+1,$ren[1]);
		}else if($ge[$ren[0]+1][$ren[1]] == 3 && ($ge[$ren[0]+2][$ren[1]] == 1)){ //树
			
		}else{
			$ge[$ren[0]][$ren[1]] = 0;
			$ge[$ren[0]+1][$ren[1]] = 4;
			$ren = array($ren[0]+1,$ren[1]);
		}
	}

	$_SESSION['ge'] = $ge;
	
	$_SESSION["ren"] = $ren;	
	
	header("location:02kan.php");
	
?>