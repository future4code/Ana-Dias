import React from 'react';
import Header from './Components/Header';

export function Cards(props){
  return <div>
    <h1>Componente</h1>
    <p>Componente React!</p>
    <p>{props.texto}</p>



  </div>
}

export default Cards;