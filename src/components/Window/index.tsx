import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';

import Experience from '../Experiance';
import Academics from '../Academics';
import Projects from '../Projects';
import Skills from '../Skills';
import Profile from '../Profile';
import Contribution from '../Contribution';

interface WindowProps {
  title: string;
  onWindowMinimizedClicked: () => void;
  onFolderCloseClicked: () => void;
  isDarkMode: boolean;
}

const Window: React.FC<WindowProps> = ({ title, onWindowMinimizedClicked, onFolderCloseClicked, isDarkMode }) => {
  const [windowSize, updateWindowSize] = useState<boolean>(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  const renderComponent = (): React.ReactNode => {
    switch (title) {
      case 'Experience':
        return <Experience />;
      case 'Academics':
        return <Academics />;
      case 'Projects':
        return <Projects />;
      case 'Skills':
        return <Skills />;
      case 'MyProfile':
        return <Profile isDarkMode={isDarkMode} />;
      case 'Contribution':
        return <Contribution isDarkMode={isDarkMode} />;
      default:
        return null;
    }
  };

  const windowClass = windowSize ? 'min-vw-vh-90' : '';

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className=" px-0 py-0 position-absolute window-body">
        <div
          className={`window-frame d-block ${windowClass} ${isDarkMode ? 'dark-mode' : ''}`}
          onDoubleClick={() => updateWindowSize(!windowSize)}
        >
          <button
            type="button"
            className="os-button button-red px-0 mouse-default"
            onClick={() => onFolderCloseClicked()}
          />
          <button
            type="button"
            className="os-button button-yellow px-0 mouse-default"
            onClick={() => updateWindowSize(!windowSize)}
          />
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

export default Window;
