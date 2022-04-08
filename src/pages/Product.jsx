
import React from 'react'
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';

const Container=styled.div``;

const Wrapper=styled.div`
padding:50px;
display:flex;
`;

const ImgContainer = styled.div`
flex:1;
`;

const Image = styled.img`

`;

const InfoContainer = styled.div`
flex:1;
`;

const Title = styled.h1``;

const Description = styled.p``;
const Price = styled.span``;


const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
        <Title>Denim Jumpsuit</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.</Description>
            <Price>Rs.1500</Price>
        </InfoContainer>
      </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default Product