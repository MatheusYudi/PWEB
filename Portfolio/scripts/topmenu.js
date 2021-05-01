const toggleTopMenuOptions = (element) => {
	const options = element.parentNode.querySelectorAll('a.topmenu__item');

	options.forEach(element => element.toggleAttribute('hidden'));
};
