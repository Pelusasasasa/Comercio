
import { ClienteLayout } from "../layout/ClienteLayout"
import { useDispatch, useSelector } from "react-redux"

import Swal from "sweetalert2";

import { ClienteItem } from "../components/ClienteItem";
import { startCreateCliente, startDeleteCliente, startLoadingClientes } from "../../store/cliente/thunks";
import { Button } from "../components/Button";
import { startPostMovVendedores } from "../../store/auth/thunks";
import { setEmptyClientes } from "../../store/cliente/clienteSlice";
import { useEffect, useState } from "react";


export const ClientePage = () => {
  const [displayButton, setDisplayButton] = useState( true );
  const { clientes, active: cliente } = useSelector( state => state.cliente);
  const { nombre, permiso } = useSelector( state => state.auth);

  const dispatch = useDispatch();

  const enviarCliente = (e) => {
    if (e.keyCode === 13) {
      window.apiVentanaPrincipal.enviarCliente(cliente);
      window.close();
    }
  }

  const handleClientes = (e) => {

    dispatch( startLoadingClientes(e.target.value === '' ? 'NADA' : e.target.value) )
    
  };

  const handleCreateCliente = async() => {
    await dispatch( startCreateCliente());
  };

  const handleDeleteCliente = async() => {
    const {isConfirmed} = await Swal.fire({
      title: `Eliminar cliente ${cliente.nombre}?`,
      confirmButtonText:'Aceptar',
      showCancelButton: true
    });

    if (isConfirmed) {
      await dispatch( startDeleteCliente() );
      await dispatch(startPostMovVendedores(`${nombre} Elimino al cliente ${cliente.nombre}`, 'Clientes'));
    }
  };

  const salir = async() => {
    dispatch( setEmptyClientes() );
  };

  useEffect(() => {
      //Recibimos la informacion de abrir la ventana
      window.apiVentanaSecundaria.informacion(( data ) => {
        setDisplayButton(data.button);
      });

  }, [])
    

  return (
    <ClienteLayout>
        <header className="flex flex-col items-center">
          <h1 className=" mt-2 text-4xl">Nombre</h1>
          <input onChange={handleClientes} type="text" name="buscador" id="buscador" className="w-96 border border-black mx-5 my-2 p-2" placeholder="Nombre Cliente" />
        </header>

        <section className="bg-white h-120 border border-black overflow-scroll">
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
            <tbody onKeyDown={enviarCliente} tabIndex={0}>
              {clientes.map( cliente => (
                <ClienteItem {...cliente} key={cliente._id} />
              ))}
            </tbody>
          </table>
        </section>

        <section className={`flex justify-around mt-2 ${displayButton ? '' : 'hidden'}`}>
          <Button to='/cliente/agregar' text='Agregar Cliente' funcion={handleCreateCliente} />
          <Button to='/cliente/modificar' text='Modificar Cliente' disabled={permiso !== 2 ? ' ' : 'hidden'} />
          <Button text='Eliminar Cliente' funcion={handleDeleteCliente} disabled={permiso === 0 ? ' ' : 'hidden'} />
          <Button to='/' text='Salir' funcion={salir}/>
        </section>
    </ClienteLayout>
  )
}
