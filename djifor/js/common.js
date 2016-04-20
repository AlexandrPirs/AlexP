$(function() {

	
	var isSearch = -1;
	var isCall = -1;

	//search
	$('header .header_icons .search a').click(function () {
		if (isCall > 0) {
			$("header .call_nav").toggle();
			$("header .search_nav").toggle();
			$("header .search_nav input").css("width", "109%");
			isCall *= -1;
		} else {
			$("header nav").toggle();
			$("header .search_nav").toggle();
			$("header .search_nav input").css("width", "109%");
			isSearch *= -1;
			console.log('isSearch = ' + isSearch);
		}

	});

	//call
	$('header .header_icons .call a').click(function () {
		if (isSearch > 0) {
			$("header .call_nav").toggle();
			$("header .search_nav").toggle();
			$("header .search_nav input").css("width", "109%");
			isSearch *= -1;
		} else {
			$("header nav").toggle();
			$("header .call_nav").toggle();
			isCall *= -1;
			console.log('isCall = ' + isCall);
		}

	});

	//

	//form_basket
	$(".popup_basket").magnificPopup();


	//delete_item_product
	$(".item_product_basket .delete_item_product").click(function(){
		$(this).parents(".item_product_basket").animate({ opacity: "hide" }, "slow");
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
