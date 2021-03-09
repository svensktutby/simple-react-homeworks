enum ActionType {
  CHANGE_THEME = 'HW/THEME/CHANGE_THEME',
}

const initState: ThemeStateType = {
  theme: 'some',
};

export const themeReducer = (
  state = initState,
  action: ActionsType,
): ThemeStateType => {
  switch (action.type) {
    case ActionType.CHANGE_THEME: {
      return { ...state, theme: action.payload.theme };
    }
    default:
      return state;
  }
};

/** Actions */
export const changeThemeC = (theme: ThemeType) =>
  ({
    type: ActionType.CHANGE_THEME,
    payload: {
      theme,
    },
  } as const);

/** Types */
type ActionsType = ReturnType<typeof changeThemeC>;

export type ThemeType = 'some' | 'dark' | 'red' | 'default';
type ThemeStateType = {
  theme: ThemeType;
};
