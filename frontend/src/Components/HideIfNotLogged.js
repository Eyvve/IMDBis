import React from 'react'

function HideIfNotLogged({loggedUser, children}) {
    if (!loggedUser.token){
        <></>
    }
    else {return children}
}

export default HideIfNotLogged