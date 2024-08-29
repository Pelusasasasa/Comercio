import { useDispatch, useSelector } from "react-redux"
import { setActiveCliente } from "../../store/cliente/clienteSlice";

export const ClienteItem = ({ _id, nombre, direccion, telefono, cuit, condicionIva, saldo }) => {
  
  const { clientes, active } = useSelector( state => state.cliente)
  const dispatch = useDispatch();

  const onClickTr = (e) => {
    const cliente = clientes.find( elem => elem._id === parseInt(e.target.parentElement.id));

    dispatch( setActiveCliente( cliente ));
  }

  return (
    <tr id={_id} className={`hover:cursor-pointer ${active?._id === _id ? 'bg-blue-300' : ''}`} onClick={onClickTr}>
      <td className="border border-black">{_id}</td>
      <td className="border border-black">{nombre.slice(0, 50)}</td>
      <td className="border border-black">{direccion}</td>
      <td className="border border-black">{telefono}</td>
      <td className="border border-black">{cuit}</td>
      <td className="border border-black">{condicionIva.toUpperCase()}</td>
      <td className="border border-black text-end">{saldo.toFixed(2)}</td>
    </tr>
  )
}
