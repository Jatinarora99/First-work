import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products:any[]=[
    {pid:101,pname:'Mobile',pprice:56000.99,pmfd:'12/12/2020',ppic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe99Qmooaqix7uhJmJCZ6teDP6NDvT8VwgWQ&usqp=CAU'},
    {pid:102,pname:'Laptop',pprice:76000.199,pmfd:'10/01/2020',ppic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHrnzKRlSuP2a9I_sJe45hIdX2ntto6bTLJQ&usqp=CAU'},
    {pid:103,pname:'Camera',pprice:6000.11,pmfd:'1/2/2021',ppic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwZ623e3a7GMgy1rn_bN7q6jCQPqpDhemOw&usqp=CAU'},
    {pid:104,pname:'Washing machine',pprice:15000.14,pmfd:'2/5/2019',ppic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlaJstUzBnCz4hTa_A7kMYTeRowoYB8MfCtQ&usqp=CAU'},
    {pid:105,pname:'Mic',pprice:1000.11,pmfd:'5/7/2018',ppic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0oLgZvn2PECaNmjla7HfScPFo1TRG69ULHA&usqp=CAU'},
    {pid:106,pname:'Head phone',pprice:2500.123,pmfd:'2/11/2020',ppic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4WG5LHzfBK-1bUPnD57MX95bPTqaMfU4IsA&usqp=CAU'},
  ];

}
