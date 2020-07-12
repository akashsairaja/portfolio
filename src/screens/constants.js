const folders = [
    {
        icon: 'fa fa-laptop fa-2x folder__active',
        name: 'MyProfile',
    },
    {
        icon: 'fa fa-folder fa-2x',
        name: 'Experience',
    },
    {
        icon: 'fa fa-folder fa-2x',
        name: 'Academics',
    },
    {
        icon: 'fa fa-folder fa-2x',
        name: 'Projects',
    },
    {
        icon: 'fa fa-folder fa-2x',
        name: 'Skills',
    },
    {
        icon: 'fa fa-folder fa-2x',
        name: 'Contribution',
    },
];

const initialState = {
    isOpened: false,
    activeFolderName: '',
    minimized: false,
};

const actionTypes = {
    FOLDER_IS_OPENED: 'FOLDER_IS_OPENED',
    FOLDER_MINIMIZED: 'FOLDER_MINIMIZED',
    FOLDER_CLOSED: 'FOLDER_CLOSED',
};

export { initialState, folders, actionTypes };
