import React from "react";
import { ModalStyled } from "./Modal.Styled";
import { useModalStore } from "./useModalStore";
import starsround from '../../Assets/Images/starsround.png'
import Stars from "../Partials/Stars";
//Når Modalen skal bruges, skal følgende importeres i det relevante komponent:
//import { useModalStore } from "../Modal/useModalStore";

//I funktionen indsættes:
// const { setModalPayload } = useModalStore();


//Eksempel til brug:
//<button onClick={() => setModalPayload("I am the greatest modal")}>Show me modal</button>


const Modal = () => {
  const { toggleModal, setToggleModal, modalPayload } = useModalStore();

  return (
    <ModalStyled showmodal={toggleModal}>
       <Stars/>  
      <main>
        {modalPayload}
      </main>
    </ModalStyled>
  );
};

export default Modal;
