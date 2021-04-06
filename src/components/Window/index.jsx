import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import Experience from '../Experiance';
import Academics from '../Academics';
import Projects from '../Projects';
import Skills from '../Skills';
import Profile from '../Profile';
import Contribution from '../Contribution';


import './style.scss';

const Window = ({ title, onWindowMinimizedClicked, onFolderCloseClicked, isDarkMode }) => {

	const [windowSize, updateWindowSize] = React.useState(false);

	const renderComponent = () => {
		switch (title) {
			case 'Experience':
				return <Experience/>;
			case 'Academics':
				return <Academics/>;
			case 'Projects':
				return <Projects/>;
			case 'Skills':
				return <Skills/>;
			case 'MyProfile':
				return <Profile isDarkMode={isDarkMode}/>;
			case 'Contribution':
				return <Contribution isDarkMode={isDarkMode}/>;
			default:
				return null;
		}
	};

	const windowClass = windowSize ? 'min-vw-vh-90' : '';

	return (
		<Draggable>
			<div className=" px-0 py-0 position-absolute window-body">
				<div className={`window-frame d-block ${windowClass} ${isDarkMode ? 'dark-mode' : ''}`}
					 onDoubleClick={() => updateWindowSize(!windowSize)}>
					<button
						type="button"
						className="os-button button-red px-0 mouse-default"
						onClick={() => onFolderCloseClicked()}
					/>
					<button type="button" className="os-button button-yellow px-0 mouse-default "
							onClick={() => updateWindowSize(!windowSize)}/>
					<button
						type="button"
						className="os-button button-green px-0 mouse-default"
						onClick={() => onWindowMinimizedClicked()}
					/>
					<button type="button" className="window-title mouse-default">
						{title}
					</button>
					<div className="window-content">
						<div className="col-md-12">{renderComponent()}</div>
					</div>
				</div>
			</div>
		</Draggable>
	);
};

Window.propTypes = {
	title: PropTypes.string.isRequired,
	onWindowMinimizedClicked: PropTypes.func.isRequired,
	onFolderCloseClicked: PropTypes.func.isRequired,
	isDarkMode: PropTypes.bool.isRequired,
};

export default Window;