import {
  changeCheckboxStatusAC,
  changeTitleAC,
  StateType,
  requestReducer,
} from './requestReducer';

describe('request reducer', () => {
  let startState: StateType;

  beforeEach(() => {
    startState = {
      status: false,
      title: 'There have not been any requests yet',
    };
  });

  it('should handle changeCheckboxStatusAC', () => {
    const endState = requestReducer(startState, changeCheckboxStatusAC(true));

    expect(endState.status).toBeTruthy();
  });

  it('should handle changeTitleAC', () => {
    const endState = requestReducer(startState, changeTitleAC('New title'));

    expect(endState.title).toBe('New title');
  });
});
