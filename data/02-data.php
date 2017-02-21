<?php
	header("Content-Type:text/html;charset=utf-8");
	
	// 获取具体数据
	$name = $_POST['name'];
	
	// 字符串的拼接是用 点
	echo '我的名字是' . $name;
?>