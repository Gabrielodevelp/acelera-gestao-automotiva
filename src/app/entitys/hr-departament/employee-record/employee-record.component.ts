import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-employee-record',
  templateUrl: './employee-record.component.html',
  styleUrls: ['./employee-record.component.sass']
})
export class EmployeeRecordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'a', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'c', cols: 4, rows: 2, color: '##7d07c7'},
    {text: 's', cols: 5, rows: 3, color: '#DDBDF1'},
  ];

}
