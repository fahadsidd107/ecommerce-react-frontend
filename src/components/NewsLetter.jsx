import { Send } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h1``;
const Description = styled.div``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

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