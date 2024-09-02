import { configureStore } from "@reduxjs/toolkit";
import { clienteSlice } from "./cliente";
import { authSlice } from "./auth";
import { servicioSlice } from "./servicio";

export const store = configureStore({    
    reducer: {
        cliente: clienteSlice.reducer,
        auth: authSlice.reducer,
        servicio: servicioSlice.reducer
    }
})
