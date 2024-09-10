import { getNumeros, incrementService } from "../../numeros/helpers/numeros";
import { setNumeros } from "./numeroSlice";

export const loadNumeros = () => {
    return async(dispatch, getState) => {
        const numeros = await getNumeros();
        
        dispatch( setNumeros(numeros) );
    };
};

export const startPutNumeros = () => {
    return async(dispatch,  getState) => {
        const { Servicio } = getState().numero;
        await incrementService()
    }
}