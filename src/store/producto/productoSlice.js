import { createSlice } from '@reduxjs/toolkit';

export const productoSlice = createSlice({
    name: 'producto',
    initialState: {
        productos: [],
        producto: null,
        isSaving: null
    },
    reducers: {
        emptyProductos: ( state ) => {
            state.productos = [];
            state.producto = null;
            state.isSaving = null;
        },
        isSaving: (state) => {
            state.isSaving = true;
        },
        setActiveProduct: (state, action) => {
            state.producto = action.payload;
            state.isSaving = false;
        },
        setProductos: (state, action) => {
            state.productos = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { isSaving, setProductos, setActiveProduct, emptyProductos } = productoSlice.actions;