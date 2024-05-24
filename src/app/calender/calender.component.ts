import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  public value: Date [] = [new Date ("05/11/2024"), new Date ("05/31/2024"), new Date ("06/12/2024"), new Date ("06/26/2024"), new Date ("07/20/2024")]
  public multiSelect: Boolean = true;
  public minDate: Date = new Date ("01/01/2024");
  public maxDate: Date = new Date ("12/31/2024");

  constructor () {}
}
