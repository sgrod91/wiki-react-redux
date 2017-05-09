const INITIAL_STATE = {
  wiki: {
    title: '',
    content: '',
    editing: ''
  }
}

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type == 'update-page') {
    return action.data;
  }
  return state;
}
