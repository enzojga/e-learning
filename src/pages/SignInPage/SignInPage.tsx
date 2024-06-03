import React from 'react'
import Navbar from '../../components/specific/Navbar/Navbar'
import Footer from '../../components/specific/Footer/Footer'
import Login from '../../components/specific/Login/Login'

const SignInPage = () => {
  return (
    <>
      <Navbar hideNavigation={true}/>
      <Login />
      <Footer hideNavigation={true}/>
    </>
  )
}

export default SignInPage;
