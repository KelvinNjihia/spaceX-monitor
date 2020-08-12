import { Observable } from 'rxjs';
import { FutureLaunch } from './../../models/future-lauch.model';
import { PastLaunches } from './../../models/past-launches.model';
import { Rocket } from './../../models/rocket.model';
import { SpacexNext } from '../../models/spacex-next.model';
import { SpacexService } from './../../services/spacex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nextLaunch$: Observable<SpacexNext>;
  rockets$: Observable<Rocket>;
  pastLaunches$: Observable<PastLaunches>;
  futureLaunch$: Observable<FutureLaunch>;
  public smallPatchUrl: string;

  panelOpenState: true;

  search = '';

  constructor(
    private spacexService: SpacexService
    ) { }

  ngOnInit(): void {
    this.nextLaunch$ = this.spacexService.getNextLaunch();
    // invoke rockets methods
    this.getRockets();

    // invoke past launches method with async
    this.showPastaunches();

    // invoke methd with async
    this.showFutureLaunches();

    // get the image
    this.spacexService.getNextLaunch().subscribe(x => this.smallPatchUrl = x.links?.patch?.small);
  }

  showFutureLaunches(): void {
    this.futureLaunch$ = this.spacexService.getFutureLaunches();
  }

  showPastaunches(): void {
    this.pastLaunches$ = this.spacexService.getPastLaunches();
  }

  getRockets(): void {
    this.rockets$ = this.spacexService.getAllRockets();
  }
}
