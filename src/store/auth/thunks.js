import { getUser, postMovVendedores } from "../../auth/helpers/user";
import { login, logout } from "./authSlice";


export const startLogin = ( id ) => {
    return async (dispatch, getState) => {
        const res = await getUser( id );
        if ( res ) {
            dispatch( login(res) )    
        }else{
            dispatch( logout() )
        }
        
        return res;
    }
};

export const startPostMovVendedores = (text, type) => {
    return async (dispatch, getState) => {
        const { nombre } = getState().auth;
        
        const mov = {};
        mov.descripcion = text;
        mov.vendedor = nombre;
        mov.tipo = type;
        await postMovVendedores( mov );
    }
};
