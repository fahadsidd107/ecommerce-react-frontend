import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  flex: 1;`;

const Img = styled.image``;
const Title = styled.h1``;
const Info = styled.div``;
const Button = styled.button``;

const CategoryItem = ({ item }) => {
  return (
    <Container>
    <Img src={item.img}/>
    <Info>
    <Title>{item.title}</Title>
    <Button>SHOP NOW</Button>
    </Info>
    </Container>
  )
}

export default CategoryItem