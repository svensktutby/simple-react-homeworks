const initState = {
  status: false,
};

type StateType = typeof initState;

export const loadingReducer = (
  state = initState,
  action: ActionTypes,
): StateType => { // fix any
  switch (action.type) {
    case 'LOADING': {
      return { ...state, status: action.payload };
    }

    default:
      return state;
  }
};

const LOADING = 'LOADING';
export const loadingAC = (payload: boolean) =>
  ({ type: LOADING, payload } as const); // fix any

export type ActionTypes = ReturnType<typeof loadingAC>;
