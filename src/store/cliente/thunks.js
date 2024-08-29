import { setActiveCliente, setClientes, addNewCliente } from "./clienteSlice";
import { loadClientes } from '../../cliente/helpers';
import { getIdLastCliente, postCliente } from "../../cliente/helpers";

//http://localhost:4000/gestion/clientes

export const startCreateCliente = () => {
    return async(dispatch, getState) => {
        const id = await getIdLastCliente();
        
        dispatch(setActiveCliente({
            _id: id,
            nombre: '',
            telefono: '',
            direccion: '',
            localidad: '',
            saldo: 0,
            condicionFacturacion: '1',
            cuit: '',
            condicionIva: 'Consumidor Final',
            observaciones: ''
        }))
        
    }
};

export  const startSaveCliente = () => {
    return async(dispatch, getState) => {
        const {active} = getState().cliente;
        const res = await postCliente( active );
        
        dispatch(addNewCliente(res))
    }
}

export const startLoadingClientes = (text) => {
    return async(dispatch, getState) => {
        const clientes = await loadClientes( text );

        dispatch( setClientes(clientes) )
    }
}