import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { PojazdyService } from "../services/pojazdy.service";


@Injectable({ providedIn: 'root' })
export class VehicleResolver implements Resolve<any> {
  constructor(
    private pojazdyService: PojazdyService,
    private router: Router
    ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
      const id = route.params['id'];
      
      return this.pojazdyService.getVehicle(id)
  }
  
}