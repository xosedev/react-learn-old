import { Usuario } from "../interfaces/reqRes"
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    const {usuarios, paginaAnterior, paginaSiguiente} = useUsuarios()

    const renderItem = (usuario: Usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <td><img src={usuario.avatar} alt={usuario.last_name} style={{
                    width: 50, borderRadius: 100
                }} /></td>
                <td>{usuario.first_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }

    return (
        <><h3>Usuarios</h3>
            <hr />

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={paginaAnterior}>anteriores</button>
            &nbsp;
            <button className="btn btn-primary" onClick={paginaSiguiente}>siguiente</button>
            
        </>
    )
}
