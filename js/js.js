const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItesm = document.querySelectorAll('.nav__item');

const navActive = () => {
	nav.classList.toggle('nav--active');

	allNavItesm.forEach((el) => {
		el.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItesm.forEach((el) => {
		el.classList.toggle('nav-items-animation');
		el.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

navBtn.addEventListener('click', navActive);
