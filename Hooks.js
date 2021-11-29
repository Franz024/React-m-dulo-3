import React, {useState} from 'react';

export default function Hooks(){
    const[numero, setNumero] = useState(5)

    function incrementar(){
        setNumero(numero +1)
        if (numero ) {
            
        }
    }
    return(
        <div>
            <h1>{numero}</h1>
            <button onClick={incrementar}>+</button>
        </div>
    )
}