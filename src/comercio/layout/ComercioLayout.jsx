import { Link } from "react-router-dom"

export const ComercioLayout = ({ children }) => {
  return (
    <section className="border container border-black w-40 hover:cursor-pointer">

        <Link to='/cliente/lista' className="flex flex-col">
            <img src="/clientes.jpg" alt="" />
            <h3 className="text-center font-bold text-2xl">Clientes</h3>
        </Link>    

    {children}

    </section>
  )
}
