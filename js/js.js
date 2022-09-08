const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItesm = document.querySelectorAll('.nav__item');

const navBtnBars = document.querySelector('.burger-btn__bars');
const allSection = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const navActive = () => {
	nav.classList.toggle('nav--active');
	navBtnBars.classList.remove('black-bars-color');
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

const handleObserver = () => {
	const currentSection = window.scrollY;
	allSection.forEach((el) => {
		if (
			el.classList.contains('white-section') &&
			el.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add('black-bars-color');
		} else if (
			!el.classList.contains('white-section') &&
			el.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

const handleCurrentYear = () => {
	const newYear = new Date().getFullYear();
	footerYear.innerHTML = newYear;
};

handleCurrentYear();

navBtn.addEventListener('click', navActive);
window.addEventListener('scroll', handleObserver);
