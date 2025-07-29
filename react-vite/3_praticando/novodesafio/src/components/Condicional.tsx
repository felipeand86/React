import { useState } from "react"

const Condicional = () => {
    const [x] = useState(false)

    const [name, setName] = useState("Zé")
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, exibe</p>}
        {!x && <p>Se x for falso, exibe esse</p>}
        <h1>If Ternario</h1>
        {name === "João" ? (
          <div>
            <p>O nome é "João"</p>
          </div>
        ) : (
          <div>
            <p>Nome não encontrado</p>
          </div>
        )}
        <button onClick={() => setName("João")}>Clique Aqui</button>
    </div>
  )
}

export default Condicional