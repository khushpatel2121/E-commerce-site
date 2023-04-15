import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import React from 'react'
import styled from "styled-components"

const Container = styled.div`
height: 40px;
background-color: teal;
color: white;
align-items: center;
font-size: 20px;

display: flex;
justify-content: center;
`
const Span = styled.span`
display: flex;
align-items: center;
padding: 10px;
`

const Announcement = () => {
  return (
  <Container>
    Free Shipping  <Span><LocalShippingRoundedIcon/> </Span> till Midnight Today
  </Container>
  )
}

export default Announcement
