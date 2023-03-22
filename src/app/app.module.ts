import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicSnackBarComponent } from './basic-snack-bar/basic-snack-bar.component';
import { MatIconModule } from '@angular/material/icon'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { TokenInterceptor } from './core/token.interceptor';
import { ForcaComponent } from './forca/forca.component';
import { ForcaCadastroComponent } from './forca-cadastro/forca-cadastro.component';
import { ForcaGameComponent } from './forca-game/forca-game.component';
import {MatListModule} from '@angular/material/list';
import { MenuComponent } from './menu/menu.component'
import { RoleGuardServiceService } from './core/role-guard-service.service';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    RoleGuardServiceService
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    BasicSnackBarComponent,
    UsuariosComponent,
    CadastroUsuarioComponent,
    ForcaComponent,
    ForcaCadastroComponent,
    ForcaGameComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatListModule,
    NgbModule
  ],
  exports:[BasicSnackBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
