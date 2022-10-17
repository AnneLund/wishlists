import React, { useEffect } from "react";
import { Flashmessage } from "./FloatingAlerts.Styled";
import { useFlashMessageStore } from "./useFlashMessageStore";

const FlashMessages = () => {

  //how long should the flashmessage be shown
  const flashDuration = 5000;
 
  const { flashMessages, removeFlashmessage } = useFlashMessageStore((store) => ({
    flashMessages: store.flashMessages, //Holds the message
    removeFlashmessage: store.removeFlashmessage,//removes the message
  }));

  //remove the message according to the time in flashDuration
  useEffect(() => {
    let flashTimer = setTimeout(() => removeFlashmessage(), flashDuration);
    return () => {
      clearTimeout(flashTimer);
    };
  }, [flashMessages, removeFlashmessage]);

  return (
    flashMessages && (
      <>
        <Flashmessage className="floating-alerts" flashDuration={flashDuration}>
          <div className="alert alert-success text-center floating-alert shadow-sm">{flashMessages}</div>
        </Flashmessage>
      </>
    )
  );
};

export default FlashMessages;