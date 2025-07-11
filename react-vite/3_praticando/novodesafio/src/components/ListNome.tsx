import {useState} from 'react'

const ListNome = () => {
    const [list] = useState(["João", "José", "Pedro"])
  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListNome