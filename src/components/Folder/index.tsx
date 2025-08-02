import React, { useState, useRef, createRef } from 'react';
import Draggable from 'react-draggable';

import config from '../../config';

interface FoldersProps {
  onFolderClick: (folderName: string) => void;
  activeFolderName: string;
}

const Folders: React.FC<FoldersProps> = ({ onFolderClick, activeFolderName }) => {
  const [folderStatus, setUpdateFolderStatus] = useState<string>(activeFolderName);

  const nodeRefs = useRef(config.folders.map(() => createRef<HTMLDivElement>()));

  return (
    <div className="d-flex d-inline maxIndex">
      {
        config.folders.map(({ icon, name }, index) => (
          <Draggable
            key={name}
            nodeRef={nodeRefs.current[index]}
          >
            <div
              ref={nodeRefs.current[index]}
              className="folder"
            >
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

export default Folders;
