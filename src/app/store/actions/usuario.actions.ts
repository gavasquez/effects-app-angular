import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuario = createAction(
  '[Usuario] Cargar Usuario',
  props<{id:string}>(),
);

export const cargarUsuarioSuccess = createAction(
  '[Usuario] Cargar cargar Usuario Success',
  props<{ usuario: Usuario}>()
);

export const cargarUsuarioError = createAction(
  '[Usuario] Cargar cargar Usuario Error',
  props<{ payload: any }>()
);
