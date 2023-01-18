import axios from 'axios'
import React, {useState} from 'react'
import styled from 'styled-components'

const ChooseFile = styled.div`
    background-color: #000000aa;
    input{
     color: white;    
    }
   
`

const FileUploader = () => {
 const [image, setImage] = useState('')

    const handleImage = (e) => {
    console.log(e.target.files)
    setImage(e.target.files[0])   
    }

    const handleApi = () => {
        const formData = new FormData;
        formData.append('image', image)
        axios.post('https://api.imgbb.com/1/upload?expiration=600&key=0a60a912ef74fe6b2f381234baa648fe', formData)
        .then((res) => {
            console.log(res)
        })
    }

return(
    <ChooseFile>
      <input type="file" name="file" onChange={handleImage}/>
    <button onClick={handleApi}>Upload</button>    
    </ChooseFile>
  
)
  
}

export default FileUploader;