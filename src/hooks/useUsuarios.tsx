import React, { useEffect, useRef, useState } from 'react'
import { ReqResApi } from '../api/reqRes'
import { ReqResListado, Usuario } from '../interfaces/reqRes'

export const useUsuarios = (inicial: number = 0) => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(1)

    useEffect(() => {
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async () => {

        const resp = await ReqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data)
           
        }else {
            paginaRef.current --
            alert('no hay mas registros')
        }

    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current --
            cargarUsuarios()
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current ++
            cargarUsuarios()  
    }
    
    return {
        usuarios,
        paginaAnterior,
        paginaSiguiente
    }
}
