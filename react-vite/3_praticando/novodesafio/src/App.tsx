import psgp from "./assets/psgp.jpg"
import ManageData from './components/ManageData'
import ListNome from './components/ListNome'
import './App.css'

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
      <ManageData/>
      <ListNome />
    </>
  )
}

export default App
