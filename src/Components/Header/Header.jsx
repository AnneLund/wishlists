import React from "react";
import { Link} from "react-router-dom";
import {MainNav} from './MainNav.styled'
import {useState, useEffect} from 'react'
import { useLoginStore } from '../../Pages/Login/useLoginStore';
import styled from "styled-components";
import useIsOpenNavStore from './useIsOpenNavStore'

const Header = () => {

  const { setLoggedIn, loggedIn} = useLoginStore((store) => ({
    setLoggedIn: store.setLoggedIn,
    loggedIn: store.loggedIn,
    userInfo: store.userInfo,
    userName: store.username,
  }));


  const logOut = () => {
    setLoggedIn(false, "", "", "")
    window.location.replace('/#/login');
}

  const {isOpen, setIsOpen} = useIsOpenNavStore()
  const [shrinkHeader, setShrinkHeader] = useState(false);


  useEffect(() => {
    const handler = () => {
      let shrink = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? true : false;
      setShrinkHeader(shrink)
    }

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const Hamburger = styled.div`
  flex-direction: column;
  cursor: pointer;
  span{
    height: 5px;
    width: 25px;
    background-color: #ffffff;
    margin-bottom: 4px;
    border-radius: 5px;

    @media screen and (max-width: 768px){
      display: flex;
    }
  }
`

const Menu = styled.nav`
overflow: hidden;
display: flex;
justify-content: space-between;
align-items: center;
gap: 1.5em;
position: relative;

@media (max-width: 768px){
  flex-direction: column;
  transition: max-height 0.3 ease-in;
  width: 100%;
  z-index: 50000;
  max-height: ${({isOpen}) => isOpen ? 'auto' : '0'};
}
`

const MenuLink = styled(Link)`
  padding: 0.3em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  background-color: rgba(0, 0, 0, 0.618);
  font-size: 1.5em;
  &:hover{
      background-color: grey;
      cursor: pointer;
      transition: 300ms;
    }

  @media (max-width: 768px){
    display: block;
    width: 100%;
  }

  li{
    padding: .4rem 1.2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  background-color: #333;
  font-size: 1em;
  &:hover{
      background-color: grey;
      cursor: pointer;
      transition: 300ms;
    }

  @media (max-width: 768px){
    display: block;
    width: 100%;
  }
  }
`
  return (
    <MainNav shrinkHeader={shrinkHeader}>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
       <span></span>
       <span></span>
       <span></span>
      </Hamburger>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <li>
        <MenuLink to="/">Forside</MenuLink>
      </li>
      <li>
        <MenuLink to="/contact">Kontakt</MenuLink>
      </li>
     
        {loggedIn ? 
        <>
        <li>
        <MenuLink to="/wishlists">Ønskesedler</MenuLink>  
        </li>
        <li>
         <MenuLink to="/login"><p onClick={logOut}>Log ud</p></MenuLink>      
         
        </li>
        </>
         :    
        <li>
              <MenuLink to="/login">
                Log ind
              </MenuLink>
        </li> 
        }


      </Menu>
    </MainNav>
  );

};

export default Header;