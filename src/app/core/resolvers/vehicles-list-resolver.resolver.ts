import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { catchError, Observable, of } from "rxjs";
import { PojazdyService } from "../services/pojazdy.service";
import { map } from "rxjs";


@Injectable({ providedIn: 'root' })
export class VehiclesListResolver implements Resolve<any> {
  constructor(
    private pojazdyService: PojazdyService,
    private router: Router
    ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
      const code = route.params['code'];

      const today = new Date()
      const minRequiredDay = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate()).toLocaleDateString('sv').replaceAll('-', '');

      const query = {
        "wojewodztwo": code,
        "dataOd": minRequiredDay,
        "dataDo": today.toLocaleDateString('sv').replaceAll('-', ''),
        'page': 1
      }


      return this.pojazdyService.getVehiclesList(query).pipe(map(list => {
        return list
      }), catchError(() => {
        this.router.navigate(['/'])
        return of(null)
      }))
  }
  
}