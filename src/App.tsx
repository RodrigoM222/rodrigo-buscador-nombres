import { useState } from 'react'

import './App.css'

function App() {

  const names = ["Ana", "Bruno", "Carla", "Diego"];
  const [filteredNames, setFilteredNames] = useState(names);

  function renderNames () {
    return filteredNames.map((name: string, index: number) => (
      <li key={index}>{name}</li>
    ))
  }

  function filterNames () {
    return <input type="text" placeholder="Escribe un nombre:" onChange={(e) => {
      const { value } = e.target;
      setFilteredNames(names.filter(name => name.toLowerCase().includes(value.toLowerCase())))
    }} />
  }

  return (           
    <>
      <h2>Lista de nombres:</h2>
      <ul>
        {renderNames()}
      </ul>
      <h3>Filtrar nombres:</h3>
      {filterNames()}
    </>
  )
}

export default App