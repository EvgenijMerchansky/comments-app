const initialState = []

export default function(state=initialState, action) {
  switch (action.type) {
    case 'TEST':
      return [...state,action.payload]
    case 'RESPONSE':
      return [...state,action.payload]
    default:
      return state
  }
}
