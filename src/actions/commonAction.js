// import axios from 'axios';

export const test = (comment,name,email) => {

  return function(dispatch){

    dispatch({
      type: 'TEST',
      payload: [name, email, comment]
    })
  }
}

export const response = (comment,name,email) => {

  return function(dispatch){

    dispatch({
      type: 'RESPONSE',
      payload: [name, email, comment]
    })
  }
}


// Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
