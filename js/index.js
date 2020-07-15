var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	//播放过程的速度
	speed: 1000,
	autoplay: {
		delay: 2000,//2秒切换一次
		disableOnInteraction: false,
	},//自动滑动
	
	//左右箭头
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
});
