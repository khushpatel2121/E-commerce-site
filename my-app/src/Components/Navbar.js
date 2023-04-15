import React from 'react'
import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"

const Container = styled.div`
height: 60px;
user-select: none;
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
`

const Left = styled.div`
flex: 1;
display: flex;
gap: 20px;
align-items: center;

`

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
`

const Span = styled.div`

`
const Input = styled.input`
border: none;
outline: none;
padding: 5px;
`

const Center = styled.div`
flex: 2;
text-align: center;
`
const Logo = styled.h1`
font-weight: 800;
`
const Right = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
margin-right: 20px;
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left:10px ;
`

const RLink = styled(Link)`
text-decoration: none;
color: inherit;
`

const Navbar = () => {
    const quantity  = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Span>
                        EN
                    </Span>
                    <SearchContainer style={{ fontWeight: "200", color: "lightgray" }}>
                        <Input />
                        <SearchOutlined />
                    </SearchContainer>
                </Left>
                <Center>
                <RLink to="/">

                    <Logo>
                        HAPPY STORE.
                    </Logo>
                </RLink>
                </Center>
                <Right>
                <RLink to="/register">

                    <MenuItem>
                        Register
                    </MenuItem>
                </RLink>
                <RLink to="/login">

                    <MenuItem>
                        Sign In
                    </MenuItem>
                </RLink>
                <RLink to="/cart">

                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </RLink>

                </Right>
            </Wrapper>
        </Container>

    )
}

export default Navbar
