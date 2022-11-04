import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'
import appService from '../../Appservices/App.service'
import { useLoginStore } from './useLoginStore'
import StyledLoginPage from './LoginPage.Styled'
import { Navigate } from 'react-router-dom'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5em;
  color: black;
  /* background-color: ${(props )=> props.bgColor ? props.bgColor : 'green'} ; */
`

const Login = () => {
  const {loggedIn, setLoggedIn, setLogOut, username} = useLoginStore()

const {register, handleSubmit} = useForm()

const onSubmit = (submitData) => {

const fetchResults = async() => {

  try {
    const response = await appService.login(submitData.username, submitData.password)
    console.log(response)
    setLoggedIn(true, response.data.username, response.data.password)

  } catch (error) {
    console.error(error)
  }
}
fetchResults()

}

  return (
    <StyledLoginPage>
    {!loggedIn ? (
    <StyledForm className="login" onSubmit={handleSubmit(onSubmit)}>
    <input {...register("username", {required:"Username required"})} type="text" autoComplete="username" placeholder='Type your username'/>
    <input {...register("password", {required:"Password required"})} type="password" autoComplete="password" placeholder='Type your password'/>
    <button>Login</button>
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

