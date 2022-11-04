import { useForm } from "react-hook-form";
import appService from '../../Appservices/App.service';
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import { useLoginStore } from "../Login/useLoginStore";
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Axios from "axios";

const ValdemarUpdate = () => {
const {register, handleSubmit, reset} = useForm();
const { setFlashMessage } = useFlashMessageStore();
const {id} = useParams()
const [data, setData] = useState([])
const [wish, setWish] = useState({
    titel: "",
    description: "",
    image: "",
    url: "",
})


useEffect(() => {
  fetch('https://my-wish-api.vercel.app/api/valdemar/' + id)
    .then((res) => res.json())
    .then((data) => {
      setData(data.data)
    })
}, [])

    const onSubmit = (id) => {

       const data = {
            id,
            titel: wish.titel,
            description: wish.description,
            image: wish.image,
            url: wish.url,
       }
       if(wish.image.includes('.jpg') || (wish.image.includes('.png') || (wish.image.includes('.jpeg') || (wish.image.includes('.webp'))))) {
        Axios.put('https://my-wish-api.vercel.app/api/valdemar', data)
      .then(response => {
          console.log(response.data)
      })
      .catch(error => error);
      setFlashMessage(`Ønsket er opdateret!`)
      setTimeout(() => {
        window.location.reload()  
        }, 2000)
      } else {
        setFlashMessage(`Ugyldigt billedformat!`)
        return;
      }
  
      }

      const { userInfo} = useLoginStore((store) => ({
        userInfo: store.userInfo,
      }));

      const handleChange = (evt) => {
        const value = evt.target.value;
        setWish({
          ...wish,
          [evt.target.name]: value,
        });
      };

return(   
    <>
    {data?.map(wish => {
        return(   
            <section className="admin" key={wish.id}>
       <header>          
    <h1>Hej Valdemar!</h1> 
    <h3>Redigér ønsket '{wish.titel}'</h3>
      </header>
  
      <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit(wish.id)
      }
        
        } >
              <label>Titel</label>
              <input name="titel" type="text" onChange={(e) => handleChange(e)} />
              <label>Beskrivelse</label>
              <textarea id="textarea" style={{height: '10vh'}} name="description" type="text" onChange={(e) => handleChange(e)} />
              <label>Billedets webadresse</label>
              <input name="image" type="text" onChange={(e) => handleChange(e)}/>
              <label>Link til siden</label>
              <input name="url" type="text" onChange={(e) => handleChange(e)}/>
              <button type='submit'>Opdatér ønsket</button>                        
    </form> 
    </section>    
        ) 
    })}
    </>
)}

export default ValdemarUpdate;