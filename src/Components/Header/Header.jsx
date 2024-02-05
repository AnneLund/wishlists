import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainNav } from "./MainNav.styled";
import { useState, useEffect } from "react";
import { useLoginStore } from "../../Pages/Login/useLoginStore";
import styled from "styled-components";
import useIsOpenNavStore from "./useIsOpenNavStore";

const Hamburger = styled.div`
  flex-direction: column;
  cursor: pointer;
  span {
    height: 5px;
    width: 25px;
    background-color: #ffffff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.nav`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5em;
  position: relative;

  .link {
  display: flex;
  flex-direction: column;
  padding: 0.3em;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 0.8em;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    transition: height 0.3s ease-in-out;
    width: 100%;
    position: sticky;
    z-index: 50000;
    height: ${({ isOpen }) => (isOpen ? "100px" : "0")};
    overflow: hidden;
  }
`;

const Header = () => {
  const { setLoggedIn, loggedIn, role_id } = useLoginStore((store) => ({
    setLoggedIn: store.setLoggedIn,
    loggedIn: store.loggedIn,
    userInfo: store.userInfo,
    userName: store.username,
  }));

  const { isOpen, setIsOpen } = useIsOpenNavStore();
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const navigate = useNavigate();
  const {username} = useLoginStore()

  const logOut = async () => {
    await setLoggedIn(false, "", "", "", "");
    navigate("/");
  };

  useEffect(() => {
    const handler = () => {
      let shrink = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? true : false;
      setShrinkHeader(shrink);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <MainNav shrinkHeader={shrinkHeader}>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu roll isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {loggedIn ? (
          <>
          {role_id !== 6 ? <li>
              <Link to="/wishlists">Ønskesedler</Link>
            </li> : <li>
              <Link to="/guest">Ønskesedler</Link>
              </li>}
            
            <li className="link">
              Logget ind som {username}
              <Link to="#" onClick={logOut}>
                Log ud
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Log ind</Link>
          </li>
        )}
      </Menu>
    </MainNav>
  );
};

export default Header;
