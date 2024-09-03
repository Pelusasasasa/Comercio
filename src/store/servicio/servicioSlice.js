import { createSlice } from '@reduxjs/toolkit';

export const servicioSlice = createSlice({
    name: 'servicio',
    initialState: {
        servicios: [],
        service: null,
        isSaving: null
    },
    reducers: {
        setService: (state, action) => {
            state.service = action.payload;
        },
        setServicios: (state, action) => {
            state.servicios = action.payload;
        },
        deleteServicios: (state, action) => {
            state.servicios = state.servicios.filter(servicio => servicio._id !== action.payload._id);
            state.service = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setService, setServicios, deleteServicios } = servicioSlice.actions;