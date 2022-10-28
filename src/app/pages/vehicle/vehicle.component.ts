import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

  public data = this.activatedRoute.snapshot.data[0].data.attributes

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }


}
