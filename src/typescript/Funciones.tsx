// en javascript si una funciuon es void retorna undefined
export const Funciones = () => {
    /**
     * sumar
     * @param a 
     * @param b 
     * @returns suma a + b 
     */
    const sumar = ( a: number, b: number):number => {
        return a + b
    }

    return (
        <><h3>Funciones</h3>
            <hr />
            <span>El resultado es : {sumar(1,2)}</span>
        </>
    )
}
