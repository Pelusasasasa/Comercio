import axios from "axios";

const URL = 'http://localhost:4000/gestion/'

export const putCliente = async( cliente ) => {

    await axios.put(`${URL}clientes/id/${cliente._id}`, cliente);
    return cliente;

};