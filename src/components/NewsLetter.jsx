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
font-size:24px;
font-weight:300;
margin-bottom:20px;
`;

const InputContainer = styled.div`
width:50%;
height:40px;
background:white;
display:flex;
justify-content:space-between;
border: 1px solid lightgray;
`;
const Input = styled.input`
flex:8;
`;
const Button = styled.button`
flex:1;
`;

const NewsLetter = () => {
  return (
    <Container>
<Title>NewsLetter</Title>
<Description>Get TImely Updates from your favorite product.</Description>
<InputContainer>
    <Input placeholder='Your Email'/>
    <Button>
        <Send/>
    </Button>
</InputContainer>
    </Container>
  )
}

export default NewsLetter