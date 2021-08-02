import React from 'react'
import styled from 'styled-components'

const PlaylistCreationFormContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
/* essa parte não funcionou */
const playlistCreationForm = styled.form`
height: 300px;
background: pink;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

class PlaylistCreationPage extends React.Component {
  state = {


  }

    render() {
      return (
        <PlaylistCreationFormContainer>
          <h1>Cadastrar Playlist</h1>
          <playlistCreationForm>
              <label>Nova Playlist</label>
              <input 
                  placeholder="Nome da Playlist"
                />
                <button> Cadastrar Nova Playlist </button>
          </playlistCreationForm>
        </PlaylistCreationFormContainer>
      )
    }  
}

export default PlaylistCreationPage
