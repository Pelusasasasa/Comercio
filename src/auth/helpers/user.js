import axios from "axios";
const URL = 'http://localhost:4000/gestion/';

export const getUser = async( id ) => {
    const res = (await axios.get(`${URL}vendedores/id/${id}`)).data;
    return res;
};

export const postMovVendedores = async( data ) => {
    const res = (await axios.post(`${URL}movVendedores`, data)).data;
    return res
};