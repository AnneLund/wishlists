import { useForm } from "react-hook-form";
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import { useLoginStore } from "../Login/useLoginStore";
import {useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import Axios from "axios";
import ChooseFile from "../../StyledComponents/ChooseFile.Styled";



const MikkelUpdate = () => {
const {register, handleSubmit, reset} = useForm();
const { setFlashMessage } = useFlashMessageStore();
const [data, setData] = useState([])
const {id} = useParams()

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
         const formData = new FormData;
         formData.append('image', image)
         Axios.post('https://api.imgbb.com/1/upload?expiration=600&key=0a60a912ef74fe6b2f381234baa648fe', formData)
         .then((res) => {
             console.log(res.data.data.display_url)
             setImage(`${res.data.data.display_url}`)
             setFlashMessage('Billedet er tilføjet!')
         })
     }

useEffect(() => {
  fetch('https://wishlists-api-annelund.vercel.app/member2/' + id)
    .then((res) => res.json())
    .then((data) => {
      setData(data.data)
    })
}, [])

const onSubmit = (id) => {
  const data = {
       id,
       title: wish.title,
       description: wish.description,
       image: wish.image,
       url: wish.url,
  }


  
        Axios.put('https://wishlists-api-annelund.vercel.app/member2', data)
      .then(response => {
          console.log(response.data)
      })
      .catch(error => error);
      setFlashMessage(`Ønsket er opdateret!`)
      setTimeout(() => {
        window.location.reload()  
        }, 2000)
      }

      const { userInfo} = useLoginStore((store) => ({
        userInfo: store.userInfo,
      }));

      const handleChange = (evt) => {
        let value = evt.target.value;
        setWish({...wish, [evt.target.name]: value});
      };

return(   
    <>
    {data?.map(wish => {
        return(   
            <section className="admin" key={wish.id}>
       <header>          
    <h1>Hej {userInfo}!</h1> 
    <h3>Redigér ønsket '{wish.title}'</h3>
      </header>

        
        <ChooseFile>
              <label>Tilføj et billede</label>
              <input type="file" name="file" onChange={handleImage}/>
              <button type="submit" onClick={handleApi}>Tilføj valgt billede</button>
        </ChooseFile> 
  
      <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit(wish.id)
      }
        
        } >
              <label>Titel</label>
              <input name="title" type="text" onChange={(e) => handleChange(e)} />
              <label>Beskrivelse</label>
              <textarea 
              id="textarea"
              style={{height: '10vh'}}
              name="description" 
              type="text" 
              onChange={(e) => handleChange(e)}
              />
              <input name="image" style={{display: 'none'}} ref={inputReference} type="text" value={`${image}`} onChange={(e) => handleChange(e)}/>
              <label>Link til siden</label>
              <input name="url" type="text" onChange={(e) => handleChange(e)}/>
              <button type='submit'>Opdatér ønsket</button>                        
    </form> 
    </section>    
        ) 
    })}
    </>
)

}

export default MikkelUpdate;
    
  