$(document).ready(function(){
	// 키보드 esc 대응
	$(document).keyup(function(e){
		if(e.keyCode==27){
			$('.more_site').removeClass('on');
		};
	});
	// 마우스 클릭 대응
	$('.btn_more2').click(function(){
		$(this).parent('.more_site').toggleClass('on');
		$('.nicon_site li').removeClass('on');
		return false;
	})
	// 마우스 over 대응 (목록 over and focusin)
	$('.nicon_site li').on('mouseover focusin',function(){
		// 목록 전체 li 의 on 제거
		$('.nicon_site li').removeClass('on');
		// 현재 목록 li 에 on 추가
		$(this).addClass('on');
	});
	// (목록에서 마우스가 떠났을 때)
	$('.more_site').mouseleave(function(){
		// 목록에서 on 제거 
		$('.more_site').removeClass('on');
	});
	// 키보드 대응 (마지막 li 에서 focusout)
	$('.nicon_site li:last-child').focusout(function(){
		// 목록 hide
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
		// ul left값+'px'
		var origin = $('.df_slide').css('left');
		// ul left값
		var pos_ul = origin.substr(0,origin.length-2);
		// 클릭 전에 ul의 위치가 마지막사진 위치가 아니였다면
		if(pos_ul > -li_width*(li_count-1)){
			// 만약 animate 중이면 작동하지 않게
			if(!$('.df_slide').is(':animated')){
				// animate 동작이 작동중이 아니었다면 ul 의 left 값에 -(li가로길이)
				$('.df_slide').animate({left:pos_ul-li_width},300);
			}else{};
			// 클릭 전에 ul의 위치가 첫번째 사진이였다면 prev 버튼 이미지 진하게 변경');
			if(pos_ul == 0){
				$('.btn_prev').removeClass('on');
			// 클릭 전에 ul의 위치가 마지막 사진 바로 전이였다면 > 이미지 옅게 변경');
			}else if(pos_ul == -li_width*(li_count-2)){
				$('.btn_next').addClass('on');
			}else{};
		// 클릭 전에 ul의 위치가 마지막사진 위치였다면
		}else if(pos_ul == -li_width*(li_count-1)){};
	});

	// prev 클릭
	$('.btn_prev').click(function(){
		// ul left값+'px'
		var origin = $('.df_slide').css('left');
		// ul left값
		var pos_ul = origin.substr(0,origin.length-2);
		// 클릭 전에 ul의 위치가 첫번째사진 위치가 아니였다면
		if(pos_ul < 0){
			// 만약 animate 중이면 작동하지 않게
			if(!$('.df_slide').is(':animated')){
				// animate 동작이 작동중이 아니였다면 ul 의 left 값에 +(li가로길이)
				$('.df_slide').animate({left:+pos_ul+li_width},300);
			}else{};
			// 클릭 전에 ul의 위치가 마지막 사진이였다면 next 버튼 이미지 진하게 변경');
			if(pos_ul == -li_width*(li_count-1)){
				$('.btn_next').removeClass('on');
			// 클릭 전에 ul의 위치가 첫번째 사진 바로 전이였다면 < 이미지 옅게 변경');
			}else if(pos_ul == -li_width){
				$('.btn_prev').addClass('on');
			}else{};
		// 클릭 전에 ul의 위치가 첫번째사진 위치였다면
		}else if(pos_ul == 0){};
	});
});