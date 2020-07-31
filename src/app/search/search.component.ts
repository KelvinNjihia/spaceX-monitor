import { SpacexService } from './../services/spacex.service';
import { AllLaunches } from './../models/all-launches.model';
import { Component, OnInit } from '@angular/core';
import { Rocket } from '../models/rocket.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  allLaunches: AllLaunches;
  rockets: Rocket;

  search: string = '';

  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {
    this.spacexService.getAllLaunches().subscribe(data => {
      this.allLaunches = data;
    });
    this.spacexService.getAllRockets().subscribe(data => {
      this.rockets = data;
    });
  }

}
