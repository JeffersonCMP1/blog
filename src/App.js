import './App.css';
import { useState } from 'react'; // IMPORTAMOS useState PARA USAR ESTADOS
import Usosestate from './componentes/Usousestate';
import EjercicioUsostate from './componentes/EjercicioUsostate';

function App() { // COMPONENTE PRINCIPAL

const [mostrarState, setMostrarState] = useState(false);
const [mostrarEjercicioState, setMostrarEjercicioState] = useState(false);

  return (

    <div className="App">
     
    <div className='componente-usostate'>
            <button onClick={() => setMostrarState(true)}>
        Mostrar useState
      </button>
      {mostrarState && <Usosestate />}

      <div className='componente-ejercicio-usostate'>
        <button onClick={()=>setMostrarEjercicioState(true)}>
          Mostrar Ejercicio de useState
        </button>
    {mostrarEjercicioState && <EjercicioUsostate/>}
      </div>
    </div>

    </div>
  );
}

export default App;