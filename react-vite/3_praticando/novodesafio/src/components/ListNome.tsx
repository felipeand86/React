import {useState} from 'react'

const ListNome = () => {
    const [list] = useState(["João", "José", "Pedro"])
    const [users, setUsers] = useState([
        {id: 1, name: "Felipe", age: 20},
        {id: 2, name: "João", age: 40},
        {id: 3, name: "José", age: 50},
        {id: 4, name: "Maria", age: 55}
    ])
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5)
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}-{user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete</button>
    </div>
  )
}

export default ListNome