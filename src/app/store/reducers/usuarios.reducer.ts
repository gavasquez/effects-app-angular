import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuariosState {
    users: Usuario[],
    loaded: boolean,
    loading: boolean,
    error: any,
}

export const usuariosinitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
}

export const usuariosReducer = createReducer(usuariosinitialState,

    on(cargarUsuarios, state => ({ ...state, loading: true })),

    on(cargarUsuariosSuccess, (state, { usuarios }) => ({
        ...state,
        loaded: true,
        loading: false,
        users: [...usuarios],
    })),

    on(cargarUsuariosError, (state, {payload}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
      },
    })),


);
