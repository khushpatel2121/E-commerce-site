import React from 'react';
import styled from "styled-components"
import CategoriesItem from './categoriesItem';
import { categories } from '../pages/data';

const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
`

const Categories = () => {
  return (
   <Container>
{categories.map((item)=>(
    <CategoriesItem item={item} key={item.id}/>
))}
   </Container>
  )
}

export default Categories
