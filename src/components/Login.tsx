import React, { useEffect, useReducer } from 'react'

interface AuthState {
    validando: boolean
    token: string | null
    username: string
    nombre: string
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPaylaod = {
    username: string
    nombre: string
}

// objeto plano
type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPaylaod }

// ation es la que modifica el estado
// state no tiene que mutar 

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        case 'login':
            const { nombre, username } = action.payload
            return {
                validando: false,
                token: '6715678r5217812639869812',
                nombre,
                username,
            }
        default:
            return state;
    }
}

export const Login = () => {
    // const [state, dispatch] = useReducer(reducer, initialstate, init)
    const [{ validando, token, username }, dispatch] = useReducer(authReducer, initialState)

    // [] se ejecuta 1 sola vez
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500);
    }, [])

    const login = () => {
        dispatch({
            type: 'login', payload: {
                nombre: 'jose',
                username: 'josetorocodes'
            }
        })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }


    if (validando) {
        return (

            <>
                <h3>Login</h3>
                <hr />
                <div className='alert alert-info'>
                    Validando....
                </div>

            </>
        )
    }

    return (
        <>
            <h3>Login</h3>
            <hr />
            {(token) ? <div className='alert alert-success'> Autenticado como: {username} </div>
                : <div className='alert alert-danger'> No autenticado </div>
            }

            {(token) ? <button className='btn btn-danger' onClick={logout}>Logaut</button>
                : <button className='btn btn-primary' onClick={login}>Login</button>
            }

        </>
    )
}
