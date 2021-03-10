import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';


import { AppStoreType } from '../p2-homeworks/h10/bll/store';
import { loadingReducer } from '../p2-homeworks/h10/bll/loadingReducer';
import { themeReducer } from '../p2-homeworks/h12/bll/themeReducer';
import { requestReducer } from '../p2-homeworks/h13/bll/requestReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  theme: themeReducer,
  request: requestReducer,
});


const initialGlobalState: AppStoreType = {
  loading: {
    status: false
  },
  theme: {
    theme: 'default',
  },
  request: {
    status: false,
    title: 'There have not been any requests yet',
  },
};

export const storyBookStore = createStore(
  rootReducer,
  initialGlobalState,
);

export const ReduxStoreProviderDecorator = (
  storyFn: () => React.ReactNode,
): JSX.Element => {
  return <Provider store={storyBookStore}>{storyFn()}</Provider>;
};
