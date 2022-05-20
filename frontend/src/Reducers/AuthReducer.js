import React from 'react'
import useEraseCookie from '../Hooks/useEraseCookie';

function AuthReducer(state, action) {
  const eraseCookie = useEraseCookie();
  switch (action.type) {
    case 'LOGIN':
      

    case 'LOGOUT':
      eraseCookie();
      console.log("LE STORE FONCTIONNE")
      return {
          status: 'error',
          token: "",
          username: ""
        };

    default:
      return state
  }
}

export default AuthReducer