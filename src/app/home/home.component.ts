import { FutureLaunch } from './../models/future-lauch.model';
import { PastLaunches } from './../models/past-launches.model';
import { Rocket } from './../models/rocket.model';
import { SpacexNext } from '../models/spacex-next.model';
import { SpacexService } from './../services/spacex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nextLaunch: SpacexNext;
  rockets: Rocket;
  pastLaunches: PastLaunches;
  futureLaunches: FutureLaunch;
  panelOpenState: true;

  search = '';

  constructor(
    private spacexService: SpacexService
    ) { }

  ngOnInit(): void {
    this.spacexService.getNextLaunch().subscribe(data => {
      this.nextLaunch = data;
    });
    this.spacexService.getAllRockets().subscribe(data => {
      this.rockets = data;
    });
    this.spacexService.getPastLaunches().subscribe(data => {
      this.pastLaunches = data;
    });
    this.spacexService.getFutureLaunches().subscribe(data => {
      this.futureLaunches = data;
    });
  }

}
