import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ipassenger } from '../../model/interface';

@Component({
  selector: 'app-passengercard',
  templateUrl: './passengercard.component.html',
  styleUrls: ['./passengercard.component.scss']
})
export class PassengercardComponent implements OnInit {
  @Input() passengercard !: Ipassenger; 
  @ViewChild('control') input !: ElementRef;
  @Output() emitter : EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>(); 

  constructor() { }

  form : boolean = true;
  isDisable : boolean = true;

  onclick(){
    this.isDisable = !this.isDisable;
    this.form = !this.form;
  }
  onupdate(){
    this.isDisable = !this.isDisable;
    this.form = !this.form;
    this.passengercard.fullname = this.input.nativeElement.value;
  }
  onDelete(){
    this.emitter.emit(this.passengercard);
  }

  ngOnInit(): void {

  }

}
