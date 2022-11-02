import { useForm } from "react-hook-form";
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import { useLoginStore } from "../Login/useLoginStore";
import {useState, useEffect} from 'react'
import Axios from "axios";
import { useParams } from "react-router-dom";

const AnneUpdate = () => {
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
  fetch("https://my-wish-api.vercel.app/api/anne/" + id)
    .then((res) => res.json())
    .then((data) => {
      setData(data.data)
    })
}, [])

console.log(data)


const {reset} = useForm();

    const onSubmit = (id) => {

       const data = {
            id,
            titel: wish.titel,
            description: wish.description,
            image: wish.image,
            url: wish.url,
       }
     

      Axios.put('https://my-wish-api.vercel.app/api/anne', data)
      .then(response => {
          console.log(response.data)
      })
  
      .catch(error => error);
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

data?.map(wish => {
  return(
    <section className="admin" key={wish.id}>
    <header>          
 <h1>Hej {userInfo}!</h1> 
 <h3>Redigér ønsket '{wish.titel}'</h3>
   </header>

   <form onSubmit={(e) => {
     e.preventDefault()
     onSubmit(wish.id)
     setFlashMessage(`Ønsket er opdateret!`)
     setTimeout(() => {
       window.location.reload()  
       }, 2000)
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
})
           
  
)}

export default AnneUpdate;
    
  