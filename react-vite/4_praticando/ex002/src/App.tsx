
import './App.css'
import { UmComponent } from "./components/UmComponent";
import { TemplateExpressions } from "./components/TemplateExpressions";
import { OutroComp } from "./components/OutroComp";
import { Events } from "./components/Events";
import Challenge from "./components/Challenge";


function App() {
  return (
    <div>
      <h1>Nome Nome</h1>
      <UmComponent />
      <TemplateExpressions />
      <OutroComp />
      <Events />
      <Challenge />
    </div>
  )
}

export default App
