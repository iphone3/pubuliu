/*
 * method: 请求方式
 * url: 请求地址
 * args: 传递的参数
 * successFn: 获取到数据之后的处理函数
 */
function ajax(method, url, args, successFn){
	// 1、打开浏览器
	var request = null;
	try{
		request = new XMLHttpRequest();
	}catch(e){
		request = new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	// 2、输入网址
	// request.open(method, url, true);	// post
	/*
	 * 有参数args时: 才需要拼接
	 * 无参数args时: 不需要拼接
	 */
	if(method == 'get' && args){		// get请求的url
		url = url + '?' + args;
	}
	request.open(method, url, true);
	
	
	// 3、发送请求
	if(method == 'get'){
		request.send();
	} else {
		// 设置请求头
		request.setRequestHeader('content-type','application/x-www-form-urlencoded');
		// 传递参数
		request.send(args);
	}
	
	// 4、服务器相应
	request.onreadystatechange = function(){
		if(request.readyState == 4){
			if(request.status == 200){
				// 函数调用 (将获取到的数据传递过去)
				successFn & successFn(request.response);
			} else {
				alert('请求错误: ' + request.status);
			}
		}
	}
}
