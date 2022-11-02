import {useState, useEffect} from 'react';
import {StyledCard} from './Card.Styled';
import Axios from 'axios'
import Loading from '../../Components/Partials/Loading'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useLoginStore } from '../../Pages/Login/useLoginStore';
import { useModalStore } from "../Modal/useModalStore";
import RebeccaUpdate from '../../Pages/Rebecca/RebeccaUpdate';
import { useFlashMessageStore } from '../FlashMessages/useFlashMessageStore';


const Card = () => {
    const [id, setId] = useState("")
    const handleChange = (e) => {setId(e.target.value)}
    const {reset, handleSubmit} = useForm();
    const [isLoading, setLoading] = useState(true)
    const database = {id, købt: 1};
    const { setFlashMessage } = useFlashMessageStore();

    const { userInfo } = useLoginStore((store) => ({
        userInfo: store.userInfo
      }));

    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://my-wish-api.vercel.app/api/rebecca')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setData(data)
        })
    }, [])

const onSubmit = () => {

    
        Axios.put(`https://my-wish-api.vercel.app/api/rebecca`, database)
        .then(response => {
            console.log(response.data)
        })
    
        .catch(error => error);
        setTimeout(function(){
            window.location.reload(1)
        }, 3000)
    }

return(
    <>
{data.data?.map(wish => {
    return(
<StyledCard key={wish.id} style={userInfo === 'Anne' || 'Mikkel' ? {height: 'auto', paddingBottom: '1em'} : {display: 'block'}}>
            <img src={wish.image}/>
            <figcaption>
            <p className='title'>{wish.titel.substring(0, 25) + "..."}</p> 
            <p className='description'>{wish.description}</p>

            {wish.købt === 1 ? <div className='bought'>Gaven er købt</div>
              : 
              <>
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
              </>
              }

{userInfo === 'Mikkel' || 'Anne' ? <div className='update'>

<button 
id="id" 
onClick={() => {
const payload = {
  data: {
    id: wish.id
  }
}
Axios.delete(`https://my-wish-api.vercel.app/api/rebecca`, payload)
setFlashMessage('Ønsket er slettet!')
reset()
setTimeout(() => {
  window.location.reload()  
  }, 2000)
}}
value={wish.id}><p className='deleteWish'>Slet ønske</p></button>   

<button>
<Link to={"/adminrebecca/" + wish.id}>Redigér ønske</Link>  
</button>
</div> : null}
                </figcaption>
</StyledCard>
    )
}
  
)}    
    </>
)               


}

export default Card;