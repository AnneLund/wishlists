import { useForm } from "react-hook-form";
import appService from '../../Appservices/App.service';
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";

const RebeccaAdmin = () => {
const {register, handleSubmit, reset} = useForm();
const { setFlashMessage } = useFlashMessageStore();


    const onSubmit = (submitdata, e) => {
      e.preventDefault();
        async function fetchResults() {
          try {
            await appService.create_REBECCA(submitdata.titel, submitdata.description, submitdata.image, submitdata.url, submitdata.købt= '0');
        
          } catch (error) {
            console.log(error);
          }
        }
        fetchResults();
        setFlashMessage(`Ønsket er tilføjet!`)
        reset()
      };

return(   
    <section className='admin'>
    <h1>Indsæt nyt ønske på din ønskeseddel</h1> 
    <form onSubmit={handleSubmit(onSubmit)} >
                    
              <input {...register("titel", { required: "Titlen er påkrævet" })} type="text" placeholder="Titel" />

              <input {...register("description")} type="text" placeholder="Evt beskrivelse"/>

              <input {...register("image", { required: "Billede er påkrævet" })} type="text" placeholder="Billede-url"/>
              
              <input {...register("url", { required: "URL er påkrævet" })} type="text" placeholder="Link til produktet"/>
              
              <button type='submit'>Tilføj til ønskeseddel</button>        
                             
    </form>
    </section>
)}

export default RebeccaAdmin;
    
  