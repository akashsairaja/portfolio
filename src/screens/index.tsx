import React, { useState } from 'react';

import DarkModeToggle from '../components/DarkMode';
import DockHandle from '../components/DockHandle';
import Window from '../components/Window';
import Folders from '../components/Folder';
import config from '../config';

import { initialState, AppState } from './constants';

const images = config.images;

const Portfolio: React.FC = () => {
  const [state, updateState] = useState<AppState>(initialState);

  const onFolderClicked = (activeFolderName: string): void => updateState({
    ...state,
    isOpened: true,
    minimized: false,
    activeFolderName,
  });

  const onWindowMinimizedClicked = (): void => updateState({
    ...state,
    minimized: true,
    isOpened: false,
  });

  const onFolderCloseClicked = (): void => updateState({
    ...state,
    isOpened: false,
    minimized: false,
    activeFolderName: '',
  });

  const { activeFolderName, isOpened, minimized } = state;

  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  const backgroundImage = isDarkMode ? images.wallpaperBE : images.wallpaper;

  return (
    <div className="container-fluid graph overflow-hidden" id="wallpaper"
       style={{ backgroundImage: `url(${backgroundImage})` }}>
      <DarkModeToggle
        isDarkMode={isDarkMode}
        onToggleChecked={() => updateState({ ...state })}
      />
      <div className="row">
        <Folders
          activeFolderName={activeFolderName}
          onFolderClick={onFolderClicked}
        />
        {
          isOpened && (
            <Window
              isDarkMode={isDarkMode}
              title={activeFolderName}
              onFolderCloseClicked={onFolderCloseClicked}
              onWindowMinimizedClicked={onWindowMinimizedClicked}
            />
          )
        }
        <DockHandle
          minimized={minimized}
          openClosedWindow={() => updateState({ ...state, isOpened: true })}
        />
      </div>
    </div>
  );
};

export default Portfolio;
