import { useDispatch, useSelector } from 'react-redux';
import { setService } from '../../store/servicio/servicioSlice';

export const ServiceItem = ({_id, numero, fecha, cliente, telefono, direccion, producto, marca, modelo, fechaE, estado  }) => {
    
    const { service, servicios } = useSelector( state => state.servicio);
    const dispatch = useDispatch();

    let textEstado = '';

    //Cambia el valor del estado a un texto de estado para que no se muestre el numero sino una palabra
    switch (estado) {
        case 0:
            textEstado = 'Pendiente';
            break;
        case 1:
            textEstado = 'En Proceso';
            break;
        case 2:
            textEstado = 'Finalizado';
            break;
        case 3:
            textEstado = 'Entregado';
            break;
        default:
            break;
    };

    const handleService = (e) => {
        const res = servicios.find( servicio => servicio._id === e.target.parentNode.id);
        dispatch( setService( res ) );
    };

    // Listamos los servicios en la tabla
  return (
    <tr id={_id} onClick={handleService} className={`hover:cursor-pointer ${service?._id === _id ? 'bg-blue-300' : ''}`}>
        <td className='border border-black whitespace-nowrap'>{numero}</td>
        <td className='border border-black whitespace-nowrap'>{fecha.slice(0,10).split('-', 3).reverse().join('/')}</td>
        <td className='border border-black whitespace-nowrap'>{cliente}</td>
        <td className='border border-black whitespace-nowrap'>{telefono}</td>
        <td className='border border-black whitespace-nowrap'>{direccion}</td>
        <td className='border border-black whitespace-nowrap'>{producto}</td>
        <td className='border border-black whitespace-nowrap'>{marca}</td>
        <td className='border border-black whitespace-nowrap'>{modelo}</td>
        <td className='border border-black whitespace-nowrap'>{fechaE}</td>
        <td className='border border-black whitespace-nowrap'>{textEstado}</td>

    </tr>
  )
}
