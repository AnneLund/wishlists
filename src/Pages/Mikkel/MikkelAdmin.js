import { useForm } from "react-hook-form";
import appService from '../../Appservices/App.service';
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import { useLoginStore } from "../Login/useLoginStore";

const MikkelAdmin = () => {
const {register, handleSubmit, reset} = useForm();
const { setFlashMessage } = useFlashMessageStore();

const onSubmit = (submitdata, e) => {
  e.preventDefault();
  
    async function fetchResults() {
      try {
        await appService.create_MIKKEL(submitdata.titel, submitdata.description, submitdata.image, submitdata.url, submitdata.købt= '0');
    
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchResults();
    setFlashMessage(`Ønsket er tilføjet!`)
    reset()
    setTimeout(() => {
      window.location.reload()   
      }, 2000)
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
              
              <input {...register("image")} type="text" placeholder="Billede-url"/>
              
              <input {...register("url")} type="text" placeholder="Link til produktet"/>
              
              <button type='submit'>Tilføj til ønskeseddel</button>                 
    </form>

    </section>
)}

export default MikkelAdmin;
    
  