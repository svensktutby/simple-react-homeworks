enum ActionType {
  LOADING = 'HW/LOADING/LOADING',
}

const initState = {
  status: false,
};

export const loadingReducer = (
  state = initState,
  action: ActionsTypes,
): StateType => {// fix any
  switch (action.type) {
    case ActionType.LOADING: {
      return { ...state, status: action.payload.status };
    }

    default:
      return state;
  }
};

/** Actions */
export const loadingAC = (status: boolean) =>
  ({
    type: ActionType.LOADING,
    payload: {
      status,
    },
  } as const); // fix any

/** Types */
export type ActionsTypes = ReturnType<typeof loadingAC>;

export type StateType = typeof initState;
