import React from 'react';
import styled from 'styled-components';
import HomePageButton from './HomePageButton';

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
        <HomePageButton/>
    </ContainerHomePage>
    
  );
}

export default HomePage;