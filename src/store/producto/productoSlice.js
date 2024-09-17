import { createSlice } from '@reduxjs/toolkit';

export const productoSlice = createSlice({
    name: 'producto',
    initialState: {
        productos: [],
        producto: null,
        isSaving: null
    },
    reducers: {
        isSaving: (state) => {
            state.isSaving = true;
        },
        setProductos: (state, action) => {
            state.productos = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { isSaving, setProductos } = productoSlice.actions;