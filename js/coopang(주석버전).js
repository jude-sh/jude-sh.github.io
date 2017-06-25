$(document).ready(function(){
	$('.alert_type,.alert_type2,.alert_type3,.alert_type4').hide(); // 클릭을 하기 전에 모든 경고문구 hide
	/* 이메일 선택 */
	$('#select_email').change(function(){
		$('#select_email option:selected').each(function () {
			if($(this).val()== '1'){ //직접입력일 경우
				$('#inp_email').val(''); //값 초기화
				$('#inp_email').attr('disabled',false); //활성화
			}else{ //직접입력이 아닐경우
				$('#inp_email').val($(this).text()); //선택값 입력
				$('#inp_email').attr("disabled",flase); //비활성화
			};
		});
	});
	/* 버튼 클릭 */
	$('.btn_new').click(function(){
		$('.alert_type,.alert_type2,.alert_type3,.alert_type4').hide(); // 재클릭시 모든 경고문구 hide
		/* 텍스트박스 확인 */
		function frm(idx){
			var inp1 = $('.txt_bx').eq(idx).val();
			return inp1;
		};
		var inp = $('.txt_bx').length;// input의 클래스의 길이(갯수?)
		for(var i = 0; i < inp; i++){
			if(frm(i)!=''){ // (input).txt_bx 클래스가 걸린 곳에 벨류값이 뭔가 있다면
				/* 비밀번호 확인 조건문 */
				var pwd1 = $('.txt_bx').eq(2).val(); // 비밀번호 1번째칸
				var pwd2 = $('.txt_bx').eq(3).val(); // 비밀번호 2번째칸
				if(pwd1 != '' && pwd2 != ''){ // 비밀번호 창 2개가 채워져있다면
					if(pwd1 != pwd2){ // 비밀번호가 일치하지 않는다면
						$('.txt_bx').eq(2).val('');
						$('.txt_bx').eq(3).val('');
						$('.txt_bx').eq(2).focus(); // 3번째 input박스에 focus
						$('.alert_type2').fadeIn(); // 비밀번호 불일치 경고문구 fadeIn
						return false; // 경고문이 뜬 곳에서 멈춤.
					};
				};
				/* 셀렉트박스 확인 */
				if(i == 4){
					function sel_c(selidx){
						var select_count = $("select[name=birth]").eq(selidx).val();
						return select_count;
					};
					for(s = 0; s < 3; s++){
						if(sel_c(s)==''){ // 셀렉트박스 벨류값이 비어있다면
							$('select[name=birth]').eq(s).focus(); // 네임이 birth인 s번째(s) 셀렉트에 포커스
							$('.alert_type4').fadeIn(); // 셀렉트 경고문 fadeIn
							return false; // 경고문이 뜬 곳에서 멈춤.
						};
					};
				};
			}else{ // (input) .txt_bx 클래스가 걸린 벨류값이 비어있다면
				$('.txt_bx').eq(i).focus(); // 비어있는곳(i) input클래스에 포커스
				$('.alert_type').eq(i).fadeIn(); // 경고문구 fadeIn
				return false; // 경고문이 뜬 곳에서 멈춤.
			};
		};
		/* 라디오박스 확인 */
		if($('input:radio[name=rdo_type]:checked').length < 1){// 네임이 rdo_type인 라디오박스의 갯수가 0이면
			$('.inp_bx').eq(0).focus(); // .inp_bx들중 첫번째 클래스에 포커스
			$('.alert_type3').fadeIn(); // 라디오박스 경고문구 fadeIn
			return false; // 경고문이 뜬 곳에서 멈춤.
		};
		alert('회원가입절차가 완료되었습니다.');
		return false; // .btn_new 클릭했을 때 원래 가지고 있던 속성(버튼)을 없앰
	});
});