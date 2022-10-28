import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EnergyTypes } from 'src/app/core/data/energy-types';
import { VehiclesTypes } from 'src/app/core/data/vehicles-types';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  @Output() formData = new EventEmitter<any>()

  public vehiclesTypes = VehiclesTypes;
  public energyTypes = EnergyTypes

  public form;
  public dateTo;
 

  constructor(
    private formBuilder: FormBuilder,
  ) {
    const todayDate = new Date();
    const today = todayDate.toISOString().slice(0, 10)
    const prevDate = new Date(todayDate.getFullYear() - 2, todayDate.getMonth(), todayDate.getDate()).toLocaleDateString('sv');
    this.dateTo = prevDate;

    this.form = this.formBuilder.group({
      dataOd: [prevDate],
      dataDo: [today],
      filterRodzajPojazdu: [],
      filterRodzajPaliwa: []
    })
  }

  ngOnInit(): void {
      this.filter()
  }


  setDateTo() {
    const date = new Date(this.form.value.dataOd!)
    this.dateTo = new Date(date.getFullYear() + 2, date.getMonth(), date.getDate()).toLocaleDateString('sv');
    this.form.patchValue({
      dataDo: this.dateTo
    })
  }

  filter() {
    this.formData.emit(this.form.value)
  }


}
