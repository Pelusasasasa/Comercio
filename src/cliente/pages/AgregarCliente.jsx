import { Link } from "react-router-dom"
import { ClienteLayout } from "../layout/ClienteLayout"

export const AgregarCliente = () => {
  return (
    <ClienteLayout>

      <header>
        <h1 className="text-center text-4xl font-bold"> Agregar Cliente</h1>
      </header>

      <form className="grid grid-cols-3 gap-3 mx-3">
        <div className="flex flex-col">
          <label htmlFor="codigo">Codigo</label>
          <input type="text" className="border border-black text-3xl" name="codigo" id="codigo" disabled />
        </div>
        <div className="flex flex-col col-span-2">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" className="border border-black text-3xl" name="nombre" id="nombre" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="condicion">Condicion Cuenta</label>
          <select name="condicion" id="condicion" className="text-2xl border border-black">
            <option value="1">1- Cta Cte</option>
            <option value="2">2- Contado</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="localidad">localidad</label>
          <input type="text" className="border border-black text-3xl" name="localidad" id="localidad" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="telefono">Telefono</label>
          <input type="text" className="border border-black text-3xl" name="telefono" id="telefono" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="direccion">Direccion</label>
          <input type="text" className="border border-black text-3xl" name="direccion" id="direccion" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cuit">Cuit</label>
          <input type="text" className="border border-black text-3xl" name="cuit" id="cuit" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="condIva">Condicion IVA</label>
          <select name="condIva" id="condIva" className="text-2xl border border-black">
            <option value="">CONSUMIDOR FINAL</option>
            <option value="">MONOTRIBUTO</option>
            <option value="">INSCRIPTO</option>
            <option value="">EXENTO</option>
          </select>
        </div>
        <div className="flex flex-col col-span-3">
          <label htmlFor="observaciones">Observaciones</label>
          <input type="text" className="border border-black text-3xl" name="observaciones" id="observaciones" />
        </div>
      </form>

      <section className="flex justify-around mt-10">
        <button className="border border-black bg-gray-200 p-2 font-bold rounded-xl">
          Guarda Cliente
        </button>
        <button className="border border-black bg-gray-200 p-2 font-bold rounded-xl">
          <Link to='/cliente/lista' >
            Salir
          </Link>
        </button>
      </section>

    </ClienteLayout>
  )
}
