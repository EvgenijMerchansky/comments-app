const initialState = {
  name: '',
  email: '',
  comment: ''
}

export default function(state=initialState, action) {
  switch (action.type) {
    case 'TEST':
      return [...state,action.payload]
    default:
      return state
  }
}
