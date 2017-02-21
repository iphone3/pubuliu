<?php
	header("Content-Type:text/html;charset=utf-8");
	
	// 获取具体数据   name=李明&age=18&sex=男
	$name = $_GET['name'];
	
	// 字符串的拼接是用 点
	echo '我的名字是' . $name;
?>