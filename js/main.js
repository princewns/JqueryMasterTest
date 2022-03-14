$(function(){
	// 슬릭 추가 및 속성 변경
	/* 직접 작성할 공간 */
	$(".main_visual_slide").slick({
		autoplay : true,
		autoplaySpeed : 3000,
		dots : true,
	});



	// 탭 메뉴 숨기기 및 활성화
	$("#notice_tab_wrap h4 a").on("click", tabmenu);
	function tabmenu(e) {
		/* 직접 작성할 공간 */
		e.preventDefault();
		const $ts = $(this); // a 버튼
		const $next = $ts.parent().next(); // a 버튼의 부모 h4의 형제인 div를 들고옴
		if($next.is(":hidden")) { // displat가 none인지 확인
			//모든 버튼의 색을 회색으로 변경
			$("#notice_tab_wrap h4 a").removeClass("on");
			//자신의 버튼을 활성화
			$ts.addClass("on");
			// 모든 div 내용을 숨김
			$("#notice_tab_wrap > div:visible").hide();
			//자신의 div 내용을 보임
			$next.show();

		}

	}

});