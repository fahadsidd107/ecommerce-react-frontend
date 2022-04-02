import { ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;

`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
    align-items: center;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: pink;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Img = styled.img`
  height: 80%;
`;

const TnfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;


const Slider = () => {
  return (
    <Container>
    <Arrow direction="left">
        <ArrowLeftOutlined/>
    </Arrow>
    <Wrapper>
<Slide>
<ImgContainer>
<Img src='https://i.ibb.co/cXFnLLV/3.png'/>
</ImgContainer>
<TnfoContainer>
<Title>SUMMER SALE</Title>
<Description>DONT COMPROMISE ON STYLE. GET 30% OFF NOW ON NEW ARRIVALS</Description>
<Button>SHOP NOW</Button>
</TnfoContainer>
</Slide>
    </Wrapper>
    <Arrow direction="right">
        <ArrowRightOutlined/>
    </Arrow>
    </Container>
  )
}

export default Slider