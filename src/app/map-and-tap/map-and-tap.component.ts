import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-map-and-tap',
  templateUrl: './map-and-tap.component.html',
  styleUrls: ['./map-and-tap.component.css']
})
export class MapAndTapComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const nameObs: Observable<string> = of('Desh Deepak');
    // Using map modify the actual value
    nameObs.pipe(
     map(name => name.toUpperCase())
    ).subscribe(
      data => {
        console.log('data in uppper case: Using map = ' + data);
      }
    );


    // Using tap does not modify the actual value
    nameObs.pipe(
      tap(name => name.toUpperCase())
    ).subscribe(
      data => {
        console.log('data in uppper case: Using tap = ' + data);
      }
    );

  }

}
class Person {
  name: string;
}
