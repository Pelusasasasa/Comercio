import { configureStore } from "@reduxjs/toolkit";
import { clienteSlice } from "./cliente";
import { authSlice } from "./auth";
import { servicioSlice } from "./servicio";
import { numerosSlice } from "./numeros";
import { productoSlice } from "./producto/productoSlice";

export const store = configureStore({    
    reducer: {
        cliente: clienteSlice.reducer,
        productos: productoSlice.reducer,
        auth: authSlice.reducer,
        servicio: servicioSlice.reducer,
        numeros: numerosSlice.reducer
    }
})
