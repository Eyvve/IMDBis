import React from 'react'
import styled from "styled-components"

export const StyledButton = styled.button`
  background: #303030;
  border-radius: 10px;
  border: 2px solid gold;
  color: gold;
  margin: 0 1em;
  padding 0.25em 1em;
`

function Home() {
  return (
    <div className="jumbotron ">
        <div className="container">
          <h1 className="display-3">Bienvenue sur IMDBis</h1>
          <p>IMDBis est un site vous permettant de donner votre avis inintéressant sur des films intéressants. </p>
        </div>
      </div>
  )
}

export default Home