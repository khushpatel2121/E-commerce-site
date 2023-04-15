import React,{useEffect, useState} from 'react';
import styled from "styled-components"
import Announcement from '../Components/Announcement';
import Footer from '../Components/footer';
import NewsLatter from '../Components/NewsLatter';
import Navbar from "../Components/Navbar"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout"
import dailyFlyer from "./images/DAILYFLYER(4).png"
import { userRequest } from '../requestMethod';
import { useNavigate } from "react-router-dom";


 const KEY = PUBLICEBLE_KEY

const Container = styled.div`

`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
align-items: center;

`
const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`
const TopTitle = styled.h1`
font-weight: 100;
`

const TopButton = styled.button`
padding: 13px;
background-color: ${(props) => props.type === "filled" ? "black" : "white"};
color: ${(props) => props.type === "filled" && "white"};
border: ${(props) => props.type === "filled" && "none"};
font-weight: 600;
cursor: pointer;
`
const TopTexts = styled.div`
 
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

`
const Info = styled.div`
flex: 3;

`

const Product = styled.div`

display: flex;
justify-content: space-between;
`
const ProductDetails = styled.div`
flex: 2;
display: flex;

`
const Image = styled.img`
width: 250px;
height: 250px;
`
const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 20px;
margin-left:20px ;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
width: 20px;
height: 20px;
cursor: pointer;
background-color: ${(props) => props.color};
border-radius: 50%;
border: 2px solid #eee;
`
const ProductSize = styled.span`
`
const Price = styled.div`

flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
const AmountContainer = styled.div`
display: flex;
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
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  `
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
flex: 1;
border: 1px solid #eee;
height: 50vh;
border-radius:20px ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
font-size: ${(props) => props.type === "total" && "30px"};
`
const SummaryItemPrice = styled.span`

`
const SummaryItemText = styled.span`

`
const Button = styled.button`

padding: 10px;
color: white;
background-color: black;
border: none;
`

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [stripeToken,setStripeToken] = useState(null);

    const history = useNavigate();

    const onToken = (token)=>{
        setStripeToken(token);
    }
    useEffect(()=>{
        const makeRequest = async()=>{
            try{
                const res = await userRequest.post("/checkout/payment",{
                    tokenId:stripeToken.id,
                    amount:cart.total,
    
                });
                history.push("/success",{
                   stripeData :res.data,
                   products:cart,
               })
               

            }catch{}
        }
       stripeToken && makeRequest()
    },[stripeToken,cart.total, history])

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <TopTitle>Your Cart</TopTitle>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {
                            cart.products.map((product) => (
<>
                                <Product>
                                    <ProductDetails>
                                        <Image src={product.img} />
                                        <Details>
                                            <ProductName><b>Product Name :</b> {product.title}</ProductName>
                                            <ProductId><b>Product Id:</b>{product._id}</ProductId>
                                            <ProductColor color={product.color}></ProductColor>
                                            <ProductSize><b>Size:</b>{product.size}</ProductSize>
                                        </Details>
                                        <Price>
                                            <AmountContainer>
                                                <RemoveIcon />
                                                <Amount>{product.quantity}</Amount>
                                                <AddIcon />
                                            </AmountContainer>
                                            <ProductPrice> ₹{product.price* product.quantity}</ProductPrice>
                                        </Price>
                                    </ProductDetails>

                                </Product>
                                <Hr />
                                </>
                            ))
                        }


                    

                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>₹{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>₹ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>₹ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>₹{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
              name="HAPPY STORE"
              image={dailyFlyer}
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <NewsLatter />
            <Footer />
        </Container>
    )
}

export default Cart
