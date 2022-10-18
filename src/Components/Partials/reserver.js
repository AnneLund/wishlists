import {useState, useEffect} from 'react'
import Axios from 'axios'
import Loading from '../../Components/Partials/Loading'
import { StyledForm } from '../../StyledComponents/Form.Styled'
import { useForm } from "react-hook-form";
 
const Book = (props) => {
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
               <div>
                  <>
                      <button 
                      type="submit"
                      id="id"
                      value={id}
                      onClick={handleChange}
                      >Reverver</button>
                  </>
                  </div>
                  </article>
            </StyledForm>
        );
    }

export default Book;