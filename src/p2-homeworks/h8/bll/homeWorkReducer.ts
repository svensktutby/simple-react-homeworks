import { PeopleType } from '../HW8';

type ActionTypes =
  | { type: 'sort'; payload: 'up' }
  | { type: 'sort'; payload: 'down' }
  | { type: 'check'; payload: number };

export const homeWorkReducer = (
  state: PeopleType,
  action: ActionTypes,
): PeopleType => {
  switch (action.type) {
    case 'sort': {
      const getSortedPeople = (type: number) =>
        [...state].sort((a, b) =>
          a.name.toUpperCase() < b.name.toUpperCase() ? -type : type,
        );

      return action.payload === 'up' ? getSortedPeople(1) : getSortedPeople(-1);
    }

    case 'check': {
      return state.filter(({ age }) => age >= action.payload);
    }

    default:
      return state;
  }
};
