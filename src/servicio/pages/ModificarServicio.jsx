import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';

import { PostPutService } from '../layout/Post-PutService'
import { Button } from '../components/Button'
import { setService } from '../../store/servicio/servicioSlice';
import { startPutServices } from '../../store/servicio';
import { startPostMovVendedores } from '../../store/auth/thunks';

export const ModificarServicio = () => {
    const {service, isSaving} = useSelector( state => state.servicio);
    const dispatch = useDispatch();

    const {idCliente, cliente, direccion, telefono, codProd, producto, marca, modelo, problemas, detalles, numero, vendedor, estado, formState, onInputChange} = useForm(service);

    useEffect(() => {
      dispatch( setService( formState ));
    }, [formState])

    const handleputService = async() => {
        await dispatch( startPutServices() );

        await dispatch( startPostMovVendedores(`Se modifico el servicio tecnico numero: ${numero} del cliente: ${cliente} con el producto: ${producto}`));
    };

    const salir = async() => {
        await dispatch( setService({}) );
    }

  return (
    <PostPutService text='Modificar Servicio'>
        <form>
              <section id='cliente'>
                  <fieldset className='flex justify-around gap-1 border border-gray-500 p-2'>
                      <legend>Cliente</legend>
                      <div className='flex flex-col'>
                          <label htmlFor="idCliente">Codigo</label>
                          <input onChange={onInputChange} type="text" name="idCliente" id="idCliente" className='border border-black w-80' value={idCliente}/>
                      </div>
                      <div className='flex flex-col'>
                          <label htmlFor="">Cliente</label>
                          <input onChange={onInputChange} type="text" name="cliente" id="cliente" className='border border-black w-80' value={cliente}/>
                      </div>
                      <div className='flex flex-col'>
                          <label htmlFor="">Direccion</label>
                          <input onChange={onInputChange} type="text" name="direccion" id="direccion" className='border border-black w-80' value={ direccion }/>
                      </div>
                      <div className='flex flex-col'>
                          <label htmlFor="">Telefono</label>
                          <input onChange={onInputChange} type="tel" name="telefono" id="telefono" className='border border-black w-80' value={ telefono }/>
                      </div>
                  </fieldset>
              </section>

              <section id='producto'>
                  <fieldset className='flex flex-col gap-2 border border-gray-500 p-2'>
                      <legend>Producto</legend>

                      <main className='flex justify-around '>
                          <div className='flex flex-col'>
                              <label htmlFor="codProd">Cod. Prod</label>
                              <input type="text" name="codProd" id="codProd" onChange={onInputChange} className='border border-black w-80' value={ codProd }/>
                          </div>
                          <div className='flex flex-col'>
                              <label htmlFor="producto">Producto</label>
                              <input type="text" name="producto" id="producto" onChange={onInputChange} className='border border-black w-80' value={ producto }/>
                          </div>
                          <div className='flex flex-col'>
                              <label htmlFor="modelo">Modelo</label>
                              <input type="text" name="modelo" id="modelo" onChange={onInputChange} className='border border-black w-80' value={ modelo }/>
                          </div>
                          <div className='flex flex-col'>
                              <label htmlFor="marca">Marca</label>
                              <input type="text" name="marca" id="marca" onChange={onInputChange} className='border border-black w-80' value={ marca }/>
                          </div>
                      </main>
                      <div className='flex flex-col'>
                          <label htmlFor="">Inconvenientes</label>
                          <textarea className='border border-black' cols={2} rows={6} name="problemas" id="problemas" onChange={onInputChange} value={ problemas }></textarea>
                      </div>
                  </fieldset>
              </section>

            <section>
                  <fieldset className='p-2 border-gray-500'>
                      <legend>Detalles</legend>
                      <main>
                          <textarea name="detalles" id="detalles" onChange={onInputChange} cols={20} rows={5} className='w-full' value={detalles}></textarea>
                      </main>

                      <main className='flex justify-around gap-2 mt-2'>
                        <div className='flex flex-col'>
                          <label htmlFor="numero">Numero</label>
                          <input className='border border-black' type="number" name="numero" id="numero" disabled value={numero}/>
                        </div>

                        <div className='flex flex-col'>
                          <label htmlFor="vendedor">Vendedor</label>
                          <input className='border border-black' type="text" name="vendedor" id="vendedor" disabled value={vendedor} />
                        </div>

                        <div className='flex flex-col'>
                          <label htmlFor="estado">Estado</label>
                          <select name="estado" id="estado" className='border-black border text-xl' onChange={onInputChange} value={estado}>
                            <option value="0">Pendiente</option>
                            <option value="1">En Proceso</option>
                            <option value="2">Finalizado</option>
                            <option value="3">Entregado</option>
                          </select>
                        </div>

                      </main>
                  </fieldset>
              </section>
        </form>

        <section className=' mt-2 pb-2 flex justify-around'>
            <Button text='Modificar' to='/servicio/lista' type='submit' funcion={handleputService} disabled={isSaving ? 'invisible' : ''}/>
            <Button text='salir' to='/servicio/lista' funcion={salir} />
        </section>
    </PostPutService>
  )
}
