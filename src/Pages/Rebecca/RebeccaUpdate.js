import { useForm } from "react-hook-form";
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import { useLoginStore } from "../Login/useLoginStore";
import {useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import Axios from "axios";
import ChooseFile from "../../StyledComponents/ChooseFile.Styled";
import axios from "axios";
import Admin from "../../StyledComponents/Admin_Styled";

const RebeccaUpdate = () => {

const { setFlashMessage } = useFlashMessageStore();
const {id} = useParams()
const [data, setData] = useState([])
const [wish, setWish] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
})

const [image, setImage] = useState('')
const inputReference = useRef(null);


 
     const handleImage = (e) => {
     console.log(e.target.files)
     setImage(e.target.files[0])  
     }
 
     const handleApi = () => {
        inputReference.current.focus();  
         const formData = new FormData()
         formData.append('image', image)
         Axios.post('https://api.imgbb.com/1/upload?expiration=600&key=0a60a912ef74fe6b2f381234baa648fe', formData)
         .then((res) => {
             console.log(res.data.data.display_url)
             setImage(`${res.data.data.display_url}`)
             setFlashMessage('Billedet er tilføjet!')
         })
     }


useEffect(() => {
  axios.get('https://wishlists-api-annelund.vercel.app/member3/' + id)
  .then((res) => {
    console.log(res)
  setData(res.data)
})
}, [])

console.log(data)

    const onSubmit = (id) => {

       const payload = {
            id,
            title: wish.title,
            description: wish.description,
            image: wish.image,
            url: wish.url,
       }

        Axios.put('https://wishlists-api-annelund.vercel.app/member3', payload)
      .then(response => {
          console.log(response.data)
      })
      .catch(error => error);
      setFlashMessage(`Ønsket er opdateret!`)


      setTimeout(() => {
        window.location.reload()  
        }, 2000)
     
      }

      const { username } = useLoginStore();

      const handleChange = (evt) => {
        const value = evt.target.value;
        setWish({
          ...wish,
          [evt.target.name]: value,
        });
      };

      

return(   
    <> 
            <Admin key={data.id}>
       <header>          
    <h1>Hej Rebecca!</h1> 
    <h3>Redigér ønsket '{data.title}'</h3>
      </header>

      <ChooseFile>
              <label>Tilføj et billede</label>
              <input type="file" name="file" onChange={handleImage}/>
              <button type="submit" onClick={handleApi}>Tilføj valgt billede</button>
        </ChooseFile> 
  
      <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit(data.id)
        inputReference.current.value = `${data.title}`
        console.log(inputReference.current.value);
      }
        
        } >
              <label>Titel</label>
              <input ref={inputReference} name="title" type="text" onChange={(e) => handleChange(e)} />
              <label>Beskrivelse</label>
              <textarea id="textarea" style={{height: '10vh'}} name="description" type="text" onChange={(e) => handleChange(e)} />
              <input name="image" style={{display: 'none'}} ref={inputReference} type="text" value={`${image}`} onChange={(e) => handleChange(e)}/>
              <label>Link til siden</label>
              <input name="url" type="text" onChange={(e) => handleChange(e)}/>
              <button type='submit'>Opdatér ønsket</button>                        
    </form> 
    </Admin>    
        
    </>
)}

export default RebeccaUpdate;