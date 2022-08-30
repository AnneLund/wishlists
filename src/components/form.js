import {useState, useEffect} from 'react'

//Axios er et promise-baseret javascript bibliotek der bruges til HTTP requests.
//Den skaber forbindelse imellem node.js og browseren.
import Axios from 'axios'

//Jeg laver et kontrolleret komponent, dvs at den value som brugeren skriver i inputtet,
//er kontrolleret af React state.  

const Form = () => {
//Min constructor er en metode som bliver påkaldt under kontruktionen af et objekt.
//

//Følgende funktion starter så snart jeg begynder at skrive noget i mit input.
//setState sørger for at min value bliver opdateret
//'e' er en syntetisk event der sørger for at den virker i alle browsere.

const [title, setTitle] = useState("her er jeg")
const handleChange = (e) => {setTitle(e.target.value)}

const handleSubmit = (e) => {e.preventDefault();
    const data = {title};

        Axios.post('https://next-database.vercel.app/api/wishes', data)
            .then(response => {           
            this.setState({}) 
            console.log(response.data)          
            })

            .catch(error => error);           
            
            alert('Tak for din tilmelding!')
    }
   
        return (
            <article className="newsletter">
                <h2>Skriv det ønske du vil opfylde!</h2>
               <div>
                  <form>
                      <input 
                      placeholder="Ønske"
                      type="text" 
                      id="titel"
                      value={title}
                      onChange={handleChange}
                      />
                      <button onClick={handleSubmit} type="submit">Send</button>
                  </form>
                  </div>
            </article>
        );
    }

export default Form;
    
  