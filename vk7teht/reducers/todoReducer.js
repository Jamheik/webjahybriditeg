
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, completed: false }];
    case 'REMOVE_TODO':
      return state.filter((todo, index) => index !== action.index);
    default:
      throw new Error();
  }
}
export default todoReducer;