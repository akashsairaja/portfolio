import React from 'react';
import { updateDarkMode } from '../../utils';
import './style.scss';

const DarkModeToggle = () => (
	<div className="pull-right mt-55" onClick={() => updateDarkMode()}>
		<div id="toggle" className="">
			<i className="mode-icon fa fa-moon-o text-white px-2"/>
			<div className="toggle-inner"/>
		</div>
	</div>
);


export default DarkModeToggle;
