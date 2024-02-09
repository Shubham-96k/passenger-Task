import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from '../../model/interface';

@Component({
  selector: 'app-passengerlist',
  templateUrl: './passengerlist.component.html',
  styleUrls: ['./passengerlist.component.scss']
})
export class PassengerlistComponent implements OnInit, DoCheck  {
  @Input() passengerlist !: Array<Ipassenger>
  constructor() { }
  
  count : number = 0;
  
  ngDoCheck(): void {
    this.count = this.passengerlist.reduce((acc, cv) => {
      if(cv.checkedIn){
        acc++
      }
      return acc;
    },0)

    
  }
  ngOnInit(): void {
    // this.passengerlist.forEach(ele => {
    //   if(ele.checkedIn){
    //     this.count++
    //   }else{
    //     this.count
    //   }
    // })
  }
}
