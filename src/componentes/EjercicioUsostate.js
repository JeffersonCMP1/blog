import React, { useState } from "react";
import Usosestate from "./Usousestate";

export default function EjercicioUsostate(){

    const[edad,setEdad]=useState(0); //para guardr la edad

    return(
        <div>
        <h1>Tu edad es: {edad}</h1> 
        
        <button onClick={() => setEdad(25)}>
            Poner edad 25
            </button>

            <button onClick={() => setEdad(edad + 1)}>
  Aumentar edad
</button>
        </div>
    )
}