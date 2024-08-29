
export const ClienteItem = ({ _id, nombre, direccion, telefono, cuit, cond_iva, saldo }) => {
  
  return (
    <tr id={_id} className="hover:cursor-pointer">
      <td className="border border-black">{_id}</td>
      <td className="border border-black">{nombre.slice(0, 50)}</td>
      <td className="border border-black">{direccion}</td>
      <td className="border border-black">{telefono}</td>
      <td className="border border-black">{cuit}</td>
      <td className="border border-black">{cond_iva}</td>
      <td className="border border-black text-end">{saldo.toFixed(2)}</td>
    </tr>
  )
}
