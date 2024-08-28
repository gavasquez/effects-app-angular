import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuarios = createAction('[Usuario] Cargar Usuarios');

export const cargarUsuariosSuccess = createAction(
  '[Usuarios] Cargar cargar Usuarios Success',
  props<{ usuarios: Usuario[]}>()
);

export const cargarUsuariosError = createAction(
  '[Usuarios] Cargar cargar Usuarios Error',
  props<{ payload: any }>()
);
