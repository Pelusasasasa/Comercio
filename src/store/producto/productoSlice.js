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
        }
    }
});


// Action creators are generated for each case reducer function
export const { isSaving } = productoSlice.actions;