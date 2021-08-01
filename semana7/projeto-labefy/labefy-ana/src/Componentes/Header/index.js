import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom-style: solid;
`
const ButtonsContainer = styled.div`
  width: 260px;
  justify-content: space-between;
  display: flex;
`
const Header = (props) => {
    return (
        <HeaderContainer>
          <h1>Labefy-Ana</h1>
          <ButtonsContainer>
            <button onClick={() => props.changePage("playlistCreationForm")} >Cadastrar Playlist </button>
            <button onClick={() => props.changePage("playlistManagerPage")} >Gerenciar Playlists</button>
          </ButtonsContainer>
        </HeaderContainer>
    )
}

export default Header
