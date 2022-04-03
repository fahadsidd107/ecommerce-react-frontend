import React from 'react'
import styled from "styled-components";
import { categories } from '../Data';
import CategoryItem from './CategoryItem';

const Container = styled.div``;

const Category = () => {
  return (
    <Container>
    {
        categories.map(item=>{
            <CategoryItem item={item}/>
        })
    }
    </Container>
  )
}

export default Category