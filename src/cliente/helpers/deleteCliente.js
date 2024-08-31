import axios from "axios";
const URL = 'http://localhost:4000/gestion/';

export const deleteCliente = async (id) => {
    const res = (await axios.delete(`${URL}clientes/id/${id}`)).data;
    return res;
}