import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import useIsOpenNavStore from "../Header/useIsOpenNavStore";

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 2em;
    padding-bottom: 0.5em;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: white;
    text-shadow: black 5px 5px 5px;
  }
  @media screen and (max-width: 600px) {
    height: 6em;
    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: black;
    h1 {
      font-size: 1.7em;
      position: fixed;
      display: ${(props) => (props.isOpen ? "none" : "block")};
      width: 100%;
    }
  }
`;

const Page = (props) => {
  const { children, title, description } = props;
  const { isOpen } = useIsOpenNavStore();

  useEffect(() => {
    document.title = title;
    if (description) {
      document.querySelector('meta[name="description"]').setAttribute("content", description);
    }
  }, [title, description]);

  return (
    <>
      <Header isOpen={isOpen}>
        <h1>{title}</h1>
      </Header>
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

const ContentWrapper = (props) => {
  return <section className="container">{props.children}</section>;
};

export { Page, ContentWrapper };
