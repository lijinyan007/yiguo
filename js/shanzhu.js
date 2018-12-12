$(function(){
	$('.pic_thumb>.picList ul li').mouseenter(function(){
		$('.shopmsg>.img img').eq($(this).index()).fadeIn(500).siblings().fadeOut();
	})
	
})