import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: space-between;
`;


const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
margin: 20px 0;
text-align: justify;
`;


const Social = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
 width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background: #${props => props.color};
  display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

const Center = styled.div`
flex:1;
padding: 20px;
`;

const Right = styled.div`
flex:1;
padding: 20px;
`;


const Footer = () => {
  return (
    <Container>
    <Left>
        <Logo>FAHAD.</Logo>
        <Description>
        FAHAD first made waves in Pakistan's e-commerce market after its introduction in 2012.
         We have since grown to become Pakistan's largest platform for online shopping with a 
         network spread across Asia in Pakistan, Bangladesh, Sri Lanka .
        </Description>
        <Social>
            <SocialIcon color="3B5999"><Facebook/></SocialIcon>
            <SocialIcon color="E4405F"><Instagram/></SocialIcon>
            <SocialIcon color="55ACEE"><Twitter/></SocialIcon>
            <SocialIcon color="E60023"><Pinterest/></SocialIcon>
        </Social>
    </Left>
    <Center>2</Center>
    <Right>3</Right>
    </Container>
  )
}

export default Footer