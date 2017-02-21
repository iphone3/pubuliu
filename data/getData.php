<?php
	
	// 默认值
	$page = 1;
	if($_GET['page']){
		$page = $_GET['page'];
	}
	
	// url的拼接
	$url = 'http://www.wookmark.com/api/json/popular?page=' . $page;
	
	// 获取对应的JSON数据
	$content = file_get_contents($url);
	
	
	echo $content;
?>