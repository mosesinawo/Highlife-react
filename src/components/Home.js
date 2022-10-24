import React from 'react'
import Footer from '../Footer.js/Footer'
import Header from '../Header/Header'
import Main from '../MainSection/Main'

const Home = () => {
  return (
    <div  style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home