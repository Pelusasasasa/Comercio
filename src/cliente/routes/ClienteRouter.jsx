import { Route, Routes } from 'react-router-dom';
import { AgregarCliente, ClientePage, ModificarCliente } from '../pages';

export const ClienteRouter = () => {
  
  return (
    <Routes>
        <Route path='/lista' element={ <ClientePage/> } />
        <Route path='/agregar' element={ <AgregarCliente/> } />
        <Route path='/modificar' element={ <ModificarCliente/> } />
    </Routes>
  )
}
