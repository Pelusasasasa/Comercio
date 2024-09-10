import axios from "axios";
const URL = 'http://localhost:4000/gestion/';

export const getNumeros = async() => {
    const res = (await axios.get(`${URL}numero`)).data;
    return res;
};

export const incrementService = async(valor) => {
    const res = (await axios.put(`${URL}numero/Servicio`, {Servicio: valor})).data;
    return valor;
};