import { Component, OnInit, NgZone } from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOnTop = true;

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private zone: NgZone
  ){}

  ngOnInit() {
    this.scrollDispatcher.scrolled().subscribe((event: CdkScrollable) => {
      const scroll = event?.measureScrollOffset('top');
      console.log(scroll);
      let newisOnTop = this.isOnTop;

      if (scroll > 80) {
        newisOnTop = false;
      }
      else {
        newisOnTop = true;
      }

      if (newisOnTop !== this.isOnTop) {
        this.zone.run(() => {
          this.isOnTop = newisOnTop;
        });
      }
    });
  }

}
