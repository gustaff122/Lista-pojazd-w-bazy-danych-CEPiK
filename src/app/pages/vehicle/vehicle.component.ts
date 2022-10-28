import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/core/interfaces/vehicle.interface';

@Component({
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

  public data: Vehicle = this.activatedRoute.snapshot.data[0].data.attributes

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }


}
