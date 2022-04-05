
interface Persona {
    nombreCompleto:string
    edad: number
    direccion: Direccion
}

interface Direccion {
    pais: string
    casa: number
}


export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombreCompleto: 'Jose',
        edad: 31,
        direccion: {
            pais: 'Chile',
            casa: 305
        }
    }
    return (
        <><h3>ObjetosLiterales</h3>
            <hr />
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>

    )
}
