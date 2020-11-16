import React from 'react';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';

import style from './style';
import Icon from './icons';

const NotificationContainer = ({ icon, message, level, id }) => {
	const notificationSystem = React.useRef();

	React.useEffect(() => {
		const notification = notificationSystem.current;
		notification.addNotification({
			title: Icon[icon],
			message,
			level,
		});
	}, [id]);

	return <NotificationSystem key={id} ref={notificationSystem} style={style}/>;
};

NotificationContainer.propTypes = {
	message: PropTypes.string.isRequired,
	level: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default NotificationContainer;
