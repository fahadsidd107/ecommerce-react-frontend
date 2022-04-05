import { Send } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
height:60vh;
background-color:#fde3e6;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;
`;
const Description = styled.div`

`;
const InputContainer = styled.div`

`;
const Input = styled.input`

`;
const Button = styled.button`

`;

const NewsLetter = () => {
  return (
    <Container>
<Title>NewsLetter</Title>
<Description>Get TImely Updates from your favorite product.</Description>
<InputContainer>
    <Input placeholder='Your Email'/>
    <Button>
    Send
        <Send/>
    </Button>
</InputContainer>
    </Container>
  )
}

export default NewsLetter