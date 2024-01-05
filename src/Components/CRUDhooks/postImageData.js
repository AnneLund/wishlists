import { useCallback } from "react";
import appService from "../../Appservices/App.service";

export function useImageHandler(setErrorMessage, setIsLoading, setImage, setShouldUploadImage) {
  const handleImage = useCallback(
    (e) => {
      const validFormats = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/bmp", "image/tiff", "image/webp"];
      const selectedFile = e.target.files[0];

      if (selectedFile && validFormats.includes(selectedFile.type)) {
        setIsLoading(true);
        setShouldUploadImage(true);
        setImage(selectedFile);
      } else {
        setErrorMessage("Ugyldigt format - prøv et andet billede.");
        e.target.value = "";
      }
    },
    [setErrorMessage, setIsLoading, setImage, setShouldUploadImage]
  );

  return handleImage;
}

export function usePostImageData(setImage, setIsLoading, setSuccessMessage, inputReference) {
  const postImage = useCallback(
    async (image) => {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("image", image);

      try {
        const res = await appService.post_image(formData);
        if (res.data.status === 200) {
          setImage(`${res.data.data.url}`);
          setSuccessMessage("Billedet er tilføjet!");
        }
      } catch (error) {
        console.error("Fejl:", error);
      } finally {
        setIsLoading(false);
        if (inputReference?.current) {
          inputReference.current.focus();
        }
      }
    },
    [setImage, setIsLoading, setSuccessMessage, inputReference]
  );

  return postImage;
}
