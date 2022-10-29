import { useForm } from "react-hook-form";
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import { useLoginStore } from "../Login/useLoginStore";
import {useState, useEffect} from 'react'
import Axios from "axios";

const AnneUpdate = () => {
const { setFlashMessage } = useFlashMessageStore();

const [data, setData] = useState([])
const [wish, setWish] = useState({
    titel: "",
    description: "",
    image: "",
    url: "",
})


useEffect(() => {
  fetch('https://next-database.vercel.app/api/anne')
    .then((res) => res.json())
    .then((data) => {
      setData(data.data)
    })
}, [])


const {reset} = useForm();

    const onSubmit = (id) => {

       const data = {
            id,
            titel: wish.titel,
            description: wish.description,
            image: wish.image,
            url: wish.url,
       }
     

      Axios.put(`https://next-database.vercel.app/api/anne`, data)
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
    <>
    {data?.map(wish => {
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
        window.location.replace('/wishlists/anne#/wishlists/anne')
        }} >
                    
              <input name="titel" type="text" placeholder="Titel" onChange={(e) => handleChange(e)} />

              <input name="description" type="text" placeholder="Evt beskrivelse" onChange={(e) => handleChange(e)} />

              <input name="image" type="text" placeholder="Billede-url" onChange={(e) => handleChange(e)}/>
              
              <input name="url" type="text" placeholder="Link til produktet" onChange={(e) => handleChange(e)}/>
              
              <button type='submit'>Opdatér ønskeseddel</button>   
                             
    </form>  
    </section>    
        ) 
    })}
    </>
)}

export default AnneUpdate;
    
  