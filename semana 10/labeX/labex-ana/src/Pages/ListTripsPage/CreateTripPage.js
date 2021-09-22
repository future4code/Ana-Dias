import React from 'react';
import styled from 'styled-components';

const CreateTripContainer = styled.div`
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
`
/*
const Input = styled.div`
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

const Form = styled.div`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`

const Label = styled.div`
width: 100%;
background-color: #4CAF50;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
border-radius: 4px;
cursor: pointer;
  
`
*/

function CreateTripPage() {
  return (
<CreateTripContainer>

  <form>
  <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

  </form>
  
</CreateTripContainer>

  )
}

export default CreateTripPage;
