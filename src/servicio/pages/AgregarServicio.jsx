import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import { PostPutService } from '../layout/Post-PutService'
import { Button } from '../components/Button'



const initialForm = {
    cliente: '',
    codigo: '',
    direccion: '',
    telefono: '',
    codProd: '',
    producto: '',
    marca: '',
    modelo: ''
};

export const AgregarServicio = () => {

      const {codigo, cliente, direccion, telefono, codProd, producto, marca, modelo, formState, onInputChange} = useForm(initialForm);

    useEffect(() => {
      
    }, [])
    
    const handleSubmit = () => {
        console.log(formState)
    }

  return (
    <PostPutService text='Agregar Servicio'>
        <form>

              <section id='cliente'>
                  <fieldset className='flex justify-around gap-1 border border-gray-500 p-2'>
                      <legend>Cliente</legend>
                      <div className='flex flex-col'>
                          <label htmlFor="codigo">Codigo</label>
                          <input onChange={onInputChange} type="text" name="codigo" id="codigo" className='border border-black w-80'/>
                      </div>
                      <div className='flex flex-col'>
                          <label htmlFor="">Cliente</label>
                          <input onChange={onInputChange} type="text" name="cliente" id="cliente" className='border border-black w-80'/>
                      </div>
                      <div className='flex flex-col'>
                          <label htmlFor="">Direccion</label>
                          <input onChange={onInputChange} type="text" name="direccion" id="direccion" className='border border-black w-80'/>
                      </div>
                      <div className='flex flex-col'>
                          <label htmlFor="">Telefono</label>
                          <input onChange={onInputChange} type="text" name="telefono" id="telefono" className='border border-black w-80'/>
                      </div>
                  </fieldset>
              </section>

              <section id='producto'>
                  <fieldset className='flex flex-col gap-2 border border-gray-500 p-2'>
                      <legend>Producto</legend>

                      <main className='flex justify-around '>
                          <div className='flex flex-col'>
                              <label htmlFor="codProd">Cod. Prod</label>
                              <input type="text" name="codProd" id="codProd" className='border border-black w-80'/>
                          </div>
                          <div className='flex flex-col'>
                              <label htmlFor="producto">Producto</label>
                              <input type="text" name="producto" id="producto" className='border border-black w-80'/>
                          </div>
                          <div className='flex flex-col'>
                              <label htmlFor="modelo">Modelo</label>
                              <input type="text" name="modelo" id="modelo" className='border border-black w-80'/>
                          </div>
                          <div className='flex flex-col'>
                              <label htmlFor="marca">Marca</label>
                              <input type="text" name="marca" id="marca" className='border border-black w-80'/>
                          </div>
                      </main>
                      <div className='flex flex-col'>
                          <label htmlFor="">Inconvenientes</label>
                          <textarea className='border border-black' cols={2} rows={7} name="" id=""></textarea>
                      </div>
                  </fieldset>
              </section>

              <section>
                  <fieldset>
                      <legend>Detalles</legend>
                      <main className='bg-white h-52 overflow-scroll'>
                          <table className='w-full border-collapse'>
                          <thead>
                              <tr>
                                  <th className='border border-black'>Cod Prod</th>
                                  <th className='border border-black'>Producto</th>
                                  <th className='border border-black'>Marca</th>
                                  <th className='border border-black'>Modelo</th>
                                  <th className='border border-black'>Acciones</th>
                              </tr>
                              <tbody></tbody>
                          </thead>
                      </table>
                      </main>
                      <main className='flex justify-around gap-2 mt-2'>
                        <div className='flex flex-col'>
                          <label htmlFor="numero">Numero</label>
                          <input className='border border-black' type="number" name="numero" id="numero" disabled />
                        </div>
                        <div className='flex flex-col'>
                          <label htmlFor="vendedor">Vendedor</label>
                          <input className='border border-black' type="text" name="vendedor" id="vendedor" disabled />
                        </div>
                        <div className='flex flex-col'>
                          <label htmlFor="estado">Estado</label>
                          <select name="estado" id="estado" className='border-black border text-xl'>
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
            <Button text='Agregar' type='submit' funcion={handleSubmit}/>
            <Button text='salir' to='/servicio/lista' />
        </section>
    </PostPutService>
  )
}
