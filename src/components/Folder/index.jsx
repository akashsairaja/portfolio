import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import config from '../../config';

const Folders = ({ onFolderClick, activeFolderName }) => {

	const [folderStatus, setUpdateFolderStatus] = React.useState(activeFolderName);

	return (
		<div className="d-flex d-inline maxIndex">
			{
				config.folders.map(({ icon, name }) => (
					<Draggable key={name}>
						<div className="folder">
							<button
								type="button"
								className={`${icon} ${name === folderStatus ? 'fa-folder-open' : ''} folder__icon px-2`}
								onClick={() => {
									onFolderClick(name);
									setUpdateFolderStatus(name);
								}}
							/>
							<span className="folder__name"> {name} </span>
						</div>
					</Draggable>
				))
			}
		</div>
	);
};


Folders.propTypes = {
	onFolderClick: PropTypes.func.isRequired,
};

export default Folders;
