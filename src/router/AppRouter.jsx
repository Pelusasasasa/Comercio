import { Route, Routes } from "react-router-dom";
import { ComercioRouter } from "../comercio/routes/ComercioRouter";
import { ClienteRouter } from "../cliente/routes/ClienteRouter";
import { ServicioRouter } from "../servicio/routes/ServicioRouter";
import { ProductoRouter } from "../producto/routers/ProductoRouter";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='cliente/*' element={<ClienteRouter />} />
        <Route path='producto/*' element={<ProductoRouter />} />
        <Route path='servicio/*' element={<ServicioRouter />} />
        <Route path='/*' element={<ComercioRouter />} />
        {/* <Route path='cliente/*' element={ComercioApp} /> */}
    </Routes>
  );
}
