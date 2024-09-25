import axios from "axios";

const URL = 'http://localhost:4000/gestion/';


export const getProduct = async(id) => {
    const product = (await axios.get(`${URL}productos/${id}`)).data;
    return product;
};

export const getsProducts = async(type = 'descripcion', descripcion = 'textoVacio') => {
    const products = (await axios.get(`${URL}productos/${descripcion}/${type}`)).data;
    return products;
};