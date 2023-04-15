import React from 'react';
import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';


const Container = styled.div`
  display: flex;
 background-color: #ffab76;
 height: 300px;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 20px;
 color: white;
`

const Title = styled.h1`
font-size: 58px;
`
const Desc = styled.div`
font-size: 20px;
`
const Inputs = styled.div`
display: flex;
gap: 5px;
`
const Input = styled.input`
height: 30px;
width: 300px;
border: none;
outline: none;
padding: 10px;
`
const Button = styled.button`
background-color: teal;
border: none;
padding: 0px 10px;
`

const NewsLatter = () => {
  return (
  <Container>

    <Title>
  Subscribe to Newsletter
    </Title>
    <Desc>
  Never miss any crazy Offers and Products
    </Desc>
    <Inputs>
        <Input
             placeholder='please enter your email....'
        />
        <Button>
        <SendIcon style={{color:"white"}}/>
        </Button>
     </Inputs>
</Container>
  )
}

export default NewsLatter
