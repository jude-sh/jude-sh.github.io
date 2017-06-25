$(document).ready(function(){
	// 키보드 esc 대응
	$(document).keyup(function(e){
		if(e.keyCode==27){
			$('.more_site').removeClass('on');
		}
	});
	// 마우스 클릭 대응
	$('.btn_more2').click(function(){
		$(this).parent('.more_site').toggleClass('on');
		$('.nicon_site li').removeClass('on');
		return false;
	})
	// 마우스 over 대응 (목록 over and focusin)
	$('.nicon_site li').on('mouseover focusin',function(){
		$('.nicon_site li').removeClass('on');
		$(this).addClass('on');
	});
	$('.more_site').mouseleave(function(){
		$('.more_site').removeClass('on');
	});
	// 키보드 대응 (마지막 li 에서 focusout)
	$('.nicon_site li:last-child').focusout(function(){
		$('.more_site').removeClass('on');
	});

	// bx_slide
	var li_width = $('.df_slide li').width();
	var li_count = $('.df_slide li').length;
	// ul 넓이 지정
	$('.df_slide').css('width',li_count*li_width+'px');
	// prev 버튼 비활성화
	$('.btn_prev').addClass('on');
	
	// next 클릭
	$('.btn_next').click(function(){
		var origin = $('.df_slide').css('left');
		var pos_ul = origin.substr(0,origin.length-2);
		if(pos_ul > -li_width*(li_count-1)){
			if(!$('.df_slide').is(':animated')){
				$('.df_slide').animate({left:pos_ul-li_width},300);
			}else{}
			if(pos_ul == 0){
				$('.btn_prev').removeClass('on');
			}else if(pos_ul == -li_width*(li_count-2)){
				$('.btn_next').addClass('on');
			}else{}
		}else if(pos_ul == -li_width*(li_count-1)){}
	});

	// prev 클릭
	$('.btn_prev').click(function(){
		var origin = $('.df_slide').css('left');
		var pos_ul = origin.substr(0,origin.length-2);
		if(pos_ul < 0){
			if(!$('.df_slide').is(':animated')){
				$('.df_slide').animate({left:+pos_ul+li_width},300);
			}else{}
			if(pos_ul == -li_width*(li_count-1)){
				$('.btn_next').removeClass('on');
			}else if(pos_ul == -li_width){
				$('.btn_prev').addClass('on');
			}else{}
		}else if(pos_ul == 0){}
	});
});