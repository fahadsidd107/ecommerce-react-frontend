import { Send } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <Container>
<Title></Title>
<Description></Description>
<InputContainer>
    <Input/>
    <Button>
        <Send/>
    </Button>
</InputContainer>
    </Container>
  )
}

export default NewsLetter