import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../core/auth.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() username = '';
  @Input() senha =  '';
  @Input() formGroup: FormGroup | undefined;

  errorMessage = 'Invalid Credentials';
  loginMessage: string | any;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,private snackBar: MatSnackBar) {

    }

  ngOnInit() {
    sessionStorage.clear();
  }
  showSnackbarTopPosition(content: string, action: string | undefined, duration: any) {
    this.snackBar.open(content, action, {
      duration: 2000,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.senha).subscribe((result)=> {
     if(result === 'USUARIO DESABILITADO' || result === 'CREDENCIAIS INVALIDAS' || result === 'USUARIO NÃO CADASTRADO'){
      this.invalidLogin = true;
      this.loginSuccess = false;
      this.loginMessage = result;
      this.showSnackbarTopPosition(this.loginMessage,'',30000)
     }else{
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.loginMessage = 'Login Successful.';
      this.showSnackbarTopPosition(this.loginMessage,'',30000)
      this.router.navigate(['/forcas']);
     }

    },(erro)=>{
      this.invalidLogin = true;
      this.loginSuccess = false;
      this.loginMessage = erro.error.text;
      this.showSnackbarTopPosition(this.loginMessage,'',30000)
    });
  }


}
