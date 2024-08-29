import { createSlice } from '@reduxjs/toolkit';

export const clienteSlice = createSlice({
    name: 'cliente',
    initialState: {
        clientes: [],
        active: null,
        isSaving: false,
        messageSaved: '',
    },
    reducers: {
        savingNewCliente: (state) => {
            state.isSaving = true;
        },
        addNewCliente: (state, action) => {
            state.clientes.push( action.payload )
            state.isSaving = false;
        },
        setActiveCliente: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setClientes: (state, action) => {
            state.clientes = action.payload;
        },

    }
});


// Action creators are generated for each case reducer function
export const { savingNewCliente, addNewCliente, setActiveCliente, setClientes } = clienteSlice.actions;