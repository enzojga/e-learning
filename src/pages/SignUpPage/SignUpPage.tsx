import React from 'react'
import SignUp from '../../components/specific/SignUp/SignUp'
import Navbar from '../../components/specific/Navbar/Navbar'
import Footer from '../../components/specific/Footer/Footer'

const SignUpPage = () => {
  return (
    <>
      <Navbar hideNavigation={true} />
      <SignUp />
      <Footer hideNavigation={true} />
    </>
  )
}

export default SignUpPage;
