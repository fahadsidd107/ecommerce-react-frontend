import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: space-between;
`;


const Left = styled.div`
flex:1;
`;

const Logo = styled.h1``;

const Description = styled.p``;


const Social = styled.div``;

const SocialIcon = styled.div``;

const Center = styled.div`
flex:1;
`;

const Right = styled.div`
flex:1;
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
            <SocialIcon><Facebook/></SocialIcon>
            <SocialIcon><Instagram/></SocialIcon>
            <SocialIcon><Twitter/></SocialIcon>
            <SocialIcon><Pinterest/></SocialIcon>
        </Social>
    </Left>
    <Center>2</Center>
    <Right>3</Right>
    </Container>
  )
}

export default Footer