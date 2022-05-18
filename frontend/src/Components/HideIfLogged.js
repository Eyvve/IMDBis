import React from 'react'

function HideIfLogged({loggedUser, children}) {
  if (loggedUser.token){
      <></>
  }
  else {return children}
}

export default HideIfLogged