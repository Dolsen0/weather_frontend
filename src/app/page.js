"use client"


import Image from 'next/image'
import styles from './page.module.css'
import GetLocation from './components/GetLocation.jsx'

export default function Home() {
  return (
    <>
      <h1>Weather</h1>
      
      <GetLocation />  
    </>
  )
}
