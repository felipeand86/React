import './App.css'
import { Navbar } from './components/nav'
import { Section } from './components/sec'
import { Primeirocomponente } from './components/pag01'

function App() {

  return (
    <>
      <div>
        <main>
          <Navbar/>
          <Section/>
          <Primeirocomponente/>
        </main>
      </div>
    </>
  )
}

export default App
