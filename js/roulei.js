$(function(){
	console.log(12)
	$(".main").mouseenter(function(){
		$(".main>p").eq($(this).index()).css('display','block');
	})
	$(".main").mouseleave(function(){
		$(".main>p").eq($(this).index()).css('display','none');
	})
	//头部固定导航
	$('.drop_down').mouseenter(function() {
		$(this).children('div').addClass('active1');
		$(this).children('ul').show();
	});
	$('.drop_down').mouseleave(function() {
		$(this).children('div').removeClass('active1');
		$(this).children('ul').hide();
	});
	//配送地址
	$('.selectcity li').mouseenter(function() {
		$(this).addClass('active2').siblings().removeClass('active2');
		$('city>div').eq($(this).index()).show().siblings().hide();
	})

	//	头部动态导航	
	$(window).scroll(function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop > 50) {
			$('#Dynamicnav').css({
				'height': '46px',
				'position': 'fixd',
				'top': scrollTop - 30 + 'px'
			});
			$('.Dynamicnav_con>img').css({
				'height': '30px'
			});
			$('.ShoppingCart').css({
				'height': '33px',
				'margin-top': '5px',
				'line-height': '33px'
			});
			$('.Dynamicnav_con>ul').css({
				'left': '780px',
				'top': '-13px'
			});
		} else {
			$('#Dynamicnav').css({
				'height': '78px',
				'position': '',
				'top': ''
			});
			$('.Dynamicnav_con>ul').css({
				'left': '291px',
				'top': '28px'
			});
			$('.ShoppingCart').css({
				'height': '42px',
				'margin-top': '1.5%',
				'line-height': '42px'
			});
			$('.Dynamicnav_con>img').css({
				'height': '50px'
			});
		}
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>500){
			$('#top_server .top').show();		
		}else{
			$('#top_server .top').hide();
		}


	});

	//banner部分分类
	var isok = true;
	$('.classification').click(function() {

		if(!isok) {
			$('.classification ul').css({
				'display': 'none'
			});

		} else {
			$('.classification ul').css({
				'display': 'block'
			});
		}
		isok = !isok;
	});

	//	$('.classification').mouseenter(function() {
	//		$('.classification ul').css({
	//			'display': 'block'
	//		});
	//	});
	//	$('.classification').mouseleave(function() {
	//		$('.classification ul').css({
	//			'display': 'none'
	//		});
	//	});

	$('.classification ul li').mouseenter(function() {
		$(this).css({
			'padding-left': '5px'
		});
		$('.banner_navbox .con div').eq($(this).index()).show().siblings().hide();

	});
	$('.classification ul li').mouseleave(function() {
		$(this).css({
			'padding-left': '0px'
		});
		$('.banner_navbox .con div').eq($(this).index()).hide();
	});
})
