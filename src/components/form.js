import {useState, useEffect} from 'react'

import Axios from 'axios'
 
const Form = () => {
const [id, setId] = useState("")
const handleChange = (e) => {setId(e.target.value)}

const handleSubmit = (e) => {e.preventDefault();
    const data = {id, købt: 1};

        Axios.put('https://next-database.vercel.app/api/wishes', data)
            .then(response => {           
            this.setState({}) 
            console.log(response.data)          
            })

            .catch(error => error);
            
    }
   
        return (
            <article className="newsletter">
                <h2>Skriv det ønske du vil opfylde!</h2>
               <div>
                  <form>
                      <input 
                      placeholder="Ønske nr:"
                      type="text" 
                      id="id"
                      value={id}
                      onChange={handleChange}
                      />
                      <button onClick={handleSubmit} type="submit">Send</button>
                  </form>
                  </div>
            </article>
        );
    }

export default Form;
    
  