import React, { useEffect } from "react";
import { Flashmessage } from "./FloatingAlerts.Styled";
import { useFlashMessageStore } from "./useFlashMessageStore";

const FlashMessages = (props) => {
  const flashDuration = 2000;

  const { successMessages, errorMessages, removeSuccessMessage, removeErrorMessage } = useFlashMessageStore((store) => ({
    successMessages: store.successMessages,
    errorMessages: store.errorMessages,
    removeSuccessMessage: store.removeSuccessMessage,
    removeErrorMessage: store.removeErrorMessage,
  }));

  useEffect(() => {
    let successTimer, errorTimer;

    if (successMessages.length > 0) {
      successTimer = setTimeout(() => removeSuccessMessage(), flashDuration);
    }

    if (errorMessages.length > 0) {
      errorTimer = setTimeout(() => removeErrorMessage(), flashDuration);
    }

    return () => {
      clearTimeout(successTimer);
      clearTimeout(errorTimer);
    };
  }, [successMessages, errorMessages, removeSuccessMessage, removeErrorMessage]);

  return (
    <>
      {successMessages.length > 0 && (
        <Flashmessage msgColor={props.successMsgColor} className="floating-alerts" flashDuration={flashDuration}>
          <div className={`alert alert-success text-center floating-alert shadow-sm ${props.successMsgClass}`}>{successMessages[0]}</div>
        </Flashmessage>
      )}

      {errorMessages.length > 0 && (
        <Flashmessage msgColor={props.errorMsgColor} className="floating-alerts" flashDuration={flashDuration}>
          <div className={`alert alert-danger text-center floating-alert shadow-sm ${props.errorMsgClass}`}>{errorMessages[0]}</div>
        </Flashmessage>
      )}
    </>
  );
};

export default FlashMessages;
