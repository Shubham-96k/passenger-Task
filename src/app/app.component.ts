import { Component } from '@angular/core';
import { Ipassenger } from './shared/model/interface';
import { passengerArray } from './shared/const/passenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myproject';

  passenger : Array<Ipassenger> = passengerArray;


  deletepassenger(eve : Ipassenger){
    
    // this.passenger = this.passenger.filter(ele => {
    //   return ele.id !== eve.id
    // })
    // console.log(this.passenger);


    const getIndex = this.passenger.findIndex(ele => {
      return ele.id === eve.id
    })
    this.passenger.splice(getIndex,1);
  }
}
