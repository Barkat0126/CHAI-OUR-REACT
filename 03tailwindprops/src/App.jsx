import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {

  return (
    <>
    
      <h1 className='bg-green-400 text-black p-4 rounded-xl'  >Tailwind Test</h1>
      
      <Card usename="Shreya" BtnText="Click Me"/>
      <Card usename="priya" BtnText="Visit Me"/>
      <Card/>

    </>
  )
}

export default App
