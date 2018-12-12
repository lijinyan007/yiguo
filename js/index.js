$(function() {
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
	
	//轮播图
	var num = 0;
	$('.imglist img').eq(0).show().siblings().hide();
	$('.Sowing>.spans>span').eq(0).addClass('active').siblings().removeClass('active');
	$('#next').click(function() {
		move();
	});
	$('#pre').click(function() {
		num = --num < 0 ? $('.imglist img').length - 1 : num;
		$('.imglist img').eq(num).stop().animate({
			width: '1583px',
			height: '500px',
			left: '0',
			top: '0'
		}, 3000).show().siblings().hide().css({
			width: '1920px',
			height: '700px',
			left: '-168px',
			top: '-100px'
		});
		//焦点跟随
		$('.Sowing>.spans>span').eq(num).addClass('active').siblings().removeClass('active');
	});
	//自动轮播
	var timer = null;
	clearInterval(timer);
	timer = setInterval(move, 4000);

	function move() {
		num = ++num > $('.imglist img').length - 1 ? 0 : num;
		$('.imglist img').eq(num).stop().animate({
			width: '1583px',
			height: '500px',
			left: '0',
			top: '0'
		}, 3000).show().siblings().hide().css({
			width: '1920px',
			height: '700px',
			left: '-168px',
			top: '-100px'
		});
		//焦点跟随
		$('.Sowing>.spans>span').eq(num).addClass('active').siblings().removeClass('active');
	}
	//经过Sowing,箭头出现
	$('.Sowing').mouseenter(function() {
		$('#pre').show();
		$('#next').show();
		clearInterval(timer);
	}).mouseleave(function() {
		$('#pre').hide();
		$('#next').hide();
		clearInterval(timer);
		timer = setInterval(move, 4000);
	});
	//经过切换箭头，透明度加深
	$('#pre,#next').mouseenter(function() {
		$(this).css({
			'opacity': 0.7
		});
	}).mouseleave(function() {
		$(this).css({
			'opacity': 0.3
		});
	});

	//banner部分分类
	var isok = true;
	//点击全部分类，分类的隐藏和显示
	$('.classification').click(function() {

		if(!isok) {
			$('.classification ul').hide();

		} else {
			$('.classification ul').show();
		}
		isok = !isok;
	});
	if(isok) {
		//点击隐藏的时候，经过出现
		$('.classification').mouseenter(function() {
			$('.classification ul').show();
		});
		$('.banner_navbox').mouseleave(function() {
			$('.classification ul,.banner_navbox .con .main').hide();
		});
	}
	

	$('.classification ul li').mouseenter(function() {
		$(this).css({
			'padding-left': '5px'
		});
		$('.banner_navbox .con .main').eq($(this).index()).show().siblings().hide();

	});
	$('.banner_navbox').mouseleave(function() {
		$('.banner_navbox>.con>.main').each(function(index) {
			$(this).css({
				'padding-left': '0px'
			});
			//			$('.banner_navbox .con .main').eq($(this).index()).hide();
			$(this).hide();
		});

	});

	//回到顶部
	$(window).scroll(function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop>500){
			$('#top_server .top').show();
			$('#top_server .server').css({
				'top':'620px'				
			});			
			$('#top_server .top').css({
				'top':'650px'				
			});
		}else{
			$('#top_server .top').hide();
		}
//              	console.log(1)
		
		
		//leftnav滚动效果
            var TOP = 0;
		
		TOP = $(document).scrollTop();
                	console.log(1)
		
                if(TOP >= $("#Fastfood").offset().top){
                	console.log(1)
                    $sideBarMenu.eq(8).addClass("current1").siblings().removeClass();
                }  else if(TOP >= $("#drinks").offset().top){
                    $sideBarMenu.eq(7).addClass("current1").siblings().removeClass();
                } else if(TOP >= $("#Dairycake").offset().top){
                    $sideBarMenu.eq(6).addClass("current1").siblings().removeClass();
                }
                else if(TOP >= $("#graingroceries").offset().top){
                    $sideBarMenu.eq(5).addClass("current1").siblings().removeClass();
                } else if(TOP >= $("#poultry").offset().top){
                    $sideBarMenu.eq(4).addClass("current1").siblings().removeClass();
                } else if(TOP >= $("#meat").offset().top){
                    $sideBarMenu.eq(3).addClass("current1").siblings().removeClass();
                }
                else if(TOP >= $("#seafood").offset().top){
                    $sideBarMenu.eq(2).addClass("current1").siblings().removeClass();
                } else if(TOP >= $("#Domesticfruit").offset().top){
                    $sideBarMenu.eq(1).addClass("current1").siblings().removeClass();
                } else if(TOP >= $("#Importedfruit").offset().top){
                    $sideBarMenu.eq(0).addClass("current1").siblings().removeClass();
                } else if(TOP > 320){
                    $subbnav.fadeIn();
                }else{
                    $subbnav.fadeOut();
                }
	});
	$('#top_server .top').click(function(){
		document.documentElement.scrollTop =0;
		document.body.scrollTop=0;
	});
	
	
	//leftnav
	var num = 0, num1=0,$subbnav = $(".subnav"),$sideBarMenu = $(".subnav li");
            $sideBarMenu.each(function (index, ele) {
                num = index * 40;
                num1=index*40;
                $(ele).css("background-position","-0"+ num + "px"  );
            });
	var $sideBarMenu = $(".subnav li");
	$sideBarMenu.click(function () {
                $("html,body").stop().animate({
                    // 给具有相同效果的元素添加 共同的样式 jd
                    "scrollTop" : $(".yiguo").eq($(this).index()).offset().top
                },1000);
    });
    
})