<?php
	session_start();
	//block.gif 0
	//wall.png 1 
	//ball.png 2
	//box.png 3
	//down.png 4	
	//left.png 5
	//right.png 6
	//up.png 7
	$ge = array(
		array(0,0,1,1,1,0,0,0),
		array(0,0,1,2,1,0,0,0),
		array(0,0,1,0,1,1,1,1),
		array(1,1,1,3,0,3,2,1),
		array(1,2,0,3,4,1,1,1),
		array(1,1,1,1,3,1,0,0),
		array(0,0,0,1,2,1,0,0),
		array(0,0,0,1,1,1,0,0)
	);
	
	$ge[0][7] = "down.png";
	
	$_SESSION['ge'] = $ge;
	$_SESSION["ren"] = array(4,4);
	header("location:02kan.php");
	
?>