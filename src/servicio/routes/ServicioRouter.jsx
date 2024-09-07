import { Route, Routes } from 'react-router-dom';

import { ServicioPage, AgregarServicio, ModificarServicio } from '../pages';


export const ServicioRouter = () => {
  return (
    <Routes>
        <Route path='/lista' element={<ServicioPage />} />
        <Route path='/agregar' element={<AgregarServicio /> } />
        <Route path='/modificar' element={<ModificarServicio /> } />
    </Routes>
  )
}
