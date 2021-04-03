import React from 'react';
import PropTypes from 'prop-types';

const DockHandle = ({ minimized, openClosedWindow }) => (
	<div className="col-md-12 fixed-bottom w-100 ml-auto" id="dockHandle">
		<div className="dock__handle">
			<ul className="list-group list-group-horizontal dock__handle__icons">
				<li className="list-group-item bg-transparent border-0 dock__handle__icon">
					<a rel="noopener noreferrer" target="_blank" href="https://github.com/akashsairaja">
						<i className="fa fa-github fa-2x"/>
					</a>
				</li>
				<li className="list-group-item bg-transparent border-0 dock__handle__icon">
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.linkedin.com/in/akashsairaja/"
					>
						<i className="fa fa-linkedin-square fa-2x"/>
					</a>
				</li>

				{
					minimized && (
						<li
							className="list-group-item bg-transparent border-0 dock__handle__icon"
							onClick={() => openClosedWindow()}
						>
							<i className="fa fa-folder-open fa-2x"/>
						</li>
					)
				}

				<li className="list-group-item bg-transparent border-0 dock__handle__icon">
					<i className="fa fa-heart fa-2x dock__handle__animated_heart "/>
				</li>

				<li className="list-group-item bg-transparent border-0 dock__handle__icon">
					<a rel="noopener noreferrer" target="_blank" href="https://facebook.com/akashsai.R">
						<i className="fa fa-facebook-square fa-2x"/>
					</a>
				</li>

				<li className="list-group-item bg-transparent border-0 dock__handle__icon">
					<a rel="noopener noreferrer" target="_blank" href="https://twitter.com/akashsairaja">
						<i className="fa fa-twitter-square fa-2x"/>
					</a>
				</li>
			</ul>
		</div>
	</div>
);

DockHandle.propTypes = {
	minimized: PropTypes.bool.isRequired,
	openClosedWindow: PropTypes.func.isRequired,
};

export default React.memo(DockHandle);
