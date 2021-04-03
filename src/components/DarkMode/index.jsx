import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const DarkModeToggle = ({ onToggleChecked, isDarkMode }) => {

	const [state, updateState] = React.useState({
		toggle: isDarkMode ? 'toggle-active' : '',
		icon: isDarkMode ? 'fa-sun-o' : 'fa-moon-o',
		darkMode: isDarkMode,
	});

	const { toggle, icon } = state;

	const modifyToggle = () => {
		const flag = toggle === '';
		updateState({
			toggle: flag ? 'toggle-active' : '',
			icon: flag ? 'fa-sun-o' : 'fa-moon-o',
			darkMode: flag,
		});
		window.localStorage.setItem('darkMode', flag.toString());
		onToggleChecked();
	};

	return (
		<div className="pull-right mt-55" onClick={() => modifyToggle()}>
			<div id="toggle" className="">
				<i className={`mode-icon fa ${icon} text-white px-2`}/>
				<div className={'toggle-inner '.concat(toggle)}/>
			</div>
		</div>
	);
};


DarkModeToggle.propTypes = {
	onToggleChecked: PropTypes.func.isRequired,
};

export default React.memo(DarkModeToggle);
