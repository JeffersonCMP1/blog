import React from "react";  
import { useState } from "react";

function Usosestate(){

  // 🔥 ESTADO 1
  // nombre -> muestra el valor actual
  // setNombre() -> cambia el estado
  const [nombre, setNombre] = useState('');

  // 🔥 ESTADO 2
  // guardará lo escrito en el input
  const [nombre2, setNombre2] = useState('');

    return (
        <div className="Usosestate">
            <div className='mostrar-estado'>

        <p>
          Este estado cambia solamente cuando hacemos click en el botón.
        </p>

        {/* MOSTRAR ESTADO */}
        <h1>{nombre}</h1>

        {/* CAMBIAR ESTADO */}
        <button onClick={() => setNombre('YURIDIA')}>
          Cambiar nombre
        </button>

      </div>

      <div className='ingresar_valor_guardar'>

        <p>
          Aquí escribimos texto y React lo muestra en tiempo real usando estados.
        </p>

        {/* INPUT */}
        <input
          onChange={(e) => setNombre2(e.target.value)}
        />

        {/* MOSTRAR TEXTO ESCRITO */}
        <h1>{nombre2}</h1>

      </div>
        </div>
    )
}
export default Usosestate