import React from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'
// import { UserAuthContextProvider } from '../context/UserAuthContext'
const Screen = (props) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
          {props?.children}
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Screen