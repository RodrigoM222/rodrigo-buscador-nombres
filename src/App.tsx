import { useState } from 'react'

import './App.css'

function App() {
  const [names, setNames] = useState (["Ana", "Bruno", "Carla", "Diego"])

  return (           
    <>
      <h2>Lista de nombres:</h2>
      <ul>
        {names.map((name: string, index: number) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <h3>Filtrar nombres:</h3>
      <input type="text" placeholder="Escribe un nombre:" onChange={(e) => {
        const value = e.target.value
        setNames(names.filter(name => name.toLowerCase().includes(value.toLowerCase())))
      }} />
    </>
  )
}

export default App
