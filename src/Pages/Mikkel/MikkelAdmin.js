import { useForm } from "react-hook-form";
import appService from '../../Appservices/App.service';
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";

const MikkelAdmin = () => {
const {register, handleSubmit, reset} = useForm();

const { setFlashMessage } = useFlashMessageStore();

    const onSubmit = (submitdata, e) => {
     e.preventDefault();
     
        async function fetchResults() {
       
          try {
            await appService.create_MIKKEL(submitdata.titel, submitdata.description, submitdata.image, submitdata.url, submitdata.købt= '0');
            // if (response.data) {
            //   localStorage.setItem("user", JSON.stringify(response.data));
            //    setLoggedIn();
            //  }
       
          } catch (error) {
            console.log(error);
          }
        }
        fetchResults();
        setFlashMessage(`Ønsket er oprettet!`)
      reset()
        
      };

return(    
    <section className='admin'>
      <h1>Indsæt nyt ønske på din ønskeseddel</h1> 

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
    
  