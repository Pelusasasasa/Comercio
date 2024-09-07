import { createSlice } from '@reduxjs/toolkit';

export const servicioSlice = createSlice({
    name: 'servicio',
    initialState: {
        servicios: [],
        service: null,
        isSaving: false
    },
    reducers: {
        setSaving: (state) => {
            state.isSaving = true;
        },
        createService: (state, action) => {
            state.service = action.payload;
        },
        setService: (state, action) => {
            state.service = action.payload;
        },
        setServicios: (state, action) => {
            state.servicios = action.payload;
        },
        updateService: (state, action) => {
            state.service = action.payload;
            state.isSaving = false;
        },
        deleteServicios: (state, action) => {
            state.servicios = state.servicios.filter(servicio => servicio._id !== action.payload._id);
            state.service = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setSaving, createService, setService, setServicios, updateService, deleteServicios } = servicioSlice.actions;