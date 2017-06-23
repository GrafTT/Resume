window.onload = function () {
		var width = 1;
		var elem = document.getElementsByClassName("myBar");
		var maxValue = document.getElementsByClassName('max-value'); 

		for(var i = 0; i < elem.length; i++) {
			var params = {
				elem: elem[i],
				maxElem: maxValue[i],
				width: width,
				interval: null
			};
			params.interval = setInterval(frame, 10, params);
		}

		function frame(aParams) {
			if (aParams.width >= aParams.maxElem.dataset.max) {
				clearInterval(aParams.interval);
			} 
			else {
				aParams.width++;
				aParams.elem.style.backgroundColor = '#fff';
				aParams.elem.style.width = aParams.width + '%';
				aParams.maxElem.innerHTML = aParams.width + '%';
			}
		}
};

$(document).ready(function () {
	//Menu button on click event
	$('.mobile-nav-button').on('click', function() {
		// Toggles a class on the menu button to transform the burger menu into a cross
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  
		// Toggles a class that slides the menu into view on the screen
		$('.mobile-menu').toggleClass('mobile-menu--open');
		return false;
	});


	$("#contanct").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});


	$(".nav-bar").on("click","a", function (event) {
				//отменяем стандартную обработку нажатия по ссылке
				event.preventDefault();
				//забираем идентификатор бока с атрибута href
				var id  = $(this).attr('href'),
				//узнаем высоту от начала страницы до блока на который ссылается якорь
						top = $(id).offset().top;
				//анимируем переход на расстояние - top за 1500 мс
				$('body,html').animate({scrollTop: top}, 1500);
	 });

	$(".mobile-menu").on("click","a", function (event) {
				//отменяем стандартную обработку нажатия по ссылке
				event.preventDefault();
				//забираем идентификатор бока с атрибута href
				var id  = $(this).attr('href'),
				//узнаем высоту от начала страницы до блока на который ссылается якорь
						top = $(id).offset().top;
				//анимируем переход на расстояние - top за 1500 мс
				$('body,html').animate({scrollTop: top}, 1500);
	 });



	// 	$(".gallery").lightBox({
			
	// 		overlayBgColor: '#FFF',
	// 		overlayOpacity: 0.6,
	// 		imageLoading: '../img/images/loading.gif',
	// 		imageBtnClose: '../img/images/close.gif',
	// 		imageBtnPrev: '../img/images/prev.gif',
	// 		imageBtnNext: '../img/images/next.gif',
	// 		containerResizeSpeed: 350,
	// 		txtImage: 'Изображение',
	// 		txtOf: 'из'
	// });



	var groups = {};
	$('.gallery').each(function() {
		var id = parseInt($(this).attr('data-group'), 10);
		if(!groups[id]) {
			groups[id] = [];
		} 
		groups[id].push( this );
	});

	$.each(groups, function() {
		$(this).lightBox({
			
			overlayBgColor: '#FFF',
			overlayOpacity: 0.6,
			imageLoading: '../img/images/loading.gif',
			imageBtnClose: '../img/images/close.gif',
			imageBtnPrev: '../img/images/prev.gif',
			imageBtnNext: '../img/images/next.gif',
			containerResizeSpeed: 350,
			txtImage: 'Изображение',
			txtOf: 'из'
	});
	});


});
