import { deleteService, getNumeroService, getService, getServices } from "../../servicio/helpers/service"
import { createService, deleteServicios, setService, setServicios } from "./servicioSlice";


export const startCreateService = () => {
    return async(dispatch, getState) => {

        const { nombre } = getState().auth;
        const numero = await getNumeroService();
        dispatch( createService({numero, vendedor: nombre}) );

    };
}

export const startLoadingService = (id) => {
    return async( dispatch ) => {
        const service = await getService( id );

        dispatch( setService(service) );
    }
};

export const startLoadingServices = (text) => {
    return async( dispatch ) => {

        const servicios = await getServices(text);

        dispatch( setServicios(servicios) );
    };
};


export const startDeleteServices = () => {
    return async( dispatch, getState ) => {
        const {service} = getState().servicio;
        const res = await deleteService( service._id );

        dispatch( deleteServicios( res ) );
    }
};