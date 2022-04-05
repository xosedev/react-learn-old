import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {
  
    const {valor, acumular} = useCounter()

    return (
        <><h3>Contador con custom Hook</h3>
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