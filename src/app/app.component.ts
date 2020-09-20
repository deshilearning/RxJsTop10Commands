import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
// import { from } from 'rxjs/internal/observable/from';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RxJsTop10Commands';
  ngOnInit() {
    const person: Person = {
      name: 'Desh'
    };

    // getting subscriber from person
    const personObs: Observable<Person> = of(person);
    personObs.subscribe(data => {
      console.log(data);
      console.log('person name is: ' + data.name);

      const address: Observable<string> = of('Desh, India, Asia');
      address.subscribe(addr => {
        console.log('address is: ' + addr);
      });
    });

    // getting Promise from person
    // getting Subscriber from Promise
    const personPromise: Promise<Person> = Promise.resolve(person);
    const personObs2: Observable<Person> = from(personPromise);
    personObs2.subscribe( person2 => {
      console.log(person2.name);
    });



  } // end of ngOnInit
}
class Person {
  name: string;
}
