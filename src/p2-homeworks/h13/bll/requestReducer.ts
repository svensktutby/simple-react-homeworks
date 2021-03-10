import { ThunkType } from '../../h10/bll/store';
import { loadingAC } from '../../h10/bll/loadingReducer';
import { fetchRequest } from '../RequestAPI';

enum ActionType {
  CHANGE_CHECKBOX_STATUS = 'HW/HW13/CHANGE_CHECKBOX_STATUS',
  CHANGE_TITLE = 'HW/HW13/CHANGE_TITLE',
}

const initState = {
  status: false,
  title: 'There have not been any requests yet',
};

export const requestReducer = (
  state = initState,
  action: ActionsType,
): StateType => {
  switch (action.type) {
    case ActionType.CHANGE_CHECKBOX_STATUS: {
      return { ...state, status: action.payload.status };
    }

    case ActionType.CHANGE_TITLE: {
      return { ...state, title: action.payload.title };
    }

    default:
      return state;
  }
};

/** Actions */
export const changeCheckboxStatusAC = (status: boolean) =>
  ({
    type: ActionType.CHANGE_CHECKBOX_STATUS,
    payload: {
      status,
    },
  } as const);

export const changeTitleAC = (title: string) =>
  ({
    type: ActionType.CHANGE_TITLE,
    payload: {
      title,
    },
  } as const);

/** Thunks */
export const fetchDataAsync = (
  status: boolean,
): ThunkType<ActionsType> => async (dispatch) => {
  dispatch(loadingAC(true));

  const url = 'auth/test';
  const body = JSON.stringify({ success: status });

  const options = {
    method: 'POST' as const,
    headers: { 'Content-Type': 'application/json' },
    body,
  };

  try {
    const data = await fetchRequest(url, options);

    dispatch(changeTitleAC(data.info));
  } catch (error) {
    throw new Error(error);
  } finally {
    dispatch(loadingAC(false));
  }
};

/** Types */
export type ActionsType =
  | ReturnType<typeof changeTitleAC>
  | ReturnType<typeof changeCheckboxStatusAC>
  | ReturnType<typeof loadingAC>;

export type StateType = typeof initState;
