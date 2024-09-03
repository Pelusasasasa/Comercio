import axios from "axios";
const URL = 'http://localhost:4000/gestion/';

export const getService = async( id ) => {
    const service = (await axios.get(`${URL}servicios/id/${id}`)).data;
    return service;
};

export const getServices = async(text) => {
    let servicios
    if (text === 'NADA') {
        servicios = (await axios.get(`${URL}servicios`)).data;
    }else{
        servicios = (await axios.get(`${URL}servicios/forText/${text}`)).data;
    }
    return servicios;
};

export const deleteService = async( id ) => {

    const res = (await axios.delete(`${URL}servicios/id/${id}`)).data;

    return res;

};