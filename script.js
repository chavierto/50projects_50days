const panels = document.querySelectorAll('.panel');
// querySelectorAll selects all items (.panels in this case) and adds them to a Nodelist

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClasses();
		panel.classList.add('active');
	});
});

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
}
