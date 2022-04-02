import { ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 93.42825848849945vh;
    display: flex;
    background-color: coral;
    position: relative;
`;
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
opacity:0.7;
left: ${props => props.direction === 'left' && '15px'};
right: ${props => props.direction === 'right' && '15px'};
`;

const Wrapper = styled.div`
height:100%;
`;

const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
`;

const ImgContainer = styled.div`
height:100%;
flex:1;
`;
const Img = styled.img`
height:80%;
`;

const TnfoContainer= styled.div`
flex:1;
`;



const Slider = () => {
  return (
    <Container>
    <Arrow direction="left">
        <ArrowLeftOutlined/>
    </Arrow>
    <Wrapper>

    </Wrapper>
    <Arrow direction="right">
        <ArrowRightOutlined/>
    </Arrow>
    </Container>
  )
}

export default Slider