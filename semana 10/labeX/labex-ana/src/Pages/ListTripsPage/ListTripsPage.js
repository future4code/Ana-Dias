import React from 'react';
import styled from 'styled-components';

const ListTripsPageContainer = styled.div`
  background: light blue;
` 

function ListTripsPage() {
  return (
    <ListTripsPageContainer>
    <select>teste</select>
    <ol>
  <li>Viagem</li>
  <li>Viagem</li>
  <li>Viagem</li>
    </ol>
    </ListTripsPageContainer>
  );
}

export default ListTripsPage;