import React,{useState} from 'react'
import styled from "styled-components"
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import NewsLatter from '../Components/NewsLatter'
import Products from '../Components/Products'
import Footer from '../Components/footer';
import axios from "axios"
import { useLocation } from 'react-router-dom'

const Container = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin:20px;
`
const FilterText =styled.span`
 font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`
const Select = styled.select`
margin-left: 10px;
padding: 10px;

`

const Option = styled.option`
font-size: 30px;
`
const Title = styled.h1`
  margin: 20px;
`;

const Productlist = () => {

const Location = useLocation();
const cat = Location.pathname.split("/")[2];
const [filters,setFilters] = useState({});
const [sort,setSort] = useState("newest");


const handleFilter = (e)=>{
  const value = e.target.value
  setFilters({
    ...filters,
    [e.target.name]:value})
}

  return (
    <div>
      <Navbar/>
      <Announcement/>
      <Title>{cat}</Title>
      <Container>
      
       <Filter>
        <FilterText>Filter Products</FilterText>
       <Select name="color" onChange={handleFilter}>
        <Option disabled>Color</Option>
        <Option>White</Option>
        <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
       </Select>
       <Select name="size" onChange={handleFilter}>
        <Option disabled>Sizes</Option>
        <Option>XS</Option>
        <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
         
       </Select>
       </Filter>
       <Filter>
       <FilterText>Sort Products</FilterText>
       <Select onChange={(e)=>setSort(e.target.value)}>
        <Option  disabled>Relevence</Option>
        <Option value="newest">Newest First</Option>
        <Option value="asc">Highest First</Option>
        <Option value="desc">Lowest First</Option>
        
       </Select> 
       </Filter>
      </Container>
      <Products cat={cat} filters={filters} sort={sort}/>
      <NewsLatter/>
      <Footer/>
    </div>
  )
}

export default Productlist
