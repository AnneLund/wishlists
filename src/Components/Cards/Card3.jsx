import {useState, useEffect} from 'react';
import {StyledCard} from './Card.Styled'
import Axios from 'axios'
import Loading from '../../Components/Partials/Loading'
import { useForm } from "react-hook-form";
import { useLoginStore } from '../../Pages/Login/useLoginStore';
import { useFlashMessageStore } from '../FlashMessages/useFlashMessageStore';
import { Link, Navigate } from 'react-router-dom';

const Card = () => {
  const [id, setId] = useState("")
  const handleChange = (e) => {setId(e.target.value)}
  const {handleSubmit, reset} = useForm();
  const [isLoading, setLoading] = useState(true)
  const database = {id, købt: 1};
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://my-wish-api.vercel.app/api/anne')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
      })
  }, [])

  const { setFlashMessage } = useFlashMessageStore();
 
  const onSubmit = () => {
    setLoading(true)
  
        Axios.put(`https://my-wish-api.vercel.app/api/anne`, database)
        .then(response => {
            console.log(response.data)
        })
    
        .catch(error => error);
        setTimeout(function(){
            window.location.reload(1)
        }, 3000)
    
        setLoading(false)
    
        if (isLoading) return <Loading/>
        if (!data) return 
    }
    const { setLoggedIn, loggedIn, userInfo, userName } = useLoginStore();
    console.log(userInfo)

return(
    <>
{/* {data?.map(wish => {
    return(
<StyledCard style={username === 'Anne' ? {height: 'auto', paddingBottom: '1em'} : {display: 'block'}} key={wish.id}>
      
            <img src={wish.image}/>
            <figcaption>
            <p className='title'>{wish.titel.substring(0, 25) + "..."}</p> 

            <p className='description'>{wish.description}</p>
          
            {wish.købt === 1 ? <p style={username === 'Anne' ? {display: 'none'} : {display: 'block'}} className='bought'>Gaven er købt</p> 
              : 
              <div style={username === 'Anne' ? {display: 'none'} : {display: 'block'}}>
              <p className='status'>Gaven er ikke købt endnu..</p>
             
              <form onSubmit={handleSubmit(onSubmit)} >
                      <button 
                      type="submit"
                      value={wish.id}
                      id="id"
                      onClick={handleChange}
                      >Denne gave vil jeg købe</button>
            </form>

             <p className='link'>Køb gaven <a href={wish.url} target="_blank" rel="noopener noreferrer">her</a></p>
            
              </div>
              
              }

{username === 'Anne' ? <div className='update'>

<button 
id="id" 
onClick={() => {
const payload = {
  data: {
    id: wish.id
  }
}

Axios.delete(`https://my-wish-api.vercel.app/api/anne`, payload)
setFlashMessage('Ønsket er slettet!')
reset()
setTimeout(() => {
window.location.reload()  
}, 2000)

}}
value={wish.id}><p className='deleteWish'>Slet ønske</p></button>   

<button>
<Link to={"/anne/" + wish.id}>Redigér ønske</Link>  
</button>
              </div> : null}
            </figcaption>
      
</StyledCard>
    )
}
  
)}  */}
    </>
)               


}

export default Card;