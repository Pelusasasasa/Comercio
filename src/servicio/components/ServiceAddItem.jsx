export const ServiceAddItem = ({codProd, producto, marca, modelo}) => {
  return (
    <tr>
        <td>{codProd}</td>
        <td>{producto}</td>
        <td>{marca}</td>
        <td>{modelo}</td>
        <td className="text-center font-bold hover:scale-105 hover:cursor-pointer hover:text-white hover:bg-gray-500">Eliminar</td>
    </tr>
  )
}
