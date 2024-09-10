import { incrementService } from "../../numeros/helpers/numeros";
import { deleteService, getNumeroService, getService, getServices, postService, putService } from "../../servicio/helpers/service"
import { updateNumber } from "../numeros/numeroSlice";
import { createService, createServices, deleteServicios, setSaving, setService, setServicios, updateService } from "./servicioSlice";

export const startCreateService = () => {
    return async(dispatch, getState) => {

        const { nombre } = getState().auth;
        const numero = await getNumeroService();
        dispatch( createService({numero, vendedor: nombre}) );

    };
};

export const startAddService = (lista) => {
    const listaServiciosPromise = [];

    return async( dispatch ) => {
        for (const elem of lista){
            listaServiciosPromise.push( await postService(elem));
        };

        const servicios = await Promise.all(listaServiciosPromise);

        const res = await incrementService(lista[lista.length - 1].numero);


        dispatch( createServices( servicios ) );
        dispatch( updateNumber({Servicio: res}) );
    }
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

