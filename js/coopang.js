$(document).ready(function(){
	// 클릭을 하기 전에 모든 경고문구 hide
	$('.alert_type,.alert_type2,.alert_type3,.alert_type4').hide();
	
	/* 이메일 선택 */
	$('#select_email').change(function(){
		$('#select_email option:selected').each(function () {
			if($(this).val()== '1'){
				$('#inp_email').val('');
				$('#inp_email').attr('disabled',false);
			}else{
				$('#inp_email').val($(this).text());
				$('#inp_email').attr("disabled",flase);
			};
		});
	});
	
	/* 버튼 클릭 */
	$('.btn_new').click(function(){
		// 재클릭시 모든 경고문구 hide
		$('.alert_type,.alert_type2,.alert_type3,.alert_type4').hide();
	
		/* 탐색시작 */
		function frm(idx){
			var inp1 = $('.txt_bx').eq(idx).val();
			return inp1;
		};
		var inp = $('.txt_bx').length;
		for(var i = 0; i < inp; i++){
			if(frm(i)!=''){
				/* 비밀번호 확인 조건문 */
				var pwd1 = $('.txt_bx').eq(2).val();
				var pwd2 = $('.txt_bx').eq(3).val();
				if(pwd1 != '' && pwd2 != ''){
					if(pwd1 != pwd2){
						$('.txt_bx').eq(2).val('');
						$('.txt_bx').eq(3).val('');
						$('.txt_bx').eq(2).focus();
						$('.alert_type2').fadeIn();
						return false;
					};
				};

				/* 셀렉트박스 확인 */
				if(i == 4){
					function sel_c(selidx){
						var select_count = $("select[name=birth]").eq(selidx).val();
						return select_count;
					};
					for(s = 0; s < 3; s++){
						if(sel_c(s)==''){
							$('select[name=birth]').eq(s).focus();
							$('.alert_type4').fadeIn();
							return false;
						};
					};
				};
			}else{
				$('.txt_bx').eq(i).focus();
				$('.alert_type').eq(i).fadeIn();
				return false;
			};
		};

		/* 라디오박스 확인 */
		if($('input:radio[name=rdo_type]:checked').length < 1){
			$('.inp_bx').eq(0).focus();
			$('.alert_type3').fadeIn();
			return false;
		};
		alert('회원가입절차가 완료되었습니다.');
		return false;
	});
});