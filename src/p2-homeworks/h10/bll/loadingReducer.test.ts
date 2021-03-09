import { loadingAC, StateType, loadingReducer } from './loadingReducer';

describe('loading reducer', () => {
  let startState: StateType;

  beforeEach(() => {
    startState = {
      status: false,
    };
  });

  it('should handle loadingAC', () => {
    const endState = loadingReducer(startState, loadingAC(true));

    expect(endState.status).toBeTruthy();
  });
});
