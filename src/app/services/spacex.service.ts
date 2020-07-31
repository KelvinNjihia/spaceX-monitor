import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpacexNext } from '../models/spacex-next.model';
import { Rocket } from '../models/rocket.model';
import { PastLaunches } from '../models/past-launches.model';
import { map } from 'rxjs/operators';
import { FutureLaunch } from '../models/future-lauch.model';
import { AllLaunches } from '../models/all-launches.model';

const BASE_URL = 'https://api.spacexdata.com/v4/';
@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) { }

  getNextLaunch(): Observable<SpacexNext> {
    return this.http.get<SpacexNext>(BASE_URL + 'launches/next');
  }

  getAllRockets(): Observable<Rocket> {
    return this.http.get<Rocket>(BASE_URL + 'rockets');
  }

  getPastLaunches(): Observable<PastLaunches> {
    return this.http.get<PastLaunches>(BASE_URL + 'launches/past');
  }

  getFutureLaunches(): Observable<FutureLaunch> {
    return this.http.get<FutureLaunch>(BASE_URL + 'launches/upcoming');
  }

  getAllLaunches(): Observable<AllLaunches> {
    return this.http.get<AllLaunches>(BASE_URL + 'launches');
  }
}
