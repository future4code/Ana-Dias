import React from 'react';
import styled from 'styled-components';
import HomePageButtons from './HomePageButtons';

const ContainerHomePage = styled.div`
  background: pink;
  display: stretch;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 290px;
`

function HomePage() {
  return (
    <ContainerHomePage>
        <h1>LabeX</h1>
        
    </ContainerHomePage>
    
  );
}

export default HomePage;