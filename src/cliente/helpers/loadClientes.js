import axios from "axios"

const URL = 'http://localhost:4000/gestion/'

export const loadClientes = async( text ) => {
    const clientes = (await axios.get(`${URL}clientes/buscar/${text}`)).data;
    return clientes
}