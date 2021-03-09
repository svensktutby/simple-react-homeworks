import { changeThemeAC, StateType, themeReducer } from './themeReducer';

describe('theme reducer', () => {
  let startState: StateType;

  beforeEach(() => {
    startState = {
      theme: 'some',
    };
  });

  it('should handle changeThemeAC', () => {
    const endState = themeReducer(startState, changeThemeAC('default'));

    expect(endState.theme).toBe('default');
  });
});
