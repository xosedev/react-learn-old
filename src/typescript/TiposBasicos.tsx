
export const TiposBasicos = () => {
    const nombre: string = 'jose'
    const status = true
    const poderes: string[] = ['volar', 'kame hame ha', 'codificar']
    let edad: string | number = '21'
    let apellido = 'toro'
    edad = 21
    poderes.push('cantar')
    poderes.push('dreams')
    return (
        <><h3>TiposBasicos</h3>
            <ol>
                <li>Nombre: {nombre}</li>
                <li>Apellido: {apellido}</li>
                <li>Edad: {edad}</li>
                <li>Status: {(status) ? 'activo' : 'inactivo'}</li>
                <li>
                    <ul>
                        {poderes.map(
                            (element,index) => (
                            <li key={index} >{element}</li>
                        ))}
                    </ul>
                </li>
                <li>
                    {poderes.join(', ').toUpperCase()}
                </li>
            </ol>
        </>
    )
}   
