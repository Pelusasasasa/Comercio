import { Route, Routes } from 'react-router-dom'

import { ServicioPage } from '../pages'

export const ServicioRouter = () => {
  return (
    <Routes>
        <Route path='/lista' element={<ServicioPage />} />
    </Routes>
  )
}
