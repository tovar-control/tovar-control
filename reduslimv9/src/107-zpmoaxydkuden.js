function widget_timer(timer)
{
	if (timer <= 0)
	{
		return false;
	}

	// Время в секундах
	var baseTime = timer * 60 * 1000;
	baseTime = parseInt(new Date().getTime() + baseTime);

	var first_start = 0;

	setInterval(function () {
		var endTime = new Date(baseTime);
		var cur = new Date();

		var diff = endTime - cur;
		var millis = diff % 1000;
		diff = Math.floor(diff / 1000);
		var sec = diff % 60;
		if (sec < 10)
			sec = "0" + sec;
		diff = Math.floor(diff / 60);
		var min = diff % 60;
		if (min < 10)
			min = "0" + min;
		diff = Math.floor(diff / 60);
		var hours = diff % 24;
		if (hours < 10)
			hours = "0" + hours;
		var days = Math.floor(diff / 24);
		if (days < 10)
			days = "0" + days;

		//$('.js-timer .day').html(days);

		if (hours < 1 && first_start == 0)
		{
			$('.js-timer .hour').parent().next().remove();
			$('.js-timer .hour').parent().remove();
		} else
		{
			$('.js-timer .hour').html(hours);
		}

		$('.js-timer .minute').html(min);
		$('.js-timer .second').html(sec);

		first_start = 1;
	}, 1000);
}