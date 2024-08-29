import { Route, Routes } from 'react-router-dom'
import { ComercioPage } from '../pages/ComercioPage'

export const ComercioRouter = () => {
  return (
    <Routes>
        <Route path='/' element={  <ComercioPage/> } />
    </Routes>
  )
}
