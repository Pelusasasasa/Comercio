import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        nombre: null,
        codigo: null,
        permiso: null,
    },
    reducers: {
        checking: (state, /* action */ ) => {
            state.status = 'checking';
        },
        login: (state, { payload }) => {
            state.status = 'authenticated'
            state.nombre = payload.nombre
            state.codigo = payload.codigo
            state.permiso = payload.permiso
        },
        logout: ( state ) => {
            state.status = 'not-authenticated'
            state.nombre = null
            state.codigo = null
            state.permiso = null
        }
    }
});


// Action creators are generated for each case reducer function
export const { checking, login, logout } = authSlice.actions;