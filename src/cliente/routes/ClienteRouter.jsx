import { Route, Routes } from 'react-router-dom'
import { ClientePage } from '../pages/ClientePage'
import { AgregarCliente } from '../pages/AgregarCliente'

export const ClienteRouter = () => {
  
  return (
    <Routes>
        <Route path='/lista' element={ <ClientePage/> } />
        <Route path='/agregar' element={ <AgregarCliente/> } />
    </Routes>
  )
}
