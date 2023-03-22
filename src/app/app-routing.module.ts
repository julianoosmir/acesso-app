import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ForcaComponent } from './forca/forca.component';
import { ForcaCadastroComponent } from './forca-cadastro/forca-cadastro.component';
import { ForcaGameComponent } from './forca-game/forca-game.component';
import { RoleGuardServiceService } from './core/role-guard-service.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'usuarios', component: UsuariosComponent,
    canActivate: [RoleGuardServiceService], data: {
      role: ['ADMIN', 'USER']
    }
  },
  {
    path: 'cadastro-usuario', component: CadastroUsuarioComponent,
    canActivate: [RoleGuardServiceService], data: {
      role: ['ADMIN']
    }
  },
  { path: 'forcas', component: ForcaComponent },
  {
    path: 'cadastro-forca', component: ForcaCadastroComponent,
    canActivate: [RoleGuardServiceService], data: {
      role: ['ADMIN']
    }
  },
  {
    path: 'jogo-forca', component: ForcaGameComponent,
    canActivate: [RoleGuardServiceService], data: {
      role: ['ADMIN','PLAYER']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
