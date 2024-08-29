import { Link } from "react-router-dom"
import { ClienteLayout } from "../layout/ClienteLayout"
import { useDispatch, useSelector } from "react-redux"
import { ClienteItem } from "../components/ClienteItem";
import { startCreateCliente, startLoadingClientes } from "../../store/cliente/thunks";
import { Button } from "../components/Button";

export const ClientePage = () => {

  const { clientes } = useSelector( state => state.cliente);
  const dispatch = useDispatch();


  const handleClientes = (e) => {

    dispatch( startLoadingClientes(e.target.value === '' ? 'NADA' : e.target.value) )
    
  };

  const handleCreateCliente = async() => {
    await dispatch( startCreateCliente());
  }


  return (
    <ClienteLayout>
        <header className="flex flex-col items-center">
          <h1 className=" mt-2 text-4xl">Nombre</h1>
          <input onChange={handleClientes} type="text" name="buscador" id="buscador" className="w-96 border border-black mx-5 my-2 p-2" placeholder="Nombre Cliente" />
        </header>

        <section className="bg-white h-96 border border-black overflow-scroll">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-black">Codigo</th>
                <th className="border border-black">Nombre</th>
                <th className="border border-black">Direccion</th>
                <th className="border border-black">Telefono</th>
                <th className="border border-black">Cuit</th>
                <th className="border border-black">Cond Iva</th>
                <th className="border border-black">Saldo</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map( cliente => (
                <ClienteItem {...cliente} key={cliente._id} />
              ))}
            </tbody>
          </table>
        </section>

        <section className="flex justify-around mt-2">
          <Button to='/cliente/agregar' text='Agregar Cliente' funcion={handleCreateCliente} />
          <Button to='/cliente/modificar' text='Modificar Cliente' />
          <Button to='/' text='Salir'/>
        </section>
    </ClienteLayout>
  )
}
