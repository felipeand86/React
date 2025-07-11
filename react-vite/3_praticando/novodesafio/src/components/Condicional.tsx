import { useState } from "react"

const Condicional = () => {
    const [x] = useState(false)
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, exibe</p>}
        {!x && <p>Se x for falso, exibe esse</p>}
    </div>
  )
}

export default Condicional