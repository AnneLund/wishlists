import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'
import appService from '../../Appservices/App.service'
import { useLoginStore } from './useLoginStore'
import StyledLoginPage from './LoginPage.Styled'
import { Navigate } from 'react-router-dom'
import { useFlashMessageStore } from '../../Components/FlashMessages/useFlashMessageStore'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  color: black;
  /* background-color: ${(props )=> props.bgColor ? props.bgColor : 'green'} ; */
`

const Login = () => {
  const {loggedIn, setLoggedIn, setLogOut, username} = useLoginStore()
  const { setFlashMessage } = useFlashMessageStore();

const {register, handleSubmit, reset} = useForm()

const onSubmit = (submitData) => {

const fetchResults = async() => {

  try {
    const response = await appService.login(submitData.username, submitData.password)
      setLoggedIn(response.data.status, response.data.username, response.data.password)  

  } catch (error) {
    console.error(error)
    setFlashMessage('Forkert brugernavn eller password')
    reset()
  }
}
fetchResults()
}

  return (
    <StyledLoginPage>
      <h1>Log ind for at se ønskesedlerne</h1>
    {!loggedIn ? (
    <StyledForm className="login" onSubmit={handleSubmit(onSubmit)}>
    <input {...register("username", {required:"Username required"})} type="text" autoComplete="username" placeholder='Brugernavn'/>
    <input {...register("password", {required:"Password required"})} type="password" autoComplete="password" placeholder='Kodeord'/>
    <button>Log ind</button>
    </StyledForm>  
    ) : (
      <>
     <Navigate to="/wishlists"/>
      </>
    )}
    </StyledLoginPage>
  )
}

export default Login

