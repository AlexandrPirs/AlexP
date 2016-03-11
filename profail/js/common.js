$(document).ready(function() {

	//profail gallery
	$("#portfolio_grid").mixItUp();


	/*------------------------------------------------------------------------------------------------------------------*/

	//collaps
	$(".s_portfolio ul li").click(function(){
		$(".s_portfolio ul li").removeClass("active");
		$(this).addClass("active");
	});

	/*------------------------------------------------------------------------------------------------------------------*/

	function heightDetect(){
		//Делаем высоту хедера по высоте экрана.
		$(".main_head").css("height", $(window).height());
	}

	heightDetect()

	//Когда делаем resize происходит детект
	$(window).resize(function(){
		
	});

	//popup magnatic
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	/*-----------------------------------------------------------------------------------*/

	//Animated
	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

	$(".section_header h1").animated("fadeInUp", "fadeOutDown");
	$(".section_header .s_descr").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");		
	
	/*-----------------------------------------------------------------------------------------------*/

	//button animation toggle_mnu
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	//Закрытие меню при нажатии на пункт меню.
	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	})

	/*-----------------------------------------------------------------*/

	//toggle_mnu
	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").removeClass("h_opacity")
			$(".top_mnu").fadeOut(600);
		} else {
			$(".top_text").addClass("h_opacity")
			$(".top_mnu").fadeIn(600);	
		};
	});

	/*-----------------------------------------------------------------*/

	//Загрузка сайта
	$(window).load(function() { 
		$(".loader_inner").fadeOut(); 
		$(".loader").delay(400).fadeOut("slow"); 
		})	
	});