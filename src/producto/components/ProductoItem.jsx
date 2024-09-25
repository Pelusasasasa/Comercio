import { useDispatch, useSelector } from "react-redux"
import { startActiveProducto } from "../../store/producto/thunks";

export const ProductoItem = ( { _id, descripcion, marca, precio, stock, rubro} ) => {
    const { producto } = useSelector(state => state.productos);
    const dispatch = useDispatch();

    const activeProducto = (e) => {
      
      dispatch( startActiveProducto( e.target.parentNode.id) );

    };

  return (
    <tr onClick={activeProducto} id={_id} className={`hover:cursor-pointer hover:bg-gray-300 ${_id === producto?._id ? 'bg-blue-300' : ''}`}>
        <td className="border border-black">{_id}</td>
        <td className="border border-black">{descripcion.slice(0,35)}</td>
        <td className="border border-black">{precio?.toFixed(2)}</td>
        <td className="border border-black">{stock?.toFixed(2)}</td>
        <td className="border border-black">{marca}</td>
        <td className="border border-black">{rubro}</td>
    </tr>
  )
}
