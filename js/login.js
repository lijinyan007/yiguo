$(function() {
	//图形验证码
	$.idcode.setCode();
	function yzm() {
		var IsBy = $.idcode.validateCode();
		if(!IsBy) {
			console.log(IsBy)
			$('#verficode_tab1').parent().children('.erro-text').html('验证码不正确').css({
				'color': 'red'
			});
			$('#verficode_tab1').parent().children('.pass-error').show().removeClass('null pass');
			return false;
		} else {
			$('#verficode_tab1').parent().children('.erro-text').hide();
			return true;
		}
	}
	
	
	$('#qq,#sina').click(function() {
		//		$('body').css({'background':'gray','z-index':10,'opcity':0.5});
		var h = document.documentElement.clientHeight;
		$('#Popup').css({
			'height': h
		}).show();
	});
	$('.qq>span').click(function() {
		$('#Popup').hide();
	});
	$('.login-btn').click(function(){
		var name=getcookie('name');
		var pwd=getcookie('password');
		
//		console.log(name+','+pwd);
//		console.log($('#phone_mobile').val()+','+$('#phone_password').val());
		if(!yzm()){
			alert('验证码错误');
		}
		else if($('#phone_mobile').val()==name&&$('#phone_password').val()==pwd&&yzm()){
			alert('登录成功');
			window.location.href='index.html';
		}else{
			alert('用户名或密码错误');
		}
	});
	function getcookie(key) {
		var cookie = document.cookie;
		console.log(cookie)
		var arrCookie = cookie.split("; ");
		for(var i = 0; i < arrCookie.length; i++) {
			var arr = arrCookie[i].split("=");
			if(key == arr[0]) {
				return arr[1];
			}
		}
	}
});