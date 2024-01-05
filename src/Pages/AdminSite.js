import { useForm } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// Custom hooks
import { useFlashMessageStore } from "../Components/FlashMessages/useFlashMessageStore";
import { useLoginStore } from "./Login/useLoginStore";
import useFetchWishData from "../Components/CRUDhooks/fetchWishData";
import { usePostImageData, useImageHandler } from "../Components/CRUDhooks/postImageData";
import { useMembers } from "../Components/Members";

// Styles
import ChooseFile from "../StyledComponents/ChooseFile.Styled";
import { StyledCardUpdate } from "../StyledComponents/Wishlist.Styled";
import AdminStyled from "../StyledComponents/Admin_Styled";

// Custom components
import Transitions from "../StyledComponents/Transition";
import Loading from "../Components/Partials/Loading";

const AdminSite = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [image, setImage] = useState("");
  const inputReference = useRef(null);
  const Navigate = useNavigate();
  const { id } = useParams();
  const { role_id } = useLoginStore();
  const { setSuccessMessage, setErrorMessage } = useFlashMessageStore();
  const [isLoading, setIsLoading] = useState(false);

  const [shouldUploadImage, setShouldUploadImage] = useState(false);
  const postImage = usePostImageData(setImage, setIsLoading, setSuccessMessage, inputReference);
  const handleImage = useImageHandler(setErrorMessage, setIsLoading, setImage, setShouldUploadImage);

  const isUpdateMode = !!id;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fromRoute = queryParams.get("from");

  const members = useMembers();
  const allMembers = members.find((member) => member.loggedInId === 6);

  let roleData = members.find((member) => member.loggedInId === role_id);
  let name, username, update, create, member;

  if (fromRoute === "/allmembers") {
    ({ name, username, update, create, member } = allMembers);
  } else {
    ({ name, username, update, create, member } = roleData);
  }

  const { wishData, fetchWishData } = useFetchWishData(member, id);

  useEffect(() => {
    if (member && id) {
      fetchWishData(member, id);
    }
  }, [member, id, fetchWishData]);

  useEffect(() => {
    if (wishData) {
      setValue("title", wishData.title);
      setValue("description", wishData.description);
      setValue("image", wishData.image);
      setValue("url", wishData.url);
    }
  }, [wishData, setValue]);

  useEffect(() => {
    if (shouldUploadImage && image) {
      postImage(image);
    }
  }, [shouldUploadImage, image, postImage]);

  const onSubmit = async (submitdata, e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const updatedImageUrl = shouldUploadImage ? image : submitdata.image;
      const res = isUpdateMode
        ? await update(id, submitdata.title, submitdata.description, updatedImageUrl, submitdata.url)
        : await create(submitdata.title, submitdata.description, updatedImageUrl, submitdata.url, submitdata.købt);

      if (res.status === 200) {
        reset();
        setSuccessMessage(isUpdateMode ? "Ønske opdateret!" : "Ønske oprettet!");
        Navigate(`/${username}`);
      }
    } catch (error) {
      console.error("Fejl:", error);
      setErrorMessage("Det skete en fejl - prøv igen.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Transitions>
      <AdminStyled>
        <header>
          <h2>Hej {name}!</h2>
          <h3>{isUpdateMode ? "Opdater ønsket" : "Tilføj et nyt ønske på din ønskeseddel.."}</h3>
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          {!isUpdateMode && <label>Tilføj et billede</label>}
          {isUpdateMode && wishData && (
            <StyledCardUpdate isUpdateMode>
              <picture>
                <img src={shouldUploadImage ? image : wishData.image} alt="Wish" />
              </picture>
            </StyledCardUpdate>
          )}
          <ChooseFile>
            <input type="file" name="file" onChange={handleImage} />
            {isLoading && <Loading />}
          </ChooseFile>
          <label htmlFor="titel">Titel</label>
          <input {...register("title", { required: "Titel er påkrævet" })} />

          <label>Evt beskrivelse</label>
          <input {...register("description")} type="text" placeholder="Evt beskrivelse" />

          <input {...register("image")} style={{ display: "none" }} ref={inputReference} type="text" value={image} />

          <label>Tilføj evt et link til produktet</label>
          <input {...register("url")} type="text" placeholder="Link til produktet" />

          <button type="submit">{isUpdateMode ? "Opdater ønsket" : "Tilføj til ønskeseddel"}</button>
        </form>
      </AdminStyled>
    </Transitions>
  );
};

export default AdminSite;
