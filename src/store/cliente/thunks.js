import { setClientes } from "./clienteSlice";
import { loadClientes } from '../../cliente/helpers'

export const startLoadingClientes = (text) => {
    return async(dispatch, getState) => {
        const clientes = await loadClientes( text );

        dispatch( setClientes(clientes) )
    }
}