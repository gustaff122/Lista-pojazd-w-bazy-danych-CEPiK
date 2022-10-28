import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";
import { Vehicle } from "../interfaces/vehicle.interface";
import { PojazdyService } from "../services/pojazdy.service";


@Injectable({ providedIn: 'root' })
export class VehicleResolver implements Resolve<Vehicle | null> {
  constructor(
    private pojazdyService: PojazdyService,
    private router: Router
    ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Vehicle | null> {
      const id = route.params['id'];
      
      return this.pojazdyService.getVehicle(id).pipe(map(item => {
        return item
      }), catchError(() => {
        this.router.navigate(['/'])
        return of(null)
      }))
  }
  
}