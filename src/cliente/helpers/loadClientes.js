import axios from "axios"

const URL = 'http://localhost:4000/gestion/'

export const getCliente = async( id ) => {
    const cliente = (await axios.get(`${URL}clientes/id/${id}`)).data;
    return cliente;
}

export const loadClientes = async( text ) => {
    const clientes = (await axios.get(`${URL}clientes/buscar/${text}`)).data;
    return clientes
};

