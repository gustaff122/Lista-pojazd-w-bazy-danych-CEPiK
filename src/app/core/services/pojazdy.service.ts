import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PojazdyService {

  private API_URL = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getVehiclesList(parameters: any) {
    let params: any = {
      'wojewodztwo': parameters.wojewodztwo,
      'data-od': parameters.dataOd.replaceAll('-', ''),
      'data-do': parameters.dataDo.replaceAll('-', ''),
      'fields': ['marka', 'model', 'rodzaj-pojazdu', 'pojemnosc-skokowa-silnika', 'rodzaj-paliwa'],
      'page': parameters.page,
      'limit': '50',
    }
    
    if (parameters.filterRodzajPojazdu) params['filter[rodzaj-pojazdu]'] = parameters.filterRodzajPojazdu
    if (parameters.filterRodzajPaliwa) params['filter[rodzaj-paliwa]'] = parameters.filterRodzajPaliwa

    return this.httpClient.get<any>(`${this.API_URL}/pojazdy`, {params: params})
  }

  getVehicle(id: number) {
    const params: any = {
      'fields': ['marka', 'model', 'rodzaj-pojazdu', 'pojemnosc-skokowa-silnika', 'rodzaj-paliwa', 'data-pierwszej-rejestracji-w-kraju', 'data-ostatniej-rejestracji-w-kraju', 'data-pierwszej-rejestracji', 'dopuszczalna-masa-calkowita', 'liczba-osi', 'liczba-miejsc-ogolem', 'liczba-miejsc-siedzacych', 'wojewodztwo-kod']
    }

    return this.httpClient.get<any>(`${this.API_URL}/pojazdy/${id}`, {params: params})
  }


}
