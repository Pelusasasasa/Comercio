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
        }
    }
});


// Action creators are generated for each case reducer function
export const { setService } = servicioSlice.actions;