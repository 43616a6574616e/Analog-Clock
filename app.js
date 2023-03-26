const secondsHand = document.querySelector('.seconds-hand');
const minutesHand = document.querySelector('.minutes-hand');
const hoursHand = document.querySelector('.hours-hand');

const getTime = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	secondsHand.style.transform = `rotate(${seconds * 6}deg)`;
	minutesHand.style.transform = `rotate(${minutes * 6}deg)`;
	hoursHand.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
};

setInterval(getTime, 100);
