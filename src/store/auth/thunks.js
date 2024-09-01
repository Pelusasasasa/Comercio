import { getUser } from "../../auth/helpers/user";
import { login, logout } from "./authSlice";


export const startLogin = ( id ) => {
    return async (dispatch, getState) => {
        const res = await getUser( id );
        if ( res ) {
            dispatch( login(res) )    
        }else{
            dispatch( logout() )
        }
        
    }
}