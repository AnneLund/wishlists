import React from "react";
import { SuccesStyled } from "./Succes.Styled";
import { useSuccesStore } from "./useSuccesStore";
import starssky from '../../Assets/Images/starssky.png'
import styled from 'styled-components'
import Stars from "../Partials/Stars";

const FallingStars = styled.div`
    width: 100%;
    animation: falling 10s ease-out infinite;

    @keyframes falling{
        from{
            transform: translateY(-50%);
        }
        to{
            transform: translateY(100%);
        }
    }

    @media screen and (max-width: 600px) {
    img {
        width: 600px;
        height: 800px;
    }    
    }

`

const Succes = () => {
  const { toggleSucces, setToggleSucces, succesPayload } = useSuccesStore();

  return (
    <SuccesStyled showSucces={toggleSucces}>
      <main> 
    <FallingStars>
        <Stars/>
    </FallingStars>
        {succesPayload}
      </main>
    </SuccesStyled>
  );
};

export default Succes;