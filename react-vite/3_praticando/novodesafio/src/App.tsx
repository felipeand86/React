import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import psgp from "./assets/psgp.jpg"

function App() {
  return (
    <>
      <h1>Avançando em React</h1>
      {/*imagem na pasta public*/}
      <div>
        <img src="/cid-p.jpg" alt="Paisagem" />
        {/*imagem na pasta assets*/}
        <div>
            <img src={psgp} alt="Paisagem" />
        </div>
      </div>
    </>
  )
}

export default App
