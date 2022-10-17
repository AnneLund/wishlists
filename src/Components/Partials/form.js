import {useState, useEffect} from 'react'
import Axios from 'axios'
import Loading from '../../Components/Partials/Loading'
import { StyledForm } from '../StyledComponents/Form.Styled'
import { useForm } from "react-hook-form";
 
const Form = (props) => {
const form = props.formId ? props.formId: "";
const [id, setId] = useState("")
const handleChange = (e) => {setId(e.target.value)}
const {register, formState: {errors}, handleSubmit} = useForm();
const [isLoading, setLoading] = useState(true)

const onSubmit = () => {
const data = {id, købt: 1};

setLoading(true)

    Axios.put(`https://next-database.vercel.app/api/wishes${form}`, data)
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

        return (
            <StyledForm formId={props.formId} onSubmit={handleSubmit(onSubmit)} >
                <article className='form'>
                <h3 className='formTitle'>Skriv det ønske du vil opfylde!</h3>
               <div>
                  <>
                      <input 
                      placeholder="Ønske nr:"
                      type="text" 
                      id="id"
                      value={id}
                      onChange={handleChange}
                      />
                      <button type="submit">Send</button>
                  </>
                  </div>
                  </article>
            </StyledForm>
        );
    }

export default Form;
    
  