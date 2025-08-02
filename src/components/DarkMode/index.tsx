import React, { useState, memo } from 'react';

interface DarkModeToggleProps {
  onToggleChecked: () => void;
  isDarkMode: boolean;
}

interface DarkModeState {
  toggle: string;
  icon: string;
  darkMode: boolean;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ onToggleChecked, isDarkMode }) => {
  const [state, updateState] = useState<DarkModeState>({
    toggle: isDarkMode ? 'toggle-active' : '',
    icon: isDarkMode ? 'fa-sun-o' : 'fa-moon-o',
    darkMode: isDarkMode,
  });

  const { toggle, icon } = state;

  const modifyToggle = (): void => {
    const flag = toggle === '';
    updateState({
      toggle: flag ? 'toggle-active' : '',
      icon: flag ? 'fa-sun-o' : 'fa-moon-o',
      darkMode: flag,
    });
    window.localStorage.setItem('darkMode', flag.toString());
    onToggleChecked();
  };

  return (
    <div className="pull-right mt-55" onClick={() => modifyToggle()}>
      <div id="toggle" className="">
        <i className={`mode-icon fa ${icon} text-white px-2`}/>
        <div className={'toggle-inner '.concat(toggle)}/>
      </div>
    </div>
  );
};

export default memo(DarkModeToggle);
