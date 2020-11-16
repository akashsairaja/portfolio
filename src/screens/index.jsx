import React from 'react';
import Draggable from 'react-draggable';

import DockHandle from '../components/DockHandle';
import Window from '../components/Window';
import Folders from '../components/Folder';
import DarkModeToggle from '../components/DarkMode';

import images from '../images';

import { folders, initialState, actionTypes } from './constants';
import reducer from './reducer';

const Portfolio = () => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	React.useEffect(() => {
		window.localStorage.setItem('darkMode', false);
	}, []);

	const onFolderClicked = (activeFolderName) => dispatch({
		type: actionTypes.FOLDER_IS_OPENED,
		payload: { activeFolderName },
	});

	const onWindowMinimizedClicked = () => dispatch({ type: actionTypes.FOLDER_MINIMIZED });


	const onFolderCloseClicked = () => dispatch({ type: actionTypes.FOLDER_CLOSED });

	const { activeFolderName, isOpened, minimized } = state;

	return (
		<div
			className="container-fluid graph overflow-hidden"
			id="wallpaper"
			style={{ backgroundImage: `url(${images.wallpaper})` }}
		>
			<DarkModeToggle/>
			<div className="row">
				<Folders folders={folders} onFolderClick={onFolderClicked}/>
				{
					isOpened && (
						<Draggable>
							<div className="col-xl-12 col-md-12 px-0 py-0 position-absolute">
								<Window
									title={activeFolderName}
									onFolderCloseClicked={onFolderCloseClicked}
									onWindowMinimizedClicked={onWindowMinimizedClicked}
								/>
							</div>
						</Draggable>
					)
				}
				<DockHandle minimized={minimized} activeFolderName={activeFolderName}/>
			</div>
		</div>
	);
};

export default Portfolio;
