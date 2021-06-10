const toggleDarkMode = () => {
	document.body.classList.toggle('w3-black');
	document.body.classList.toggle('w3-light-gray');

	document.getElementById('about').classList.toggle('w3-text-gray');
	document.getElementById('about').classList.toggle('w3-text-light-gray');

	document.getElementById('contact').classList.toggle('w3-text-gray');
	document.getElementById('contact').classList.toggle('w3-text-light-gray');

	document.getElementsByTagName('nav')[0].classList.toggle('w3-black');

	Array.from(document.getElementsByTagName('h2')).forEach((element) => element.classList.toggle('w3-text-black'));
	Array.from(document.getElementsByTagName('h2')).forEach((element) => element.classList.toggle('w3-text-light-gray'));
};

const activateLightMode = () => {
	document.body.classList.add('w3-light-gray');
	document.getElementById('about').classList.add('w3-text-gray');
	document.getElementById('contact').classList.add('w3-text-gray');
	Array.from(document.getElementsByTagName('h2')).forEach((element) => element.classList.add('w3-text-black'));

	document.body.classList.remove('w3-black');
	document.getElementById('about').classList.remove('w3-text-light-gray');
	document.getElementById('contact').classList.remove('w3-text-light-gray');
	Array.from(document.getElementsByTagName('h2')).forEach((element) => element.classList.remove('w3-text-light-gray'));

	showMainContent();
};

const activateDarkMode = () => {
	document.body.classList.remove('w3-light-gray');
	document.getElementById('about').classList.remove('w3-text-gray');
	document.getElementById('contact').classList.remove('w3-text-gray');
	Array.from(document.getElementsByTagName('h2')).forEach((element) => element.classList.remove('w3-text-black'));

	document.body.classList.add('w3-black');
	document.getElementById('about').classList.add('w3-text-light-gray');
	document.getElementsByTagName('nav')[0].classList.add('w3-black');
	document.getElementById('contact').classList.add('w3-text-light-gray');
	Array.from(document.getElementsByTagName('h2')).forEach((element) => element.classList.add('w3-text-light-gray'));

	showMainContent();
};

const showMainContent = () => {
	document.getElementById('theme-selection').hidden = true;
	document.getElementById('main-content').hidden = false;
};
