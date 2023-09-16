"use client"

import GetWeather from './components/GetWeather.jsx'

export default function Home() {
  return (
    <>
    <section className='app__background'>

      <h1>Weather</h1>

      <section className='weather-info'>
      <GetWeather />  
      </section>

    </section>
    </>
  )
}
