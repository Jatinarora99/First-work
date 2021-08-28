import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-pipe-exp',
  templateUrl: './cust-pipe-exp.component.html',
  styleUrls: ['./cust-pipe-exp.component.css']
})
export class CustPipeExpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // ournumbers:number[]=[12.378,23.412,34.523]
  // firstfile=2048;
  // secondfile=4096;
  // thirdfile=1000;
  ourfile:number[]=[2012.12,2034.22,3058.78]
}
