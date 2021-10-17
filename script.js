const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function CalculateDate() {
	//get dates, calculate the difference
	const TargetDate = new Date('December 24 2021 00:00:00');
	const todaysDate = new Date();
	const difference = TargetDate - todaysDate;
		if(difference <= 0) {
		return;
	}

	//convert miliseconds to seconds, minutes, hours, days
	secondsEl.innerHTML = Math.trunc(difference / 1000 % 60);
	minutesEl.innerHTML = Math.trunc(difference / 60000 % 60);
	hoursEl.innerHTML = Math.trunc(difference / 60000 / 60 % 24);
	daysEl.innerHTML = Math.trunc(difference / 60000 / 60 / 24);


	if(secondsEl.innerHTML < 10)
	{
		seconds.innerHTML = '0' + Math.trunc(difference / 1000 % 60);;
	}
	if(minutesEl.innerHTML < 10) {
		minutes.innerHTML = '0' + Math.trunc(difference / 60000 % 60);
	}
	if(hoursEl.innerHTML < 10) {
		hoursEl.innerHTML = '0' + Math.trunc(difference / 60000 / 60 % 24);
	}
	if(daysEl.innerHTML < 10) {
		daysEl.innerHTML = '0' + Math.trunc(difference / 60000 / 60 / 24);
	}

}
setInterval(CalculateDate, 1000);