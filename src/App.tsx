import { useState } from 'react'

import './App.css'

function App() {

  const names = ["Ana", "Bruno", "Carla", "Diego"];
  const [filteredNames, setFilteredNames] = useState(names);

  return (           
    <>
      <h2>Lista de nombres:</h2>
      <ul>
        {filteredNames.map((name: string, index: number) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <h3>Filtrar nombres:</h3>
      <input type="text" placeholder="Escribe un nombre:" onChange={(e) => {
        const value = e.target.value;
        setFilteredNames(names.filter(name => name.toLowerCase().includes(value.toLowerCase())))
      }} />
    </>
  )
}

export default App
