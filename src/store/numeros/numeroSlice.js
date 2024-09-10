import { createSlice } from '@reduxjs/toolkit';

export const numerosSlice = createSlice({
    name: 'numeros',
    initialState: {
        numeros: null
    },
    reducers: {
        setNumeros: (state, action) => {
            state.numeros = action.payload;
        },
        updateNumber: (state, action) => {
            state.numeros = {
                ...state.numeros,
                ...action.payload
            }
        },
        incrementServicio: (state, /* action */ ) => {
            state.Servicio += 1;
        },
    }
});



// Action creators are generated for each case reducer function
export const { incrementServicio, updateNumber, setNumeros } = numerosSlice.actions;