"use client"

import GetLocation from './components/GetLocation.jsx'

export default function Home() {
  return (
    <>
    <section className='app__background'>

      <h1>Weather</h1>
      
      <GetLocation />  
    </section>
    </>
  )
}
