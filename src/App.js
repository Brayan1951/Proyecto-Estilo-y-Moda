import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [boton, setboton] = useState(true)


  useEffect(() => {
  console.log("Hay cambio: "+ boton);
    
  }, [boton])
  

  const cambio=()=>{

    setboton((valu)=>{
      return !valu
    })
    // setboton(!boton)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          boton?<h2>Es verdadero</h2>:<h2>Es falsp</h2>
        }
        <button onClick={cambio}>Cambio de estado</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
