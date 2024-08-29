import { Link } from "react-router-dom"

export const ComercioLayout = ({ children }) => {
  return (
    <section className="border border-black w-40 hover:cursor-pointer">

        <Link to='/cliente/lista'>
            <img src="" alt="" />
            <h3>Clientes</h3>
        </Link>    

    {children}

    </section>
  )
}
