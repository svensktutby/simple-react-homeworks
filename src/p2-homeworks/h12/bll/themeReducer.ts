enum ActionType {
  CHANGE_THEME = 'HW/THEME/CHANGE_THEME',
}

const initState: StateType = {
  theme: 'some',
};

export const themeReducer = (
  state = initState,
  action: ActionsType,
): StateType => {
  switch (action.type) {
    case ActionType.CHANGE_THEME: {
      return { ...state, theme: action.payload.theme };
    }

    default:
      return state;
  }
};

/** Actions */
export const changeThemeAC = (theme: ThemeType) =>
  ({
    type: ActionType.CHANGE_THEME,
    payload: {
      theme,
    },
  } as const);

/** Types */
type ActionsType = ReturnType<typeof changeThemeAC>;

export type ThemeType = 'some' | 'dark' | 'red' | 'default';
export type StateType = {
  theme: ThemeType;
};
