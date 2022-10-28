import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { VehiclesListComponent } from './pages/vehicles-list/vehicles-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './pages/vehicles-list/components/table/table.component';
import { FilterComponent } from './pages/vehicles-list/components/filter/filter.component';
import { PaginatorComponent } from './pages/vehicles-list/components/paginator/paginator.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehiclesListComponent,
    TableComponent,
    FilterComponent,
    PaginatorComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({preventDuplicates: true,}),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
