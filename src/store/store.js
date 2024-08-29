import { configureStore } from "@reduxjs/toolkit";
import { clienteSlice } from "./cliente/clienteSlice";


export const store = configureStore({
    reducer: {
        cliente: clienteSlice.reducer,
        // servicio: servicioSclie.reducer
    }
})
