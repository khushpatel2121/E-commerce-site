import styled from "styled-components"
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link} from "react-router-dom"

const Info = styled.div`
display: flex;
z-index: 3;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
opacity: 0;
gap: 10px;
`

const Container = styled.div`
flex: 1;
min-width:280px ;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
position: relative;

&:hover ${Info}{
 opacity: 1;
}
`
const Icon = styled.div`
border-radius:50% ;
background-color: white;
padding: 5px;
display: flex;
align-items: center;
justify-content: center;
&:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }

`


const Image = styled.img`
height: 75%;
  z-index: 2;
`
const RLink = styled(Link)`
text-decoration: none;
color: inherit;
`

const Product = ({item}) => {
  return (
    <Container>

      <Image src={item.img} />
      <Info>
      <RLink to={`/product/${item._id}`}>

        <Icon>
         <SearchIcon/>
        </Icon>
      </RLink>
      <RLink to="/cart">

        <Icon>
         <ShoppingCartIcon/>
        </Icon>
      </RLink>
        <Icon>
         <FavoriteBorderOutlinedIcon/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
