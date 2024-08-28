import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { cargarUsuario } from '../../store/actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: ``
})
export class UsuarioComponent implements OnInit{

  usuario: Usuario| null = null;
  loading: boolean = false;
  error: any = null;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ){}

  ngOnInit(): void {

    this.route.params.subscribe( ({ id } ) => {
      this.store.dispatch(cargarUsuario({ id }));
    });

    this.store.select('usuario').subscribe( ({ users, loading, error }) => {
      this.loading = loading;
      this.error = error;
      this.usuario = users;
    });

  }

}
