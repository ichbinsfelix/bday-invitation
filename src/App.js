import { React, useState, useEffect } from 'react'
import Contact from './components/Contact'
import TypeWriter from './components/TypeWriter'
import FadeIn from 'react-fade-in'


import './app.css'

const delay = 27

function App() {

  const [show, setShow] = useState(false)

  useEffect(
    () => {
      let timer = setTimeout(() => setShow(true), delay * 1000)
      return () => {
        clearTimeout(timer)
      }
    },
    []
  )
  return show ? (
    <FadeIn delay={80} transitionDuration={1500} >
      <div>
        <Contact /> </div>      </FadeIn>
  ) :
    (

      <div><TypeWriter /></div>

    )
}

export default App
