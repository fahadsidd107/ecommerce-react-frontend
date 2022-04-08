
import React from 'react'
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';

const Container=styled.div``;

const Wrapper=styled.div``;

const ImgContainer = styled.div``;

const Image = styled.img``;

const InfoContainer = styled.div``;

const Title = styled.h1``;

const Description = styled.div``;


const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer><Image></Image></ImgContainer>
        <InfoContainer><Title><Description></Description></Title></InfoContainer>
      </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default Product