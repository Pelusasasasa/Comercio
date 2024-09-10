import { useEffect } from 'react'
import { Button } from '../components/Button'
import { useDispatch, useSelector } from 'react-redux';
import { setService, startCreateService, startDeleteServices, startLoadingServices, startPutServices } from '../../store/servicio';
import { ServiceItem } from '../components/ServiceItem';
import Swal from 'sweetalert2';
import { startPostMovVendedores } from '../../store/auth/thunks';

export const ServicioPage = () => {

  const { service, servicios } = useSelector( state => state.servicio );
  const { nombre, permiso } = useSelector( state => state.auth );
  const dispatch = useDispatch();
  

  //Para que se ejecute una ve la funcion de traer los servicios
  useEffect(() => {
    const e = {};
    e.target = {};
    e.target.value = 'NADA';
    handleServicios(e);
  }, [])
  

  const handleServicios = (e = {}) => {
    const text = e.target.value.toUpperCase();
    dispatch( startLoadingServices(text === '' ? 'NADA' : text) );
  };

  const handleAddService = () => {
    dispatch( startCreateService() );
  };

  const handleDelete = async() => {

    if (!service._id) return await Swal.fire('Elegir un Servicio a eliminar');
    
    const { isConfirmed } = await Swal.fire({
      title: 'Eliminar Servicio Tecnico?',
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
    })

    if (isConfirmed) {
      await dispatch( startDeleteServices(service._id) );
      await dispatch(startPostMovVendedores(`${nombre} Elimino el servicio ${service.producto} del cliente ${service.cliente}`, 'Servicio'));
    }
  };

  const salir = async() => {
        await dispatch( setService({}) );
    }

  return (
    <section className='bg-orange-300 h-full'>
      <header>
        <h1 className='text-center text-4xl font-bold'>Lista de Serivico</h1>
        <div className='flex flex-col items-center'>
          <label htmlFor="Buscador" className='text-center font-bold'>Buscador</label>
          <input type="text" placeholder='Buscar' name="buscar" id="buscar" className='border border-black w-96 text-2xl' onChange={handleServicios} />
        </div>
      </header>

      <section className='h-96 bg-white border border-black mt-1 overflow-scroll'>
        <table className='border-collapse w-full text-xl'>
          <thead>
           <tr>
             <th className='border border-black whitespace-nowrap'>N°</th>
              <th className='border border-black whitespace-nowrap'>Fecha Ingreso</th>
              <th className='border border-black whitespace-nowrap'>Cliente</th>
              <th className='border border-black whitespace-nowrap'>Telefono</th>
              <th className='border border-black whitespace-nowrap'>Direccion</th>
              <th className='border border-black whitespace-nowrap'>Producto</th>
              <th className='border border-black whitespace-nowrap'>Marca</th>
              <th className='border border-black whitespace-nowrap'>Modelo</th>
              <th className='border border-black whitespace-nowrap'>Fecha Egreso</th>
              <th className='border border-black whitespace-nowrap'>Estado</th>
           </tr>
          </thead>
          <tbody>
            {servicios.map( servicio => (
              <ServiceItem {...servicio} key={servicio._id} />
            ))}
          </tbody>
        </table>
      </section>


      <section className='flex justify-around mt-5'>
        <Button text='Agregar' to='/servicio/agregar' funcion={handleAddService} />
        <Button text='Modificar' to={`${service?._id ? '/servicio/modificar' : ''}`} disabled={permiso !== 2 ? '' : 'hidden'} />
        <Button text='Eliminar' to='' disabled={permiso === 0 ? '' : 'hidden'} funcion={handleDelete}/>
        <Button text='Salir' to='/' funcion={salir} />
      </section>
    </section>
  )
}
