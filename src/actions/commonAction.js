// import axios from 'axios';

export const test = (comment,name,email) => {
  return function(dispatch){

    dispatch({
      type: 'TEST',
      payload: {
        name: name,
        email: email,
        comment: comment
      }
    })
  }
}
