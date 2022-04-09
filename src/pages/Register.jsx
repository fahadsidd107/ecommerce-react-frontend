import React from 'react'
import styled from "styled-components";

const Container=styled.div``;
const Wrapper=styled.div``;
const Title=styled.h1``;
const Form=styled.form``;
const Input=styled.input``;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
              <Input placeholder='First Name'/>
              <Input placeholder='Last Name'/>
              <Input placeholder='Username'/>
              <Input placeholder='Email'/>
              <Input placeholder='Password'/>
              <Input placeholder='Confirm Password'/>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register