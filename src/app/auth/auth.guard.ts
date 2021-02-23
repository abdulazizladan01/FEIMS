import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router ){

  }

  //canActivate(
  //  route: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //  return true;
  //}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(map((response: { authenticated: boolean}) => {
        if (response.authenticated) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }), catchError((error) => {
        this.router.navigate(['/login']);
        return of(false);
    }));
  }

}
