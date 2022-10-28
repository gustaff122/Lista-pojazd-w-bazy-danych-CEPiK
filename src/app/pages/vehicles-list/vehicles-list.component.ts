import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PojazdyService } from 'src/app/core/services/pojazdy.service';


@Component({
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent {

  public vehicles = this.activatedRoute.snapshot.data[0].data
  public links = this.activatedRoute.snapshot.data[0].links
  public code = this.activatedRoute.snapshot.params['code']
  public page: number
  public maxPage: number = 0

  public filters: any

  constructor(
    private pojazdyService: PojazdyService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {

    //define currPage
    const urlCurrPageParams = new URLSearchParams(this.links.self);
    const paramsCurrPage = Object.fromEntries(urlCurrPageParams.entries());

    //define lastPage
    const urlLastPageParams = new URLSearchParams(this.links.last);
    const paramsLastPage = Object.fromEntries(urlLastPageParams.entries());

    this.page = parseInt(paramsCurrPage['page'])
    this.maxPage = parseInt(paramsLastPage['page'])
  }

  getFilters($event: any) {
    this.spinner.show()
    this.filters = $event
    this.filters.wojewodztwo = this.code
    this.filters.page = 1
    
    this.pojazdyService.getVehiclesList(this.filters).subscribe(res => {
      //define last page
      const urlLastPageParams = new URLSearchParams(res.links.last);
      const paramsLastPage = Object.fromEntries(urlLastPageParams.entries());
      this.maxPage = parseInt(paramsLastPage['page'])
      this.spinner.hide()
      console.log(res)
      this.vehicles = res.data
    })
  }

  setPage($event: number) {
    this.spinner.show()
    this.page = $event
    this.filters.page = this.page

    this.pojazdyService.getVehiclesList(this.filters).subscribe(res => {
      this.spinner.hide()
      this.vehicles = res.data
    })
  }

  

  
}
