import React from 'react'
import { Button } from '../components/Button'

export const ServicioPage = () => {
  return (
    <section className='bg-orange-300 h-full'>
      <header>
        <h1 className='text-center text-4xl font-bold'>Lista de Serivico</h1>
        <div className='flex flex-col items-center'>
          <label htmlFor="Buscador" className='text-center font-bold'>Buscador</label>
          <input type="text" placeholder='Buscar' name="buscar" id="buscar" className='border border-black w-96 text-2xl' />
        </div>
      </header>
      <section className='h-96 bg-white border border-black mt-1 overflow-scroll'>
        <table className='border-collapse w-full text-xl'>
          <thead>
           <tr>
             <th className='border border-black'>N°</th>
              <th className='border border-black'>Fecha Ingreso</th>
              <th className='border border-black'>Cliente</th>
              <th className='border border-black'>Telefono</th>
              <th className='border border-black'>Direccion</th>
              <th className='border border-black'>Producto</th>
              <th className='border border-black'>Marca</th>
              <th className='border border-black'>Modelo</th>
              <th className='border border-black'>Fecha Egreso</th>
              <th className='border border-black'>Estado</th>
           </tr>
          </thead>
        </table>
      </section>

      <section className='flex justify-around mt-5'>
        <Button text='Agregar' to='' />
        <Button text='Modificar' to='' />
        <Button text='Salir' to='/' />
      </section>
    </section>
  )
}
