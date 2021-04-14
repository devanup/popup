/*
const handleCancel = () => {
	const element = document.getElementById('bottom-modal');
	const overlay = document.getElementById('overlay');
	const lightBtn = document.querySelector('.light-btn');
	const primaryBtn = document.querySelector('.primary-btn');

	lightBtn.style.zIndex = '-1';
	primaryBtn.style.zIndex = '-1';

	element.classList.add('slide-in-br');
	element.classList.remove('slide-out-br');
	element.classList.remove('slide-out-tr');

	overlay.style.display = 'block';
	overlay.classList.add('overlay-fade-in');
	overlay.classList.remove('overlay-fade-out');

	setTimeout(() => {
		lightBtn.style.zIndex = '1';
		primaryBtn.style.zIndex = '1';
		element.classList.remove('slide-in-br');
		element.classList.add('slide-out-br');
		overlay.style.display = 'none';
		overlay.classList.remove('overlay-fade-in');
		overlay.classList.add('overlay-fade-out');
	}, 2000);
};

const handleAccept = () => {
	const element = document.getElementById('top-modal');
	const overlay = document.getElementById('overlay');
	const lightBtn = document.querySelector('.light-btn');
	const primaryBtn = document.querySelector('.primary-btn');

	lightBtn.style.zIndex = '-1';
	primaryBtn.style.zIndex = '-1';

	element.classList.remove('slide-out-tr');
	element.classList.remove('slide-out-br');
	element.classList.add('slide-in-tr');

	overlay.style.display = 'block';
	overlay.classList.add('overlay-fade-in');
	overlay.classList.remove('overlay-fade-out');

	setTimeout(() => {
		lightBtn.style.zIndex = '1';
		primaryBtn.style.zIndex = '1';
		element.classList.remove('slide-in-tr');
		element.classList.add('slide-out-tr');
		overlay.style.display = 'none';
		overlay.classList.remove('overlay-fade-in');
		overlay.classList.add('overlay-fade-out');
	}, 2000);
};

const pageLoad = () => {
	const overlay = document.getElementById('overlay');
	const lightBtn = document.querySelector('.light-btn');
	const primaryBtn = document.querySelector('.primary-btn');
	overlay.style.display = 'none';
	lightBtn.style.zIndex = '1';
	primaryBtn.style.zIndex = '1';
};
*/
