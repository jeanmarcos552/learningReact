const initialState = {
  name: 'Jean Marcos',
  age: null,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_AGE':
      return { ...state, age: state.age + action.payload };
    default:
      return state;
  }
}

export { initialState, reducer };
