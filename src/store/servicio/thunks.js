import { deleteService, getNumeroService, getService, getServices, putService } from "../../servicio/helpers/service"
import { createService, deleteServicios, setSaving, setService, setServicios, updateService } from "./servicioSlice";

export const startCreateService = () => {
    return async(dispatch, getState) => {

        const { nombre } = getState().auth;
        const numero = await getNumeroService();
        dispatch( createService({numero, vendedor: nombre}) );

    };
};

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

export const startPutServices = () => {
    return async(dispatch, getState) => {
        await dispatch( setSaving() );

        const {service} = getState().servicio;
    
        await putService( service );

        dispatch( updateService(service) )
    }
}

export const startDeleteServices = () => {
    return async( dispatch, getState ) => {
        const {service} = getState().servicio;
        const res = await deleteService( service._id );

        dispatch( deleteServicios( res ) );
    }
};

