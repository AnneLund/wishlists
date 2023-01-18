import { useForm} from "react-hook-form";
import appService from '../../Appservices/App.service';
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import { useLoginStore } from "../Login/useLoginStore";
import {useState, useRef} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ChooseFile from "../../StyledComponents/ChooseFile.Styled";
import Loading from "../../Components/Partials/Loading";
import Admin from "../../StyledComponents/Admin_Styled";

const AllMembersAdmin = () => {
const {register, handleSubmit, reset} = useForm();
const { setFlashMessage } = useFlashMessageStore();
const [image, setImage] = useState('')
const inputReference = useRef(null);
const [isLoading, setIsLoading] = useState(false)
const Navigate = useNavigate()

     const handleImage = (e) => {
     setImage(e.target.files[0])   
     }
 
     const handleApi = () => {
        inputReference.current.focus();  
         const formData = new FormData();
         formData.append('image', image)

         axios.post('https://api.imgbb.com/1/upload?&key=e8a00b56282f272fb0399ee781aa3a44', formData)
         .then((res) => {
            console.log(res.data.data.image.url)
          setImage(`${res.data.data.image.url}`)

             if (res.data.status === 200) {
              setIsLoading(false)
              setFlashMessage('Billedet er tilføjet!')
       
             } else {
              alert('Noget gik galt.. Prøv igen!')
              return;
             }
         })
     }

     const onSubmit = (submitdata, e) => {
      e.preventDefault();
      async function fetchResults() {
        try {
        const res = await appService.create_ALLMEMBERS(submitdata.title, submitdata.description, submitdata.image=`${image}`, submitdata.url, submitdata.købt= '0');
       console.log(res)
    if(res.data.message === "Ønske oprettet!") {
       reset()
       setTimeout(() => {
       setFlashMessage("Ønsket er tilføjet!") 
       setIsLoading(false)
       Navigate("/allmembers")  
       }, 2000)
    }
        }
        catch(error) {
          console.log(error);
        }
      }
      fetchResults();
      } 

      const { username } = useLoginStore();

return(   
    <Admin>
      <header>
    <h1>Hej {username} !</h1> 
    <h3>Tilføj et nyt ønske på jeres ønskeseddel..</h3>
      </header>
      <label>Tilføj et billede</label>
      <ChooseFile>
              <input type="file" name="file" onChange={handleImage}/>
              <button onClick={() => {
              handleApi() 
              setIsLoading(true)
              }}>Tilføj valgt billede</button>
            {  isLoading ? <Loading/> : null}
        </ChooseFile> 
    
    <form onSubmit={handleSubmit(onSubmit)} >
              <label>Titel</label>      
              <input {...register("title", { required: "Titel er påkrævet" })}  type="text" placeholder="Titel" />
              
              <label>Evt beskrivelse</label>
              <input {...register("description")} type="text" placeholder="Evt beskrivelse"/>

              <input {...register("image")} style={{display: 'none'}} ref={inputReference} type="text" value={`${image}`}/>

              <label>Tilføj evt et link til produktet</label>
              <input {...register("url")} type="text" placeholder="Link til produktet"/>

              <button type='submit' onClick={() => {
                setIsLoading(true)
              }}>Tilføj til ønskeseddel</button>                     
    </form>
    </Admin>
)}

export default AllMembersAdmin;
    
  