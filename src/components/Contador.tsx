import React, { useState } from 'react'

export const Contador = () => {
    const [valor, setValor] = useState<number>(0)

    const acumular = (numero: number) => {
        setValor( valor + numero)
    }

    return (
        <><h3>Contador</h3>
            <hr />
            <small>
                 { valor } 
            </small>
            <button className='btn btn-primary' onClick={ () => acumular(1)}>+1</button>
            &nbsp;
            <button className='btn btn-primary' onClick={ () => acumular(-1)}>-1</button>
        </>
    )
}