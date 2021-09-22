import React from 'react';
import styled from 'styled-components';

const ContainerButton = styled.div`
  justify-content: space-around;
  height: 40px;
  width: 100%;
  align-items: center;
`
const Button = styled.button`
  display: inline;
  cursor: pointer;
  font-size: 14px;
  padding: 11px 40px;
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: grey;

  `

function HomePageButton() {
  return (
    <ContainerButton>
        <Button>Viagens</Button>
        <Button>Admin</Button>
    </ContainerButton>
    
  );
}

export default HomePageButton;