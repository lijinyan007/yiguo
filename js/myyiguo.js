$(function() {
	//全部商品
	$('.classification').mouseenter(function() {
		$(this).children('ul').show();
	});
	$('.classification').mouseleave(function() {
		$(this).children('ul').hide();
	});
	$('.classification ul li').mouseenter(function() {
		$('#classification .con div').eq($(this).index()).show().siblings().hide();
	});
	$('.classification ul li').mouseleave(function() {
		$('#classification>.con div').eq($(this).index()).hide();
	});
	console.log($('#selectlist dd').length);
	console.log($('#select_con>.con').length);
	//选项卡内容
	$('#title p .myyiguo').click(function() {
		$('#select_con>.con').eq(0).show().siblings().hide();
		console.log($('#select_con .con').index());
	});
	$('#selectlist .one dd').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('#selectlist .two dd').removeClass('active');
		$('#selectlist .three dd').removeClass('active');
		$('#select_con>.con').eq($(this).index()).show().siblings().hide();
		$('.twolevel span').html($(this).html());
		console.log($('#select_con .con').index());
	});

	$('#selectlist .two dd').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('#selectlist .one dd').removeClass('active');
		$('#selectlist .three dd').removeClass('active');
		$('#select_con>.con').eq($(this).index() + 8).show().siblings().hide();
		$('.twolevel span').html($(this).html());
		console.log($('#select_con .con').index());
	});

	$('#selectlist .three dd').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('#selectlist .two dd').removeClass('active');
		$('#selectlist .one dd').removeClass('active');
		$('#select_con>.con').eq($(this).index() + 13).show().siblings().hide();
		$('.twolevel span').html($(this).html());
		console.log($('#select_con .con').index());
	});

	//优惠券部分

	$('.Coupon .con span').click(function() {
		$(this).addClass('active2').siblings().removeClass('active2');
		$('.Coupon .conbox div').eq($(this).index()).show().siblings().hide();
	});

	//三级联动获取日期
	$(function() {
		$("#date").selectDate()

		$("#days").focusout(function() {
			var year = $("#year option:selected").html();
			var month = $("#month option:selected").html();
			var day = $("#days option:selected").html();
			console.log(year + month + day);
		});

	});

	//在线退换货

	$('.Return .con span').click(function() {
		$(this).addClass('active3').siblings().removeClass('active3');
		$('.Return .conbox div').eq($(this).index()).show().siblings().hide();
	});

})
