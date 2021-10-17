import React, { useState } from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { selectCars } from '../features/cars/carSlice';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
   
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="logo" />
            </a>
            <Menu>
                {cars && cars.map((car,index)=>(<a key={index} href="#">{car}</a>))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=> setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                    <Closewrap onClick={()=> setBurgerStatus(false)}>
                        <CustomClose/>
                    </Closewrap>
                    {cars && cars.map((car,index)=>(
                        <li key={index}><a href="#">{car}</a></li>
                        ))}
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade In</a></li>
                    <li><a href="#">Test Drive</a></li>
                    <li><a href="#">Powerwall</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Find Us</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 550;
        text-transform: uppercase;
        padding: 5px 10px;
        flex-wrap: nowrap;
        border-radius: 10px;
        transition: transform 1s;
        &:hover{
            background-color: rgba(184, 202, 233,0.8);
            transform: translateY(-5%);
        }
    }

    @media (max-width:768px){
        display: none;
    }
`
const RightMenu =styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`
  
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    background: #fff;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? "translateX(0)": "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    li{
        padding:  15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
        transition: transform 1s;
        &:hover{
            transform: translateX(1%);
        }
        a{
            font-weight: 600;
        }
    }

`
const CustomClose =styled(CloseIcon)`
    cursor: pointer;
`
const Closewrap =styled.div`
    display: flex;
    justify-content: flex-end;
`