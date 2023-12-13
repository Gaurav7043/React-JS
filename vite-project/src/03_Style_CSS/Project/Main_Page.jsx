import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default function Main_Page() {
  return (
    <div style={{margin : "7px"}}>
      {/* -----Header----------- */}
      <Header/>

      {/* -------Body--------- */}
      <Body/>

      {/* -----Footer */}
      <Footer/>
    </div>
  )
}
