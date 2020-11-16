import images from '../images';


const windowHandlers = (e = null) => {
	const minMax = document.querySelectorAll('.window-frame');
	minMax.forEach((item) => {
		if (item.classList.contains('min-vw-vh-90')) {
			item.classList.remove('min-vw-vh-90');
		} else {
			item.classList.add('min-vw-vh-90');
		}
	});
	if (e) {
		e.stopPropagation();
		e.preventDefault();
	}
};

const closeHandler = () => {
	const minMax = document.querySelectorAll('.window-frame');
	minMax.forEach((item) => {
		if (item.classList.contains('d-block')) {
			item.classList.remove('d-block');
			item.classList.add('d-none');
		} else {
			item.classList.remove('d-none');
			item.classList.add('d-block');
		}
	});
};

const openFolder = (e = null) => {
	const folders = document.querySelectorAll('.folder__icon');
	folders.forEach((folder) => {
		folder.classList.remove('fa-folder-open');
		folder.classList.add('fa-folder');
	});
	if (e != null) e.currentTarget.classList.add('fa-folder-open');
};

const openFromList = (id) => {
	const window = document.getElementById(id);
	window.classList.remove('d-none');
	window.classList.add('d-block');
};

const updateDarkMode = () => {
	const { style } = document.body;
	const toggle = document.querySelector('.toggle-inner');
	const icon = document.querySelector('.mode-icon');
	const wallPaper = document.getElementById('wallpaper');
	const profile = document.getElementById('profile');

	if (toggle.classList.contains('toggle-active')) {
		window.localStorage.setItem('darkMode', 'false');
		if (profile !== null) {

		}
		toggle.classList.remove('toggle-active');
		// classList.remove('dark-mode');
		style.color = 'inherit';
		style.backgroundColor = 'white';
		icon.classList.remove('fa-sun-o');
		icon.classList.add('fa-moon-o');
		wallPaper.style = `background-image: url("${images.wallpaper}") !important;`;
	} else {
		toggle.classList.add('toggle-active');
		window.localStorage.setItem('darkMode', 'true');
		// classList.add('dark-mode');
		icon.classList.add('fa-sun-o');
		icon.classList.remove('fa-moon-o');
		style.backgroundColor = 'black';
		style.color = 'black';
		wallPaper.style = `background-image: url("${images.wallpaperBE}") !important;`;
	}
	windowDarkModeCheck();
};

const windowDarkModeCheck = () => {
	['Experience', 'Academics', 'Projects', 'Skills', 'MyProfile', 'dockHandle'].forEach((id) => {
		const element = document.getElementById(id);
		if (element !== null) {
			if (window.localStorage.getItem('darkMode') === 'true') {
				element.style = 'filter: invert(100%) hue-rotate(180deg)';
			} else {
				element.style = 'filter: none';
			}
		}
	});

	const profileImg = document.getElementById('profile');
	if (profileImg !== null) {
		if (window.localStorage.getItem('darkMode') === 'true') {
			profileImg.src = images.profileBE;
			profileImg.style = 'filter: invert(100%) hue-rotate(180deg)';
		} else {
			profileImg.style = 'filter: none';
			profileImg.src = images.profilePic;
		}
	}
};


export { windowHandlers, closeHandler, openFolder, openFromList, updateDarkMode, windowDarkModeCheck };
