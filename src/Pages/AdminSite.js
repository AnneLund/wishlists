import { useForm } from "react-hook-form";
import appService from "../Appservices/App.service";
import { useFlashMessageStore } from "../Components/FlashMessages/useFlashMessageStore";
import { useLoginStore } from "./Login/useLoginStore";
import { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ChooseFile from "../StyledComponents/ChooseFile.Styled";
import Loading from "../Components/Partials/Loading";
import { StyledCardUpdate } from "../StyledComponents/Wishlist.Styled";
import AdminStyled from "../StyledComponents/Admin_Styled";
import Transitions from "../StyledComponents/Transition";

const AdminSite = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const { setSuccessMessage, setErrorMessage } = useFlashMessageStore();
  const [image, setImage] = useState("");
  const inputReference = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();
  const { id } = useParams(); // Get the wish id from the URL params
  const [shouldUploadImage, setShouldUploadImage] = useState(false);
  const { role_id } = useLoginStore();
  const [wishData, setWishData] = useState();
  const isUpdateMode = !!id; // Check if id exists, indicating update mode

  const roles = {
    1: {
      name: "Anne",
      username: "anne",
      update: appService.update_member1,
      create: appService.create_member1,
      url: "https://wishlists-api-annelund.vercel.app/member1",
    },
    2: {
      name: "Mikkel",
      username: "mikkel",
      update: appService.update_member2,
      create: appService.create_member2,
      url: "https://wishlists-api-annelund.vercel.app/member2",
    },
    3: {
      name: "Rebecca",
      username: "rebecca",
      update: appService.update_member3,
      create: appService.create_member3,
      url: "https://wishlists-api-annelund.vercel.app/member3",
    },
    4: {
      name: "Valdemar",
      username: "valdemar",
      update: appService.update_member4,
      create: appService.create_member4,
      url: "https://wishlists-api-annelund.vercel.app/member4",
    },
    5: {
      name: "Alle",
      username: "allmembers",
      update: appService.update_all_members,
      create: appService.create_all_members,
      url: "https://wishlists-api-annelund.vercel.app/allmembers",
    },
  };

  const defaultRole = { name: "", username: "", update: "", create: "", url: "" };

  const roleData = roles[role_id] || defaultRole;

  const { name, username, update, create, url } = roleData;

  const fetchWishData = useCallback(async () => {
    try {
      const res = await axios.get(`${url}/${id}`);
      const wishData = res.data;

      setValue("title", wishData.title);
      setValue("description", wishData.description);
      setValue("image", wishData.image);
      setValue("url", wishData.url);
      setWishData(wishData);
    } catch (error) {
      console.error("Error fetching wish data:", error);
    }
  }, [id, setValue, url]);

  useEffect(() => {
    if (isUpdateMode) {
      fetchWishData();
    }
  }, [fetchWishData, isUpdateMode]);

  const handleImage = (e) => {
    const validFormats = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/bmp", "image/tiff", "image/webp"];
    if (validFormats.includes(e.target.files[0].type)) {
      setIsLoading(true);
      setShouldUploadImage(true);
      setImage(e.target.files[0]);
    } else {
      setErrorMessage("Ugyldigt format - prøv et andet billede.");
      e.target.value = "";
    }
  };

  const handleApi = useCallback(async () => {
    inputReference.current.focus();
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await appService.post_image(formData);
      console.log(res);
      setImage(`${res.data.data.image.url}`);

      if (res.data.status === 200) {
        setIsLoading(false);
        setSuccessMessage("Billedet er tilføjet!");
      }
    } catch (error) {
      console.error("Fejl:", error);
      setIsLoading(false);
    }
  }, [image, setImage, setIsLoading, setSuccessMessage, inputReference]);

  const onSubmit = async (submitdata, e) => {
    e.preventDefault();

    try {
      if (isUpdateMode) {
        const updatedImageUrl = shouldUploadImage ? image : submitdata.image;
        const res = await update(id, submitdata.title, submitdata.description, updatedImageUrl, submitdata.url);

        if (res.status === 200) {
          reset();
          setSuccessMessage("Ønske opdateret!");
          setIsLoading(false);
          Navigate(`/${username}`);
        }
      } else {
        // Now, create a new wish with the image URL
        const res = await create(
          submitdata.title,
          submitdata.description,
          submitdata.url,
          shouldUploadImage ? image : submitdata.image,
          submitdata.købt
        );

        if (res.data.status === 200) {
          reset();
          setSuccessMessage("Ønske oprettet!");
          setIsLoading(false);
          Navigate(`/${username}`);
        }
      }
    } catch (error) {
      console.error("Fejl:", error);
      setErrorMessage("Det skete en fejl - prøv igen.");
    }
  };

  useEffect(() => {
    if (shouldUploadImage) {
      handleApi();
    }
  }, [shouldUploadImage, handleApi]);

  return (
    <Transitions>
      <AdminStyled>
        <header>
          <h2>Hej {name}!</h2>
          <h3>{isUpdateMode ? "Opdater ønsket" : "Tilføj et nyt ønske på din ønskeseddel.."}</h3>
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>{isUpdateMode ? "" : "Tilføj et billede"}</label>

          {isUpdateMode ? (
            <StyledCardUpdate isUpdateMode={isUpdateMode}>
              {wishData && (
                <picture>
                  <img src={shouldUploadImage ? image : wishData.image} alt="Wish" />
                </picture>
              )}
            </StyledCardUpdate>
          ) : null}
          <ChooseFile>
            <input type="file" name="file" onChange={handleImage} />
            {isLoading ? <Loading /> : null}
          </ChooseFile>
          <label htmlFor="titel">Titel</label>
          <input {...register("title", { required: "Titel er påkrævet" })} />

          <label>Evt beskrivelse</label>
          <input {...register("description")} type="text" placeholder="Evt beskrivelse" />

          <input {...register("image")} style={{ display: "none" }} ref={inputReference} type="text" value={`${image}`} />

          <label>Tilføj evt et link til produktet</label>
          <input {...register("url")} type="text" placeholder="Link til produktet" />

          <button
            type="submit"
            onClick={() => {
              setIsLoading(true);
            }}>
            {isUpdateMode ? "Opdater ønsket" : "Tilføj til ønskeseddel"}
          </button>
        </form>
      </AdminStyled>
    </Transitions>
  );
};

export default AdminSite;
