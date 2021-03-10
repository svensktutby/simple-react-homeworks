import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { loadingReducer } from './loadingReducer';
import { themeReducer } from '../../h12/bll/themeReducer';
import { requestReducer } from '../../h13/bll/requestReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  theme: themeReducer,
  request: requestReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type AppStoreType = ReturnType<typeof rootReducer>;

export type ThunkType<
  A extends Action = Action,
  R = Promise<void>,
  S = AppStoreType
> = ThunkAction<R, S, unknown, A>;

// @ts-ignore
window.store = store; // for dev
