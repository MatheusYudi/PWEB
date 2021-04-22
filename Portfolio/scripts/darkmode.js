const toggleDarkMode = () => {
	const toggledDark = document.body.classList.toggle('w3-black');
	document.body.classList.toggle('w3-light-grey');

	document.getElementById('about').classList.toggle('w3-text-grey');
	document.getElementById('about').classList.toggle('w3-text-white');

	document.getElementById('contact').classList.toggle('w3-text-grey');
	document.getElementById('contact').classList.toggle('w3-text-white');

	document.getElementsByTagName('nav')[0].classList.toggle('w3-black');

	Array.from(document.getElementsByTagName('h2')).forEach((element) => element.classList.toggle('w3-text-black'));
	Array.from(document.getElementsByTagName('h2')).forEach((element) => element.classList.toggle('w3-text-white'));
};

const activateLightMode = () => {
	document.body.classList.add('w3-light-grey');
	document.getElementById('about').classList.add('w3-text-grey');
	document.getElementById('contact').classList.add('w3-text-grey');
	Array.from(document.getElementsByTagName('h2')).forEach((element) => element.classList.add('w3-text-black'));

	document.body.classList.remove('w3-black');
	document.getElementById('about').classList.remove('w3-text-white');
	document.getElementById('contact').classList.remove('w3-text-white');
	Array.from(document.getElementsByTagName('h2')).forEach((element) => element.classList.remove('w3-text-white'));

	showMainContent();
};

const activateDarkMode = () => {
	document.body.classList.remove('w3-light-grey');
	document.getElementById('about').classList.remove('w3-text-grey');
	document.getElementById('contact').classList.remove('w3-text-grey');
	Array.from(document.getElementsByTagName('h2')).forEach((element) => element.classList.remove('w3-text-black'));

	document.body.classList.add('w3-black');
	document.getElementById('about').classList.add('w3-text-white');
	document.getElementsByTagName('nav')[0].classList.add('w3-black');
	document.getElementById('contact').classList.add('w3-text-white');
	Array.from(document.getElementsByTagName('h2')).forEach((element) => element.classList.add('w3-text-white'));

	showMainContent();
};

const showMainContent = () => {
	document.getElementById('themeSelection').hidden = true;
	document.getElementById('main').hidden = false;
};
