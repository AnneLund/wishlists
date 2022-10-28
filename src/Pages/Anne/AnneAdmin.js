import { useForm } from "react-hook-form";
import appService from '../../Appservices/App.service';
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import { useLoginStore } from "../Login/useLoginStore";
import {useState, useEffect} from 'react'

const AnneAdmin = () => {
const {register, handleSubmit, reset} = useForm();
const { setFlashMessage } = useFlashMessageStore();

const [data, setData] = useState([])
useEffect(() => {
  fetch('https://next-database.vercel.app/api/anne')
    .then((res) => res.json())
    .then((data) => {
      setData(data.data)
    })
}, [])

    const onSubmit = (submitdata, e) => {
      e.preventDefault();
        async function fetchResults() {
          try {
            await appService.create_ANNE(submitdata.titel, submitdata.description, submitdata.image, submitdata.url, submitdata.købt= '0');
        
          } catch (error) {
            console.log(error);
          }
        }
        fetchResults();
        setFlashMessage(`Ønsket er tilføjet!`)
        reset()
      };

      const { userInfo} = useLoginStore((store) => ({
        userInfo: store.userInfo,
      }));

return(   
    <section className='admin'>
      <header>
    <h1>Hej {userInfo}!</h1> 
    <h3>Tilføj et nyt ønske på din ønskseddel..</h3>
      </header>
    
    <form onSubmit={handleSubmit(onSubmit)} >
                    
              <input {...register("titel", { required: "Titlen er påkrævet" })} type="text" placeholder="Titel" />

              <input {...register("description")} type="text" placeholder="Evt beskrivelse"/>

              <input {...register("image", { required: "Billede er påkrævet" })} type="text" placeholder="Billede-url"/>
              
              <input {...register("url", { required: "URL er påkrævet" })} type="text" placeholder="Link til produktet"/>
              
              <button type='submit'>Tilføj til ønskeseddel</button>        
                             
    </form>
    </section>
)}

export default AnneAdmin;
    
  