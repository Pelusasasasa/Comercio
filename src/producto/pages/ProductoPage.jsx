import { useEffect } from 'react'
import { Button } from '../components/Button';
import { useDispatch } from 'react-redux';
import { startLoadingProductos } from '../../store/producto/thunks';

export const ProductoPage = () => {

    const dispatch = useDispatch();

    const handleProductos = async(e) => {
        dispatch( startLoadingProductos('descripcion', e.target.value.toUpperCase()));
    };

  return (
    <section>
        <header className='flex flex-col items-center'>
            <h1 className='mt-2 text-4xl'>Descripcion</h1>
            <input type="text" onChange={handleProductos} name="buscador" id="buscador" className='w-96 border border-black mx-5 my-2 p-2' placeholder='Buscador...' />
        </header>

        <section className='bg-white h-120 border border-black overflow-scroll'>
            <table className='w-full border-collapse'>
                <thead>
                    <tr>
                        <th className='border border-black'>Codigo</th>
                        <th className='border border-black'>Descripcion</th>
                        <th className='border border-black'>Marca</th>
                        <th className='border border-black'>Precio</th>
                        <th className='border border-black'>Stock</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </section>

        <section className='flex justify-around mt-2'>
            <Button text='Agregar Producto' />
            <Button text='Modificar Producto' />
            <Button text='Eliminar Producto' />
            <Button text='Salir' to='/' />
        </section>
    </section>
  )
}
