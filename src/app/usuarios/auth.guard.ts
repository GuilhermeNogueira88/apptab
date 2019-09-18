import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { take, map, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  
  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.afAuth.user.pipe(
      take(1),
      map(user => !!user),
      tap(usuarioLogado => {
        if (!usuarioLogado) {
          this.router.navigate(['/login']);
        }
      })
    )
  }
  
}
