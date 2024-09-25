import { useDispatch, useSelector } from 'react-redux';

import { startLoadingProductos } from '../../store/producto/thunks';
import { emptyProductos } from '../../store/producto/productoSlice';

import { ProductoItem } from '../components/ProductoItem';
import { Button } from '../components/Button';
import { useEffect, useState } from 'react';

export const ProductoPage = () => {
    const [displayButton, setDisplayButton] = useState( true )
    const {producto, productos} = useSelector(state => state.productos);
    const dispatch = useDispatch();

    const enviarProduct = (e) => {
        if (e.keyCode === 13) {
            window.apiVentanaPrincipal.enviarProducto( producto );
            window.close();
        }
    }
    
    const handleProductos = async(e) => {
        const req = e.target.value !== '' ? e.target.value.toUpperCase() : 'textoVacio'
        dispatch( startLoadingProductos('descripcion', req));
    };

    const salir = () => {
        dispatch( emptyProductos() );
    };

    useEffect(() => {
        //Recibimos la informacion de abrir la ventana
        window.apiVentanaSecundaria.informacion(( data ) => {
            setDisplayButton(data.button);
        });

        handleProductos({target: {value: ''}})
    }, [])
    

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
                        <th className='border border-black'>Precio</th>
                        <th className='border border-black'>Stock</th>
                        <th className='border border-black'>Marca</th>
                        <th className='border border-black'>Rubro</th>
                    </tr>
                </thead>
                <tbody onKeyDown={enviarProduct} tabIndex={0}>
                    { productos?.map(producto => (
                        <ProductoItem key={producto._id} {...producto} />
                    ))}
                </tbody>
            </table>
        </section>

        <section className={`flex justify-around mt-2 ${!displayButton ? 'hidden' : ''}`}>
            <Button text='Agregar Producto' />
            <Button text='Modificar Producto' />
            <Button text='Eliminar Producto' />
            <Button text='Salir' to='/' funcion={salir} />
        </section>
    </section>
  )
}
