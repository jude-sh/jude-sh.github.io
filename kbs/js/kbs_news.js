$(document).ready(function() {
	/* img */
	function img_over(){
		$('.imgs').removeClass('on');
	};
	// 이미지 마우스 over
	$('.imgs').mouseover(function(){
		img_over();
		$(this).addClass('on');
		$(this).find('img').stop(1,1).fadeTo(250,'0.4');
	});
	// 이미지 마우스 leave
	$('.imgs').mouseleave(function(){
		img_over();
		$(this).find('img').stop(1,1).fadeTo(250,'1');
	});

	/* 지역국 메뉴 */
	// 마우스 클릭
	$('.local>a').click(function(){
		$(this).parent().toggleClass('on');
		return false;
	});
	// 마우스 leave
	$('.local').mouseleave(function(){
		$('.local').removeClass('on');
	});
	// 마지막 리스트에서 포커스 out
	$('.local_broadcast .last li:last-child').focusout(function(){
		$('.local').removeClass('on');
	});

	/* GNB */
	
	$('.gnb_menu .h_2>a').click(function(){
		if(!$(this).parent().hasClass('on')){
			// 메뉴에 on 클래스가 없다면
			$('.gnb_menu .h_2').removeClass('on');
			$(this).parent().addClass('on');
		}else{
			// 메뉴에 on 클래스가 있다면
			$('.gnb_menu .h_2').removeClass('on');
		};
		return false;
	});
	

	// $('.gnb_menu .h_2 a').focusin(function(){
	// 	$(this).parent().addClass('on');
	// });

	// 메뉴 클릭
	// $('.gnb_menu .h_2>a').click(function(){
	// 	$(this).parent().toggleClass('on');
	// 	if($('.gnb_menu .h_2').hasClass('on')){
	// 		// 메뉴에 on 클래스가 없는데 토글해서 on 생겼다면
	// 		$('.gnb_menu .h_2').removeClass('on');
	// 		$(this).parent().addClass('on');
	// 	}else{};// 메뉴에 on 클래스가 있는데 토글해서 on 없어짐
	// 	return false;
	// });
	// 서브메뉴 마지막 링크 포커스 out
	$('.h_2 .lst_last').focusout(function(){
		$('.gnb_menu .h_2').removeClass('on');
	});
	// 마우스 leave
	$('.gnb_menu').mouseleave(function(){
		$('.gnb_menu .h_2').removeClass('on');
	});

	/* 검색버튼 */
	$('.btn_search').click(function(){
		if($('.inp_search').val() == '' ){
			alert('검색어를 입력하세요.');
		}else{};
	});

	/* 탭메뉴 */
	// 클릭
	$('.cont_tabmenu .tab').click(function(){
		$('.cont_tabmenu ul>li').removeClass('on');
		$(this).parent().addClass('on');
		return false;
	});
	// focusout 시 탭 전환
	$('.cont_tabmenu .last').focusout(function(){
		$('.cont_tabmenu ul>li').removeClass('on');
		$('.cont_tabmenu ul>li:last-child').addClass('on');
	});

	/* bx_slide */
	var li_width = $('.bx_slide li').width();
	var li_count = $('.bx_slide li').length;
	// ul 넓이 지정
	$('.bx_slide').css('width',li_count*li_width+'px');
	// pager 클릭
	$('.pager li').click(function(){
		$('.bx_slide').stop();
		$('.pager li').removeClass('on');
		$(this).addClass('on');
		var origin = $('.bx_slide').css('left');
		var pos_ul = origin.slice(0,-2);
		var pager_num = $('.pager li.on').index();
		for(i=0; i<li_count; ++i){
			if(!$('.bx_slide').is(':animated')){
				if(pager_num == i){
					$('.bx_slide').stop().animate({left:(-li_width)*i+70},500);
				};
			};
		};
		return false;
	});
	// 이전 버튼 클릭
	$('.btn_next').click(function(){
		var origin = $('.bx_slide').css('left');
		var pos_ul = origin.slice(0,-2);
		var pager_num = $('.pager li.on').index();
		if(!$('.bx_slide').is(':animated')){
			if( !(pager_num == li_count-1) ){
				$('.bx_slide').stop().animate({left:pos_ul-li_width},500);
				$('.pager li.on').next().addClass('on');
				$('.pager li.on').prev().removeClass('on');
			};
		};
	});
	// 다음 버튼 클릭
	$('.btn_prev').click(function(){
		var origin = $('.bx_slide').css('left');
		var pos_ul = origin.slice(0,-2);
		var pager_num = $('.pager li.on').index();
		if(!$('.bx_slide').is(':animated')){
			if( !(pager_num == 0) ){
				$('.bx_slide').stop().animate({left:+pos_ul+li_width},500);
				$('.pager li.on').prev().addClass('on');
				$('.pager li.on').next().removeClass('on');
			};
		};
	});

	/* Footer 메뉴 */
	// 메뉴 클릭
	$('.menu_pro .sub_menu>a').click(function(){
		$(this).parent().toggleClass('on');
		if($('.menu_pro .sub_menu').hasClass('on')){
			$('.menu_pro .sub_menu').removeClass('on');
			$(this).parent().addClass('on');
		}else{};
		return false;
	});
	// 마지막 리스트 focusout
	$('.menu_pro dl:last-child li:last-child').focusout(function(){
		$('.menu_pro .sub_menu').removeClass('on');
	});
	// 전체닫기 버튼
	$('.all_close').click(function(){
		$('.menu_pro .sub_menu').removeClass('on');
	});
});