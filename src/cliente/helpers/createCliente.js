import axios from "axios";
const URL = 'http://localhost:4000/gestion/'

export const getIdLastCliente = async() =>{

    const id = (await axios.get(`${URL}clientes`)).data;

    return id;

};

export const postCliente = async(cliente) => {
    const {cliente: res} = (await axios.post(`${URL}clientes`, cliente)).data;
    return res;
};