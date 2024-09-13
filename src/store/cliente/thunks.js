import { setActiveCliente, setClientes, addNewCliente, updateCliente, borrarCliente } from "./clienteSlice";
import { deleteCliente, getCliente, getIdLastCliente, loadClientes, postCliente, putCliente } from "../../cliente/helpers";

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

export const startGetCliente = (id) => {
    return async(dispatch) => {
        const res = await getCliente( id );
        dispatch( setActiveCliente(res));
        return res;
    }
}

export  const startSaveCliente = () => {
    return async(dispatch, getState) => {
        const {active} = getState().cliente;
        const res = await postCliente( active );
        
        dispatch(addNewCliente(res))
    }
};

export const startPutCliente = () => {
    return async(dispatch, getState) => {
        const { active } = getState().cliente;
        await putCliente( active );
        
        dispatch( updateCliente( active ) );
        
    };
};

export const startLoadingClientes = (text) => {
    return async(dispatch, getState) => {
        const clientes = await loadClientes( text );

        dispatch( setClientes(clientes) )
    }
};

export const startDeleteCliente = () => {
    return async(dispatch, getState) => {
        const { active } = getState().cliente;
        await deleteCliente( active._id );
        dispatch( borrarCliente( active ) )
    };
};