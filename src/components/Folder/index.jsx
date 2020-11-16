import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import { openFolder } from '../../utils';

const Folders = ({ folders, onFolderClick }) => (
	<div className="d-flex d-inline maxIndex">
		{
			folders.map(({ icon, name }) => (
				<Draggable scale={1} key={name}>
					<div className="folder">
						<button
							type="button"
							className={`${icon} folder__icon px-2`}
							onClick={(e) => {
								openFolder(e);
								onFolderClick(name);
							}}
						/>
						<span className="folder__name"> {name} </span>
					</div>
				</Draggable>
			))
		}
	</div>
);


Folders.propTypes = {
	folders: PropTypes.arrayOf(PropTypes.any).isRequired,
	onFolderClick: PropTypes.func.isRequired,
};

export default Folders;
