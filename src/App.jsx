import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './pages/main/Main'

export default function App() {
  return (
    <>
      <Header/>
      <div className='render'>
        <Main/>
      </div>
      <Footer/>
    </>
  )
}
