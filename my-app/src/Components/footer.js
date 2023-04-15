import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Container = styled.div`
display: flex;

`
const Left = styled.div`
flex: 1;
padding: 20px;
flex-direction: column;
`
const Logo =styled.h1`
font-size: 30px;
`
const Desc =styled.p`
font-size: 20px;
margin: 20px 0px;
text-align: left;
`
const SocialContainer = styled.div`
display: flex;
gap: 10px;
`
const SocialIcon =styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
color: white;
background-color: #${(props)=>props.bg};
align-items: center;
justify-content: center;
cursor: pointer;
`

const Center =styled.div`
flex:1;
padding: 20px;
`
const Title = styled.h2`
margin-bottom: 20px;
`
const List = styled.ul`
display: flex;
flex-wrap: wrap;
margin: 0;
padding: 0;
list-style: none;
`
const ListItem =styled.li`
 margin-bottom: 10px;
 width: 50%;
 `
 const Right = styled.div`
 flex: 1;
 padding: 20px;
 `

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const RLink = styled(Link)`
text-decoration: none;
color: inherit;
`

const Footer = () => {
  return (
<Container>
    <Left>

<RLink to="/" >
<Logo>

    HAPPY STORE.
</Logo>
</RLink>

<Desc>
There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
</Desc>

<SocialContainer>
<RLink to="/" >
<SocialIcon bg="3B5999">
        <InstagramIcon/>
    </SocialIcon>
</RLink>
<RLink to="/" >

    <SocialIcon bg="E4405F">
        <FacebookIcon/>
        </SocialIcon>
</RLink>
<RLink to="/">

        <SocialIcon bg="55ACEE">
        <TwitterIcon/>
        </SocialIcon>
</RLink>
<RLink to="/" >

        <SocialIcon bg="E60023">
        <PinterestIcon/>
        </SocialIcon>
</RLink>
</SocialContainer>
    </Left>
    <Center>
<Title>UseFull Links</Title>
<List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
    </Center>
    <Right>
    <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{marginRight:"10px"}}/> B 602 Keshar Aalayam , 382421 , Gandhinagar.
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{marginRight:"10px"}}/> +91 8160293185
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{marginRight:"10px"}} /> khushpatel2121@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
    </Right>
    
</Container>
  )
}

export default Footer
