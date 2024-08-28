import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
    id: string | null,
    users: Usuario | null,
    loaded: boolean,
    loading: boolean,
    error: any,
}

export const usuarioinitialState: UsuarioState = {
  id: null,
  users: null,
  loaded: false,
  loading: false,
  error: null,
}

export const usuarioReducer = createReducer(usuarioinitialState,

    on(cargarUsuario, (state, { id }) => ({ ...state, loading: true, id: id })),

    on(cargarUsuarioSuccess, (state, { usuario }) => ({
        ...state,
        loaded: true,
        loading: false,
        users: {...usuario},
        error: null,
    })),

    on(cargarUsuarioError, (state, {payload}) => ({
      ...state,
      loading: false,
      loaded: false,
      users: null,
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
      },
    })),


);
