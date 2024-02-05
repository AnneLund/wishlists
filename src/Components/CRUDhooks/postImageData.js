import { useCallback } from "react";
import appService from "../../Appservices/App.service";
import axios from "axios";

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
    async (image, imageUrl = null) => {
      let uploadedImageUrl = null;
      setIsLoading(true);

      try {
        let res;
        if (imageUrl) {
          // Hvis en image URL er givet, brug den til at uploade til imgbb
          const apiKey = process.env.REACT_APP_IMGBB_API_KEY;
          const url = `https://api.imgbb.com/1/upload?key=${apiKey}&image=${encodeURIComponent(imageUrl)}`;
          res = await axios.post(url);
        } else {
          // Ellers brug den oprindelige metode til at uploade filen
          const formData = new FormData();
          formData.append("image", image);
          res = await appService.post_image(formData);
        }

        if (res.data.status === 200) {
          uploadedImageUrl = res.data.data.url; 
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
      return uploadedImageUrl;
    },
    [setImage, setIsLoading, setSuccessMessage, inputReference]
  );

  return postImage;
}
