import './App.css'
import styled from 'styled-components'
import React from 'react'
import Header from './Componentes/Header'
import PlaylistCreationForm from './Componentes/PlaylistCreationForm'
import PlaylistManagerPage from './Componentes/PlaylistManagerPage'

/*começar fazendo um container que englobe o header e o corpo para depois ver como será o display deles*/
const AppContainer = styled.div`
  width: 100vw;
  hight: 100vh;
  background-color: purple;
  display: flex;
  flex-direction: column;
`

class App extends React.Component {
  state = {
    currentPage: "playlistManagerPage"
  }

  /*parametro que recebe o parametro de acordo com o que eu mandar e uma hora o parametro será creationfrom outra hora o manager page*/

  changePage =(currentPage) => {
    this.setState({currentPage: currentPage})
  }

    render () {
      const renderCurrentPage = () => {
        if (this.state.currentPage === "playlistCreationForm") {
          return <PlaylistCreationForm />
        } else if (this.state.currentPage === "playlistManagerPage") {
          return <PlaylistManagerPage />
        }
      }

      return (
      <AppContainer>
        <Header 
          changePage={this.changePage}
        />
        {renderCurrentPage()}
      </AppContainer>
    );
     }
}



export default App;
