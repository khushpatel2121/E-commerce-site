import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import NewsLatter from '../Components/NewsLatter';
import Footer from '../Components/footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethod';

import { addProducts } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';


const Container  = styled.div`

`

const Wrapper = styled.div`
display: flex;
padding: 60px;
`
const ImgContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`
const Img = styled.img`
height: 80vh;
width: 60vh;
`



const InfoContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 40px;
`
const Title = styled.h1`
font-weight: 100;
`
const Desc = styled.p`
`
const Price = styled.h1`
`
const FilterContainer = styled.div`
display: flex;
gap: 50px;

`

const Filter = styled.div`
display: flex;
align-items: center;

`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border: 2px solid #eee;
`
const FilterTitle = styled.h2`
font-weight: 100;
`
const FilterSelect = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterOption = styled.option``

const AddAmount = styled.div`
display: flex;
gap: 100px;
cursor: pointer;
`
const Amount = styled.span`
border: 1px solid teal;
width: 25px;
height: 25px;
display: flex;
align-items: center;
justify-content:center ;
border-radius: 5px;
`
const AmountContainer = styled.div`
display: flex;
gap: 5px;
align-items: center;
`
const Review  = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #eee;
border-radius: 10px;

`
const Star = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
font-size: 58px;
padding: 10px 0px;
height: 160px;
border-right: 2px solid teal;
`


const Rating = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-around;
gap: 10px;
padding: 10px 10px;
`
const Rate = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 30px;
width: 80%;
`

const Max = styled.div`

`
const Count = styled.div`
`

const Button = styled.button`
padding: 15px;
border: 3px solid teal;
background-color: white;
  cursor: pointer;
  font-weight: 500;
`

const Product = () => {
 const location = useLocation();
 const id= location.pathname.split("/")[2];
 const [product,setProduct] = useState({});
 const [quantity , setQuantity] = useState(1);
 const [color,setColor] = useState("");
 const [size,setSize] = useState("");
 const dispatch = useDispatch();

const handleQuantity =(type)=>{
  if(type === "desc"){
   quantity>1 && setQuantity(quantity-1);
  }else{
    quantity<10 && setQuantity(quantity+1);
  }
}
const handleClick = ()=>{
  dispatch(
    addProducts({...product,quantity,color,size})
  )
}


 useEffect(() => {
  const getProduct = async () => {
    try {
      const res = await publicRequest.get("/products/find/"+id) ;
      setProduct(res.data);
    } catch (err){
      console.log(err);
    }

  };
  getProduct();
}, [id]);



  return (
  <Container>
  <Navbar/>
  <Announcement/>

  <Wrapper tabindex="0">

    <ImgContainer>
     <Img 
        src={product.img}
     />
    </ImgContainer>
    <InfoContainer>
<Title>{product.title}</Title>
<Desc>{product.desc} </Desc>
<Price>₹{product.price}</Price>
<FilterContainer>

<Filter>
<FilterTitle>Color</FilterTitle>
{product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}


</Filter>
<Filter>
    <FilterTitle>Sizes</FilterTitle>
<FilterSelect onChange={(e)=>setSize(e.target.value)} >
    {product.size?.map((s)=>(
    <FilterOption key={s} >{s}</FilterOption>

    ))}
</FilterSelect>
</Filter>
</FilterContainer>
<AddAmount>
<AmountContainer>
<RemoveIcon  onClick={()=>handleQuantity("desc")}/>
<Amount>{quantity}</Amount>
<AddIcon  onClick={()=>handleQuantity("inc")}/>
</AmountContainer>
<Button onClick={handleClick}>Add to Cart</Button>
</AddAmount>

 <Review>

<Star>

    4.5 <StarIcon style={{color:"teal"}}/>

</Star>
<Rating>

<Rate>
    <Max>5 <StarIcon style={{fontSize:"10px"}}/></Max>
    <Count>1k </Count>
</Rate>
<Rate>
    <Max>4 <StarIcon style={{fontSize:"10px"}}/></Max>
    <Count>2k </Count>
</Rate>
<Rate>
    <Max>3 <StarIcon style={{fontSize:"10px"}}/></Max>
    <Count>123 </Count>
</Rate>
<Rate>
    <Max>2 <StarIcon style={{fontSize:"10px"}}/></Max>
    <Count>4 </Count>
</Rate>
<Rate>
    <Max>1 <StarIcon style={{fontSize:"10px"}}/></Max>
    <Count>893 </Count>
</Rate>
</Rating>
 </Review>
    </InfoContainer>
  </Wrapper>
  <NewsLatter/>
  <Footer/>
  </Container>
  )
}

export default Product
