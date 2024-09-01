import { configureStore } from "@reduxjs/toolkit";
import { clienteSlice } from "./cliente";
import { authSlice } from "./auth";

export const store = configureStore({    
    reducer: {
        cliente: clienteSlice.reducer,
        auth: authSlice.reducer,
        // servicio: servicioSclie.reducer
    }
})
