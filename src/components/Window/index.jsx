import React from 'react';
import PropTypes from 'prop-types';

import Experience from '../Experiance';
import Academics from '../Academics';
import Projects from '../Projects';
import Skills from '../Skills';
import Profile from '../Profile';

import { closeHandler, windowHandlers, openFolder, windowDarkModeCheck } from '../../utils';

import './style.scss';

export default class Window extends React.PureComponent {
    buttonTitle = React.createRef();

    static propTypes = {
        title: PropTypes.string.isRequired,
        onWindowMinimizedClicked: PropTypes.func.isRequired,
        onFolderCloseClicked: PropTypes.func.isRequired,
    };

    // eslint-disable-next-line react/sort-comp

    componentDidMount() {
        this.buttonTitle.current.innerHTML = `${this.props.title}`;
        windowDarkModeCheck();
    }

    componentDidUpdate() {
        this.buttonTitle.current.innerHTML = `${this.props.title}`;
        windowDarkModeCheck();
    }

    // eslint-disable-next-line react/sort-comp
    renderComponent = () => {
        switch (this.props.title) {
            case 'Experience':
                return <Experience/>;
            case 'Academics':
                return <Academics/>;
            case 'Projects':
                return <Projects/>;
            case 'Skills':
                return <Skills/>;
            case 'MyProfile':
                return <Profile/>;
            default:
                return '';
        }
    };

    render() {
        const { title, onWindowMinimizedClicked, onFolderCloseClicked } = this.props;
        return (
            <div className="window-frame d-block" id={title}>
                <button
                    type="button"
                    className="os-button button-red px-0 mouse-default"
                    onClick={() => {
                        closeHandler();
                        openFolder(null);
                        onFolderCloseClicked();
                    }}
                />
                <button
                    type="button"
                    className="os-button button-yellow px-0 mouse-default "
                    onClick={() => windowHandlers()}
                />
                <button
                    type="button"
                    className="os-button button-green px-0 mouse-default"
                    onClick={() => {
                        onWindowMinimizedClicked();
                        closeHandler();
                    }}
                />
                <button
                    type="button"
                    ref={this.buttonTitle}
                    className="window-title mouse-default"
                    onDoubleClick={() => windowHandlers()}
                />
                <div className="window-content">
                    <div className="col-md-12">{this.renderComponent()}</div>
                </div>
            </div>
        );
    }
}
