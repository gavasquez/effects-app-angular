import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { map, mergeMap, tap } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService,
  ){}

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      //tap( data => console.log('Effect tap', data)),
      mergeMap(
        () => this.usuarioService.getUsers().pipe(
          //tap(data => console.log("getUser", data))
          map(users => usuariosActions.cargarUsuariosSuccess({usuarios: users}))
        )
      )
    )
  );

}
