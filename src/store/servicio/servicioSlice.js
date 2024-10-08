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
        createServices: (state, action) => {
            
            // action.payload.forEach( servicio => {
            //     state.servicios.push(servicio);
            // })
            
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

            state.servicios = state.servicios.map( servicio => {
                if ( servicio._id === action.payload._id ) {
                    return action.payload;
                }
                return servicio;
            });

            console.log(state.servicios)
        },
        deleteServicios: (state, action) => {
            state.servicios = state.servicios.filter(servicio => servicio._id !== action.payload._id);
            state.service = null;
        },
        resetService: ( state ) => {
            state.service = null;
            state.servicios = [];
            state.isSaving = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    createService,
    createServices,
    deleteServicios,
    resetService,
    setSaving,
    setService,
    setServicios,
    updateService,
} = servicioSlice.actions;