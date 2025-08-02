interface AppState {
  isOpened: boolean;
  activeFolderName: string;
  minimized: boolean;
}

const initialState: AppState = {
  isOpened: false,
  activeFolderName: '',
  minimized: false,
};

export { initialState };
export type { AppState };

