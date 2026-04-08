import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RouteInfo } from './sidebar.metadata';
import routesFallback from '../../../assets/data/routes.json';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly embeddedRoutes: RouteInfo[] = (routesFallback as { routes: RouteInfo[] }).routes;

  constructor(private http: HttpClient) {}

  /**
   * Menu : charge assets/data/routes.json ; en cas d’échec (404, base href, CDN), repli sur la copie embarquée.
   */
  getRouteInfo(): Observable<RouteInfo[]> {
    return this.http.get<{ routes: RouteInfo[] }>('assets/data/routes.json').pipe(
      map((response) => {
        const r = response?.routes;
        if (Array.isArray(r) && r.length > 0) {
          return r;
        }
        return this.embeddedRoutes;
      }),
      catchError(() => of(this.embeddedRoutes))
    );
  }
}
