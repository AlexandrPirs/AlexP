$(document).ready(function() {

	$(document).ready(function(){
		$('.bxslider').bxSlider();

	});


    $(document).ready(function(){
        $('.img_call').click(function(){
            $('.call_icon').slideToggle("slow");
        });
    });

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$('.form-submit').click(function(){

		var form = $(this).closest('form')
		var data = form.serialize()
		var action = form.attr('action')

		$.post(action, {data: data}, function(response) {

			if(response == 1) {

				$.fancybox.close();

				$.fancybox.open({
					'href' : '#success-message',
					maxWidth	: 400,
					maxHeight	: 235,
					fitToView	: false,
					width		: '70%',
					height		: '70%',
					autoSize	: false,
				});

			}

		})


	})

});