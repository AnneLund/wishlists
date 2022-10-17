import {useState, useEffect} from 'react';
import { Grid } from '../StyledComponents/Grid.Styled';
import {StyledCard, StyledImage} from '../StyledComponents/Card.Styled';


const Card = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://next-database.vercel.app/api/wishes')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setData(data)
        })
    }, [])


return(
    <>
{data.data?.map(wish => {
    return(
<StyledCard key={wish.id}>
        <figure>
            <StyledImage src={wish.image}/>
            <figcaption>
            <p className='title'>{wish.titel.substring(0, 25) + "..."}</p> 
           
            {wish.købt === 1 ? <p className='status' style={{backgroundColor: "rgba(255, 0, 0, 0.534)", padding: "10px", margin: "4.7em 10px"}}>Gaven er købt</p> 
              : 
              <>
               <p className='wishNumber'>Ønske-nummer: {wish.id}</p>
              <p className='status' style={{backgroundColor: "rgba(14, 255, 14, 0.49)", padding: "10px", margin: "10px"}}>Gaven er ikke købt endnu..</p>
              <p className='link'>Køb gaven <a href={wish.url} target="_blank" rel="noopener noreferrer">her</a></p>
              </>
              }
                </figcaption>
        </figure>
</StyledCard>
    )
}
  
)}    
    </>
)               


}

export default Card;