import psgp from "./assets/psgp.jpg"
import ManageData from './components/ManageData'
import ListNome from './components/ListNome'
import './App.css'
import Condicional from "./components/Condicional"
import ShowUserName from "./components/ShowUserName"
import { useState } from "react"

function App() {
  const name="Asdrobald"
  const [userName] = useState("Maria")
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
      <ManageData/>
      <ListNome />
      <Condicional />
      <ShowUserName name={userName}/>
    </>
  )
}

export default App
