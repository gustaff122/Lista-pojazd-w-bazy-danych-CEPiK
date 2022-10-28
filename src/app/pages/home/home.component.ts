import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { regions } from 'src/app/core/data/regions';
import { PojazdyService } from 'src/app/core/services/pojazdy.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public selectedRegion!: string;

  public regions = regions;

  constructor(
    private pojazdyService: PojazdyService,
    private toastrService: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
      this.spinner.hide()
  }

    goToList() {
      this.spinner.show();
      if (this.selectedRegion) this.router.navigate(['list', this.selectedRegion])
      else {
        this.toastrService.error('Nie zaznaczono województwa', 'Wybierz województwo', {
          timeOut: 3000,
        });
      }
      
    }

}
