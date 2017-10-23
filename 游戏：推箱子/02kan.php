<?php
	session_start();
	$ge = $_SESSION['ge'];
	echo '<table border="1" width="400" height="400">';
	for($hang=0;$hang<8;$hang++){
		echo '<tr>';
		for($lie=0;$lie<8;$lie++){
			echo '<td>';
			switch ($ge[$hang][$lie]){
				case 0:
					echo '<img src="images/block.gif" width="50" height="50"/>';
					break;
				case 1:
					echo '<img src="images/wall.png" width="50" height="50"/>';
					break;
				case 2:
					echo '<img src="images/ball.png" width="50" height="50"/>';
					break;
				case 3:
					echo '<img src="images/box.png" width="50" height="50"/>';
					break;
				case 4:
					echo '<img src="images/down.png" width="50" height="50"/>';
					break;
				case 5:
					echo '<img src="images/left.png" width="50" height="50"/>';
					break;
				case 6:
					echo '<img src="images/right.png" width="50" height="50"/>';
					break;
				case 7:
					echo '<img src="images/up.png" width="50" height="50"/>';
					break;
			}
			//echo '<img src="images/'.$ge[$hang][$lie].'" width="50" height="50"/>';
			echo '</td>';
		}
		echo '</tr>';
	}
?>
<a href="01chushihua.php">init!</a>
<script>
	window.onkeydown = function(e){
		//alert(e.keyCode);
		var fx = e.keyCode;
		window.location = "03deal.php?fx="+fx;
	};
</script>