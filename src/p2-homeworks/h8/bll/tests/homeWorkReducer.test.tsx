import { homeWorkReducer } from '../homeWorkReducer';
import { PeopleType } from '../../HW8';

let initialState: PeopleType;

beforeEach(() => {
  initialState = [
    { _id: 0, name: 'Кот', age: 3 },
    { _id: 1, name: 'Александр', age: 66 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 4, name: 'Дмитрий', age: 40 },
    { _id: 5, name: 'Ирина', age: 55 },
  ]
});

test('sort name up', () => {
  const newState = homeWorkReducer(initialState, { type: 'sort', payload: 'up' });

  console.log(newState);
  expect(newState[0].name).toBe('Александр');
});
test('sort name down', () => {
  const newState = homeWorkReducer(initialState, { type: 'sort', payload: 'down' });

  expect(newState[0]).toHaveProperty('name', 'Кот');
});
test('check age 18', () => {
  const newState = homeWorkReducer(initialState, { type: 'check', payload: 18 });

  expect(newState).toHaveLength(4);
  expect(newState).toContainEqual({ _id: 1, name: 'Александр', age: 66 });
});
