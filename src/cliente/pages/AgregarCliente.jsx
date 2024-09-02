import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ClienteLayout } from "../layout/ClienteLayout";
import { useForm } from "../hooks/useForm";
import { setActiveCliente, startSaveCliente } from "../../store/cliente";
import { Button } from "../components/Button";
import { startPostMovVendedores } from "../../store/auth/thunks";

const formData = {
  nombre: '',
  condicionFacturacion: '',
  localidad: '',
  telefono: '',
  direccion: '',
  cuit: '',
  condicionIva: '',
  observaciones: ''
}

export const AgregarCliente = () => {

  const {active: cliente} = useSelector(state => state.cliente);
  const {nombre: user} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {onInputChange, nombre, condicionFacturacion, localidad, direccion, telefono, cuit, condicionIva, observaciones, formState} = useForm(cliente);

  useEffect(() => {
    dispatch( setActiveCliente(formState) )
  }, [formState]);

  const savecliente = async() => {
    await dispatch(startSaveCliente())
    await dispatch(startPostMovVendedores(`${user} Agrego al cliente ${cliente.nombre}`, 'Clientes'));
  }
  

  return (
    <ClienteLayout>

      <header className="pt-10">
        <h1 className="text-center text-4xl font-bold"> Agregar Cliente</h1>
      </header>

      <form className="grid grid-cols-3 gap-3 mx-3 mt-10">
        <div className="flex flex-col">
          <label htmlFor="codigo">Codigo</label>
          <input type="text" className="border border-black text-3xl" name="codigo" id="codigo" disabled value={cliente?._id} />
        </div>
        <div className="flex flex-col col-span-2">
          <label htmlFor="nombre">Nombre *</label>
          <input type="text" className="border border-black text-3xl" name="nombre" id="nombre" value={nombre} onChange={onInputChange}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="condicion">Condicion Cuenta</label>
          <select name="condicionFacturacion" id="condicion" className="text-2xl border border-black" value={condicionFacturacion} onChange={onInputChange}>
            <option value="1">1- Cta Cte</option>
            <option value="2">2- Contado</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="localidad">localidad</label>
          <input type="text" className="border border-black text-3xl" name="localidad" id="localidad" value={ localidad } onChange={onInputChange}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="telefono">Telefono</label>
          <input type="text" className="border border-black text-3xl" name="telefono" id="telefono" value={telefono} onChange={onInputChange}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="direccion">Direccion</label>
          <input type="text" className="border border-black text-3xl" name="direccion" id="direccion" value={ direccion } onChange={onInputChange}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="cuit">Cuit</label>
          <input type="text" className="border border-black text-3xl" name="cuit" id="cuit" direccion={ cuit } onChange={onInputChange}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="condicionIva">Condicion IVA</label>
          <select name="condicionIva" id="condicionIva" className="text-2xl border border-black" value={ condicionIva } onChange={onInputChange}>
            <option value="consumidor final">CONSUMIDOR FINAL</option>
            <option value="monotributo">MONOTRIBUTO</option>
            <option value="inscripto">INSCRIPTO</option>
            <option value="exento">EXENTO</option>
          </select>
        </div>
        <div className="flex flex-col col-span-3">
          <label htmlFor="observaciones">Observaciones</label>
          <input type="text" className="border border-black text-3xl" name="observaciones" id="observaciones" value={ observaciones } onChange={onInputChange}/>
        </div>
      </form>

      <section className="flex justify-around mt-10">
        <Button to='/cliente/lista' funcion={savecliente} text='Guardar Cliente' />

        <Button to='/cliente/lista' text='Salir' />
      </section>

    </ClienteLayout>
  )
}
