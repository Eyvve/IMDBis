import React from 'react'

function HideIfCommentsAreDisabled({commentIsClosed, children}) {
    if (commentIsClosed.token){
        <></>
    }
    else {return children}
}

export default HideIfCommentsAreDisabled