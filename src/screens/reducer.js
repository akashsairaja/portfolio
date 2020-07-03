import { openFromList } from '../utils';

import { actionTypes } from './constants';

function reducer(state, action) {
    switch (action.type) {
        case actionTypes.FOLDER_IS_OPENED: {
            const { minimized } = state;
            const { activeFolderName } = action.payload;
            if (minimized) {
                openFromList(state.activeFolderName);
            }
            return {
                ...state,
                isOpened: true,
                minimized: false,
                activeFolderName,
            };
        }
        case actionTypes.FOLDER_MINIMIZED: {
            return {
                ...state,
                minimized: true,
            };
        }

        case actionTypes.FOLDER_CLOSED: {
            return {
                minimized: false,
                isOpened: false,
            };
        }
        default:
            return state;
    }
}

export default reducer;
