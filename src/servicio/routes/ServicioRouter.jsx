import { Route, Routes } from 'react-router-dom'

import { ServicioPage } from '../pages';
import { AgregarServicio } from '../pages';


export const ServicioRouter = () => {
  return (
    <Routes>
        <Route path='/lista' element={<ServicioPage />} />
        <Route path='/agregar' element={<AgregarServicio /> } />
    </Routes>
  )
}
