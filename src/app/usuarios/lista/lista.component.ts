import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: ``
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    //public usuarioService: UsuarioService,
    private store: Store<AppState>,
  ){}

  ngOnInit(): void {
    /* this.usuarioService.getUsers().subscribe( data => {
      console.log(data);
      this.usuarios = data;
    }); */
    this.store.dispatch(cargarUsuarios());

    this.store.select('usuarios').subscribe(({ users }) => {
      this.usuarios = users;
    })
  }

}
