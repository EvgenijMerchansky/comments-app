const initialState = [];

export default function(state=initialState, action) {
  switch (action.type) {
    case 'RESPONSE':
      return [...state,action.payload]
    default:
      return state
  }
}
