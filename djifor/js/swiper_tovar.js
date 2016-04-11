//initialize swiper when document ready  
var galleryTop = new Swiper('.gallery-top', {
	loop: true,
	spaceBetween: 10,
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
	direction: 'vertical',
	loop: true,
	spaceBetween: 10,
	centeredSlides: true,
	slidesPerView: 'auto',
	touchRatio: 0.2,
	slideToClickedSlide: true
});
galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;