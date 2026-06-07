import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        // 401 global: on déconnecte l'utilisateur uniquement hors endpoint de login
        // et on évite tout reload forcé pour laisser le message d'erreur visible.
        if (err.status === 401 && !request.url.includes('/auth/login')) {
          this.authenticationService.logout();
        }

        let errorMessage = 'Une erreur est survenue';

        if (err.status === 0) {
          errorMessage =
            'Impossible de joindre le serveur (réseau ou API indisponible). Vérifiez la connexion et que le backend Elastic Beanstalk est en ligne.';
        } else if (err.error) {
          if (typeof err.error === 'string') {
            errorMessage = err.error;
          } else if (typeof err.error === 'object' && err.error.message) {
            errorMessage = err.error.message;
          }
        } else if (err.message) {
          errorMessage = err.message;
        }

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
