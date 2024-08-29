import { Link } from "react-router-dom"
import { ClienteLayout } from "../layout/ClienteLayout"

export const AgregarCliente = () => {
  return (
    <ClienteLayout>

        <section className="flex justify-around mt-2">
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
