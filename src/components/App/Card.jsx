import '../../Styles/Card.scss'
import {useState, useEffect} from 'react';


const Card = () => {

    const [data, setData] = useState([])

    useEffect(() => {
      fetch('https://next-database.vercel.app/api/wishes')
        .then((res) => res.json())
        .then((data) => {
            console.log(data.data)
          setData(data)
        })
    
    }, [])


return(
    <>
{data.data?.map(wish => {
    return(
<div key={wish.id} className='wishcard'>
        <figure>
            <img src={wish.image}/>
            <figcaption>
            <p>{wish.titel}</p> 
            <p className='wishNumber'>Ønskenummer: {wish.id}</p>   
            </figcaption>
              {wish.købt === 1 ? <p className='status'>Gaven er købt</p> : <p className='status' style={{backgroundColor: "green"}}>Gaven er ikke købt endnu..</p>}   
        </figure>
       

</div>
    )
}
  
)}    
    </>
)               


}

export default Card;