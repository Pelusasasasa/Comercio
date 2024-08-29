import { Route, Routes } from "react-router-dom";
import { ComercioRouter } from "../comercio/routes/ComercioRouter";
import { ClienteRouter } from "../cliente/routes/ClienteRouter";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='cliente/*' element={<ClienteRouter />} />
        <Route path='/*' element={<ComercioRouter />} />
        {/* <Route path='cliente/*' element={ComercioApp} /> */}
    </Routes>
  );
}
