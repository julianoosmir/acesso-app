import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './auth.service';
import { AuthDto } from '../models/authDTo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardServiceService implements CanActivate {

  //authDto?: AuthDto;

  constructor(private auth: AuthenticationService, public router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const roles = next.data['role'] as string[];

    const role_user = this.auth.getRole();

    console.log(roles.indexOf(role_user));


    if(roles.indexOf(role_user) >= 0){
      return true
    }
    this.router.navigateByUrl("/");
    return false;

  }

}
