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
	all();

	function all() {
		//手机号码的验证
		var $phoneyz = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
		var $i = $(this).next().children('i');
		$('#phone_mobile').keyup(function() {
			if($phoneyz.test($('#phone_mobile').val())) {
				//验证通过
				$(this).parent().children('.erro-text').html('');
				$(this).parent().children('.pass-error').hide();
			} else {
				$(this).parent().children('.erro-text').html('手机号格式不正确').css({
					'color': 'red'
				});
				$(this).parent().children('.pass-error').show().removeClass('null pass');
			}
		});
		//	验证通过，可以获取手机验证码
		$('.get').click(function() {
			var num = 60;
			var timer = setInterval(function() {
				num--;
				$('.get').html('获取验证码');
				if(num==0) {
					clearInterval(timer);
					$('.newget').hide();
					$('.get').show();
					
				}else if(num<=60){
					$('.newget').html('重新发送(' + num + ')');
					$('.newget').show();
					$('.get').hide();
				}
			}, 1000);
			
			});
		//点击下一个输入框，当上一个输入框为空时，出现为空的提示
		//点击手机号，验证图形验证码
		$('#phone_mobile').click(function() {
			if($('#verficode_tab1').val() == '') {
				$('#verficode_tab1').parent().children('.pass-error').addClass('null').show();
				$('#verficode_tab1').parent().children('.erro-text').html('图形验证码不为空').css({
					'color': '#000'
				});
			}
		});
		//点击手机验证，验证手机号
		$('#phone_verifycode').click(function() {
			if($('#phone_mobile').val() == '') {
				$('#phone_mobile').parent().children('.pass-error').addClass('null').show();
				$('#phone_mobile').parent().children('.erro-text').html('手机号码不为空').css({
					'color': '#000'
				});
			}

		});
		$('#phone_verifycode').keyup(function() {
			$('#phone_verifycode').parent().children('.erro-text').html('').css({
				'color': '#000'
			});
			$('#phone_verifycode').parent().children('.pass-error').addClass('null').hide();
		});
		//点击设置密码，验证手机验证码
		$('#phone_password').click(function() {
			if($('#phone_verifycode').val() == '') {
				$('#phone_verifycode').parent().children('.pass-error').addClass('null').show();
				$('#phone_verifycode').parent().children('.erro-text').html('手机验证码不为空').css({
					'color': '#000'
				});
			}
		});
		//点击确认密码，验证设置密码
		$('#phone_confimpassword').click(function() {
			if($('#phone_password').val() == '') {
				$('#phone_password').parent().children('.pass-error').addClass('null').show();
				$('#phone_password').parent().children('.erro-text').html('密码不为空').css({
					'color': '#000'
				});
			}
		});
		//设置密码
		var $pwd = /^[\w.]{6,20}$/;
		$('#phone_password').keyup(function() {
			if($pwd.test($(this).val())) {
				//格式验证成功
				$(this).parent().children('.erro-text').html('');
				$(this).parent().children('.pass-error').hide();
			} else {
				$(this).parent().children('.erro-text').html('密码格式不正确').css({
					'color': 'red'
				});
				$(this).parent().children('.pass-error').show().removeClass('null pass');
			}
		});
	}
	//确认密码
	$('.reg-btn').click(function() {
		all();
		console.log($('#phone_password').val());
		if($('#phone_password').val()) {
			var pwdyz = $('#phone_confimpassword').val() == $('#phone_password').val();
			if(pwdyz && yzm()) {
				//密码正确
			
				$('#phone_confimpassword').parent().children('.pass-error').toggleClass('pass');
				setCookie('name', $('#phone_mobile').val(), 600000); // cookie过期时间为?分。
				setCookie('password', $('#phone_password').val(),60000); // cookie过期时间为?分。
				alert('注册成功');
				
			} else {
				$('#phone_confimpassword').parent().children('.pass-error').show();
				$('#phone_confimpassword').parent().children('.erro-text').html('两次输入的密码不一致').css({
					'color': 'red'
				});
				alert('注册失败');

			}
		} else{
			alert('注册失败，请填写完整的内容');
			window.location.href = "#";
		}
		if(!$('#check').is(':checked')) {
			alert('您还没有同意协议');
		}
	});
	$('#phone_confimpassword').keyup(function() {
		$('#phone_confimpassword').parent().children('.pass-error').hide();
		$('#phone_confimpassword').parent().children('.erro-text').html('');
	});
	
	//设置cookie
	// 函数中的参数分别为 cookie 的名称、值以及过期秒数
	function setCookie(c_name, value, expireseconds) {
		var exdate = new Date();
		exdate.setTime(exdate.getTime() + expireseconds * 1000);
		document.cookie = c_name + "=" + escape(value) +
			((expireseconds == null) ? "" : ";expires=" + exdate.toGMTString());
			
	}

});