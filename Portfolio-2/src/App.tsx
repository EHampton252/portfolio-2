import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Home</h1>
      <h2>Hello!</h2>
      <h3>About Me</h3>
      <h3>Projects</h3>
      <h3>Resume</h3>
      <h3>Contact Me</h3>
    </>
  )
}

export default App
