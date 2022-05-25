export function updateAge(dispatch: Function, payload: number) {
  return dispatch({ type: 'UPDATE_AGE', payload });
}
