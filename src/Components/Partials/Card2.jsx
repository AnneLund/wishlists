import {useState, useEffect} from 'react';
import {StyledCard} from '../../StyledComponents/Card.Styled';
import Axios from 'axios'
import Loading from '../../Components/Partials/Loading'
import { useForm } from "react-hook-form";


const Card2 = () => {
  const [id, setId] = useState("")
  const handleChange = (e) => {setId(e.target.value)}
  const {register, formState: {errors}, handleSubmit} = useForm(); 
  const [isLoading, setLoading] = useState(true)
 const database = {id, købt: 1};
 const [data, setData] = useState([])

    useEffect(() => {
      fetch('https://next-database.vercel.app/api/wishes2')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setData(data)
        })
    }, [])

const onSubmit = () => {
    setLoading(true)
    
        Axios.put(`https://next-database.vercel.app/api/wishes2`, database)
        .then(response => {
            this.setState({})
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


return(
    <>
{data.data?.map(wish => {
    return(
<StyledCard>
       
            <img src={wish.image}/>
            <figcaption>
            <p className='title'>{wish.titel.substring(0, 20) + "..."}</p> 

            {wish.købt === "1" ? <p className='bought'>Gaven er købt</p> 
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
                </figcaption>
        
</StyledCard>
    )
}
  
)}    
    </>
)               


}

export default Card2;