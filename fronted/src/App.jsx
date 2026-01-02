import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CorreoCheck from './components/CorreoCheck'

import postData from './conexion/post'

function App() {
  const [count, setCount] = useState(0)
  // const correo = {"correo": "Asunto: Reunión de seguimiento Hola equipo, recuerden la reunión de mañana."};
  // postData(correo)
  //   .then((response) =>{
  //       const resultado = response.resultado;
  //       const probabilidad = response.probabilidad;
  //       const palabras_influyentes = response. palabras_influyentes;
  //       console.log(resultado);
  //       console.log(probabilidad);
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   });
    
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <CorreoCheck></CorreoCheck>
    </>
  )
}

export default App
