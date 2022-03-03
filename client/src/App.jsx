import { useState } from 'react'
import './App.scss'

function App() {

  return (
    <div className="App">
     <form action="">
       <h1>Adicione um contato</h1>
      <label htmlFor="">Nome:</label>
      <input type="text" />
      <label htmlFor="">Número:</label>
      <input type="number" />
      <label htmlFor="">Email:</label>
      <input type="email" />
      <label htmlFor="">Foto:</label>
      <input type="file" />


     </form>

    </div>
  )
}

export default App
