import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ForcaComponent } from './forca/forca.component';
import { ForcaCadastroComponent } from './forca-cadastro/forca-cadastro.component';
import { ForcaGameComponent } from './forca-game/forca-game.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'forcas', component: ForcaComponent },
  { path: 'cadastro-forca', component: ForcaCadastroComponent },
  { path: 'jogo-forca', component: ForcaGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
