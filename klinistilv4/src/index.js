//для клонирования блока в попап используются следующие айдишники
// #cloneThis - для десктопа
// #cloneMobileThis - для мобильного (если нужно)
//брейкпоинт для переключения попапа при необходимости дефолт значение = 1000

// в случае, если мы не клонируем форму, а верстаем попап произвольно,
// то делать это необходимо в контейнере с классом .ever-popup-build
// false (показывать контейнер) / true (не показывать контейнер)




//.ever-popup-btn - класс для для открытия попапа

//проверка кода
//.check__field - класс для поля проверки кода
//.check__btn - класс для кнопки провеки кода
//.check__result - класс для контейнера с результатом проверки кода

//таймер
//для вывода счетчика таймера используется 3 контенера (часы, минуты, секунды)
//.hours класс для вывода часов
//.minutes класс для вывода минут
//.seconds класс для вывода секунд

(function () {

	function initiate() {

		var breakpoint = 1000,
				desktop = document.querySelector('#cloneThis'),
				mobile = document.querySelector('#cloneMobileThis');











		function modalPosition(screenHeight) {
			//расчет ширины и вывод ее в html, функция вызывается при загрузке страницы, а так же при ресайзе
			var container = document.querySelector('.ever-popup  .ever-popup__inner');
			if (container) {

				var desktop = document.querySelector('#cloneThis'),
						mobile = document.querySelector('#cloneMobileThis');


				if (desktop) {
					checkPosition(desktop, container, screenHeight);
					container.style.width = desktop.offsetWidth + 'px';
				} else if (mobile && window.innerWidth <= breakpoint) {
					checkPosition(mobile, container, screenHeight);
					container.style.width = mobile.offsetWidth + 'px';
				}
			}
		}










		function init() {

			var desktopPopup = document.querySelector('#cloneThis'),
					mobilePopup = document.querySelector('#cloneMobileThis');

			var h = document.querySelector('.hours'), m = document.querySelector('.minutes'),
					s = document.querySelector('.seconds');

			if (h && m && s) {
				// если все значения (часы/минуты/секунды) сущесвтуют, тогда срабатывает таймер
				initializeTimer();
			}

			// рабоатет если у нас есть класс .check__btn
			var checkBtn = document.querySelector(".check__btn");
			checkBtn && checkBtn.addEventListener('click', checkCode);
		}

		// при документ реди вызывается функция init, описаная выше
		document.addEventListener('DOMContentLoaded', init);

		window.addEventListener('resize', function () {
			//при ресайзе пересчитываем позиционирование модального окна
			modalPosition(window.innerHeight);
		});

		function initializeTimer() {

			if (!localStorage.getItem("heytimer")) {
				var time = {
					hours: 0,
					minutes: 40,
					seconds: 0
				}, different = false;

				time = time.hours * 3600 + time.minutes * 60 + time.seconds;

				localStorage.setItem("time", time);
				localStorage.setItem("heytimer", true);
				localStorage.setItem("different", different);
			}

			timerSettings();
		}

		function timerSettings() {
			var time = localStorage.getItem('time'),
					different = localStorage.getItem('different') === "true",
					hours = parseInt(time / 3600, 10),
					minutes = parseInt((time - hours * 3600) / 60, 10),
					seconds = parseInt(time % 60, 10);

			minutes = minutes < 10 ? "0" + minutes : "" + minutes;
			seconds = seconds < 10 ? "0" + seconds : "" + seconds;
			hours = hours < 10 ? "0" + hours : "" + hours;

			var hoursHTML = document.getElementsByClassName("hours");
			var minutesHTML = document.getElementsByClassName("minutes");
			var secondsHTML = document.getElementsByClassName("seconds");

			if (--time < 0) {
				localStorage.removeItem("heytimer");
				return;
			}
			if (different) {
				seconds = seconds.split("");
				minutes = minutes.split("");
				hours = hours.split("");

				doubleFilling(hoursHTML, hours);
				doubleFilling(minutesHTML, minutes);
				doubleFilling(secondsHTML, seconds);
			} else {
				filling(hoursHTML, hours);
				filling(minutesHTML, minutes);
				filling(secondsHTML, seconds);
			}

			localStorage.setItem("time", time);
			setTimeout(timerSettings, 1000);
		}

		function filling(obj, value) {
			for (var i = 0; i < obj.length; i++) {
				obj[i].innerHTML = value;
			}
		}

		function doubleFilling(obj, value) {
			for (var i = 0; i < obj.length; i++) {
				obj[i].innerHTML = value[i % 2];
			}
		}
	}

	initiate();

})();

$(document).ready(function () {


	$('[data-toggle="scroll"]').on("click", function (e) {
		var anchor = $(this).attr("data-id");
		var bodyLeft = $("body").css("left");
		if (bodyLeft == "200px") {
			$("body").animate({
				left: "-=200px"
			}, 500);
		}
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top
		}, 1000);
		e.preventDefault();
	});
});